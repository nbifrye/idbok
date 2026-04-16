---
title: "OpenID Foundation R&E WG 活動レポート (2026年3月)"
---

# OpenID Foundation R&E WG 活動レポート (2026年3月)

> 執筆日: 2026-04-16（遡及執筆）

## 1. 概要

R&E WG（Research and Education Working Group）は、研究・教育（R&E）セクターにおける OpenID Connect の採用を促進するため、OpenID Connect のプロファイルや R&E 固有のクレーム・スコープ、エンティティメタデータ拡張を策定することを目的とした OpenID Foundation のワーキンググループである。

2026年3月は、R&E WG のメーリングリスト（openid-specs-rande）には公開されたスレッドが確認できなかった。会議議事録は非公開であり、公式 GitHub リポジトリも存在しない。ただし、同月は OpenID Federation 1.1 の最終仕様パブリックレビュー期間の最中（2026年2月17日〜4月18日）であり、R&E コミュニティにとって重要な基盤仕様の動向が続いていた。

また2月には TIIME 2026 Amsterdam で OpenID Federation の大規模インターオプイベントが開催されており、その余波が3月の活動に影響を与えていたと考えられる。

---

## 2. 公開された仕様・ドラフト改訂

### OpenID Federation 1.1 パブリックレビュー中

R&E WG の仕様策定の基盤となる OpenID Federation の最新版が、2026年3月を通じてパブリックレビュー期間中であった。

- **OpenID Federation 1.1** および **OpenID Federation for OpenID Connect 1.1** の2文書が同時に最終仕様（Final Specification）候補として提出されている
- パブリックレビュー期間: 2026年2月17日〜2026年4月18日（60日間）
- 投票期間: 2026年4月21日〜5月5日の予定

OpenID Federation 1.0 は2026年2月17日に最終仕様として承認済み（賛成85票、反対0票、棄権20票、参加率24.7%で定足数超過）。1.1 はその改訂版として同日にパブリックレビューが開始された。

### R&E WG 固有の仕様

2026年3月時点で、R&E WG のチャーターが定める以下の成果物は引き続き策定中であった。

- R&E セクター向け OpenID Connect プロファイル（1 件以上）
- R&E 固有のクレームおよびスコープ定義
- OpenID Connect 向けエンティティメタデータ拡張

完了条件として、草稿に関する最大限のコンセンサスの達成、独立した2実装以上によるインターオペラビリティの実証、および国際的な R&E 機関によるフィードバックの反映（3回以上の反復）が必要とされており、長期的な取り組みとなっている。

---

## 3. ミーティングと議論

R&E WG の会議議事録は非公開（non-public）である。メーリングリストおよび GitHub にも 2026年3月の議論記録は公開されていなかった。

定例ワーキンググループコールは開催されていたとみられるが、その内容を公開記録から確認することはできなかった。以下では、3月の活動に影響を与えた直近の公開イベントである TIIME 2026 について補足する。

### 参考: TIIME 2026 での OpenID Federation インターオプ（2026年2月13日）

2026年2月13日、アムステルダムで開催された TIIME 2026（Trust and Internet Identity Meeting Europe）アンカンファレンスにおいて、OpenID Federation のインターオペラビリティテストが実施された。

- **参加者**: 12名（クロアチア、フィンランド、ギリシャ、イタリア、オランダ、ポーランド、セルビア、スウェーデン、米国の9カ国）
- **実装数**: 9実装
- **主催組織**: NORDUnet、SUNET、SURF、GÉANT、Internet2 などの R&E インフラ機関が中心

OpenID Foundation が発表した公式記事では「研究・教育コミュニティの早期かつ熱心な参加が基盤を築いた（The early and enthusiastic support from the Research and Education community was foundational.）」と評価されており、R&E セクターが OpenID Federation の普及において中心的な役割を担っていることが改めて示された。

このインターオプは OpenID Federation 1.0 の最終仕様承認と同日（2月17日承認）の直前に行われており、1.0 策定の完了を祝うコミュニティイベントとしての性格も持っていた。

---

## 4. メーリングリストの主要スレッド

openid-specs-rande メーリングリストのアーカイブを確認した結果、2026年3月の投稿は確認できなかった。

2026年のアーカイブ自体（January〜March）が存在しないことがピーパーメールのインデックスより確認されている。直近のアーカイブとして確認できた月は 2025年6月 であり、2024年はJanuary および October のみ存在した。

R&E WG は歴史的にメーリングリストの活動が非常に限定的なワーキンググループであり、主要な議論は定例コールや関連コミュニティ（REFEDS、GÉANT、Internet2 等）との連携を通じて行われている。

---

