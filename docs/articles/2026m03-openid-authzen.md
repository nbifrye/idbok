---
title: "OpenID Foundation AuthZEN WG 活動レポート (2026年3月)"
---

# OpenID Foundation AuthZEN WG 活動レポート (2026年3月)

**執筆日: 2026-04-15**（2026年3月の活動を遡及してまとめたレポートです）

## 1. 概要

AuthZEN Working Group（WG）は、アプリケーション内外における認可クエリの標準 API 規格を策定する OpenID Foundation の WG である。PEP（Policy Enforcement Point）と PDP（Policy Decision Point）の間の通信プロトコルを Subject・Action・Resource・Context の JSON ベースの情報モデルで標準化することを目的とする。

2026年3月は、同 WG にとって重要な節目となった月である。直前（2026年1月）に Authorization API 1.0 が Final Specification として承認・公開されたことを受け、WG は仕様の次フェーズ（v1.1 / 義務仕様）の検討へと軸足を移した。また、Gartner IAM Summit London（3月9〜10日）において AuthZEN の企業向けセッションが実施され、エンタープライズ市場における採用機運が高まったことが対外的に示された月でもある。

月次活動の要点：

- Gartner IAM Summit London（3月9〜10日）で WG 共同議長が登壇、企業関係者への認知が進む
- 3月12日の WG ミーティングで「Authorization API 1.1 draft1」の仕様ファイル作成が決定
- PR #449「Feature/obligations」が 3月11日にオープンされ、義務（Obligations）機能の仕様起草が本格化
- Issue #456「Support for Indeterminate Decision」が提起され、応答値の拡張（不確定状態の表現）が議論入り
- PR #446 でスキーマ内の `id`/`title` フィールド誤りが修正・マージされた

## 2. 公開された仕様・ドラフト改訂

### Authorization API 1.0 Final Specification（背景）

2026年3月時点での WG の前提となる仕様状況として、Authorization API 1.0 は直前月までに Final Specification として確定している。

- **投票期間**: 2025年12月23日〜2026年1月6日
- **投票結果**: 承認 81、反対 1、棄権 25（投票参加 107 名 / 正会員 378 名 → 28.3%、クォーラム 20% を超過）
- **公式承認・公開**: 2026年1月12日

3月時点で新たなドラフト改訂の公式リリースはない。WG はこの Final 仕様を土台として、次バージョン（v1.1）への設計議論を開始した段階にある。

## 3. ミーティングと議論

### 2026年3月12日 WG ミーティング

