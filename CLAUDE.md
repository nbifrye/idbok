# idbok — Digital Identity Body of Knowledge

このリポジトリは、デジタルアイデンティティ領域の技術仕様やトピックを体系的にまとめた **日本語の Body of Knowledge サイト** です。すべての記事は AI エージェントが `/spec` または `/article` スキル経由で執筆することを前提としています。

サイトは [VitePress 1.x](https://vitepress.dev/) でビルドされ、`main` への push で GitHub Pages (`idbok.nbifrye.com`) に自動デプロイされます。

## 記事カテゴリ

記事は以下の 2 カテゴリのみです。**必ずどちらかに分類して書いてください。**

| カテゴリ | 配置 | 対象 | 使うスキル |
| --- | --- | --- | --- |
| **Spec** | `docs/specs/<slug>.md` | RFC, OpenID 仕様, W3C 勧告, FIDO 仕様 など。**1 仕様 = 1 記事** | `/spec` |
| **Article** | `docs/articles/<slug>.md` | 個別トピック解説、時事ニュース、比較、考察 | `/article` |

1 つの RFC や仕様ドキュメントを解説するときは必ず Spec。横断的なトピックやニュースは Article。迷ったら「これは特定の 1 つの Spec ドキュメントそのものか?」を自問してください。

## ディレクトリ構成

```
docs/
├── .vitepress/
│   ├── config.mts       # VitePress 設定。nav と sidebar の定義
│   └── sidebar.mts      # ディレクトリ走査 + frontmatter 解析で sidebar を自動生成
├── index.md             # ホームページ (hero layout)
├── specs/
│   ├── index.md         # Specs セクションのランディングページ
│   └── <slug>.md        # 各 Spec 記事 (AI 生成)
├── articles/
│   ├── index.md         # Articles セクションのランディングページ
│   └── <slug>.md        # 各 Article (AI 生成)
└── public/
    └── CNAME            # カスタムドメイン設定 (触らない)
```

## サイドバーは自動生成される

`docs/.vitepress/sidebar.mts` の `buildSidebar()` が、`docs/specs/` と `docs/articles/` の md ファイルを走査し、frontmatter から `title` を読み出してサイドバーを構築します。

**記事を追加するときに `config.mts` を編集する必要はありません。**

- **Specs**: `specId` の昇順 (例: RFC6749 → RFC6750 → RFC7636)
- **Articles**: `published` の降順 (新しい記事が上)

`index.md` はサイドバーから除外されます。

## Frontmatter 規約

手書きパーサで読むため、以下の制約があります:

- 値は **1 行に収める**
- 配列は **インライン** (`[a, b, c]`) のみ。複数行配列は使わない
- ネストしたオブジェクトは使わない
- 値に `:` / `[` / `]` を含めるときはダブルクォートで囲む

### Spec

```yaml
---
kind: spec
specId: RFC6749
title: The OAuth 2.0 Authorization Framework
org: IETF            # IETF / OIDF / W3C / FIDO / ISO ...
status: Standard     # Standard / Proposed Standard / Draft / Informational / Recommendation ...
published: 2012-10-01
authors: [D. Hardt]
tags: [oauth, authorization]
summary: OAuth 2.0 認可フレームワークの中核仕様。
---
```

### Article

```yaml
---
kind: article
title: 2026年のパスキー普及状況まとめ
published: 2026-04-10
tags: [passkeys, fido, webauthn]
summary: 2026年時点のパスキー対応状況と主要プラットフォーム動向。
---
```

## Slug 規約

- 小文字ケバブケース (`a-z`, `0-9`, `-`, `_`)
- Spec:
  - RFC は番号 (`rfc6749`)、補助識別子を付ける場合は `rfc7636-pkce`
  - バージョン付き仕様は `_` で (`oidc-core-1_0`, `fapi-2_0-security-profile`)
- Article:
  - トピック中心 (`what-is-passkey`)
  - ニュースは日付サフィックスを付けても良い (`eidas-2-wallet-2025-update`)

## 言語ポリシー

- 本文は **日本語**
- 以下は英語のまま:
  - 仕様名 / プロダクト名 (OAuth 2.0, OpenID Connect, WebAuthn …)
  - パラメータ・フィールド・ヘッダ名 (`client_id`, `redirect_uri`, `Authorization` …)
  - HTTP メソッド・HTTP ステータス名 (`POST`, `Bearer`, `401 Unauthorized` …)

## 記事作成は必ずスキル経由で

新しい記事を書くときは、必ず以下のスキルを使ってください。スキルには調査・構成・frontmatter・配置・検証までのワークフローが含まれています。

- `/spec` → `.claude/skills/spec/SKILL.md`
- `/article` → `.claude/skills/article/SKILL.md`

スキルを経由せずに直接記事を書くと、frontmatter 規約違反やサイドバー生成失敗の原因になります。

## ビルド & プレビュー

```bash
npm install          # 初回のみ
npm run docs:dev     # ローカル開発サーバ (http://localhost:5173)
npm run docs:build   # 本番ビルド → docs/.vitepress/dist
npm run docs:preview # ビルド結果のプレビュー
```

**記事をコミットする前に必ず `npm run docs:build` を通してください。** 警告 (dead link など) があれば解決します。

## デプロイ

- `.github/workflows/deploy.yml` が `main` ブランチへの push をトリガーに自動ビルド & GitHub Pages デプロイを行います
- 独自ドメインは `docs/public/CNAME` で `idbok.nbifrye.com` に固定
- `base: '/'` 設定はカスタムドメイン直下運用のため。変更しないでください

## 内部リンクの書き方

`cleanUrls: true` なので、内部リンクには `.md` も `.html` も付けません。

```markdown
[OAuth 2.0](/specs/rfc6749)
[パスキー解説](/articles/what-is-passkey)
```
