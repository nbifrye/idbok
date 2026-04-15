# CLAUDE.md

# idbok - Digital Identity Body of Knowledge

デジタルアイデンティティに関する技術知識体系サイト。VitePressで構築し、GitHub Pagesでホスティング。

## 記事体系

### Spec（仕様解説）

- RFC等の具体的な技術仕様を一つの仕様につき一つの記事で解説
- ファイル: `docs/specs/<identifier>.md`（例: `rfc6749.md`, `openid-connect-core.md`）
- サイドバー: RFC番号順にソート（ファイル名から数値を抽出）

### Article（記事）

`docs/articles/` 配下の記事は以下の二系統に分かれる。いずれもフロントマターは `title` のみで統一される。

#### 自由トピック記事

- 個別トピックの解説やID領域の時事的なニュース
- ファイル: `docs/articles/YYYY-MM-DD-topic-name.md`（例: `2026-04-13-passkeys-adoption.md`）
- 執筆: `/article` スキル
- ファイル名先頭は **執筆日**

#### OpenID Foundation 四半期レポート

- OpenID Foundation の各 WG/CG の活動を四半期ごとにまとめた記事
- ファイル: `docs/articles/<year>q<n>-openid-<wg-id>.md`（例: `2025q3-openid-fapi.md`）
- 執筆: `/oidf` スキル（過去四半期の遡及執筆が主目的）
- ファイル名先頭は **対象四半期**（執筆日ではない）。遡及執筆でもサイドバーの並びを安定させるため
- 執筆日は本文冒頭に明記する

#### サイドバー表示

両系統とも `docs/articles/` に同居し、ファイル名の文字列降順で並ぶ。年単位では新しい順、同一年内では `q` (0x71) > `-` (0x2D) のため四半期レポートが先、トピック記事が後の順で表示される。

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
- 優先順位:
  1. 未レビュー記事があれば `/review`
  2. 未カバーの OIDF 四半期スロットがあれば `/oidf <wg> <YYYY> <Qn>`（過去四半期の遡及執筆を最優先）
  3. それ以外は新規テーマを選定して `/spec` または `/article`
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
- 出力:
  - `STATUS: ALL_REVIEWED` または `STATUS: UNREVIEWED_EXISTS`（および未レビュー記事一覧）
  - `OIDF_COVERAGE_MISSING: <count> slots ...`（未カバーの OIDF 四半期スロットを新しい順に表示）
- `/work` スキルはこの出力を参照してアクション（レビュー / OIDF 四半期執筆 / 自由トピック執筆）を決定する

## ディレクトリ構成

- `.claude/` - Claude Code設定（最小限）。スキルファイルは `claude/` への参照のみ
- `claude/` - スキル定義・フックスクリプトの本体
- `docs/` - VitePressサイトソース
