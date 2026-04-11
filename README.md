# idbok

**Digital Identity Body of Knowledge** — デジタルアイデンティティ領域の技術仕様やトピックを体系的にまとめた日本語の知識ベース。

- Site: <https://idbok.nbifrye.com>
- Built with [VitePress](https://vitepress.dev/)

## セクション

- **Specs** (`docs/specs/`) — RFC, OpenID 仕様, W3C 勧告, FIDO 仕様などの技術仕様解説 (1 仕様 = 1 記事)
- **Articles** (`docs/articles/`) — 個別トピック解説、時事ニュース、比較・考察

## ローカルで動かす

```bash
npm install
npm run docs:dev     # http://localhost:5173
npm run docs:build
npm run docs:preview
```

## 記事の執筆

すべての記事は Claude Code の `/spec` または `/article` スキルを経由して書かれます。規約・ディレクトリ・ファイル名ルールの詳細は [CLAUDE.md](./CLAUDE.md) を参照してください。
