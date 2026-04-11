---
name: work
description: 記事ワークフローの自動エントリーポイント。SessionStart フックが出力した NEXT_WORK_ACTION を読み取り、未レビュー記事があればレビュー、なければ新規執筆を行う。Claude Code on Web のスケジュールタスクとして実行する。1回の実行でレビュー1件または執筆1件のみ処理する。
---

# /work — 記事ワークフローのエントリーポイント

SessionStart フックがセッション開始時に出力した `NEXT_WORK_ACTION` を読み取り、次のアクションを自動決定して実行する。

**1回の実行で行うこと: レビュー1件 または 執筆1件のみ（複数同時実行しない）**

## ワークフロー

TodoWrite でタスクを管理しながら進める。

### 1. アクションを確認する

このセッション開始時のフック出力（`=== idbok SessionStart ===` のブロック）を参照し、`NEXT_WORK_ACTION=` の行を読む。

- `NEXT_WORK_ACTION=review:<path>` → Step 2へ（`<path>` がレビュー対象）
- `NEXT_WORK_ACTION=write` → Step 3へ

フック出力が見当たらない場合は、Glob と Read で `docs/specs/*.md` と `docs/articles/*.md` を直接スキャンして未レビュー記事を探す（先頭が `---` で始まり `reviewed` を含まないファイル）。

### 2. [未レビューあり] レビューを実行する

`NEXT_WORK_ACTION` の `<path>` を引数として Skill ツールで `/review` を呼び出す:

```
Skill({ skill: "review", args: "<path>" })
```

`/review` スキルのワークフロー通りにレビュー・コミットを完了させる。

その後プッシュする（スケジュールタスクとして自律実行するため push まで行う）:

```bash
git push -u origin <現在のブランチ名>
```

**→ ここで終了。次のアクションは次回の /work 実行時に行う。**

### 3. [全記事レビュー済み] 新規記事テーマを選定する

1. Glob で `docs/specs/*.md` と `docs/articles/*.md` の既存ファイル一覧を確認（重複を避ける）
2. WebSearch でデジタルアイデンティティ領域の最新動向・未カバーの重要仕様を調査
3. 優先順位の目安:
   - **未カバーの基幹仕様**（OAuth 2.0, OIDC Core 1.0, WebAuthn, PKCE など）→ `/spec`
   - **最新ニュース・横断トピック**（eIDAS 2.0, パスキー普及状況など）→ `/article`
4. テーマを **1件** に絞る

### 4. [全記事レビュー済み] 記事を執筆する

Skill ツールで適切なスキルを呼び出す:

- 特定の1仕様: `Skill({ skill: "spec", args: "<仕様名>" })`
- 横断トピック: `Skill({ skill: "article", args: "<テーマ>" })`

スキルのワークフロー通りに執筆・ビルド検証・コミットを完了させてから push する:

```bash
git push -u origin <現在のブランチ名>
```

**→ ここで終了。**

## 最終報告

- 実行したアクション（レビュー or 執筆）
- 対象（ファイルパス or 新規記事タイトル）
- 結果（✅ 完了 / ‼️ 問題あり）
- 次回 /work 実行時の予測アクション