## 5. GitHub 上の議論

R&E WG の公式 GitHub リポジトリは非公開または存在しない（SKILL.md レジストリでも「公開リポジトリは確認できず」とされている）。

関連する活動として、REFEDS の GitHub（`refeds-oidcre` 組織）に以下が存在している。

- [refeds-oidcre/eduperson-jwt-claims](https://github.com/refeds-oidcre/eduperson-jwt-claims) — eduPerson および SCHAC 属性を JWT クレームとして伝達するためのドラフト仕様
- [surfnet-niels/refeds-oidcre-saml-oidc-mapping](https://github.com/surfnet-niels/refeds-oidcre-saml-oidc-mapping) — SAML 2.0 と OpenID Connect のマッピングに関する BCP ドラフト

2026年3月の上記リポジトリへの新規 Issue・PR は確認できなかった。

---

## 6. 関連イベント

### TIIME 2026 アンカンファレンス（2026年2月9〜13日、アムステルダム）

3月の直前に開催された最重要イベント。OpenID Federation インターオプテスト（2月13日）のほか、FIM4R ワークショップ、eduID ワーキングセッション、AARC TREE シンポジウム等が開催された。NORDUnet がスポンサー。

### GÉANT GN5-1 WP5 活動

GÉANT の Trust and Identity Incubator（GN5-1 WP5）では、REFEDs の13仕様（Research and Scholarship エンティティカテゴリ、SIRTFI v1/v2、MFA プロファイル等）を OpenID Federation および OpenID Federation ベースのウォレットエコシステムで活用するためのアセスメントが継続されていた。この成果物は「仮説的な考察が含まれる」旨が注記された First Assessment であり、正式な提案ではない。

### Internet2 の 2026 展望

Internet2 の Kevin Morooney（VP, Trust & Identity）は、2026年が米国高等教育・研究コミュニティにおいて OpenID Federation の採用を積極的に探求する転換点になると予測した。OpenID Federation はすでに安全かつ効率的なアクセス管理と強化されたアイデンティティプルーフィングの基盤として注目されている。

---

## 7. 今後の予定

2026年3月末時点で、R&E コミュニティが注視していた主な次月以降の動向は以下の通りである。

- **OpenID Federation 1.1** の最終仕様候補パブリックレビュー終了（2026年4月18日）および投票開始（4月21日）
- R&E WG が依拠する OpenID Federation 基盤の 1.1 版確定後、R&E プロファイルへの反映を検討
- REFEDS コミュニティとの連携継続（SAML-OIDC マッピングのBCP化）

---

## 8. 参考情報源

- [R&E Working Group - OpenID Foundation](https://openid.net/wg/rande/) — WG 概要ページ
- [R&E WG Charter](https://openid.net/wg/rande/charter/) — チャーター（目的・成果物・完了条件）
- [R&E WG Specifications](https://openid.net/wg/rande/specifications/) — 仕様ドラフト一覧
- [openid-specs-rande メーリングリストアーカイブ](https://lists.openid.net/pipermail/openid-specs-rande/) — 2026年3月のスレッドなし（最新は 2025年6月）
- [OpenID Federation 1.0 Final Specification Approved](https://openid.net/openid-federation-1-0-final-specification-approved/) — 2026年2月17日承認
- [Public Review Period for Proposed OpenID Federation 1.1 Final Specifications](https://openid.net/public-review-period-for-proposed-openid-federation-1-1-final-specifications/) — 2026年2月17日〜4月18日レビュー中
- [Nine countries prove OpenID Federation interoperability](https://openid.net/nine-countries-prove-openid-federation-interoperability/) — TIIME 2026 インターオプ結果報告
- [OpenID Federation Interop Event at TIIME 2026 in Amsterdam – Mike Jones](https://self-issued.info/?p=2807) — Mike Jones によるイベントレポート
- [TIIME 2026 - Nikhef Indico](https://indico.nikhef.nl/event/6459/) — TIIME 2026 プログラム
- [Leveraging REFEDs specifications in OpenID Federation (GÉANT GN5-1 WP5)](https://wiki.geant.org/display/GWP5/Leveraging+REFEDs+specifications+in+OpenID+Federation+federation+and+OpenID+Fed+based+wallet+ecosystem) — GÉANT による REFEDs × OpenID Federation アセスメント
- [OIDCre - Working-Groups - REFEDS wiki](https://wiki.refeds.org/display/GROUPS/OIDCre) — REFEDS OIDCre グループ概要
- [refeds-oidcre/eduperson-jwt-claims (GitHub)](https://github.com/refeds-oidcre/eduperson-jwt-claims) — eduPerson JWT クレームドラフト
