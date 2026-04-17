---
title: "OpenID Foundation AB/Connect WG 活動レポート (2026年2月)"
---

# OpenID Foundation AB/Connect WG 活動レポート (2026年2月)

> **執筆日: 2026-04-17**。本記事は 2026年2月の活動を遡及的にまとめたレポートです。

## 1. 概要

AB/Connect Working Group（正式名称: Artifact Binding / Connect Working Group）は、OpenID Connect 仕様群を中心に開発・維持する OpenID Foundation の中核的な Working Group である。OAuth 2.0 上に構築された軽量アイデンティティプロトコルとして世界中で広く採用されている OpenID Connect のほか、OpenID Federation、OpenID Connect RP Metadata Choices など多数の周辺仕様の策定を担う。

2026年2月は、AB/Connect WG にとって**歴史的な節目の月**であった。2016年から約10年にわたり開発が続けられてきた **OpenID Federation 1.0 が Final Specification として正式承認**され、その直後に後継版の **OpenID Federation 1.1 公開レビューが開始**された。また、TIIME 2026（アムステルダム）では 9か国 12名の実装者が集まり、OpenID Federation の相互接続性を実証するイベントが開催された。

対象月の主要トピック:

- OpenID Federation 1.0 Final Specification 承認（2月17日）
- OpenID Federation 1.1 / OpenID Federation for OpenID Connect 1.1 公開レビュー開始（2月17日）
- TIIME 2026 相互接続性テスト（2月13日、アムステルダム）
- OpenID Connect Relying Party Metadata Choices 1.0 投票通知（2月25日）

## 2. 公開された仕様・ドラフト改訂

### OpenID Federation 1.0 Final Specification 承認

2026年2月17日、OpenID Foundation 会員投票により **OpenID Federation 1.0 が Final Specification として承認**された。投票期間は 2月3日〜17日（2025年11月に開始した 60日間の公開レビュー期間完了後）。

投票結果:

| 項目       | 数値                         |
| ---------- | ---------------------------- |
| 承認票     | 85                           |
| 反対票     | 0                            |
| 棄権票     | 20                           |
| 総投票数   | 105                          |
| 有効会員数 | 425                          |
| 投票率     | 24.7%（クォーラム 20% 超過） |

OpenID Federation 1.0 は当初「OpenID Connect Federation 1.0」として 2016年の TNC カンファレンスで Roland Hedberg が提唱したことに端を発する。Lucy Lynch が Hedberg に対し「eduGAIN アイデンティティフェデレーションを OpenID Connect の世界へ持ち込む」課題を投げかけたのが出発点とされる。その後、開発が進む中でコアのトラスト確立フレームワークが OpenID Connect 以外のプロトコルにも適用可能であると判明し、仕様名から「Connect」が除かれて現在の「OpenID Federation」となった。

主要貢献者:

- **Roland Hedberg**（主要発明者・原著者）
- Andreas Åkre Solberg
- John Bradley
- Giuseppe De Marco
- Vladimir Dzhuvinov

実装は開かれた金融領域（オーストラリア）、デジタルウォレット（イタリア）、医療（スウェーデン）など多様な分野に広がり、それぞれの本番運用から得られたフィードバックが仕様に反映された。Mike Jones は自身のブログで「nearly decade-long journey（約10年の旅）の完結」と述べた。

### OpenID Federation 1.1 / OpenID Federation for OpenID Connect 1.1 公開レビュー開始

OpenID Federation 1.0 の承認と同日（2月17日）、後継仕様の公開レビューが開始された。

| 仕様名                                   | バージョン | 公開日     | エディタ                             |
| ---------------------------------------- | ---------- | ---------- | ------------------------------------ |
| OpenID Federation 1.1                    | Draft 04   | 2026-02-17 | M.B. Jones（Self-Issued Consulting） |
| OpenID Federation for OpenID Connect 1.1 | -          | 2026-02-17 | M.B. Jones（Self-Issued Consulting） |

**公開レビュー期間**: 2026年2月17日〜4月18日（60日間）

OpenID Federation 1.0 と 1.1 の最大の違いは**構造的なリファクタリング**である。1.0 では OpenID Connect / OAuth 2.0 固有の機能とプロトコル非依存の機能が混在していたが、1.1 系では以下のように分離された:

- **OpenID Federation 1.1**: プロトコル非依存のコア機能（Entity Statements、Trust Chains、Metadata Policies、Trust Marks、Federation Endpoints）を収録
- **OpenID Federation for OpenID Connect 1.1**: OpenID Connect および OAuth 2.0 固有の機能（Entity Type Identifiers、クライアント登録フロー）を収録

技術的に**新機能は追加されておらず**、OpenID Federation 1.0 に含まれていた機能を整理・再配置した構成となっている。この分離により、将来的に OpenID Connect 以外のプロトコル（例: OpenID4VP、DID）でも OpenID Federation のコア機能を再利用しやすくなる。

