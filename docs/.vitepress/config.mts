import fs from "node:fs";
import path from "node:path";
import { withMermaid } from "vitepress-plugin-mermaid";

const docsDir = path.resolve(__dirname, "..");

function extractTitle(content: string): string | null {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  const titleMatch = match[1].match(/^title:\s*"?(.+?)"?\s*$/m);
  return titleMatch ? titleMatch[1] : null;
}

function generateSpecsSidebar() {
  const dir = path.join(docsDir, "specs");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md") && f !== "index.md");

  return files
    .map((f) => {
      const content = fs.readFileSync(path.join(dir, f), "utf-8");
      const title = extractTitle(content) || f.replace(".md", "");
      const num = parseInt(f.replace(/\D/g, ""), 10) || 0;
      return { text: title, link: `/specs/${f.replace(".md", "")}`, _sort: num };
    })
    .sort((a, b) => a._sort - b._sort)
    .map(({ text, link }) => ({ text, link }));
}

function generateArticlesSidebar() {
  const dir = path.join(docsDir, "articles");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md") && f !== "index.md");

  return files
    .sort()
    .reverse()
    .map((f) => {
      const content = fs.readFileSync(path.join(dir, f), "utf-8");
      const title = extractTitle(content) || f.replace(".md", "");
      return { text: title, link: `/articles/${f.replace(".md", "")}` };
    });
}

// OIDF WG/CG 表示順のマスタリスト。`claude/skills/oidf/SKILL.md` のレジストリと
// `claude/hooks/session-start.sh` の oidf_registry と同期する（表示順のため順序は重要だが
// WG 追加時は 3 箇所同時に更新すること）。
const OIDF_WG_ORDER: Array<{ id: string; label: string }> = [
  { id: "connect", label: "AB/Connect WG" },
  { id: "authzen", label: "AuthZEN WG" },
  { id: "dcp", label: "Digital Credentials Protocols WG" },
  { id: "ekyc-ida", label: "eKYC & Identity Assurance WG" },
  { id: "fapi", label: "FAPI WG" },
  { id: "igov", label: "iGov WG" },
  { id: "ipsie", label: "IPSIE WG" },
  { id: "modrna", label: "MODRNA WG" },
  { id: "rande", label: "R&E WG" },
  { id: "sharedsignals", label: "Shared Signals WG" },
  { id: "aiim", label: "AI Identity Management CG" },
  { id: "adt", label: "Australian Digital Trust CG" },
  { id: "dade", label: "Death and the Digital Estate CG" },
  { id: "escg", label: "Ecosystem Support CG" },
];

function generateOidfSidebar() {
  const baseDir = path.join(docsDir, "oidf");
  const groups = OIDF_WG_ORDER.map(({ id, label }) => {
    const wgDir = path.join(baseDir, id);
    if (!fs.existsSync(wgDir) || !fs.statSync(wgDir).isDirectory()) return null;
    const files = fs
      .readdirSync(wgDir)
      .filter((f) => f.endsWith(".md") && f !== "index.md")
      .sort()
      .reverse();
    const items = [
      { text: "概要", link: `/oidf/${id}/` },
      ...files.map((f) => {
        const content = fs.readFileSync(path.join(wgDir, f), "utf-8");
        const title = extractTitle(content) || f.replace(".md", "");
        return { text: title, link: `/oidf/${id}/${f.replace(".md", "")}` };
      }),
    ];
    return { text: label, collapsed: true, items };
  }).filter((g): g is { text: string; collapsed: boolean; items: { text: string; link: string }[] } => g !== null);

  return [
    { text: "OIDF ホーム", link: "/oidf/" },
    ...groups,
  ];
}

export default withMermaid({
  lang: "ja",
  title: "idbok",
  description: "Digital Identity Body of Knowledge",
  base: "/",
  lastUpdated: true,
  head: [
    ["meta", { name: "description", content: "デジタルアイデンティティに関する技術知識体系" }],
  ],
  themeConfig: {
    lastUpdated: {
      text: "最終更新",
    },
    nav: [
      { text: "ホーム", link: "/" },
      { text: "仕様解説", link: "/specs/" },
      { text: "OIDF", link: "/oidf/" },
      { text: "記事", link: "/articles/" },
    ],
    sidebar: {
      "/specs/": [{ text: "仕様解説", items: generateSpecsSidebar() }],
      "/oidf/": generateOidfSidebar(),
      "/articles/": [{ text: "記事", items: generateArticlesSidebar() }],
    },
    search: {
      provider: "local",
      options: {
        translations: {
          button: { buttonText: "検索", buttonAriaLabel: "検索" },
          modal: {
            noResultsText: "該当する結果がありません",
            resetButtonTitle: "検索をリセット",
            footer: { selectText: "選択", navigateText: "移動", closeText: "閉じる" },
          },
        },
      },
    },
    socialLinks: [{ icon: "github", link: "https://github.com/nbifrye/idbok" }],
  },
});
