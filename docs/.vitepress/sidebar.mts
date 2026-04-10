import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

export type SortKey = 'specId' | 'publishedDesc' | 'slug'

export interface SidebarItem {
  text: string
  link: string
}

interface ParsedDoc {
  slug: string
  title: string
  specId?: string
  published?: string
}

/**
 * Minimal frontmatter parser for the flat key/value schema used in this repo.
 * Supports:
 *   - key: value
 *   - key: "value" / key: 'value'
 *   - key: [a, b, c]  (inline arrays)
 * Does NOT support nested objects or multi-line values.
 */
function parseFrontmatter(raw: string): Record<string, string | string[]> {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return {}
  const body = match[1]
  const out: Record<string, string | string[]> = {}
  for (const line of body.split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const colon = trimmed.indexOf(':')
    if (colon === -1) continue
    const key = trimmed.slice(0, colon).trim()
    let value = trimmed.slice(colon + 1).trim()
    if (!value) continue
    // Inline array
    if (value.startsWith('[') && value.endsWith(']')) {
      const inner = value.slice(1, -1)
      out[key] = inner
        .split(',')
        .map((s) => s.trim().replace(/^["']|["']$/g, ''))
        .filter((s) => s.length > 0)
      continue
    }
    // Strip surrounding quotes
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }
    out[key] = value
  }
  return out
}

function asString(v: string | string[] | undefined): string | undefined {
  if (v === undefined) return undefined
  return Array.isArray(v) ? v[0] : v
}

/**
 * Build a sidebar item list from the markdown files inside a directory.
 *
 * @param relDir  Path relative to this file, e.g. '../specs'
 * @param urlBase URL prefix for links, e.g. '/specs/'
 * @param sortBy  Sort strategy for the returned list
 */
export function buildSidebar(
  relDir: string,
  urlBase: string,
  sortBy: SortKey,
): SidebarItem[] {
  const dirUrl = new URL(`${relDir}/`, import.meta.url)
  const dirPath = fileURLToPath(dirUrl)

  if (!existsSync(dirPath) || !statSync(dirPath).isDirectory()) {
    return []
  }

  const entries = readdirSync(dirPath).filter(
    (f) => f.endsWith('.md') && f !== 'index.md',
  )

  const docs: ParsedDoc[] = entries.map((file) => {
    const slug = file.replace(/\.md$/, '')
    const raw = readFileSync(fileURLToPath(new URL(file, dirUrl)), 'utf-8')
    const fm = parseFrontmatter(raw)
    const title = asString(fm.title) ?? slug
    return {
      slug,
      title,
      specId: asString(fm.specId),
      published: asString(fm.published),
    }
  })

  const sorted = [...docs].sort((a, b) => {
    switch (sortBy) {
      case 'specId': {
        const av = a.specId ?? a.slug
        const bv = b.specId ?? b.slug
        return av.localeCompare(bv, 'en', { numeric: true })
      }
      case 'publishedDesc': {
        const av = a.published ?? ''
        const bv = b.published ?? ''
        // Descending
        if (av === bv) return a.slug.localeCompare(b.slug)
        return bv.localeCompare(av)
      }
      case 'slug':
      default:
        return a.slug.localeCompare(b.slug)
    }
  })

  return sorted.map((d) => ({
    text: d.title,
    link: `${urlBase}${d.slug}`,
  }))
}
