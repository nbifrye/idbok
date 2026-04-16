---
title: "OpenID Foundation Digital Credentials Protocols WG 活動レポート (2026年3月)"
reviewed: true
---

# OpenID Foundation Digital Credentials Protocols WG 活動レポート (2026年3月)

> **執筆日**: 2026-04-16
> この記事は 2026年3月 の活動を遡及的にまとめたレポートです。

## 1. 概要

Digital Credentials Protocols WG（DCP WG）は、OpenID4VC の仕様群（OpenID for Verifiable Credential Issuance / OpenID for Verifiable Presentations / High Assurance Interoperability Profile）を開発する OpenID Foundation のワーキンググループである。Torsten Lodderstedt（個人）、Kristina Yasuda（Microsoft）、Daniel Fett（Authlete）らがコア編集者を務め、欧州 EUDIW をはじめ 38 カ国以上の政府・業界が採用している。

2026年3月は、**2月 26 日の自己認証（Self-Certification）プログラム正式開始から約1カ月後**という時期にあたる。WG は 1.0 の正式リリース後に顕在化した errata の収集・整理と、次世代バージョン 1.1 向けの機能強化議論を並行して進めた月だった。

主なトピックは以下のとおり:

- OpenID4VP への新セキュリティ考慮（VP Token の誤用防止・nonce エントロピー明示化・セッション固定化対策）
- OpenID4VCI における Interactive Authorization Endpoint（IAE）の設計継続・DPoP 連携・proof type 優先度
- HAIP の 1.0/1.1 リポジトリ分割と、pre-authorized code flow の扱いをめぐる仕様上の不明点の浮上
- errata 公開前に整合を取るべき依存仕様（client attestation draft など）の洗い出し

---

## 2. 公開された仕様・ドラフト改訂

2026年3月に新たな Final 版・Implementer's Draft の公開は確認できなかった。各仕様は 2026年2月末に 1.0 の正式公開 / 自己認証開始を完了しており、3月は **1.0 errata および 1.1 候補の draft 作業**が主軸となった。

### HAIP リポジトリの 1.0/1.1 分割

