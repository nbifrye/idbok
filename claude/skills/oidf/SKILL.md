---
name: oidf
description: "OpenID FoundationのWG/CGの活動を月次単位でまとめた詳細レポートを執筆（過去月の遡及執筆が主目的）"
---

# /oidf スキル - OpenID Foundation WG/CG 月次活動レポート執筆

OpenID Foundation の各 Working Group (WG) / Community Group (CG) の活動を **月次粒度** でまとめた詳細レポートを執筆するスキル。

**主目的は過去月の遡及執筆**である。直近完了月から遡って、各 WG/CG × 各月の組み合わせを順次埋めていくことで、OpenID Foundation の活動史を体系的にカバーする。

**重要:** このスキルは「公式アナウンスの要約」ではなく、**メーリングリスト・ミーティング議事録・GitHub issues/PRs から読み取れる「どのような議論が行われ、誰がどの立場を取り、どの論点が対立したか」という一次情報の再構成**を主たる目標とする。

## 引数

- `<wg-id> <YYYY> M<n>`（例: `fapi 2026 M3`, `authzen 2025 M11`）
- `M<n>` は 1 〜 12 の月番号（1桁可、ゼロパディング不要）

## 対象 WG/CG レジストリ

このスキルが扱う WG/CG の正典リスト。`since` は遡及対象の最古月。
**変更時は `claude/hooks/session-start.sh` のミラーリストも同期すること。**

| ID | 名称 | WG/CG ページ | GitHub | メーリングリスト (listinfo) | アーカイブ (pipermail) | 議事録所在 | since |
|---|---|---|---|---|---|---|---|
| `adt` | Australian Digital Trust CG | https://openid.net/cg/australian-digital-trust-community-group/ | https://github.com/openid/cg-australian-digital-trust | https://lists.openid.net/mailman/listinfo/openid-au-digital-trust | https://lists.openid.net/pipermail/openid-au-digital-trust/ | GitHub リポジトリ内 `minutes/` および `TrustFrameworkAnalysis/minutes/` + HackMD `@adtcg` | 2025-02 |
| `aiim` | AI Identity Management CG (AIIM) | https://openid.net/cg/artificial-intelligence-identity-management-community-group/ | https://github.com/openid/cg-ai-identity-management | https://lists.openid.net/mailman/listinfo/openid-aiim | https://lists.openid.net/pipermail/openid-aiim/ | GitHub issues（議事録は non-public） | 2025-04 |
| `authzen` | AuthZEN WG | https://openid.net/wg/authzen/ | https://github.com/openid/authzen | https://lists.openid.net/mailman/listinfo/openid-specs-authzen | https://lists.openid.net/pipermail/openid-specs-authzen/ | https://hackmd.io/@oidf-wg-authzen | 2024-01 |
| `connect` | AB/Connect WG | https://openid.net/wg/connect/ | https://github.com/openid/connect | https://lists.openid.net/mailman/listinfo/openid-specs-ab | https://lists.openid.net/pipermail/openid-specs-ab/ | non-public（ML 内のみ） | 2024-01 |
| `dade` | Death and the Digital Estate CG (DADE) | https://openid.net/cg/death-and-the-digital-estate/ | https://github.com/openid/death-and-the-digital-estate | https://lists.openid.net/mailman/listinfo/openid-digital-directives | https://lists.openid.net/pipermail/openid-digital-directives/ | HackMD https://hackmd.io/uJgxxlm-QcS8SD6r8kXTLw + GitHub wiki https://github.com/openid/death-and-the-digital-estate/wiki/Resources | 2024-09 |
| `dcp` | Digital Credentials Protocols WG | https://openid.net/wg/digital-credentials-protocols/ | https://github.com/openid (OpenID4VC*) | https://lists.openid.net/mailman/listinfo/openid-specs-digital-credentials-protocols | https://lists.openid.net/pipermail/openid-specs-digital-credentials-protocols/ | ML アーカイブ内に投稿 | 2024-01 |
| `ekyc-ida` | eKYC & Identity Assurance WG | https://openid.net/wg/ekyc-ida/ | https://github.com/openid/ekyc-ida | https://lists.openid.net/mailman/listinfo/openid-specs-ekyc-ida | https://lists.openid.net/pipermail/openid-specs-ekyc-ida/ | https://bitbucket.org/openid/ekyc-ida/wiki/browse/ | 2024-01 |
| `escg` | Ecosystem Support CG | https://openid.net/cg/ecosystem-support-community-group/ | https://github.com/openid/cg-ecosystem-support | https://lists.openid.net/mailman/listinfo/openid-ecosystem-support | https://lists.openid.net/pipermail/openid-ecosystem-support/ | non-public | 2024-01 |
| `fapi` | FAPI WG | https://openid.net/wg/fapi/ | https://github.com/openid/fapi | https://lists.openid.net/mailman/listinfo/openid-specs-fapi | https://lists.openid.net/pipermail/openid-specs-fapi/ | https://bitbucket.org/openid/fapi/wiki/browse/ (FAPI_Meeting_Notes_YYYY) | 2024-01 |
| `igov` | iGov WG | https://openid.net/wg/igov/ | https://bitbucket.org/openid/igov/ （GitHub 移行計画進行中、2026-03〜） | https://lists.openid.net/mailman/listinfo/openid-specs-igov | https://lists.openid.net/pipermail/openid-specs-igov/ | non-public | 2024-01 |
| `ipsie` | IPSIE WG | https://openid.net/wg/ipsie/ | https://github.com/openid/ipsie | https://lists.openid.net/mailman/listinfo/openid-specs-ipsie | https://lists.openid.net/pipermail/openid-specs-ipsie/ | HackMD https://hackmd.io/zbL4VSdhTcWnxlSwl43qVA | 2024-10 |
| `modrna` | MODRNA WG | https://openid.net/wg/modrna/ | https://bitbucket.org/openid/mobile/ | https://lists.openid.net/mailman/listinfo/openid-specs-mobile-profile | https://lists.openid.net/pipermail/openid-specs-mobile-profile/ | non-public | 2024-01 |
| `rande` | R&E WG | https://openid.net/wg/rande/ | （公開リポジトリは確認できず） | https://lists.openid.net/mailman/listinfo/openid-specs-rande | https://lists.openid.net/pipermail/openid-specs-rande/ | non-public | 2024-01 |
| `sharedsignals` | Shared Signals WG | https://openid.net/wg/sharedsignals/ | https://github.com/openid/sharedsignals | https://lists.openid.net/mailman/listinfo/openid-specs-risc | https://lists.openid.net/pipermail/openid-specs-risc/ | https://github.com/openid/sharedsignals/wiki/Meetings | 2024-01 |

