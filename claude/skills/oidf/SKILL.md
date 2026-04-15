---
name: oidf
description: "OpenID FoundationのWG/CGの活動を四半期単位でまとめた記事を執筆（過去四半期の遡及執筆が主目的）"
---

# /oidf スキル - OpenID Foundation WG/CG 四半期レポート執筆

OpenID Foundation の各 Working Group (WG) / Community Group (CG) の活動を **四半期ごとの粒度** でまとめた記事を執筆するスキル。

**主目的は過去四半期の遡及執筆**である。直近完了四半期から遡って、各 WG/CG × 各四半期の組み合わせを順次埋めていくことで、OpenID Foundation の活動史を体系的にカバーする。

## 引数

- `<wg-id> <YYYY> <Qn>`（例: `fapi 2025 Q3`, `authzen 2024 Q4`）

## 対象 WG/CG レジストリ

このスキルが扱う WG/CG の正典リスト。`since` は遡及対象の最古四半期。
**変更時は `claude/hooks/session-start.sh` のミラーリストも同期すること。**

| ID | 名称 | 主な情報源 | since |
|---|---|---|---|
| `authzen` | AuthZEN WG | https://openid.net/wg/authzen/ , https://github.com/openid/authzen | 2024Q1 |
| `connect` | Connect WG | https://openid.net/wg/connect/ , https://github.com/openid/connect | 2024Q1 |
| `dcp` | Digital Credentials Protocols WG | https://openid.net/wg/digital-credentials-protocols/ , https://github.com/openid (OpenID4VC*) | 2024Q1 |
| `ekyc-ida` | eKYC & Identity Assurance WG | https://openid.net/wg/ekyc-ida/ , https://github.com/openid/ekyc-ida | 2024Q1 |
| `eap` | Enhanced Authentication Profile WG | https://openid.net/wg/eap/ | 2024Q1 |
| `fapi` | FAPI WG | https://openid.net/wg/fapi/ , https://github.com/openid/fapi | 2024Q1 |
| `igov` | iGov WG | https://openid.net/wg/igov/ , https://github.com/openid/iGov | 2024Q1 |
| `modrna` | MODRNA WG | https://openid.net/wg/mobile-profile/ , https://github.com/openid/MODRNA | 2024Q1 |
| `sharedsignals` | Shared Signals WG | https://openid.net/wg/sharedsignals/ , https://github.com/openid/sharedsignals | 2024Q1 |
| `aiid` | AI Identity Management CG | https://openid.net/cg/ai-identity-management-community-group/ | 2024Q1 |
| `dde` | Death and the Digital Estate CG | https://openid.net/cg/death-and-the-digital-estate-community-group/ | 2024Q1 |

## 手順

### 1. 引数の検証

- `<wg-id>` がレジストリに存在することを確認
- `<YYYY> Q<n>` が以下の条件をすべて満たすことを確認:
  - 対象 WG/CG の `since` 以降の四半期
  - **完了済み**の四半期（`date +%Y-%m-%d` で今日の日付を確認し、現在進行中の四半期は対象外）
- 同じ `<year>q<n>-openid-<wg-id>.md` が既に存在する場合は重複として中止

### 2. 一次情報の収集

WebSearch / WebFetch を使い、対象 WG/CG の対象四半期当時の情報を一次情報から再構成する。

参照すべき情報源（取得可能なもののみ。すべて揃わなくてよい）:

- OpenID Foundation 公式サイトのブログ記事・お知らせ（対象四半期に発表されたもの）
- WG/CG ページのアナウンス
- 該当 WG の GitHub リポジトリの commits / releases / issues / PRs（対象四半期内のもの）
- 仕様ドラフトの版改訂履歴
- 対象四半期に開催された meetings の minutes（公開されている場合）
- mailing list アーカイブ（該当 WG が利用している場合）
- 関連するイベント（OpenID Summit, IIW 等）の開催記録

**遡及執筆の特性に関する注意:**