OpenID4VC-HAIP リポジトリでは、PR [#361](https://github.com/openid/OpenID4VC-HAIP/pull/361)「chore: create 1.0 and 1.1 folders」が 3月19日にマージされた。Sakurann が作成し、c2bo・jogu がレビューしてマージしたこの PR は、ファイル名の typo 修正と CI ワークフロー更新を含む。1.0 と 1.1 を独立したディレクトリに分けることで、errata（1.0 系）と次世代機能追加（1.1 系）の作業を並行して管理できる体制を整えた。

---

## 3. ミーティングと議論

DCP WG のミーティング議事録はメーリングリストへの投稿として公開されているが、2026年3月の ML アーカイブ（pipermail）は本執筆時点でサーバーエラー（503）により直接取得できなかった。以下は GitHub 上の issue・PR から再構成した議論を中心に記述する。

### errata 整備とバージョン整合の議論

3月中旬から下旬にかけて、jogu（spec editor）が三つのリポジトリ（OpenID4VP、OpenID4VCI、HAIP）に同主旨の issue を開いた。「1.0 errata を公開する前、または 1.1 を公開する前に、normative reference として含まれる pre-final の依存仕様の整合を確認すること」を求める内容である（[OpenID4VP#710](https://github.com/openid/OpenID4VP/issues/710)、[OpenID4VCI#724](https://github.com/openid/OpenID4VCI/issues/724)、[HAIP#363](https://github.com/openid/OpenID4VC-HAIP/issues/363)）。

特に OpenID4VCI#724 では、1.0 errata と 1.1 ドラフトの本文が client attestation draft-07 を参照している一方で、normative reference には draft-08 が記載されており矛盾していると指摘された。「draft-08 には breaking changes が含まれる可能性があり、1.x 系での採用が安全かどうか確認が必要」とされ、この問題が解決されるまで errata 公開を保留する方向が示唆された。

---

## 4. メーリングリストの主要スレッド

2026年3月の ML アーカイブ（https://lists.openid.net/pipermail/openid-specs-digital-credentials-protocols/2026-March/）はサーバーエラー（503/404）により取得できなかった。DCP WG では従来から GitHub issue と併用してミーティング議事録を ML に投稿しているが、スレッドの詳細は確認できなかった。

---

## 5. GitHub 上の議論

3月は OpenID4VP・OpenID4VCI・HAIP の三リポジトリで合計 20 件超の issue/PR が作成・更新された。以下に技術的に重要度の高いものをピックアップする。

### 5-1. VP Token をアクセストークンとして使用しないよう明示（OpenID4VP PR#702）

[openid/OpenID4VP#702](https://github.com/openid/OpenID4VP/pull/702)「Add a security consideration not to use VP Token as Access Token」が 3月12日にマージされた（7コメント）。

Vanderkast が起票した issue [#701](https://github.com/openid/OpenID4VP/issues/701) を受け、verifier が VP Token をアクセストークンとして扱ってはならない旨のセキュリティ考慮事項を新設した PR である。当初 Vanderkast は既存実装への後方互換性を考慮して "SHOULD NOT" と表現していたが、レビューで ve7jtb が "MUST" にすべきと提案し、awoie も同調した。最終的には Resource Server への言及を削除してスコープを整理した上で、より強い禁止表現を採用してマージに至った。

VP Token と Access Token の混同は、本来異なる目的（提示証明 vs. リソースアクセス許可）の要素を混在させることで認可境界を曖昧にするセキュリティリスクであり、自己認証プログラム開始後に実装者から問い合わせが増えたことが issue 起票の背景にあったと推測される。

### 5-2. nonce エントロピーの最低要件明示（OpenID4VP #707）

[openid/OpenID4VP#707](https://github.com/openid/OpenID4VP/issues/707)「Be more precise on OpenID4VP nonce entropy」が Paul Bastian により 3月16日に開かれた（マイルストーン: Final 1.1）。

現行仕様では nonce について「十分なエントロピーを持つ暗号乱数を使用すること」と定めているが、`state` パラメータが「最低 128 ビット」と明示しているのとは対照的に具体的な数値を欠いていた。Bastian は `state` と同等の「少なくとも 128 ビット」という記述を nonce にも追加することを提案した。実装者が独自に解釈できる余地を減らすセキュリティ仕様の精緻化として、1.1 マイルストーンに割り当てられた。

### 5-3. direct_post での Verifier セッション紐付けガイダンス（OpenID4VP #708）

[openid/OpenID4VP#708](https://github.com/openid/OpenID4VP/issues/708)「Better guidance how the Verifier matches the incoming direct_post request with the user session」が Paul Bastian により 3月17日に提起された。

`state` パラメータは Section 5.3 が定める条件下では REQUIRED だが、それ以外の場合は OPTIONAL にすぎない。一方 Section 14.3.2 では「Verifier は受信した `state` が直近の認可リクエストと対応することを確認することで、意図しないリクエストから Response URI を保護すべき（SHOULD）」と述べている。Bastian はこの乖離を解消するため、条件外の場合でも `state` の使用を "RECOMMENDED" とするよう提案した。

### 5-4. IAE と First-Party Apps 仕様の関係再考（OpenID4VCI #719）

[openid/OpenID4VCI#719](https://github.com/openid/OpenID4VCI/issues/719)「revisiting building IAE on top of first party apps draft」が jogu により 3月16日に開かれた。

Interactive Authorization Endpoint（IAE）は OpenID4VCI 1.1 の目玉機能候補であり、IETF の First-Party Apps ドラフトをベースに設計する案が検討されてきた。3月時点で同ドラフトが WGLC（Working Group Last Call）へ進む段階となり、かつドラフト本文が「本仕様を非 first-party ユースケースへ拡張するプロファイルは、サードパーティリスクへの対処方法を記述しなければならない（MUST）」という条文を追加したことで、IAE が非 first-party シナリオへ拡張する際の明示的な要件が整ったと jogu は指摘した。これにより IAE の設計再検討が正式にアジェンダに上がった。

### 5-5. DPoP と auth_session の紐付け（OpenID4VCI #718）

[openid/OpenID4VCI#718](https://github.com/openid/OpenID4VCI/issues/718)「binding auth_session to dpop」が jogu により同日（3月16日）に開かれた（ラベル: first-party?, iae）。

First-Party Apps ドラフトが auth_session を DPoP に紐付けることを推奨しており、OpenID4VCI も同様の保護機構を採用すること、特に HAIP においては必須化することを検討すべきと提案した。DPoP との紐付けは認証セッションの不正転送を防ぐ OAuth セキュリティベストプラクティスであり、IAE を含む高信頼シナリオでの採用が議論の焦点となった。

### 5-6. TLS 証明書サムプリントのメタデータ署名への組み込み（OpenID4VCI #726）

[openid/OpenID4VCI#726](https://github.com/openid/OpenID4VCI/issues/726)「Option to include TLS certificate thumbprint/hash in signed metadata for improved MitM protection」が Paul Bastian により 3月24日に提起された。

OpenID4VP では RP 証明書で認可リクエストを署名することで Web PKI への依存を低減できるが、OpenID4VCI の signed metadata は TLS セッションとの暗号的結合がなく MitM 保護が不十分と Bastian は指摘した。TLS 証明書のハッシュ／サムプリントを signed metadata に含めれば、TLS セッションをアプリケーション層で証明でき、かつ issuer が TLS 証明書をローテートする際は signed metadata を更新するだけで対応できるメリットもあると述べた。

### 5-7. HAIP における pre-authorized code flow の扱い（HAIP #364）

[openid/OpenID4VC-HAIP#364](https://github.com/openid/OpenID4VC-HAIP/issues/364)「Was HAIP meant to disallow pre-authorized code flow?」が jogu により 3月28日に提起された（マイルストーン: 1.1）。

HAIP の議論の中で pre-authorized code flow のセキュリティ上の制限が話し合われた経緯があるにも関わらず、仕様本文にはそれを明示的に禁止する文言が見当たらないと jogu が気づいた。仕様の現行テキストは authorization code flow の両端サポートを「要求する」に留まり、pre-authorized flow を使うことを妨げていない。高信頼プロファイルとして意図した挙動なのかが不明確であり、1.1 マイルストーンで明確化が必要とされた。

---

## 6. 関連イベント

- **自己認証プログラム稼働中（2026年2月26日〜）**: OpenID4VP 1.0・OpenID4VCI 1.0・HAIP 1.0 の three specifications に対する自己認証が 2月末に開始された。3月は実装者が自己認証テストを利用し始めた最初の月であり、実装上の疑問点を元にした issue が複数リポジトリに投稿されたと見られる。

- **IIW Spring 2026（2026年4月28〜30日、Mountain View）の準備**: 毎年春に開催される Internet Identity Workshop（IIW）の前日（4月27日）に OIDF ハイブリッドワークショップが予定されていた。3月は各 WG がこのイベントへの議題整理を行う時期でもある。

---

## 7. 今後の予定

2026年3月末時点での展望:

- **OpenID4VP / OpenID4VCI 1.0 errata の公開**: client attestation draft をはじめとする依存仕様との整合を確認した後に進める予定。
- **OpenID4VCI 1.1 milestone の作業継続**: IAE（Interactive Authorization Endpoint）の設計、DPoP 連携、proof type 優先度指定などが継続議題。
- **HAIP 1.1 draft の開始**: 新フォルダ体制のもと 1.1 向け変更を取り込む作業が始まる見込み。
- **Q2 2026 アクリデーション（公認）サービス開始**: 自己認証に続き、OIDF によるサードパーティ公認サービスの提供開始が予定されていた。

---

## 8. 参考情報源

- [openid/OpenID4VP — Issues（2026年3月作成分）](https://github.com/openid/OpenID4VP/issues?q=is%3Aissue+created%3A2026-03-01..2026-03-31) — 3月に作成された issue 一覧
- [openid/OpenID4VP PR#702 — Add a security consideration not to use VP Token as Access Token](https://github.com/openid/OpenID4VP/pull/702) — 3月12日マージ・7コメント
- [openid/OpenID4VP #707 — Be more precise on OpenID4VP nonce entropy](https://github.com/openid/OpenID4VP/issues/707) — nonce エントロピー明示化提案
- [openid/OpenID4VP #708 — Better guidance for Verifier session matching](https://github.com/openid/OpenID4VP/issues/708) — direct_post セッション紐付けガイダンス
- [openid/OpenID4VCI — Issues（2026年3月作成分）](https://github.com/openid/OpenID4VCI/issues?q=is%3Aissue+created%3A2026-03-01..2026-03-31) — 3月に作成された issue 一覧
- [openid/OpenID4VCI #718 — binding auth_session to dpop](https://github.com/openid/OpenID4VCI/issues/718) — DPoP 連携提案
- [openid/OpenID4VCI #719 — revisiting building IAE on top of first party apps draft](https://github.com/openid/OpenID4VCI/issues/719) — IAE と First-Party Apps 仕様の関係
- [openid/OpenID4VCI #724 — client attestation & other pre-final specs](https://github.com/openid/OpenID4VCI/issues/724) — errata 公開前の依存仕様整合
- [openid/OpenID4VCI #725 — Allow issuers to specify proof type preference](https://github.com/openid/OpenID4VCI/issues/725) — proof type 優先度指定提案
- [openid/OpenID4VCI #726 — TLS certificate thumbprint in signed metadata](https://github.com/openid/OpenID4VCI/issues/726) — MitM 保護強化提案
- [openid/OpenID4VC-HAIP PR#361 — chore: create 1.0 and 1.1 folders](https://github.com/openid/OpenID4VC-HAIP/pull/361) — 3月19日マージ・バージョン分割
- [openid/OpenID4VC-HAIP #364 — Was HAIP meant to disallow pre-authorized code flow?](https://github.com/openid/OpenID4VC-HAIP/issues/364) — pre-authorized flow の扱い
- [openid/OpenID4VC-HAIP — Issues（2026年3月作成分）](https://github.com/openid/OpenID4VC-HAIP/issues?q=is%3Aissue+created%3A2026-03-01..2026-03-31) — 3月に作成された issue 一覧
- [OpenID for Verifiable Credential self-certification to launch Feb 2026](https://openid.net/openid-for-verifiable-credential-self-certification-to-launch-feb-2026/) — 自己認証プログラム開始アナウンス（2025年12月18日）
- [OpenID Foundation launches EUDIW resource hub](https://openid.net/openid-foundation-launches-eudiw-resource-hub/) — EUDIW リソースハブ（2025年12月11日）
- [DCP WG メーリングリスト アーカイブ 2026年3月](https://lists.openid.net/pipermail/openid-specs-digital-credentials-protocols/2026-March/) — 本執筆時点でサーバーエラー（503）により内容未確認
