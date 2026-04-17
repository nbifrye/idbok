---
title: "OpenID Foundation Australian Digital Trust CG 活動レポート (2026年2月)"
reviewed: true
---

# OpenID Foundation Australian Digital Trust CG 活動レポート (2026年2月)

> **執筆日**: 2026-04-17（遡及執筆）
>
> 本記事は 2026年2月 の活動を対象とした遡及レポートです。

## 1. 概要

Australian Digital Trust Community Group（ADT CG）は、OpenID Foundation（OIDF）の傘下で運営されるコミュニティグループであり、オーストラリアにおけるデジタルアイデンティティおよびトラスト・エコシステムに関する専門家が協働するための中立的なプラットフォームを提供している。グループはDima Postnikov、Victoria Richardson、Dave Hyland、Brad Carr、Olaf Greweの5名が共同議長を務め、隔週月曜日（オーストラリア東部標準時 17:00）にビデオ会議を開催している。

2026年2月は、2024年12月1日に施行されたオーストラリアの**Digital ID Act 2024**の実装が本格化する時期にあたり、ADT CG では国際的なトラストフレームワークとの相互運用性分析および政府・民間エコシステムへの対応が主な関心事となっていた。

月中の主な活動は以下のとおり：

- メーリングリストへのミーティング告知（計3通）
- 主要CGミーティング（2月9日頃）および Trust Framework Analysis サブグループ会議（2月16日）の開催
- GitHubリポジトリへのメンテナンス PR 2件マージ（2月23日）

## 2. 公開された仕様・ドラフト改訂

2026年2月に ADT CG から公開された仕様ドラフトや正式文書は確認できなかった。

なお、同時期に OIDF 全体では OpenID for Verifiable Presentations（OID4VP）、OpenID for Verifiable Credential Issuance（OID4VCI）および High Assurance Interoperability Profile（HAIP）の自己認証プログラムが 2026年2月に開始されており、ADT CG の参加メンバーも関心を寄せていた可能性がある。

## 3. ミーティングと議論

### 2月9日頃：ADT Community Group 定例ミーティング

2026年2月8日（日）に David Hyland から「ADT Community Group Meeting」と題したメーリングリストへの告知メールが送付されており、翌2月9日（月）に定例の全体ミーティングが開催されたと推定される。告知メールには HackMD 上のアジェンダリンクが含まれていたが、当該ページの公開内容は現時点では確認できなかった。

ADT CG は隔週月曜日に開催するスケジュールであり、参加者は事前に参加同意書（Participation Agreement）への署名が求められる。

### 2月16日（月）：ADT CG Ecosystems Working Group / Trust Framework Analysis

