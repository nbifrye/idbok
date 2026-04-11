import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";

export type SortKey = "slug" | "filenameDesc";

export interface SidebarItem {
  text: string;
  link: string;
}

/**
 * Extract the first H1 heading from a markdown document.
 * Skips a leading YAML frontmatter block if present, so files that happen to
 * use frontmatter (e.g. home layout) still work.
 */
function extractTitle(content: string): string | null {
  let body = content;
  const fm = content.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/);
  if (fm) {
    body = content.slice(fm[0].length);
  }
  const m = body.match(/^# (.+?)\s*#*\s*$/m);
  return m ? m[1].trim() : null;
}

/**
 * Build a sidebar item list from the markdown files inside a directory.
 * Each entry's display text is the file's first H1. `index.md` is excluded.
 *
 * Sort strategies:
 *   - 'slug'         ascending by filename, numeric-aware (rfc6749 before rfc6750)
 *   - 'filenameDesc' descending by filename; assumes a 'YYYY-MM-DD-' prefix so
 *                    newer articles appear first
 *
 * @param relDir  Path relative to this file, e.g. '../specs'
 * @param urlBase URL prefix for links, e.g. '/specs/'
 */
export function buildSidebar(relDir: string, urlBase: string, sortBy: SortKey): SidebarItem[] {
  const dirUrl = new URL(`${relDir}/`, import.meta.url);
  const dirPath = fileURLToPath(dirUrl);

  if (!existsSync(dirPath) || !statSync(dirPath).isDirectory()) {
    return [];
  }

  const files = readdirSync(dirPath).filter((f) => f.endsWith(".md") && f !== "index.md");

  const entries = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = readFileSync(fileURLToPath(new URL(file, dirUrl)), "utf-8");
    const title = extractTitle(raw) ?? slug;
    return { slug, title, file };
  });

  const cmp = (a: string, b: string) => a.localeCompare(b, "en", { numeric: true });

  entries.sort((a, b) => (sortBy === "filenameDesc" ? cmp(b.file, a.file) : cmp(a.file, b.file)));

  return entries.map((e) => ({
    text: e.title,
    link: `${urlBase}${e.slug}`,
  }));
}