その後の投票通知（4月20日発出）によると、投票期間は 4月21日〜5月5日に設定されている。

### OpenID Connect Relying Party Metadata Choices 1.0 投票通知

2月25日、**OpenID Connect Relying Party Metadata Choices 1.0** の Final Specification 承認投票通知が発出された。

- **公開レビュー期間**: 2026年1月9日〜3月10日（60日間）
- **投票期間**: 2026年3月11日〜25日

本仕様は OpenID Connect Dynamic Client Registration を拡張し、RP（Relying Party）がメタデータパラメータに対して**単一値ではなく複数の対応値（配列）を宣言**できるようにする。定義するパラメータは 18 項目で、以下のカテゴリをカバーする:

- Subject Type サポート（`subject_types_supported`）
- ID Token の署名・暗号化アルゴリズム
- UserInfo レスポンスの署名・暗号化
- Request Object の署名・暗号化
- トークンエンドポイント認証方式
- CIBA、JARM、Introspection 関連

**OpenID Federation の Automatic Registration**（RP が自身の Entity Identifier をクライアント ID として使用する登録不要の方式）では、従来の登録レスポンスが存在しない。そのため OP がどの方式を採用したかを RP が知る手段がなく、このメタデータ仕様があることで OP が双方に適合する方式を事前選択できる。OpenID Federation との密接な連携を想定した設計となっている。

## 3. ミーティングと議論

AB/Connect WG の定例ミーティングは以下のスケジュールで開催されている:

- **火曜日**: 日本時間午前8時、隔週
- **木曜日**: PDT 午前7時、毎週

2月に開催された WG コールの議事録は非公開（メーリングリスト内のみ）であり、本レポートでは公開されている一次情報から議論内容を再構成している。

2月の定例 WG コールでは、OpenID Federation 1.0 の投票完了・承認に関する経緯説明と、続けて開始された OpenID Federation 1.1 公開レビューへの移行が主要議題になったと推察される。また、OpenID Connect RP Metadata Choices 1.0 の公開レビュー中であり、同仕様へのフィードバック取りまとめも議題にあがったと考えられる。

## 4. メーリングリストの主要スレッド

AB/Connect WG のメーリングリスト（`openid-specs-ab`）の 2026年2月アーカイブ（`https://lists.openid.net/pipermail/openid-specs-ab/2026-February/`）は、調査時点（2026-04-17）でサーバーエラー（503）により取得できなかった。議事録も非公開のため、2月の ML スレッドの詳細を直接確認することができなかった。

ただし、周辺の一次情報（openid.net ニュース、Mike Jones ブログ、TIIME 2026 関連記事）から、2月のメーリングリストでは以下の話題が交わされた可能性が高い:

- OpenID Federation 1.0 Final 投票の進捗・結果報告（2月3〜17日の投票期間に対応するスレッド）
- TIIME 2026 相互接続性テストの事前調整・事後共有
- OpenID Federation 1.1 公開レビュー開始の告知（Draft 04 の技術的変更点を含む）
- OpenID Connect RP Metadata Choices 1.0 へのフィードバック

## 5. GitHub 上の議論

AB/Connect WG の GitHub リポジトリ（`https://github.com/openid/connect`）への 2026年2月の直接アクセスはエラー（404）により取得できなかった。

OpenID Federation 関連の仕様リポジトリ（`openid/federation` 相当）では、Draft 04 の公開（2月17日）に向けた最終調整が行われていたと考えられるが、具体的な issue/PR 番号・内容は本調査では確認できなかった。

OpenID Connect RP Metadata Choices については専用リポジトリ `openid/rp-metadata-choices`（`https://github.com/openid/rp-metadata-choices`）が存在し、公開レビューコメントへの対応作業が行われていたと推定されるが、2月時点での具体的なコメント内容は確認できていない。

## 6. 関連イベント

### TIIME 2026（アムステルダム）

**日時**: 2026年2月13日  
**場所**: オランダ・アムステルダム

TIIME（Trust and Internet Identity Meeting Europe）は、アイデンティティ管理・政策・プライバシー・トラストインフラの専門家が集うプラクティショナー主導のアンカンファレンス。2026年版は OpenID Federation 1.0 の Final 承認と時期が重なり、同仕様の相互接続性実証の場として特に注目を集めた。

#### OpenID Federation 相互接続性テスト

2月13日、12名の実装者が 9か国 9実装を持ち寄ってリアルタイムの相互接続性テストを実施した。

参加国: クロアチア、フィンランド、ギリシャ、イタリア、オランダ、ポーランド、セルビア、スウェーデン、米国

主要オーガナイザー:

- **Niels van Dijk**（Technical Product Manager、SURFnet）
- **Davide Vaghetti**（Head of Identity Federation service、GARR）— セッションのファシリテーター

