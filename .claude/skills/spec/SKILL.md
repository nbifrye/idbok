---
name: spec
description: Use this skill to write a new Spec article for the idbok Digital Identity Body of Knowledge. A Spec article covers exactly one technical specification (e.g., an IETF RFC, OpenID Foundation spec, W3C Recommendation, or FIDO specification). Invoke when the user asks to add, draft, write, or document a specification under docs/specs/.
---

# /spec — Spec 記事を書く

idbok の Specs セクション (`docs/specs/<slug>.md`) に、**1 仕様 = 1 記事** の形式で技術仕様解説を追加するためのワークフロー。

対象は RFC / OpenID 仕様 / W3C 勧告 / FIDO 仕様 などの、公式の Spec ドキュメントそのものです。横断的なトピックや時事ニュースは `/article` スキルを使ってください。

## 重要な規約

- **frontmatter は書かない**。ファイルの 1 行目は `# <仕様の正式タイトル>` (H1)。タイトルはこの H1 から自動抽出される
- **ファイル名 = slug**。slug がそのまま URL になり、サイドバーの並び順 (昇順、数値順) にも使われる
- **本文は日本語**。ただし以下は英語のまま:
  - 仕様名 / プロダクト名 (OAuth 2.0, OpenID Connect, WebAuthn …)
  - パラメータ・フィールド・ヘッダ名 (`client_id`, `redirect_uri`, `Authorization` …)
  - HTTP メソッド・HTTP ステータス (`POST`, `Bearer`, `401 Unauthorized` …)

## ワークフロー

TodoWrite でタスクを管理しながら順に進めてください。

### 1. 対象仕様を確定する

- ユーザーが引数で仕様を指定している場合はそれを使う (例: `/spec RFC6749`, `/spec OIDC Core 1.0`)
- 指定が無い場合は AskUserQuestion で確認する
- 既に `docs/specs/` に同じ仕様の記事が無いか必ず確認する (重複を避ける)

### 2. 一次情報を取得する

必ず **公式の一次ソース** を `WebFetch` で取得する。推奨ソース:

- **IETF RFC**: `https://datatracker.ietf.org/doc/html/rfcNNNN` または `https://www.rfc-editor.org/rfc/rfcNNNN`
- **OpenID Foundation**: `https://openid.net/specs/...`
- **W3C**: `https://www.w3.org/TR/...`
- **FIDO Alliance**: `https://fidoalliance.org/specifications/`

必要に応じて複数の解説記事・関連 RFC もクロスチェックして正確性を担保する。一次情報に書かれていないことは憶測で書かない。

### 3. Slug (= ファイル名) を決める

- 小文字ケバブケース (`a-z`, `0-9`, `-`, `_`)
- RFC は番号 (`rfc6749`)、補助識別子を付ける場合は `rfc7636-pkce`
- バージョン付き仕様は `_` を使う (`oidc-core-1_0`, `fapi-2_0-security-profile`)
- 例:
  - `rfc6749.md`
  - `rfc7636-pkce.md`
  - `oidc-core-1_0.md`
  - `webauthn-l3.md`
- 配置先: `docs/specs/<slug>.md`

サイドバーは slug を数値順に昇順ソートする (`rfc6749` → `rfc6750` → ...)。明示的なソートキーは不要。

### 4. 記事を書く

ファイルの 1 行目は必ず H1 で仕様の正式タイトル (英語原題) を書く。frontmatter は一切不要。

```markdown
# The OAuth 2.0 Authorization Framework

> OAuth 2.0 認可フレームワークの中核仕様。クライアントが Resource Owner に代わって保護リソースへアクセスするための認可フローを定義する。

## 概要

仕様が何を定義しているか、解決する問題、スコープを 1 パラグラフで。
発行組織 (IETF / OIDF / W3C / FIDO 等) とステータス (Standard / Proposed Standard / Draft / Recommendation 等)、公開日もここで自然な文章として触れる。

## 背景

この仕様が作られた経緯、前身仕様との関係、なぜ必要になったか。

## 主要な概念と用語

- **Role / Entity**: Client, Resource Owner, Authorization Server, Resource Server など
- **Artifact**: Access Token, Refresh Token, Authorization Code など
- **Endpoint**: Authorization Endpoint, Token Endpoint など

## プロトコルフロー

典型フローをシーケンスで説明する。Mermaid が使える。

​```mermaid
sequenceDiagram
  participant C as Client
  participant AS as Authorization Server
  participant RO as Resource Owner
  C->>AS: Authorization Request
  AS->>RO: Authenticate & Consent
  RO-->>AS: Grant
  AS-->>C: Authorization Code
  C->>AS: Token Request (code)
  AS-->>C: Access Token
​```

## 主なパラメータ / フィールド

| パラメータ | 必須 | 説明 |
| --- | --- | --- |
| `client_id` | ✅ | 認可サーバーに登録されたクライアント識別子 |
| `redirect_uri` | 条件付き | 認可レスポンスのリダイレクト先 |

## セキュリティ考慮事項

仕様の Security Considerations 節の要点を日本語で要約する。既知の攻撃と緩和策、運用上の注意点。

## 関連仕様

- [RFC6750 Bearer Token Usage](/specs/rfc6750)
- OAuth 2.1 ドラフト など

## 参考文献

- 一次ソース (必ず載せる): https://datatracker.ietf.org/doc/html/rfc6749
- 補助的な解説リンクがあれば
```

**執筆上の注意**:

- セクションを無理に埋めない。仕様上存在しない要素 (例: Security Considerations 節が無い仕様) は省略して良い
- コードスニペットや HTTP メッセージ例は、可能な限り一次情報の例をそのまま使う
- 内部リンクは `cleanUrls: true` 前提なので `.md` / `.html` を付けない (`/specs/rfc6750` の形)
- 関連する Spec 記事が既に idbok にある場合は必ず内部リンクする
- 推測や個人的意見は明示する (`著者注:` や blockquote を使う)

### 5. ビルド検証

リポジトリルートで:

```bash
npm run docs:build
```

確認事項:

- 警告 (dead link, missing reference など) なくビルドが成功する
- `docs/.vitepress/dist/specs/<slug>.html` が生成されている
- サイドバーに自動で拾われる (H1 がタイトルとして表示される)

エラーが出た場合は、多くのケースで内部リンクのパスミス / コードブロックの言語指定 / Mermaid 構文を疑う。

### 6. コミット

完成したら git でコミットする (push はユーザーの明示的な指示があるまで行わない)。

```bash
git add docs/specs/<slug>.md
git commit -m "Add Spec article: <slug>"
```

画像等のアセットを追加した場合 (`docs/public/` 配下) はそれらも一緒にコミットする。

## 最終報告

ユーザーへの最終メッセージに以下を含める:

- 作成したファイルパス
- 対象仕様 (slug とタイトル)
- 参照した一次ソース URL
- ビルド検証結果 (✅ / ‼️)
- 関連する他の Spec 記事を続けて書く提案など