2月16日（月）に David Hyland から「ADT CG Ecosystems Working Group」と題した告知メールが送信された（HackMD アジェンダ: [https://hackmd.io/@adtcg/HyYCc7e_We](https://hackmd.io/@adtcg/HyYCc7e_We)）。HackMD には「Trust Framework Analysis」サブグループの議事録が掲載されており、以下の内容が記録されている。

**サブグループの目的**

オーストラリアのデジタルIDフレームワークと国際的な標準・スキームとの相互運用性の確保。比較対象として以下のフレームワークが取り上げられている：

- eIDAS 2（EU）
- NIST SP 800-63（米国）
- UK DIATF（英国）
- DIACC（カナダ）
- Singpass（シンガポール）
- BankID（スウェーデン）

**2月会議での新たな焦点：日本の標準化**

この月の会議では、日本のデジタルアイデンティティ標準（日本デジタル庁の取り組み等）との技術的整合性を特定するためのマッピング作業が新たに議題として取り上げられた。日本を含む38以上の国・地域が OIDF 仕様の実装を進めており、日本のデジタル庁との相互運用性分析は ADT CG にとって重要な国際展開の一つとなっている。

**主要リソース**

- Google Sheets によるフレームワーク比較シート
- ユースケース文書
- 過去の報告書:「Survey on Trust Framework Policy Characteristics」および「Digital ID DNA – Interoperability Across Trust Frameworks」

**会議の運営要件**

- 貢献を記録するための参加同意書への署名
- Slack チャンネル（`#cg-australian-digital-trust`）への参加
- メーリングリストへの登録

## 4. メーリングリストの主要スレッド

2026年2月にメーリングリスト（openid-au-digital-trust）に投稿されたメッセージは確認できた週単位では計3通であり、いずれもミーティング告知である。技術的な議論や意見交換を含む長いスレッドは確認されなかった。

| 件名                            | 送信者       | 日付       | 内容                                                       |
| ------------------------------- | ------------ | ---------- | ---------------------------------------------------------- |
| ADT Community Group Meeting     | David Hyland | 2026-02-08 | 2月9日定例ミーティングの告知（HackMDアジェンダリンク付き） |
| ADT CG Ecosystems Working Group | David Hyland | 2026-02-16 | Trust Framework Analysisサブグループ会議の告知             |

なお、「Week of Mon 23 February 2026」の週のアーカイブに収録されていた「Trust Frameworks Subgroup」の告知メールは 2026年3月1日（日）付の送信であり、2月分の活動ではなく3月1日の会議案内であることが確認された。

## 5. GitHub 上の議論

2026年2月の GitHub リポジトリ（[openid/cg-australian-digital-trust](https://github.com/openid/cg-australian-digital-trust)）での主要な活動は以下のとおり。

### PR #9 – Fix links in README for meeting minutes and topics

- **URL**: [openid/cg-australian-digital-trust#9](https://github.com/openid/cg-australian-digital-trust/pull/9)
- **作成日**: 2026年1月9日
- **マージ日**: 2026年2月23日
- **作成者**: nextalias、マージ者: dphhyland

議事録や各トピック文書へのリンクが壊れていた README の修正。nextalias が 1月9日に PR を提出後、2月11日と2月23日の2回にわたって承認を依頼し、dphhyland が同日マージした。参加者は2名のみであり、技術的な対立や議論は発生していない。

### PR #8 – Rename 2025-11-17 to 2025-11-17.md

- **URL**: [openid/cg-australian-digital-trust#8](https://github.com/openid/cg-australian-digital-trust/pull/8)
- **マージ日**: 2026年2月23日
- **作成者**: nextalias、マージ者: dphhyland

ファイル名に `.md` 拡張子を追加することでファイルタイプ検出を改善するメンテナンス変更。同日に PR #9 とともにマージされた。

### Issues

2026年2月に新規作成されたissueおよびコメントが追加されたissueはいずれも確認できなかった（GitHub の検索結果が「No results」を返した）。

## 6. 関連イベント

### Australian Digital ID System の実装状況

2026年2月時点で、Australia の Digital ID Act 2024（2024年12月1日施行）に基づく Australian Government Digital ID System（AGDIS）は公的機関向け参加申請フェーズにあった。ACCC（Australian Competition and Consumer Commission）が Digital ID Regulator として機能しており、民間セクターへの拡大は Act 施行から2年以内（2026年12月まで）に予定されていた。

ADT CG はこうした政策的背景のもと、オーストラリアの規制枠組みと国際標準との整合性確保において重要な役割を担っていた。

### OpenID Foundation の全体動向

2026年2月、OIDF は OID4VP、OID4VCI および HAIP の3仕様について自己認証プログラム（Self-Certification Program）を開始した。オーストラリアを含む38以上の国・地域が OIDF 仕様の実装を進めており、ADT CG の国際フレームワーク分析はこうした潮流と直接連動する活動である。

## 7. 今後の予定

2026年2月末時点で予定されていた今後の動き：

- **Trust Framework Analysis**: 2026年3月2日（月）に次回サブグループ会議を予定
- **日本との相互運用マッピング**: 2月会議で取り上げられた日本デジタルアイデンティティ標準との技術整合性分析の継続
- **民間セクター対応**: 2026年12月に予定される AGDIS の民間セクター拡大に向けた標準化支援作業の加速

## 8. 参考情報源

- [OpenID Au Digital Trust メーリングリスト – Week of Mon 2026-02-02](https://lists.openid.net/pipermail/openid-au-digital-trust/Week-of-Mon-20260202/)（ADT Community Group Meeting 告知、スレッド1件）
- [OpenID Au Digital Trust メーリングリスト – Week of Mon 2026-02-16](https://lists.openid.net/pipermail/openid-au-digital-trust/Week-of-Mon-20260216/)（ADT CG Ecosystems Working Group 告知、スレッド1件）
- [OpenID Au Digital Trust メーリングリスト – Week of Mon 2026-02-23](https://lists.openid.net/pipermail/openid-au-digital-trust/Week-of-Mon-20260223/)（Trust Frameworks Subgroup、2026-03-01送信の告知1件）
- [ADT CG HackMD – Trust Framework Analysis 2026-02-16議事録](https://hackmd.io/@adtcg/HyYCc7e_We)
- [openid/cg-australian-digital-trust – PR #9](https://github.com/openid/cg-australian-digital-trust/pull/9)（README リンク修正、2026-02-23マージ）
- [openid/cg-australian-digital-trust – PR #8](https://github.com/openid/cg-australian-digital-trust/pull/8)（ファイル名修正、2026-02-23マージ）
- [openid/cg-australian-digital-trust – GitHub リポジトリ](https://github.com/openid/cg-australian-digital-trust)
- [Australian Digital Trust CG – OpenID Foundation](https://openid.net/cg/australian-digital-trust-community-group/)
- [Digital ID Act 2024 – digitalidsystem.gov.au](https://www.digitalidsystem.gov.au/what-is-digital-id/digital-id-act-2024)
- [OIDF Self-Certification Program for OID4VP/OID4VCI/HAIP – openid.net](https://openid.net/openid-for-verifiable-credential-self-certification-to-launch-feb-2026/)
