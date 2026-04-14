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
      { text: "記事", link: "/articles/" },
    ],
    sidebar: {
      "/specs/": [{ text: "仕様解説", items: generateSpecsSidebar() }],
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