「議事録所在」が `non-public` の WG/CG（Connect, iGov, MODRNA, R&E, AIIM, Ecosystem Support 等）については、議事録が公開されていないため、メーリングリストと GitHub の議論掘り下げで補完する。

アーカイブ済みの WG（EAP, FastFed, HEART 等）は本レジストリには含めない。新規記事の対象となるのは現在アクティブな WG/CG のみ。

## データソースの既知の制約

執筆前に以下を理解しておくこと。これらは過去記事の調査で判明した恒久的/構造的制約であり、毎回同じことで詰まらないようにするためのメモ。

### pipermail アーカイブの URL 形式

OpenID Foundation の pipermail は **リストによって月次インデックスの提供有無が異なる**:

| 形式 | リスト |
|---|---|
| **月次 `YYYY-Month/` が提供されている** | `openid-specs-ab` (Connect), `openid-specs-authzen`, `openid-specs-fapi`, `openid-specs-risc` (Shared Signals), `openid-digital-directives` (DADE) |
| **週次 `Week-of-Mon-YYYYMMDD/` のみ** | `openid-specs-digital-credentials-protocols` (DCP), `openid-specs-ipsie`, `openid-au-digital-trust` (ADT), `openid-specs-igov`, `openid-aiim`, `openid-specs-mobile-profile` (MODRNA) |

週次のみのリストで月次 URL を叩くと必ず 404 になる。親インデックス（`https://lists.openid.net/pipermail/<list>/`）を先に取得してリストの形式を確認すること。

### 公開アーカイブが存在しないリスト

- **`openid-ecosystem-support` (ESCG)**: 2025-10 以降は private list 運用に切り替わり、公開アーカイブに **一切エントリがない**。2025-09 以前のみ公開されている。ESCG の月次レポートでは「公開インデックスに該当月の公開エントリなし」と中立に記述し、代替情報源（GitHub、openid.net アナウンス）で補完する
- **`openid-specs-mobile-profile` (MODRNA)**: アクティブな月とゼロ投稿の月が混在する。週次インデックスに該当月のエントリが一切ない場合、当該月は ML 投稿ゼロが事実

### Bitbucket リポジトリの取り扱い

