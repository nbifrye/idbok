---
title: "OpenID Foundation eKYC & IDA WG 活動レポート (2026年3月)"
---

# OpenID Foundation eKYC & IDA WG 活動レポート (2026年3月)

> **執筆日**: 2026-04-16（遡及執筆）
>
> 本記事は 2026年3月の活動を 2026-04-16 時点の視点で遡及的にまとめたものです。

## 1. 概要

**eKYC & Identity Assurance WG (eKYC-IDA WG)** は、OpenID Connect を拡張して本人確認済みクレームの標準的な伝達方法を定義する Working Group である。WG 議長は Mark Haine、Naohiro Fujie、Hodari McClain。毎週水曜 15:00 UTC に定例コールを開催し、成果物のホスティングには Bitbucket (https://bitbucket.org/openid/ekyc-ida) を利用している。

2026年3月は、**OpenID Connect Advanced Syntax for Claims (ASC) 1.0** 仕様の初 Implementer's Draft 推薦・公開レビュー開始、**NIST SP 1800-42（mDL活用ガイド）** の初期公開草案公開への OIDF の関与、および **OpenID Connect for Identity Assurance 1.0** の正誤表（Errata）推薦という3件の重要な動きがあった月である。

---

## 2. 公開された仕様・ドラフト改訂

### 2-1. OpenID Connect Advanced Syntax for Claims (ASC) 1.0 — 初 Implementer's Draft 推薦・公開レビュー開始

eKYC-IDA WG は 2026年3月に **OpenID Connect Advanced Syntax for Claims (ASC) 1.0** の **Draft -01** を公開し、同仕様を初の **Implementer's Draft** として推薦した。

| 項目             | 内容                               |
| ---------------- | ---------------------------------- |
| 仕様公開日       | 2026-03-06                         |
| 推薦 Draft       | Implementer's Draft（初版）        |
| 公開レビュー期間 | 2026-03-16 〜 2026-04-30（45日間） |
| 投票告知日       | 2026-04-24                         |
| 投票期間         | 2026-05-01 〜 2026-05-15           |

#### 仕様の目的

ASC 1.0 は OpenID Connect を拡張し、クレームの要求・受領における **データ最小化** を実現するための高度な構文を定義する。仕様は独立して実装可能な2つのコンポーネントで構成される。

**① Selective Abort and Omit (SAO)**

RP（Relying Party）は、特定クレームが利用不可の場合やユーザーが同意しない場合の OP（OpenID Provider）の挙動を事前に指定できる。JSON Pointer でターゲットクレームを指定し、トランザクションの中断（Abort）またはクレームの省略（Omit）のいずれかを選択できる。マッチングは単純な値比較・JSON Schema バリデーション・存在チェックに対応する。

**② Transformed Claims (TC)**

クレーム値に変換関数チェーンを適用した結果を返す仕組み。典型的なユースケースは年齢確認で、`birthdate` クレームを `years_ago` 関数で変換して実年齢を算出し、さらに `gte` 関数（greater-than-or-equal）で「18歳以上か否か」のブール値として返す。これにより生年月日を開示せずに年齢確認を完結させられる。

対応する変換関数として等値比較・大小比較・ハッシュ化・配列評価・正規表現マッチング・JSON オブジェクトアクセスなどが含まれる。

#### -00 から -01 への変更点

- 実行順序によって結果が非決定的になる race condition を解消するための構文修正
- 各種エディトリアル修正

### 2-2. OpenID Connect for Identity Assurance 1.0 — 正誤表（Errata Set 1）推薦

WG は 2026-03-30 に **OpenID Connect for Identity Assurance 1.0** の **First Errata Set** を承認用に推薦した。合わせて **OpenID Identity Assurance Schema Definition 1.0** の Errata も推薦された。

当初は単独のパブリックレビューとして開始予定だったが、2026-04-01 に両仕様を合算した合同パブリックレビューに移行・更新された。

| 項目                       | 内容                     |
| -------------------------- | ------------------------ |
| Errata 推薦日（単独）      | 2026-03-30               |
| 合同パブリックレビュー開始 | 2026-04-01               |
| 合同レビュー終了           | 2026-05-16（45日間）     |
| 投票告知                   | 2026-05-09               |
| 投票期間                   | 2026-05-17 〜 2026-05-31 |

Errata に含まれる具体的な技術的修正の詳細は公式アナウンスには記載がなく、仕様草案（Draft -17 incorporating Errata Set 1）の Appendix H（Document history）を参照する必要がある。Errata 版は `https://openid.bitbucket.io/ekyc/openid-connect-4-identity-assurance.html` で確認できる。

---

## 3. ミーティングと議論

eKYC-IDA WG は毎週水曜 15:00 UTC に定例コールを開催しており、2026年3月には 2026-03-04・2026-03-11・2026-03-18・2026-03-25 の4回が想定される。議事録は Bitbucket wiki（`https://bitbucket.org/openid/ekyc-ida/wiki/`）に公開されているが、2026年3月分の各会議ページは本記事執筆時点（2026-04-16）にアクセスが確認できなかった。

公開情報から推定される主要議題は以下の通り：

- **ASC 1.0 Implementer's Draft 推薦の準備**（3月初旬〜3月6日公開）
- **ASC 1.0 公開レビュー開始に向けた告知・手続き**（3月16日開始）
- **OpenID Connect for Identity Assurance 1.0 Errata 内容のレビューと推薦決定**（3月30日推薦）
- **NIST SP 1800-42 公開草案（3月18日公開）への対応方針検討**

---

## 4. メーリングリストの主要スレッド

メーリングリスト（`openid-specs-ekyc-ida@lists.openid.net`）の 2026年3月アーカイブ（`https://lists.openid.net/pipermail/openid-specs-ekyc-ida/2026-March/`）は存在が確認されているが、本記事執筆時点でアーカイブインデックスページへのアクセスができず（HTTP 404）、個別スレッドの内容を取得できなかった。

公開アナウンスの内容から、以下の議題がメーリングリストでも議論されていた可能性が高い：

- ASC 1.0 Draft -01 の技術的内容（race condition 修正、Transformed Claims の関数定義）
- OpenID Connect for Identity Assurance 1.0 Errata の具体的な修正内容確認
- NIST SP 1800-42 に対応する新 work item の方向性

---

## 5. GitHub 上の議論

eKYC-IDA WG の主な技術成果物は Bitbucket（`https://bitbucket.org/openid/ekyc-ida`）で管理されており、GitHub（`https://github.com/openid/ekyc-ida`）の活用状況は相対的に限られる。

2026年3月の GitHub リポジトリの issues / PR については、本記事執筆時点でのアクセスにより直接確認できなかった。

Bitbucket のイシュートラッカーでは、過去から継続している `#1194 eKYC eIDAS bridge` など、eIDAS（欧州デジタルID枠組み）との接続性に関する議論が引き続き進行中と見られる。

---

## 6. 関連イベント

### NIST SP 1800-42 初期公開草案の公表（2026-03-18）

NIST の National Cybersecurity Center of Excellence (NCCoE) は 2026-03-18 に **NIST SP 1800-42 "Digital Identities: Mobile Driver's License (mDL): Accelerating Development and Adoption of Digital Identity for Financial Institutions"** の初期公開草案を公表した。

本文書は金融機関が mDL を用いた顧客識別・オンボーディングプロセスを実装するための実践ガイドであり、以下を中核に置く：

- 深偽造（deepfake）・合成IDフロード・AI攻撃に対抗する暗号検証可能な ID エビデンスの活用
- NIST 800-63-4（IAL/AAL フレームワーク）との整合
- 機械可読な mDL エビデンスによるデジタルオンボーディング効率化
- BSA（Bank Secrecy Act）CIP（Customer Identification Program）要件への適合

OIDF は本プロジェクトに2年間参加しており、レポートには OpenID for Verifiable Presentations（OID4VP）および High Assurance Interoperability Profile（HAIP）が掲載された。パブリックコメント受付期間は 2026-05-08 まで。

この NIST 文書の公開が契機となり、eKYC-IDA WG は4月以降に **高保証 KYC 処理のための ID クレームと値の定義** を目指す新 work item を立ち上げることになる（2026-04-09 正式アナウンス）。

---

## 7. 今後の予定

2026年3月末〜4月以降に予定されていた主な動き（対象月完了直後の視点）：

- **ASC 1.0 公開レビュー**の継続（〜2026-04-30）
- **OpenID Connect for Identity Assurance 1.0 / Schema Definition 1.0 Errata 合同パブリックレビュー** の開始（2026-04-01〜2026-05-16）
- **NIST SP 1800-42** へのパブリックコメント提出（〜2026-05-08）
- 新 mDL work item の正式発足と Contribution Agreement 募集

---

## 8. 参考情報源

- [OpenID Connect Advanced Syntax for Claims (ASC) 1.0 — 公開レビュー告知](https://openid.net/public-review-period-for-proposed-implementers-draft-of-openid-connect-advanced-syntax-for-claims-1-0/) — 2026-03-16 開始の Implementer's Draft レビュー告知
- [OpenID Connect Advanced Syntax for Claims (ASC) 1.0 — Draft 01 仕様](https://openid.net/specs/openid-connect-advanced-syntax-for-claims-1_0-01.html) — 2026-03-06 公開の仕様本文
- [ASC 1.0 最新 Editor's Draft](https://openid.bitbucket.io/ekyc/openid-connect-advanced-syntax-for-claims.html) — Bitbucket で管理される作業中ドラフト
- [OpenID Connect for Identity Assurance 1.0 — Errata 公開レビュー告知（初版）](https://openid.net/public-review-period-for-errata-to-openid-connect-for-identity-assurance-1-0/) — 2026-03-30 推薦・当初の単独レビュー告知
- [OpenID Identity Assurance 仕様群 Errata — 合同公開レビュー告知](https://openid.net/public-review-period-of-proposed-errata-to-openid-identity-assurance-specifications/) — 2026-04-01 〜 2026-05-16 の合同レビュー
- [OpenID Connect for Identity Assurance 1.0 — Errata Set 1 組み込み Draft 17](https://openid.bitbucket.io/ekyc/openid-connect-4-identity-assurance.html) — Errata 内容が反映された作業用ドラフト
- [OIDF welcomes NIST SP 1800-42 and announces eKYC work item](https://openid.net/oidf-welcomes-nist-sp-1800-42-and-announces-ekyc-work-item/) — 2026-04-09 公開・NIST との連携と新 work item 告知
- [OpenID launches working group to ease KYC with mDLs — Biometric Update](https://www.biometricupdate.com/202604/openid-launches-working-group-to-ease-kyc-with-mdls) — 外部メディアによる同トピック報道
- [eKYC & IDA WG 公式ページ](https://openid.net/wg/ekyc-ida/) — WG 概要・仕様一覧
- [eKYC & IDA WG 仕様一覧](https://openid.net/wg/ekyc-ida/specifications/) — 管理仕様の一覧
- [openid-specs-ekyc-ida メーリングリスト アーカイブ](https://lists.openid.net/pipermail/openid-specs-ekyc-ida/) — 月次メーリングリストアーカイブ（2026年3月分は本記事執筆時点でアクセス不可）
- [Bitbucket openid/ekyc-ida リポジトリ](https://bitbucket.org/openid/ekyc-ida/) — 議事録・仕様ドラフトのホスティング先