- **開催日**: 2026年3月12日
- **参加者**: Atul Tulshibagwale（CrowdStrike）、Alex Babeanu（Indykite）、John Gren、John Jiang、Roland Baum、Edmund Jay、George Fletcher ほか
- **議事録**: [Meeting Notes 2026-03-12 - HackMD](https://hackmd.io/@oidf-wg-authzen/H1lVuHk5bl)

#### 主要議題と決定事項

**Authorization API 1.1 ドラフトの起動**

Final Specification が確定したことを受け、WG は次フェーズの仕様ファイルを `authorization-api-1_1.md`（"1.1 - draft1"）として新たに作成することを決定した。v1.1 の主要候補機能としては以下が挙げられた：

- Obligations（義務）サポート
- MCP/COAZ プロファイル
- XACML プロファイルとの整合

**Obligations 議論（George Fletcher ほか）**

Obligations（PDP が PEP に対して「この決定を許可するには MFA を実行せよ」のような付帯命令を返す機能）の仕様化について活発な議論が行われた。George Fletcher が「MFA と obligation の違いは何か」という問いを投げかけ、これに対し「DENY を ALLOW に変えるために PEP が追加アクションを取ることを PDP が通知する仕組み」という整理がなされた。

さらに AI ユースケースに関連して、ある PDP が別の PDP に obligation を通知するような「PDP チェーン」の可能性も議論された。

**MCP/COAZ プロファイル**

Model Context Protocol（MCP）との統合を見据えた COAZ プロファイルについて、まず AuthZEN フォーマットへのマッピングを確定させてからプロファイルを完成させる方針が確認された。

**認証・認定（Certification）プロセス**

認定プログラムのレベル・ティア命名について議論。IDP 統合や API ゲートウェイ PEP の認定プロセス標準化が課題として挙がった。

**今後のカンファレンス準備**

- EIC（European Identity Conference）での講演準備が議題に上がった
- Forrester との関係者エンゲージメントについても言及あり
- Identiverse でのセッション計画についても確認された

#### 未決・持ち越し事項

- COAZ 仕様の完成（"not ready yet" と確認）
- Obligations スペックの完成と PR #449 へのレビュー対応
- SDK 向けプロセス整備

## 4. メーリングリストの主要スレッド

2026年3月の openid-specs-authzen メーリングリストアーカイブ（`https://lists.openid.net/pipermail/openid-specs-authzen/2026-March/`）については、アクセス時に 503 エラーが発生し、直接取得できなかった。

検索可能な情報の範囲では、3月に特定の技術スレッドが公開されているという記録は確認できなかった。WG の主要な技術議論は HackMD 議事録および GitHub 上で行われており、ML は主に会議アジェンダ通知等の事務的用途が中心と推察される。

## 5. GitHub 上の議論

### PR #449 - Feature/obligations

[openid/authzen#449](https://github.com/openid/authzen/pull/449) - **Obligations サポートの仕様起草**（オープン中）

- **作成日**: 2026年3月11日
- **作成者**: baboulebou（Collaborator）
- **内容**: AuthZEN の応答コンテキストに Obligations サポートを追加する仕様の初稿。「Finalizing 1st draft for obligations」コミットを含み、v1.1 向けの新規仕様ファイルも含む。PDP が PEP に対して付帯命令（MFA 要求、段階的認証要求等）を伝達するための標準メカニズムを定義することを目的とする。
- **状況**: オープン中（29 コミット）。WG ミーティング（3月12日）でも議論されており、引き続き設計議論が継続中。

### Issue #456 - Support for Indeterminate Decision / Evaluation Status

[openid/authzen#456](https://github.com/openid/authzen/issues/456) - **不確定（Indeterminate）決定状態のサポート**（オープン中）

- **作成日**: 2026年3月19日
- **作成者**: vatsalgupta

**問題提起**: 現行仕様では認可応答が `"decision": true/false` の二値のみであるため、「ポリシーが評価されて拒否された」ケースと「属性取得失敗・外部リスクシグナル未取得等による評価不能」のケースを区別できない。

**提案**:

- **Option A**: `decision` フィールドに加えて `status` フィールドを追加（後方互換性を維持）
- **Option B**: `decision` の値域を拡張し "indeterminate" を追加（より表現力があるが破壊的変更）

**関連性**: XACML・OPA はすでに同様の状態区別を持っており、AuthZEN が XACML プロファイルの検討を始めた文脈でも整合性の観点から重要な論点となっている。

### PR #446 - Update id/title in evaluation request/response schema

[openid/authzen#446](https://github.com/openid/authzen/pull/446) - **スキーマのフィールド名修正**（マージ済）

- **作成者**: Ronald Petty（Go 実装の型付け強化中に誤りを発見）
- **内容**: Evaluation Request/Response スキーマの `id` および `title` フィールドが誤った値になっていた点を修正
- **レビュー**: Tulshi が 3月12日に承認
- **マージ**: Alex Olivier が 3月19日にマージ

## 6. 関連イベント

### Gartner Identity & Access Management Summit 2026 London（3月9〜10日）

Gartner IAM Summit London 2026 が 3月9〜10日にロンドンで開催され、AuthZEN WG から共同議長の Atul Tulshibagwale、Alex Olivier、David Brossard が参加した。

**セッション内容**:

1. **Standards and Architecture セッション**（Gartner アナリスト Erik Wahlström 氏とともに）: アイデンティティ標準が将来的な IAM アーキテクチャを支える方法を解説。

2. **Authorization-Focused セッション**（Gartner アナリスト Homan Farahmand 氏とともに）: AuthZEN の仕様アップデートと相互運用性デモンストレーションを実施。David Brossard、Homan Farahmand、Alex Olivier による発表（3月10日 15:45〜16:15 GMT）。

**観察された変化**: 前年（2025年）が「これは何か（what is this）」フェーズだったのに対し、2026年の登壇者・参加者の関心は「どう実装するか（how do we implement it）」という具体的な実装計画へと移行していた。

> 「Gartner IAM London での会話は、私たちがしばらく前から見てきたことを確認するものでした。企業は認可（authorization）に動く準備ができており、AuthZEN はそのための標準を提供します」— David Brossard（AuthZEN WG 共同議長）

また注目すべき点として、Gartner の独立したアナリスト 3 人が互いに無関係なセッションで AuthZEN に言及したことが、業界のアナリストコミュニティによる認知を示す出来事として WG から紹介された。

この Gartner IAM London 参加についての OIDF 公式記事「AuthZEN: From 'what is this' to 'how do we implement it'」は 2026年3月24日に公開された。

## 7. 今後の予定（2026年3月末時点の視点）

2026年3月完了時点での視点における当時予定されていた動き：

- **Authorization API 1.1 の起草**: 義務（Obligations）仕様の具体化、MCP/COAZ プロファイルの完成
- **EIC（European Identity Conference）**: 2026年春に AuthZEN 関連セッションが予定されていた
- **Forrester エンゲージメント**: アナリストへの働きかけが進行中
- **Identiverse 2026**: WG のセッション計画が進行中
- **認定プログラムの整備**: 認定レベル・ティアの命名を含む認定プロセスの標準化
- **Issue #456「不確定状態」**: 2値応答の拡張について WG 内での議論が見込まれる

## 8. 参考情報源

- [OIDF AuthZEN WG - HackMD](https://hackmd.io/@oidf-wg-authzen) - HackMD 上の WG 文書コレクション
- [Meeting Notes 2026-03-12 - HackMD](https://hackmd.io/@oidf-wg-authzen/H1lVuHk5bl) - 2026年3月12日 WG ミーティング議事録
- [AuthZEN Working Group - OpenID Foundation](https://openid.net/wg/authzen/) - WG 公式ページ
- [AuthZEN Specifications - OpenID Foundation](https://openid.net/wg/authzen/specifications/) - 仕様一覧
- [Authorization API 1.0 Final Specification Approved - OpenID Foundation](https://openid.net/authorization-api-1-0-final-specification-approved/) - Final Specification 承認アナウンス（2026年1月）
- [Notice of Vote to Approve Proposed Authorization API 1.0 Final Specification](https://openid.net/notice-of-vote-to-approve-proposed-authorization-api-1-final-specification/) - 投票通知
- [AuthZEN: From 'what is this' to 'how do we implement it'](https://openid.net/authzen-from-what-is-this-to-how-do-we-implement-it/) - Gartner IAM London 参加報告（2026年3月24日）
- [openid/authzen GitHub リポジトリ](https://github.com/openid/authzen) - WG の仕様・相互運用実装リポジトリ
- [PR #449: Feature/obligations](https://github.com/openid/authzen/pull/449) - Obligations 機能 PR
- [PR #446: Update id/title in evaluation request/response schema](https://github.com/openid/authzen/pull/446) - スキーマ修正 PR
- [Issue #456: Support for Indeterminate Decision / Evaluation Status](https://github.com/openid/authzen/issues/456) - 不確定状態サポート提案
- [Authorization API 1.0 仕様（openid.github.io）](https://openid.github.io/authzen/) - 承認済み最終仕様
- [openid-specs-authzen メーリングリスト アーカイブ](https://lists.openid.net/pipermail/openid-specs-authzen/) - ML アーカイブ（2026年3月分は取得不可）
- [Gartner IAM Summit 2026 London - AuthZEN セッション詳細](https://www.gartner.com/en/conferences/emea/identity-access-management-uk/sessions/detail/3792722-Executive-Story-AuthZEN-the-OpenID-Connect-of-Authorization) - Gartner 公式セッション情報