- Bitbucket Cloud は SPA (JavaScript レンダリング) で HTML を生成するため、**WebFetch では本文を取得できない**（認証の有無以前の問題）。Bitbucket 依存 WG（eKYC-IDA, FAPI, iGov, MODRNA）の議事録・Issue 詳細は WebFetch 経由では確認できないと理解しておくこと
- 代替手段: (1) 議事録は ML 投稿（Draft meeting notes スレッド）から内容を取得、(2) Issue 内容は `Issue #NNN: <title>` 形式の ML スレッドで概要を把握、(3) 仕様ドラフト本体は `openid.net/specs/` で公開版を取得
- **Bitbucket Cloud Issues/Wiki は 2026-08-20 に完全削除予定**（2026-03 の Atlassian 通知）。OpenID 配下の移行先（GitHub / Jira / Confluence 等）を随時追跡すること
- iGov は 2026-03 に GitHub 移行計画が ML で告知済み。RFC Markdown 版の新規リポジトリが `github.com/openid/` 配下に作成される予定

### 存在しない GitHub リポジトリ（過去記事の誤記訂正）

- `github.com/openid/MODRNA`: **存在しない**。MODRNA WG の公式リポジトリは `bitbucket.org/openid/mobile/`
- `github.com/openid/iGov`: **存在しない**。iGov WG の公式リポジトリは `bitbucket.org/openid/igov/`（GitHub 移行計画進行中）

### openid.net の間欠障害

`openid.net/wg/<wg>/` `/news/` `/specs/` 等は 503 を返すことがある。数回試行すれば復旧することが多い。復旧しない場合でも記事本文に「503 エラー」と書かず、後日再試行するか、他の情報源で代替する。

## 手順

### 1. 引数の検証

- `<wg-id>` がレジストリに存在することを確認
- `<YYYY> M<n>` が以下の条件をすべて満たすことを確認:
  - 対象 WG/CG の `since` 以降の月
  - **完了済み**の月（`date +%Y-%m-%d` で今日の日付を確認し、現在進行中の月は対象外）
- 同じ `docs/oidf/<wg-id>/<year>-<mm>.md` が既に存在する場合は重複として中止（`mm` は 2 桁ゼロパディング）

### 2. 一次情報の収集（深掘り探索チェックリスト）

WebSearch / WebFetch を使い、以下の順序で対象 WG/CG の対象月の一次情報を掘り下げる。**「公式アナウンスの寄せ集め」に終わらせず、ML・議事録・GitHub の議論を本文に反映することがこのスキルの本質**。

#### 2-1. メーリングリストの掘り下げ（重点）

1. レジストリ「アーカイブ (pipermail)」URL の対象月インデックス（例: `https://lists.openid.net/pipermail/openid-specs-fapi/2026-March/`）を取得
2. 全スレッド題名を確認し、技術議論を含むスレッド（返信 2 件以上、実装者間のやり取り、設計判断を伴うもの）を **3〜5 本選定**
3. 各スレッドについて以下を抽出:
   - スレッド題名と開始日
   - 発端となった問題提起・提案
   - 主要参加者と各人の主張・立場
   - 論点の対立軸（あれば）
   - 到達した合意・未解決のまま残った論点
4. ノイズ（純粋な事務連絡、登録通知等）は除外

**取得できなかった場合の代替:** 対象月に ML スレッドゼロの場合は、その旨を明示し、GitHub・議事録の掘り下げで補完。

#### 2-2. 議事録の掘り下げ（重点）

1. レジストリ「議事録所在」URL から対象月の全ミーティング分の議事録を取得
   - HackMD: `@oidf-wg-<wg>` のページ一覧から対象月の日付を含むものを取得
   - Bitbucket wiki: `FAPI_Meeting_Notes_YYYY` 等の年次ページ内から対象月の節を抽出
   - GitHub wiki: `Meetings` ページから対象月のサブページ
2. 各ミーティングについて以下を抽出:
   - 開催日・参加者数（または参加者リスト）
   - 主要議題
   - 決定事項（採択された動議・投票結果）
   - 未決事項・次回への持ち越し
   - 重要な発言・問題提起
3. **議事録抜粋は短い原文引用（`>` ブロック）または日本語要約に `(議事録 YYYY-MM-DD より)` と出典注記**

**取得できなかった場合の代替:** 議事録 non-public な WG（Connect, iGov, MODRNA, R&E, AIIM, Ecosystem Support 等）は、ML スレッドおよび GitHub PR/issue から議論内容を再構成し、その旨を明記。

#### 2-3. GitHub 上の議論の掘り下げ（重点）

1. 該当 WG の GitHub リポジトリで以下の検索クエリを実行:
   - `is:issue created:YYYY-MM-01..YYYY-MM-31`
   - `is:pr merged:YYYY-MM-01..YYYY-MM-31`
   - `is:issue commented:YYYY-MM-01..YYYY-MM-31`（既存 issue の議論再燃を捕捉）