**Giuseppe De Marco**（イタリアデジタル変革局）が開発した「OpenID Federation Browser」ツールがテストフェデレーションの可視化に活用された。テスト終了後も参加者間でオンラインでの相互テストが継続された。OpenID Foundation 事務局長 Gail Hodges はこのコミュニティ主導のテストが「オープンソース自己認証ツールへのプレッシャーテスト」になると評価した。

#### TIIME 基調プレゼンテーション

Mike Jones が約90名のプラクティショナーに対し、OpenID Federation の概要を解説するプレゼンテーションを実施。フェデレーション内のトラスト判断の仕組みと Trust Marks の役割が解説された。GÉANT eduGAIN OpenID Federation パイロットについても言及があった。

### OID4VC 自己認証プログラム開始（2026年2月26日）

AB/Connect WG の直接管轄ではないが、DCP WG が推進する OID4VC 自己認証プログラムが 2月26日にローンチされた。対象仕様は OpenID4VP 1.0、OpenID4VCI 1.0、HAIP 1.0 の3本。SD-JWT および mdoc 形式をサポート。OpenID Foundation の適合性テストプラットフォームで無償提供される。

## 7. 今後の予定

2026年2月末時点で見えていた近未来の動向:

- **OpenID Connect RP Metadata Choices 1.0 投票**（3月11〜25日）— Draft 05 が 3月12日に更新済みで投票準備が整っている状態
- **OpenID Federation 1.1 / OpenID Federation for OpenID Connect 1.1 公開レビュー継続**（〜4月18日）
- OpenID Federation の拡張仕様群（Wallet Architectures 1.0、Extended Subordinate Listing 1.0 等）の策定継続
- IIW（Internet Identity Workshop）などの春季イベントにおける WG 活動の共有

## 8. 参考情報源

- [OpenID Federation 1.0 Final Specification Approved](https://openid.net/openid-federation-1-0-final-specification-approved/) — 2026-02-17
- [Notice of Vote to Approve Proposed OpenID Federation 1.0 Final Specification](https://openid.net/notice-of-vote-to-approve-proposed-openid-federation-1-0-final-specification/) — 2026-01-20
- [Public Review Period for Proposed OpenID Federation 1.1 Final Specifications](https://openid.net/public-review-period-for-proposed-openid-federation-1-1-final-specifications/) — 2026-02-17（公開レビュー開始告知）
- [Notice of Vote to Approve Proposed OpenID Connect Relying Party Metadata Choices 1.0 Final Specification](https://openid.net/notice-of-vote-to-approve-proposed-openid-connect-relying-party-metadata-choices-1-0-final-specification/) — 2026-02-25
- [Public Review Period for Proposed OpenID Connect Relying Party Metadata Choices 1.0 Final Specification](https://openid.net/public-review-period-for-proposed-openid-connect-relying-party-metadata-choices-1-0-final-specification/) — 2026-01-09（公開レビュー開始告知）
- [Nine countries prove OpenID Federation interoperability](https://openid.net/nine-countries-prove-openid-federation-interoperability/) — 2026-02-18
- [The Journey to OpenID Federation 1.0 is Complete — Mike Jones: self-issued](https://self-issued.info/?m=202602) — 2026-02-17
- [OpenID Federation Interop Event at TIIME 2026 in Amsterdam — Mike Jones: self-issued](https://self-issued.info/?m=202602) — 2026-02-16
- [OpenID Federation Presentation at 2026 TIIME Unconference — Mike Jones: self-issued](https://self-issued.info/?m=202602) — 2026-02-13
- [OpenID Federation 1.1 Draft 04](https://openid.net/specs/openid-federation-1_1.html) — 仕様書
- [OpenID Federation for OpenID Connect 1.1](https://openid.net/specs/openid-federation-connect-1_1.html) — 仕様書
- [OpenID Connect Relying Party Metadata Choices 1.0 Draft 04](https://openid.net/specs/openid-connect-rp-metadata-choices-1_0-04.html) — 仕様書
- [AB/Connect Working Group — Specifications](https://openid.net/wg/connect/specifications/) — WG 仕様一覧
- [AB/Connect Working Group](https://openid.net/wg/connect/) — WG ページ（ミーティング情報含む）
- [openid-specs-ab メーリングリスト アーカイブ](https://lists.openid.net/pipermail/openid-specs-ab/) — 対象月のアーカイブは 2026-04-17 時点でアクセス不可（503 エラー）
- [TIIME Unconference](https://tiime-unconference.eu/) — Trust and Internet Identity Meeting Europe 公式サイト
- [OpenID for Verifiable Credential self-certification to launch Feb 2026](https://openid.net/openid-for-verifiable-credential-self-certification-to-launch-feb-2026/) — 2026-02-26 ローンチ
