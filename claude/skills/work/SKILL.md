---
name: work
description: "デジタルアイデンティティ記事の執筆・レビューを自律的に実行するエントリーポイント"
---

# /work スキル - 自律的な記事執筆・レビューのエントリーポイント

idbokプロジェクトの自律的な成長を駆動するオーケストレーションスキル。
Claude Code on Webのスケジュールタスクとして定期的に実行される想定。

## 実行フロー

### 1. 現状の確認

SessionStartフックの出力を確認し、未レビュー記事の有無を把握する。
フック出力が確認できない場合は、以下のコマンドで直接確認する:

```bash
for f in docs/specs/*.md docs/articles/*.md; do
  [ -f "$f" ] || continue
  basename=$(basename "$f")
  [ "$basename" = "index.md" ] && continue
  if ! grep -q '^reviewed:\s*true' "$f"; then
    echo "UNREVIEWED: $f"
  fi
done
```

### 2. アクションの決定

**一度の実行で一つのアクションのみ実施する。**

#### 未レビュー記事がある場合
- 未レビュー記事の中から1件を選択する
- `/review` スキルを実行してレビューを実施する

#### 全記事がレビュー済みの場合
- 新規に執筆する記事のテーマを選定する
- テーマの種類に応じて `/spec` または `/article` スキルを実行する

### 3. テーマ選定の指針（新規執筆時）

デジタルアイデンティティ分野のBody of Knowledgeとして、以下の領域から体系的にテーマを選定する。既存記事との重複を避け、知識体系の網羅性を高めるテーマを優先する。

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
- **直接プッシュ**: PRは作成しない。常に `main` ブランチに直接プッシュする
- **reviewed タグ**: `/work` スキル自身は `reviewed: true` を設定しない。必ず `/review` スキルを経由する