2. **5 コメント以上の議論がある issue/PR を 3〜5 本選定**
3. 各 issue/PR について以下を抽出:
   - タイトルと番号
   - 問題提起の内容
   - 主要参加者の主張
   - 対立点・トレードオフ
   - マージされた解決策または未解決の状態

#### 2-4. 公式アナウンス・仕様改訂

- `openid.net/` ブログの対象月内記事
- 仕様ドラフトの版改訂履歴（GitHub releases、`-XX` バージョン番号）
- 投票通知（Notice of Vote）・パブリックレビュー開始通知

#### 2-5. 関連イベント・外部情報源

- カンファレンス（OpenID Summit, IIW, EIC, TIIME 等）の対象月開催記録
- WG 議長・エディタの個人ブログ（Mike Jones の self-issued.info, Aaron Parecki の aaronparecki.com 等）
- 業界メディア（Biometric Update, Cerbos blog 等）

### 遡及執筆の特性に関する注意

- **対象月当時の視点で情報を再構成すること。後の月で起きた出来事は混入させない**
- 「今後の予定」節は、対象月完了直後の視点で記述する
- 読者にとって有益な場合に限り「補足: その後の動向」節を任意で末尾に追加してよい
- 一次情報が乏しい WG/CG（MODRNA, iGov, R&E, eKYC-IDA, Ecosystem Support, Australian Digital Trust 等が静かな月を持つことがある）は、ML・議事録・GitHub をすべて確認した上で「該当月に公開された記録は確認できなかった」と明示する

### 3. ファイル作成

- パス: `docs/oidf/<wg-id>/<year>-<mm>.md`
  - 例: `docs/oidf/fapi/2026-03.md`
  - `<mm>` は **2 桁ゼロパディング**（`01`〜`12`）
  - 注: ファイル名は **対象月** であり、**執筆日ではない**。これは遡及執筆でも WG ごとのサイドバーの並び（対象月降順）が安定するための設計
  - 注: 対応する WG/CG ディレクトリ（`docs/oidf/<wg-id>/`）が既に存在することを前提とする。新規 WG/CG 追加時はディレクトリと `index.md` も作成する
- フロントマター: `title` のみ
  - `reviewed: true` は絶対に付与しない（`/review` スキルのみが付与）

### 4. フロントマター形式

```yaml
---
title: "OpenID Foundation <WG/CG 名> WG/CG 活動レポート (YYYY年M月)"
---
```

例: `"OpenID Foundation FAPI WG 活動レポート (2026年3月)"`

### 5. 記事の執筆

以下の節構成で日本語で執筆する。情報が確認できない節は **「該当月に公開された記録は確認できなかった」** と明示して空でない記述を残す。

#### 1. 概要（必須）
- 対象 WG/CG の簡単な紹介、対象月、月次活動要約
- 冒頭近くに **執筆日（YYYY-MM-DD）** を明記し、これが遡及執筆である旨を読者に示す

#### 2. 公開された仕様・ドラフト改訂
- 該当月に公開された仕様の Final / Implementer's Draft / Editor's Draft 等
- ドラフト版番号の変遷（例: `-04` → `-05`）と主要な技術的変更点
- 該当月に開始されたパブリックレビュー・投票通知

#### 3. ミーティングと議論（重点・新設）
- 対象月に開催された各ミーティング（定例 WG コール・特別セッション）について、以下を記述:
  - 開催日・参加者規模
  - 主要議題と決定事項
  - 未決論点・次回への持ち越し
  - 重要な発言・問題提起（議事録から引用または要約）
- 議事録抜粋は引用ブロック、または日本語要約に `(議事録 YYYY-MM-DD より)` と出典注記
- **議事録が non-public な WG では、ML スレッドおよび GitHub から再構成した議論をここに記述**

#### 4. メーリングリストの主要スレッド（重点・新設）
- 対象月に活発だった ML スレッドのうち、技術的に重要な **3〜5 本** を選定
- 各スレッドについて:
  - スレッド題名（pipermail へのリンク）と開始日
  - 発端となった問題提起・提案
  - 主要参加者と各人の主張・立場
  - 論点の対立軸（あれば）
  - 到達した合意または未解決のまま残った論点
- 書式: `[スレッド題名](https://lists.openid.net/pipermail/.../YYYY-Month/NNNNNN.html) - YYYY-MM-DD 開始`

