---
name: article
description: Use this skill to write a new Article for the idbok Digital Identity Body of Knowledge. Articles cover individual topics, explainers, or time-sensitive news in the digital identity space (as opposed to Spec articles, which document a single technical specification). Invoke when the user asks to add, draft, or write a topic explainer, news recap, comparison, or opinion piece under docs/articles/.
---

# /article — Article を書く

idbok の Articles セクション (`docs/articles/<slug>.md`) に、個別トピックの解説や時事ニュース、比較・考察を追加するためのワークフロー。

対象は「1 つの公式仕様そのもの」ではなく、トピック横断、製品・実装の動向、業界ニュース、設計判断の考察などです。単一の RFC や仕様を記事にする場合は `/spec` スキルを使ってください。

## Article のタイプ

- **Explainer**: 特定の概念 (例: パスキー、SSI、DID:web, PKCE の意義) を横断的に解説
- **News**: 重要なリリース・規制・標準化の進捗などの時事ニュース
- **Comparison**: 複数仕様 / 製品 / アプローチの比較
- **Opinion / Commentary**: 設計選択やトレードオフに関する考察 (著者の意見であることを明示)

## ワークフロー

TodoWrite でタスクを管理しながら順に進める。

### 1. トピックを確定する

- ユーザーが引数やメッセージでトピックを指定している場合はそれを使う
- 指定が無い場合:
  - `WebSearch` で「digital identity」「passkey」「OpenID」「eIDAS」などの関連キーワードで直近のニュースや動向を探す
  - 候補を 2〜3 件挙げて AskUserQuestion で選んでもらう
- 既存の `docs/articles/` に類似記事が無いかを確認する

### 2. 調査・情報収集

- 一次情報を重視する: 仕様書、公式ブログ、標準化団体のアナウンス、ベンダーの公式発表
- `WebFetch` で一次ソースを取得し、引用に使える URL をメモする
- 二次情報 (ニュースサイトの記事など) は裏付けとして使い、必ず一次情報を探す
- **不確かな情報や推測を「事実」として書かない**

### 3. Slug を決める

- 小文字ケバブケース
- トピック中心の名前を推奨。必要に応じて日付サフィックスを付ける
- 例:
  - `what-is-passkey`
  - `oauth-2_1-overview`
  - `eidas-2-wallet-2025-update`
  - `fedcm-vs-webauthn`
- 配置先: `docs/articles/<slug>.md`

### 4. Frontmatter を作成する

```yaml
---
kind: article
title: 2026年のパスキー普及状況まとめ
published: 2026-04-10
tags: [passkeys, fido, webauthn]
summary: 2026年時点のパスキー対応状況と、主要プラットフォーム・リライングパーティーの動向を整理する。
---
```

**必須フィールド**:
- `kind`: 常に `article`
- `title`: 日本語で簡潔に
- `published`: 公開日 (`YYYY-MM-DD`)。サイドバーの降順ソートキーになる
- `tags`: 関連技術タグ (小文字、インライン配列)
- `summary`: 1 〜 2 文の日本語サマリ

**任意フィールド**:
- `author`: 著者名 (単一)
- `type`: `explainer` / `news` / `comparison` / `opinion` など。将来のフィルタ用

**Frontmatter の制約**:
- 値は 1 行に収める
- 配列は **インライン** (`[a, b, c]`) のみ
- ネストしたオブジェクトは使わない
- 値に `:` や `[`, `]` を含めたい場合はダブルクォートで囲む

### 5. 本文を日本語で書く

**言語ポリシー**:
- 本文は日本語
- 仕様名・プロダクト名・技術用語 (OAuth 2.0, OpenID Connect, WebAuthn, `client_id` など) は英語のまま

### 6. 記事構造テンプレート

Article タイプに応じてセクションを選ぶ。以下は基本形:

```markdown
# {title}

> {リード文 / TL;DR: 記事全体を 2〜3 行でまとめる}

## 背景

なぜこのトピックが今話題になっているか、どういう文脈で理解すべきか。

## 詳細

本題の解説。Explainer なら概念の説明、News ならファクトの時系列整理、Comparison なら比較項目ごとの検討。必要に応じてサブセクションや表・図を使う。

## 影響 / 考察

読者 (実装者 / 運用者 / 意思決定者) にとって何が変わるか、どのような選択肢が生じるか。意見を述べる場合は「著者注:」として明示する。

## 関連情報

- 関連する Spec 記事への内部リンク: [OAuth 2.0 Authorization Framework](/specs/rfc6749)
- 関連する他の Article への内部リンク

## 参考リンク

- 一次ソース (必ず載せる)
- 公式ブログ・アナウンス
- 補助的な解説記事
```

**執筆上の注意**:
- 速報ニュース記事では「執筆時点での情報」であることを明記する
- 比較記事では評価基準を最初に提示する
- 個人的意見は事実と明確に区別する
- 関連する Spec 記事がリポジトリ内に存在する場合は必ず内部リンクする
- 画像や図を使う場合は `docs/public/` に配置し、`/path-to-asset.png` 形式でリンクする

### 7. ビルド検証

リポジトリルートで以下を実行:

```bash
npm run docs:build
```

確認事項:
- 警告なくビルドが成功する
- `docs/.vitepress/dist/articles/<slug>.html` が生成されている
- サイドバーに自動で拾われている (新しい記事は一番上にくる)

### 8. コミット

完成したら git でコミットする (push はユーザーの明示的な指示があるまで行わない)。

```bash
git add docs/articles/<slug>.md
git commit -m "Add Article: <title>"
```

画像や他のアセットを追加した場合はそれらも一緒にコミットする。

## 最終報告

ユーザーへの最終メッセージに以下を含める:
- 作成したファイルパス
- トピック / タイプ (Explainer / News / Comparison / Opinion)
- 主要な参考 URL
- ビルド検証結果 (✅ / ‼️)
- 関連する Spec 記事や Article 記事への横連携の提案
