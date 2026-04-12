# /work — 記事ワークフローのエントリーポイント

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

**権威ソースとして、毎回スクリプトを再実行してフレッシュな状態で判定する:**

```bash
bash scripts/check-unreviewed.sh
```

出力の `NEXT_WORK_ACTION=` 行を読む:

- `NEXT_WORK_ACTION=review:<path>` → Step 2 へ (`<path>` がレビュー対象)
- `NEXT_WORK_ACTION=write` → Step 3 へ

> 万一スクリプトが存在しない/実行できない場合は、Glob と Read で `docs/specs/*.md` と `docs/articles/*.md` を直接スキャンして未レビュー記事を探す (frontmatter がない、または frontmatter に `reviewed` タグが含まれていないファイル)。`index.md` は除外する。

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

本タスク完了後、プロジェクトを継続的に成長させるために **以下の優先順で走査し、最初に該当した1件のみ** を実施する。どれも該当しない場合は何もせず Step 6 に進む。

**P1. ビルド警告・エラーの修正 (最優先)**

```bash
npm run docs:build 2>&1 | tee /tmp/idbok-build.log
```

出力に dead link / missing reference / Mermaid 構文エラー / VitePress 警告が **1件以上** あれば、その1つを修正する。該当なければ P2 へ。

**P2. フォーマット違反の修正**

```bash
npm run fmt:check
```

non-zero で終了したら `npm run fmt` を実行して差分を適用する。該当なければ P3 へ。

**P3. 新規記事のクロスリンク追加 (Step 4 経由の場合のみ)**

直前に Step 4 で新規記事を執筆した場合のみ該当。Glob で `docs/specs/*.md` と `docs/articles/*.md` から関連しそうな既存記事を最大 5 件読み、本文中で **新規記事 → 既存記事** または **既存記事 → 新規記事** の内部リンクを1件以上追加できる箇所があれば追記する。該当なければ P4 へ。

**P4. 直前実行で判明した曖昧さの解消 (該当時のみ)**

直前の実行 (レビュー or 執筆) で **実際に迷った・詰まった点** があれば、`skills/*/SKILL.md` または `CLAUDE.md` を1箇所だけ修正する。思いつきの改善や予防的ドキュメント追加は **行わない** — 実タスクで具体的な不便があった場合のみ。

**コミット**:

`.md` ファイルを変更した場合は `npm run fmt` → `npm run docs:build` でフォーマットとビルドが通ることを確認してからコミットする:

```bash
git add <変更ファイル>
git commit -m "Self-improve: <P番号> <概要>"
```

**改善を実施しなかった場合**: コミットはせず、最終報告にその旨を明記する。

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
