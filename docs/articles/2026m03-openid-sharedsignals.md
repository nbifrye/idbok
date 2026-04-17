---
title: "OpenID Foundation Shared Signals WG 活動レポート (2026年3月)"
---

# OpenID Foundation Shared Signals WG 活動レポート (2026年3月)

> 執筆日: 2026-04-17（2026年3月分の遡及執筆）

## 1. 概要

Shared Signals Working Group（以下 SSF WG）は、OpenID Foundation が主導するセキュリティシグナル共有のための標準化グループである。主要成果物として Shared Signals and Events Framework 1.0（SSF）、Continuous Access Evaluation Profile 1.0（CAEP）、RISC Profile 1.0 を 2025 年 9 月に Final 仕様として公開しており、2026 年 3 月時点ではコンフォーマンステストの整備とインターオペラビリティ仕様の Final 化に向けた活動が中心となっている。

3 月は 2 回の定例 WG コール（3 月 17 日・3 月 31 日）を開催し、CAEP における「ユーザー無効化」イベントの設計、インターオペラビリティ仕様の Final 化プロセス、Action Receipts 拡張、および Microsoft による SSF 採用計画が主要議題となった。

---

## 2. 公開された仕様・ドラフト改訂

3 月中に新たなドラフト版の公開やパブリックレビュー開始は確認できなかった。主要 3 仕様（SSF 1.0、CAEP 1.0、RISC Profile 1.0）はいずれも 2025 年 9 月 Final 公開後の実装フェーズにあり、コンフォーマンステストプログラムの整備が進行中である。

---

## 3. ミーティングと議論

### 定例 WG コール（2026-03-17）

**参加者（9 名）:** Atul Tulshibagwale（CrowdStrike、共同議長・エディタ）、Yair Sarig（Omnissa）、Mike Kiser（SailPoint、共同議長）、John Marchesini（Jamf）、Jen Schreiber（CrowdStrike）、Thomas Darimont（OIDF）、Sean O'Dell（CVS、共同議長）、Apoorva Deshpande（Okta）ほか

**主要議題と決定事項:**

#### CAEP における「ユーザー無効化」イベントの設計

「credential change」「account disabled」「user disabled」のどれが適切な標準化単位かについて議論が行われた。複数アカウント環境での複雑なユースケースを考慮した結果、`subject` フィールドで対象を適切に指定することで `account disabled` が各ユースケースに対応できるとの合意に至った。また、アカウント関連の将来イベントは CAEP ではなく RISC に収容するという方針が確認された。

この議論を通じて、イベント分類に関する基本原則が明文化された：

- **セッションに影響するイベント** → CAEP
- **アカウント管理** → SCIM
- **アカウントセキュリティ** → RISC

#### コンフォーマンステストの進捗

Thomas Darimont がテスト整備の遅れを認め、直近のフィードバックを反映することを確約した。SSF Transmitter の Push/Pull デリバリーに対応したテストはすでに運用中であり、Receiver テストが次フェーズの焦点となっている。

#### Microsoft による SSF 採用

Sean O'Dell より、Microsoft が ITDR（Intelligent Threat Detection and Response）プラットフォームに SSF のサポートを追加する計画であることが報告された。具体的なユースケースとして以下が挙げられた：

- Graph API 呼び出しを介さないセッション失効
- メッセージングアクセス制御

また、RSA Conference（4 月初旬予定）と重なるため翌週の定例コールをキャンセルする旨が確認された。

---

### 定例 WG コール（2026-03-31）

**参加者（9 名）:** Atul Tulshibagwale（CrowdStrike）、Yair Sarig（Omnissa）、Thomas Darimont（OIDF）、Jen Schreiber（CrowdStrike）、George Fletcher、Vatsal Gupta、Apoorva Deshpande（Okta）、Sachin Mamoru（DIAF Awardee）、Sean O'Dell（CVS Health）

**主要議題と決定事項:**

#### 共有ドライブの整備