#### 5. GitHub 上の議論（重点・新設）
- 対象月の主要 issues/PRs のうち、議論が活発だったもの（5 コメント以上）を **3〜5 本** ピックアップ
- 各 issue/PR について:
  - タイトルと番号、URL
  - 問題提起の内容
  - 主要参加者の主張・対立点
  - マージされた解決策または未解決の状態
- 書式: `[openid/<repo>#<num>](https://github.com/openid/<repo>/issues/<num>) - タイトル`

#### 6. 関連イベント
- 対象月に開催・関連した OIDF イベント、カンファレンス（OpenID Summit, IIW, EIC, TIIME 等）
- 対象 WG/CG メンバーの登壇・発表

#### 7. 今後の予定
- 対象月完了直後の視点で、当時予定されていた次月以降の動き

#### 8. 参考情報源（必須）
- 参照した一次情報すべてへのリンク
- 各リンクには簡単な説明を付ける
- ML スレッド URL、議事録 URL、GitHub issue/PR URL を含めること

#### 9. 補足: その後の動向（任意・推奨しない）
- 読者にとって特に有益な場合のみ追加。多用しないこと

### 6. フォーマット

`npx oxfmt docs/oidf/<wg-id>/<year>-<mm>.md --write` でフォーマット（失敗した場合はスキップしてよい）。

### 7. セルフレビュー

記事内容を確認し、以下を点検する。問題があれば修正する。ただし `reviewed: true` は設定しない。

- 対象月外の出来事を混入していないか
- 出典のないクレームを含めていないか（含まれていたら一次情報を再確認するか削除）
- WG/CG の正式名称が正確か
- §3 ミーティング・§4 ML・§5 GitHub の各節が**実質的な議論内容**を含んでいるか（単なる「議事録は確認できなかった」だけで終わっていないか、複数の一次情報で補完を試みたか）
- mermaid ダイアグラムを使った場合は構文が正しいか

## 活動が希薄な場合の最低ライン

静かな WG/CG（MODRNA / iGov / R&E / eKYC-IDA / Ecosystem Support / Australian Digital Trust 等）で対象月に**実質的な公開活動ゼロ**の場合:

- §3〜§5 を統合した「該当月に公開記録は確認できなかった」の 1 節のみで完結可
- ただし ML pipermail の対象月インデックス・議事録所在・GitHub の対象月 issues/PRs を**実際に確認した上で**「調査したが記録なし」と記述する（見ずに書かない）
- §8 参考情報源には、確認した URL（pipermail 月次インデックス等）を「対象月のスレッドなし」のコメント付きで列挙する

## mermaid ダイアグラムについて

WG の組織関係や仕様間の関係を示す場合に限り使用する。月次レポートでは必須ではない。

## 重要な制約

- **遡及執筆が主目的**: 既に終わった月を埋めることに重点を置く
- **対象月は完了済みのもののみ**: 進行中の月は対象外
- **執筆日と対象月は別物**: 本文の「執筆日」と、ファイル名の対象月を混同しない
- **`reviewed: true` を設定しない**: `/review` スキルのみが付与する
- **重複禁止**: 同じ WG × 月の記事が既に存在する場合は新規作成しない
- **一次情報主義**: 出典のないクレームを書かない。確認できないことは「確認できなかった」と明示する
- **議論の再構成主義**: 公式アナウンスの寄せ集めではなく、ML・議事録・GitHub から「どのような議論があったか」を本文の中心に据える
- **ツールアクセス失敗は本文に書かない**: 「503 エラーで取得できなかった」「404 のためアクセス不可」「認証エラー」等の執筆時のネットワーク障害メモは **記事本文に一切含めない**。読者にとって無関係な作業ログだからである。取得できなかった場合は、(1) リトライする、(2) 代替情報源（親インデックス、週次アーカイブ、GitHub issue 等）で補完する、(3) それでも情報がない場合は「該当月に公開された記録は確認できなかった」と**中立に**記述する（ツールエラーへの言及なし）。§8 参考情報源の URL も「(アクセス不可)」等の付記は付けない。**「本稿執筆時点で」「調査時点で」といった時刻限定の作業メモも同様に禁止**

## レジストリ更新時の手順

新しい WG/CG を追加する、または `since` 月を更新する場合:

1. 本ファイルの「対象 WG/CG レジストリ」表を更新
2. `claude/hooks/session-start.sh` の OIDF カバレッジ計算ロジック内の WG ID 配列と `since` 値を同期更新
3. `docs/.vitepress/config.mts` の `OIDF_WG_ORDER` 配列に WG ID と表示名を追加（サイドバー表示順を制御）
4. 新規 WG/CG の場合は `docs/oidf/<wg-id>/index.md` を作成
5. 上記変更を同じコミットに含める
