---
name: work
description: 記事ワークフローの自動エントリーポイント。SessionStart フックが出力した NEXT_WORK_ACTION を読み取り、未レビュー記事があればレビュー、なければ新規執筆を行う。完了後に自己改善フェーズを実行してプロジェクトを継続的に成長させる。Claude Code on Web のスケジュールタスクとして実行する。1回の実行でレビュー1件または執筆1件のみ処理する。
---

# /work — 記事ワークフローのエントリーポイント

SessionStart フックがセッション開始時に出力した `NEXT_WORK_ACTION` を読み取り、次のアクションを自動決定して実行する。完了後に自己改善フェーズを実行する。

**1回の実行で行うこと: レビュー1件 または 執筆1件、その後自己改善1件**

## ワークフロー

TodoWrite でタスクを管理しながら進める。

### Step 0. main ブランチに同期する

> **このスキルは main ブランチ上での実行を前提とします。** feature branch のセッションから呼び出す場合は、先にブランチ状況を確認してください。

作業開始前に main の最新状態を取り込む:

```bash
git checkout main
git pull origin main
```

### Step 1. アクションを確認する

このセッション開始時のフック出力（`=== idbok SessionStart ===` のブロック）を参照し、`NEXT_WORK_ACTION=` の行を読む。

- `NEXT_WORK_ACTION=review:<path>` → Step 2へ（`<path>` がレビュー対象）
- `NEXT_WORK_ACTION=write` → Step 3へ

フック出力が見当たらない場合は、Glob と Read で `docs/specs/*.md` と `docs/articles/*.md` を直接スキャンして未レビュー記事を探す（frontmatter がないか、frontmatter に `reviewed` タグが含まれていないファイル）。`index.md` は除外する。

### Step 2. [未レビューあり] レビューを実行する

`NEXT_WORK_ACTION` の `<path>` を引数として Skill ツールで `/review` を呼び出す:

```
Skill({ skill: "review", args: "<path>" })
```

`/review` スキルのワークフロー通りにレビュー・コミットを完了させる。

**→ Step 5（自己改善）へ進む。**

### Step 3. [全記事レビュー済み] 新規記事テーマを選定する

1. Glob で `docs/specs/*.md` と `docs/articles/*.md` の既存ファイル一覧を確認（重複を避ける）
2. WebSearch でデジタルアイデンティティ領域の最新動向・未カバーの重要仕様を調査
3. 優先順位:
   - **基幹仕様が未カバー**（OAuth 2.0, OIDC Core 1.0, WebAuthn, PKCE, FIDO2 など）→ `/spec` を優先
   - **基幹仕様が十分カバーされている、または時事性の高いトピック**（eIDAS 2.0, パスキー普及状況, 仕様比較など）→ `/article`
   - 迷ったら「デジタルアイデンティティ初学者にとって今最も価値が高い 1 件」を選ぶ
4. テーマを **1件** に絞る

### Step 4. [全記事レビュー済み] 記事を執筆する

Skill ツールで適切なスキルを呼び出す:

- 特定の1仕様: `Skill({ skill: "spec", args: "<仕様名>" })`
- 横断トピック: `Skill({ skill: "article", args: "<テーマ>" })`

スキルのワークフロー通りに執筆・ビルド検証・コミットを完了させる。

**→ Step 5（自己改善）へ進む。**

### Step 5. 自己改善を実施する

本タスク完了後、プロジェクトを継続的に成長させるための改善を **1件** 実施する。

**改善候補（優先順）:**

1. **デッドリンク・ビルド警告の修正**
   `npm run docs:build` の出力を確認し、dead link 警告やビルドエラーがあれば修正する。

2. **クロスリンクの追加**
   新規記事を執筆した場合、関連する既存記事を Glob + Read でスキャンし、
   末尾の「関連記事」や本文中に相互リンクを追記する。

3. **スキルファイルの改善**
   `skills/*/SKILL.md` を Read で確認し、今回の実行で気付いた改善点
   （説明の明確化、手順の補足、エッジケースの追記など）を **1箇所** 適用する。

4. **プロジェクト構造の改善**
   `CLAUDE.md` / `docs/.vitepress/sidebar.mts` / `docs/.vitepress/config.mts` 等の
   軽微な改善（誤記修正、説明補足など）を適用する。

改善が見つかった場合:
- `.md` ファイルを変更した場合は `npm run docs:build` でビルドが通ることを確認してからコミットする
```bash
git add <変更ファイル>
git commit -m "Self-improve: <改善内容の概要>"
```

改善が不要と判断した場合: コミットせずそのまま Step 6 へ進む。

### Step 6. main へ push する

```bash
git push -u origin main
```

失敗した場合は最大 4 回、指数バックオフ (2s → 4s → 8s → 16s) でリトライする。

## 最終報告

- 実行したメインアクション（レビュー or 執筆）
- 対象（ファイルパス or 新規記事タイトル）
- 結果（✅ 完了 / ‼️ 問題あり）
- 自己改善の内容（実施した改善 or「改善不要」）
- 次回 /work 実行時の予測アクション
