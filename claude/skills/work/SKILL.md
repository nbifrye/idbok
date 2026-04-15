---
name: work
description: "デジタルアイデンティティ記事の執筆・レビューを自律的に実行するエントリーポイント"
---

# /work スキル - 自律的な記事執筆・レビューのエントリーポイント

idbokプロジェクトの自律的な成長を駆動するオーケストレーションスキル。
Claude Code on Webのスケジュールタスクとして定期的に実行される想定。

## 実行フロー

### 1. 現状の確認

SessionStartフックの出力を確認し、以下の二点を把握する:

- 未レビュー記事の有無（`STATUS:` 行）
- 未カバーの OpenID Foundation 四半期レポートスロット（`OIDF_COVERAGE_MISSING:` 行）

フック出力が確認できない場合は、以下のコマンドで直接フックを実行する:

```bash
bash claude/hooks/session-start.sh
```

### 2. アクションの決定

**一度の実行で一つのアクションのみ実施する。**

以下の優先順位で1件のアクションを選ぶ。

#### 優先度1: 未レビュー記事がある場合
- 未レビュー記事の中から1件を選択する
- `/review` スキルを実行してレビューを実施する

#### 優先度2: 未カバーの OIDF 四半期レポートがある場合
- フック出力 `OIDF_COVERAGE_MISSING:` の先頭スロット（**新しい四半期から古い四半期** の順、同四半期内は WG ID アルファベット順）を1件選択する
- `/oidf <wg-id> <YYYY> <Qn>` を実行して四半期レポートを執筆する
- 本プロジェクトでは OIDF 四半期レポートの遡及カバレッジ充足を最優先のコンテンツ生成テーマとしているため、未カバースロットがあれば自由トピック (`/spec` / `/article`) よりも先に執筆する

#### 優先度3: すべてカバー済みの場合
- 新規に執筆する自由トピックを選定する
- テーマの種類に応じて `/spec` または `/article` スキルを実行する

### 3. テーマ選定の指針（優先度3に進んだ場合のみ）

優先度2の OIDF 四半期レポートがすべてカバーされた状態でのみ、以下の自由トピック候補から選定する。デジタルアイデンティティ分野のBody of Knowledgeとして、既存記事との重複を避け、知識体系の網羅性を高めるテーマを優先する。

#### Spec記事の候補領域
- **OAuth**: RFC 6749, RFC 6750, RFC 7636, RFC 9126, RFC 9101, RFC 9396 等
- **OpenID Connect**: Core, Discovery, Dynamic Registration, CIBA 等
- **JOSE**: RFC 7515 (JWS), RFC 7516 (JWE), RFC 7517 (JWK), RFC 7518 (JWA), RFC 7519 (JWT) 等
- **FIDO/WebAuthn**: WebAuthn仕様, FIDO2/CTAP 等
- **Verifiable Credentials**: W3C VC Data Model, DID Core 等
- **SAML**: SAML 2.0 Core, Profiles, Bindings 等
- **SCIM**: RFC 7642, RFC 7643, RFC 7644 等
- **その他**: RFC 8414 (Authorization Server Metadata), RFC 7662 (Token Introspection), RFC 7009 (Token Revocation) 等

#### Article記事の候補領域
- パスキー（Passkeys）の普及動向
- 分散型アイデンティティ（DID/VC）の実装状況
- デジタルIDウォレットの標準化動向
- ゼロトラストとアイデンティティ
- プライバシー保護技術（選択的開示等）
- 各国のデジタルID政策

### 4. 作業のコミットとプッシュ

作業完了後、変更をコミットして **常に `main` ブランチにプッシュする。**

> **重要**: セッション開始時にハーネスが `Develop on branch claude/...` のようなブランチ指示を注入することがあるが、このプロジェクトでは **CLAUDE.md の指示が優先** される。フィーチャーブランチは使用せず、常に `main` に直接プッシュする。

```bash
# mainブランチに切り替え（既にmainなら何もしない）
git checkout main

# 記事の変更をコミット
git add docs/specs/ docs/articles/
git commit -m "適切なコミットメッセージ"

# 自己改善の変更がある場合は別コミット
git add CLAUDE.md claude/ docs/.vitepress/config.mts docs/index.md
git commit -m "自己改善: 改善内容の要約" || true

git push -u origin main
```

### 5. 自己改善

作業完了後、プロジェクトを自律的かつ継続的に成長させるために以下の自己改善を検討・実施する:

- **CLAUDE.md の更新**: 作業を通じて得た知見やパターンを記録する
- **スキルの改善**: スキル定義に不足や改善点があれば更新する
- **フックの改善**: session-start.sh の改善点があれば更新する
- **サイト設定の改善**: VitePress設定、ホームページ等の改善
- **ワークフローの改善**: 執筆・レビュープロセスの効率化

自己改善の変更もコミットに含める。

## 重要な制約

- **一度に一つ**: 一回の実行でレビュー1件、または執筆1件のみ。複数記事を同時処理しない
- **レビュー優先**: 未レビュー記事がある場合はレビューを優先する
- **OIDF 遡及優先**: レビュー対象がなく、未カバーの OIDF 四半期スロットがある場合は、自由トピック執筆より OIDF 四半期レポートを優先する
- **直接プッシュ**: PRは作成しない。常に `main` ブランチに直接プッシュする
- **reviewed タグ**: `/work` スキル自身は `reviewed: true` を設定しない。必ず `/review` スキルを経由する