- 対象四半期当時の視点で情報を再構成すること。後の四半期で起きた出来事は混入させない
- 「今後の予定」節は、対象四半期完了直後の視点で記述する
- 読者にとって有益な場合に限り「補足: その後の動向」節を任意で末尾に追加してよい
- 一次情報が乏しい WG/CG（MODRNA, iGov, eKYC-IDA 等が静かな四半期を持つことがある）は、無理に節を埋めず「該当四半期に公開された記録は確認できなかった」と明示する

### 3. ファイル作成

- パス: `docs/articles/<year>q<n>-openid-<wg-id>.md`
  - 例: `docs/articles/2025q3-openid-fapi.md`
  - 注: ファイル名先頭は **対象四半期** であり、**執筆日ではない**。これは遡及執筆の場合でもサイドバーの並び（対象四半期降順）が安定するための設計
- フロントマター: `title` のみ
  - `reviewed: true` は絶対に付与しない（`/review` スキルのみが付与）

### 4. フロントマター形式

```yaml
---
title: "OpenID Foundation <WG/CG 名> WG/CG 活動レポート (YYYY QN)"
---
```

例: `"OpenID Foundation FAPI WG 活動レポート (2025 Q3)"`

### 5. 記事の執筆

以下の節構成で日本語で執筆する。情報が確認できない節は **「該当四半期に公開された記録は確認できなかった」** と明示して空でない記述を残す。

#### 1. 概要（必須）
- 対象 WG/CG の簡単な紹介、対象四半期、四半期の活動要約
- 冒頭近くに **執筆日（YYYY-MM-DD）** を明記し、これが遡及執筆である旨を読者に示す

#### 2. 公開された仕様・ドラフト改訂
- 該当四半期に公開された仕様の Final / Implementer's Draft / Editor's Draft 等
- 主要な技術的変更点

#### 3. 主要な議論・決定事項
- meetings や issues / PRs での議論の要点
- 採択された決定事項

#### 4. 会議・イベント
- 開催された WG meeting、ワーキングコール
- 関連するカンファレンス・サミット等での発表・セッション

#### 5. 今後の予定
- 対象四半期完了直後の視点で、当時予定されていた次の四半期以降の動き

#### 6. 参考情報源（必須）
- 参照した一次情報すべてへのリンク
- 各リンクには簡単な説明を付ける

#### 7. 補足: その後の動向（任意・推奨しない）
- 読者にとって特に有益な場合のみ追加。多用しないこと

### 6. フォーマット

`npx oxfmt docs/articles/<year>q<n>-openid-<wg-id>.md --write` でフォーマット（失敗した場合はスキップしてよい）。

### 7. セルフレビュー

記事内容を確認し、以下を点検する。問題があれば修正する。ただし `reviewed: true` は設定しない。

- 対象四半期外の出来事を混入していないか
- 出典のないクレームを含めていないか（含まれていたら一次情報を再確認するか削除）
- WG/CG の正式名称が正確か
- mermaid ダイアグラムを使った場合は構文が正しいか

## mermaid ダイアグラムについて

WG の組織関係や仕様間の関係を示す場合に限り使用する。四半期レポートでは必須ではない。

## 重要な制約

- **遡及執筆が主目的**: 既に終わった四半期を埋めることに重点を置く
- **対象四半期は完了済みのもののみ**: 進行中の四半期は対象外
- **執筆日と対象四半期は別物**: 本文の「執筆日」と、ファイル名の対象四半期を混同しない
- **`reviewed: true` を設定しない**: `/review` スキルのみが付与する
- **重複禁止**: 同じ WG × 四半期の記事が既に存在する場合は新規作成しない
- **一次情報主義**: 出典のないクレームを書かない。確認できないことは「確認できなかった」と明示する

## レジストリ更新時の手順

新しい WG/CG を追加する、または `since` 四半期を更新する場合:

1. 本ファイルの「対象 WG/CG レジストリ」表を更新
2. `claude/hooks/session-start.sh` の OIDF カバレッジ計算ロジック内の WG ID 配列と `since` 値を同期更新
3. 両ファイルの変更を同じコミットに含める
