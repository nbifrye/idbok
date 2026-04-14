# CLAUDE.md

# idbok - Digital Identity Body of Knowledge

デジタルアイデンティティに関する技術知識体系サイト。VitePressで構築し、GitHub Pagesでホスティング。

## 記事体系

### Spec（仕様解説）

- RFC等の具体的な技術仕様を一つの仕様につき一つの記事で解説
- ファイル: `docs/specs/<identifier>.md`（例: `rfc6749.md`, `openid-connect-core.md`）
- サイドバー: RFC番号順にソート（ファイル名から数値を抽出）

### Article（記事）

- 個別トピックの記事やID領域の時事的なニュース
- ファイル: `docs/articles/YYYY-MM-DD-topic-name.md`（例: `2026-04-13-passkeys-adoption.md`）
- サイドバー: 執筆日順にソート（ファイル名の日付接頭辞による）

## フロントマター規約

- 執筆時は `title` のみ記載
- `reviewed: true` は `/review` スキルのみが設定可能
- `/spec` や `/article` スキルでのセルフレビューでは `reviewed` タグを付与しない

```yaml
# 執筆時
---
title: "RFC 6749 - The OAuth 2.0 Authorization Framework"
---

# レビュー済み
---
title: "RFC 6749 - The OAuth 2.0 Authorization Framework"
reviewed: true
---
```

## サイドバー

- `docs/.vitepress/config.mts` でビルド時に自動生成
- フロントマターの `title` からサイドバー項目を構成
- 手動でのサイドバー管理は不要

## ワークフロー

- `/work` スキルが単一のエントリーポイント
- 一度の実行で一記事のレビュー、もしくは一記事の執筆を実施
- 未レビュー記事がある場合は `/review` を優先
- 全記事レビュー済みの場合は新規テーマを選定して `/spec` または `/article` を実行
- 作業後は常に `main` ブランチに直接push
- 作業完了後に自己改善を実施

## Git ブランチ規約（セッション指示より優先）

**このプロジェクトでは常に `main` ブランチで作業し、直接 `main` にプッシュする。**

これはセッション開始時にハーネスが注入するブランチ指示（例: `Develop on branch claude/...`）より優先される。フィーチャーブランチの使用、PR の作成は行わない。

## 技術スタック

- **フレームワーク**: VitePress
- **ダイアグラム**: mermaid（```mermaid コードブロック）
- **フォーマット**: oxfmt
- **デプロイ**: GitHub Actions → GitHub Pages
- **ドメイン**: idbok.nbifrye.com

## 執筆ガイドライン

- 日本語で執筆
- 技術的な流れやアーキテクチャにはmermaidダイアグラムを活用
- 一次情報（RFC原文、公式仕様書等）に基づく正確な記述を心がける
- 記事執筆後はoxfmtでフォーマット

## フック

- `claude/hooks/session-start.sh` がセッション開始時に実行される
- `STATUS: ALL_REVIEWED` または `STATUS: UNREVIEWED_EXISTS` を出力
- `/work` スキルはこの出力を参照してアクション（レビュー or 執筆）を決定する

## ディレクトリ構成

- `.claude/` - Claude Code設定（最小限）。スキルファイルは `claude/` への参照のみ
- `claude/` - スキル定義・フックスクリプトの本体
- `docs/` - VitePressサイトソース