WG のコラボレーションリソースを集約するための [OpenID Drive フォルダ](https://drive.google.com/drive/folders/1bmduAAKIKoWZmi-g6h3x5Ost5Jr1mrOr) を新設した。

#### インターオペラビリティ仕様の Final 化プロセス

インターオペラビリティドラフトを Final 仕様として提案するための要件として、**「Transmitter テストと Receiver テストをそれぞれ 2 実装が成功裏に通過すること」** が明示された。更新されたテストプランは Transmitter と Receiver を分離した構成となっており、Jen Schreiber が翌週以降でドラフトのレビューを担当することになった。Atul Tulshibagwale はコンフォーマンス認定の潜在ユーザーへの接触を担当する。

#### Action Receipts 拡張の議論

Action Receipts 拡張では「acknowledgement（受信確認）」がシグナルの受信を意味するのか、アクションの完了を意味するのかという解釈上の対立が議論された。合意点として、Action Receipts 拡張はベースライン仕様とは独立して動作する拡張であり、実装者が柔軟に実装できるという設計方針が確認された。

---

## 4. メーリングリストの主要スレッド

[openid-specs-risc 2026-March アーカイブ](https://lists.openid.net/pipermail/openid-specs-risc/2026-March/) を確認したところ、3 月 16 日週および 3 月 30 日週にメーリングリストの活動が確認できるが、個別スレッドの詳細な抽出は困難であった。WG の主要技術議論は定例コール（議事録が GitHub wiki に公開）と GitHub issue に集中していることが 3 月のアーカイブ構造からも示唆される。

---

## 5. GitHub 上の議論

### [openid/sharedsignals#322](https://github.com/openid/sharedsignals/issues/322) - Action Receipts in Shared Signals

- **オープン:** 2026-02-24（Sean O'Dell によって起票）
- **3 月に活発化:** 定例コール（3 月 17 日・3 月 31 日）でも継続的に取り上げられ、GitHub issue 上でも議論が更新された
- **問題提起:** Shared Signals のインフラ上で「レシーバーがシグナルを受信してアクションを取ったことをトランスミッターに通知する」仕組みの設計をどうするか
- **議論の軸:** レシートが「理解の確認」なのか「アクション完了の確認」なのかという解釈の違いが主な論点
- **現状:** 拡張がベースライン仕様から独立して動作するという方針が 3 月 31 日コールで合意され、引き続き議論継続中

3 月中に新たに作成された issue および Main ブランチへのマージ PR は確認できなかった。

---

## 6. 関連イベント

- **FOSDEM 2026**（2 月 1 日開催、直前月のコンテキスト）: Thomas Darimont が「An Introduction to the OpenID Shared Signals Framework」と題した発表を行い、リアルタイムセッション失効・資格情報漏洩シグナル・Keycloak における SSF 実装を紹介した。これを踏まえた実装コミュニティとの連携が 3 月の議論の背景にある。
- **RSA Conference 2026**（4 月初旬予定）: WG は RSA 期間中の定例コールをキャンセルする決定を 3 月 17 日コールで確認した。Microsoft による SSF 採用の文脈で、業界カンファレンスでの SSF の露出が期待されていた。

---

## 7. 今後の予定

3 月末時点（当時の視点）での予定事項：

- Jen Schreiber によるインターオペラビリティドラフト（更新版）のレビュー（4 月初旬）
- Atul Tulshibagwale によるコンフォーマンス認定ユーザー候補への接触
- RSA Conference 後の定例コール再開（4 月中旬以降）
- Microsoft ITDR プラットフォームへの SSF 統合に向けた技術調整の継続
- Transmitter/Receiver 分離構成のテストプランに基づく 2 実装ずつの実績積み上げ（Final 化条件を満たすため）

---

## 8. 参考情報源

- [WG Meeting Minutes 2026-03-17](https://github.com/openid/sharedsignals/wiki/WG%E2%80%90Meeting%E2%80%902026%E2%80%9003-17) — 3 月 17 日定例コール議事録
- [WG Meeting Minutes 2026-03-31](https://github.com/openid/sharedsignals/wiki/WG%E2%80%90Meeting%E2%80%902026%E2%80%9003-31) — 3 月 31 日定例コール議事録
- [openid-specs-risc 2026-March アーカイブ](https://lists.openid.net/pipermail/openid-specs-risc/2026-March/) — 対象月のメーリングリストアーカイブ（活動確認済み、詳細スレッド抽出は困難）
- [openid/sharedsignals リポジトリ](https://github.com/openid/sharedsignals) — 対象月に新規 issue・マージ PR なし
- [openid/sharedsignals#322 — Action Receipts in Shared Signals](https://github.com/openid/sharedsignals/issues/322) — 3 月に活発化した issue
- [Shared Signals WG 公式ページ](https://openid.net/wg/sharedsignals/)
- [SSF Conformance Testing](https://openid.net/certification/ssf_testing/) — コンフォーマンステストプログラム
- [Shared Signals Guide](https://sharedsignals.guide/) — 実装者向けガイド（Thomas Darimont が FOSDEM で参照）
- [FOSDEM 2026 — Introduction to Shared Signals Framework](https://fosdem.org/2026/schedule/event/ATMQVL-intro-to-shared-signals-framework/) — Thomas Darimont 発表（2 月 1 日）
