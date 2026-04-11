---
name: article
description: Use this skill to write a new Article for the idbok Digital Identity Body of Knowledge. Articles cover individual topics, explainers, or time-sensitive news in the digital identity space (as opposed to Spec articles, which document a single technical specification). Invoke when the user asks to add, draft, or write a topic explainer, news recap, comparison, or opinion piece under docs/articles/.
---

# /article — Article を書く

idbok の Articles セクション (`docs/articles/<YYYY-MM-DD>-<slug>.md`) に、個別トピックの解説や時事ニュース、比較・考察を追加するためのワークフロー。

対象は「1 つの公式仕様そのもの」ではなく、トピック横断、製品・実装の動向、業界ニュース、設計判断の考察などです。単一の RFC や仕様を記事にする場合は `/spec` スキルを使ってください。

## 重要な規約

- **frontmatter は書かない**。ファイルの 1 行目は `# <日本語タイトル>` (H1)。タイトルはこの H1 から自動抽出される
- **ファイル名には日付プレフィックスを付ける**: `YYYY-MM-DD-<slug>.md`。サイドバーはファイル名降順なので、新しい日付ほど上に並ぶ。日付は公開日 (通常は今日)
- **本文は日本語**。仕様名・プロダクト名・技術用語 (OAuth 2.0, OpenID Connect, WebAuthn, `client_id` など) は英語のまま
- **`reviewed` タグは付与しない**。一次情報との照合によるセルフレビューは実施するが、`reviewed` フロントマターの付与は `/review` スキル専用

## Article のタイプ

- **Explainer**: 特定の概念 (例: パスキー, SSI, DID:web, PKCE の意義) を横断的に解説
- **News**: 重要なリリース / 規制 / 標準化進捗などの時事ニュース
- **Comparison**: 複数仕様 / 製品 / アプローチの比較
- **Opinion / Commentary**: 設計選択やトレードオフに関する考察 (著者の意見であることを明示する)

## ワークフロー

TodoWrite でタスクを管理しながら順に進めてください。

### 1. トピックを確定する

- ユーザーが引数やメッセージでトピックを指定している場合はそれを使う
- 指定が無い場合:
  - `WebSearch` で「digital identity」「passkey」「OpenID」「eIDAS」などの関連キーワードで直近のニュースや動向を探す
  - 候補を 2〜3 件挙げて AskUserQuestion で選んでもらう
- 既存の `docs/articles/` に類似記事が無いかを確認する

### 2. 調査・情報収集

- 一次情報を重視する (仕様書、公式ブログ、標準化団体のアナウンス、ベンダー公式発表)
- `WebFetch` で一次ソースを取得し、引用に使える URL をメモしておく
- 二次情報 (ニュースサイトなど) は裏付けとして使い、必ず一次情報を探す
- **不確かな情報や推測を「事実」として書かない**

### 3. ファイル名を決める

**形式**: `YYYY-MM-DD-<slug>.md`

- 日付は公開日 (通常は今日の日付)
- slug は小文字ケバブケース、トピック中心の名前
- 例:
  - `2026-04-10-what-is-passkey.md`
  - `2026-04-10-oauth-2_1-overview.md`
  - `2026-04-10-eidas-2-wallet-update.md`
  - `2026-04-10-fedcm-vs-webauthn.md`
- 配置先: `docs/articles/<YYYY-MM-DD>-<slug>.md`

同じ日に複数記事を書く場合は slug で区別する。

### 4. 記事を書く

ファイルの 1 行目は必ず H1 で日本語タイトルを書く。frontmatter は一切不要。

```markdown
# 2026年のパスキー普及状況まとめ

> **TL;DR**: 2026年時点のパスキー対応状況を、主要プラットフォームとリライングパーティーの動向を軸に整理する。

## 背景

なぜこのトピックが今話題になっているか、どういう文脈で理解すべきか。

## 詳細

本題の解説。Explainer なら概念の説明、News ならファクトの時系列整理、
Comparison なら比較項目ごとの検討。必要に応じてサブセクションや表を使う。

## 影響 / 考察

読者 (実装者 / 運用者 / 意思決定者) にとって何が変わるか、どのような選択肢が生じるか。
意見を述べる場合は「著者注:」として明示する。

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
- 内部リンクは `cleanUrls: true` 前提なので `.md` / `.html` を付けない (`/articles/2026-04-10-what-is-passkey` の形)
- **図が必要な場合は Mermaid を使う** (`sequenceDiagram`, `flowchart`, `stateDiagram-v2` など)。画像ファイルは Mermaid で表現できない場合のみ `docs/public/images/` に配置し `/images/<file>.png` でリンクする

### 5. フォーマット

執筆した記事を `oxfmt` でフォーマットする:

```bash
npm run fmt
```

差分が出た場合はその状態で次のビルド検証に進む (oxfmt の出力はそのままコミット対象)。

### 6. ビルド検証

リポジトリルートで:

```bash
npm run docs:build
```

確認事項:

- 警告なくビルドが成功する
- `docs/.vitepress/dist/articles/<YYYY-MM-DD>-<slug>.html` が生成されている
- サイドバーの一番上に新しい記事が拾われている (ファイル名降順ソートのため)

### 7. コミット

完成したら git でコミットする。push は行わない（`/work` スキルまたはユーザーの明示的な指示で行う）。

```bash
git add docs/articles/<YYYY-MM-DD>-<slug>.md
git commit -m "Add Article: <slug>"
```

画像等のアセットを追加した場合はそれらも一緒にコミットする。

## 最終報告

ユーザーへの最終メッセージに以下を含める:

- 作成したファイルパス
- トピック / タイプ (Explainer / News / Comparison / Opinion)
- 主要な参考 URL
- ビルド検証結果 (✅ / ‼️)
- 関連する Spec 記事や Article 記事への横連携の提案
