---
title: "OpenID Foundation FAPI WG 活動レポート (2026年3月)"
reviewed: true
---

# OpenID Foundation FAPI WG 活動レポート (2026年3月)

**執筆日: 2026-04-16**（遡及執筆）

本記事は、OpenID Foundation の Financial-grade API (FAPI) Working Group (WG) が 2026年3月に行った活動を、公開された一次情報に基づいてまとめたものです。メーリングリスト (pipermail) および Bitbucket Wiki の 2026年3月分は執筆時点でアクセスが断続的で取得できなかったため、openid.net 公式ブログおよび Web 検索で確認できた情報を中心に構成しています。

## FAPI WG 概要

FAPI WG は、金融 API をはじめとする高セキュリティ環境向けの OAuth 2.0 プロファイルを策定する OpenID Foundation のワーキンググループです。FAPI 2.0 Security Profile（2025年2月 Final）・FAPI 2.0 Message Signing（2025年9月 Final）の両仕様が確定した現在、WG の関心は実装・認証の普及と仕様の保守（Errata）に移行しています。

2026年3月は主に以下の二つのトピックが確認されました。

1. **TLS 暗号スイート要件の動的化** – IANA レジストリ参照による Errata 計画を公開
2. **独立適合性試験プログラムの発表** – 主要組織が MOU に署名し Q2 2026 開始を予告

## 公開された仕様・ドラフト改訂

### TLS Errata 計画の公表（2026-03-11）

2026年3月11日、FAPI WG は「Adapting FAPI to evolving TLS cipher suites」と題したブログ記事を openid.net に公開しました。これは Errata の草案方針を示す技術的なアナウンスです。

#### 背景: 暗号スイートの静的リストの問題

FAPI 2.0 Security Profile の TLS 要件は BCP 195（RFC 9325）を参照しています。RFC 9325 は TLS 1.2 で許可する暗号スイートとして以下の 4 種のみを列挙しています。

- TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
- TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
- TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
- TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384

TLS 1.3 の暗号スイートは RFC 8446 で定義され（RFC 9325 は TLS 1.3 暗号スイートを指定せず RFC 8446 に委ねています）、TLS_CHACHA20_POLY1305_SHA256 が利用できます。

#### 実際に起きた問題: ChaCha20-Poly1305 事例

ある FAPI 2.0 準拠の実装が適合性テストに失敗しました。その原因は、サーバーが TLS 1.2 で `TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256` を提示していたためです。ChaCha20-Poly1305 は TLS 1.3 では SHOULD implement（RFC 8446 Section 9.1）と位置付けられており、AES ハードウェアアクセラレーションを持たない環境では性能面でも優れています。にもかかわらず、RFC 9325 の厳格な解釈によって TLS 1.2 では拒否されてしまいました。

#### 解決策: IANA レジストリへの動的参照

FAPI WG は、特定の RFC 版に仕様を固定する方式から、IANA の「TLS Cipher Suites」レジストリを直接参照する動的アプローチへの移行を発表しました。

主な特徴:

- **新規暗号の受け入れ**: IANA がレジストリで Recommended マークを付けた時点で仕様更新なく利用可能
- **非推奨暗号の除外**: 警告フェーズ → 移行期間 → 拒否、という段階的な廃止
- **バージョン非依存**: 各 TLS バージョンの定義 RFC に従い適用

#### 計画中の Errata テキスト

| 仕様     | Errata の内容                                                                                                                                                                                           |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FAPI 1.0 | 「shall require and use the key length permitted by [BCP 195]」「shall not use algorithms deprecated in [IANA TLSP]」                                                                                   |
| FAPI 2.0 | 「Servers shall only use cipher suites allowed and not deprecated in the 'TLS Cipher Suites' registry」「Clients should permit only the cipher suites recommended in the 'TLS Cipher Suites' registry」 |

#### TLS 1.3 への移行推奨

IETF での draft-ietf-uta-require-tls13 の進行を踏まえ、WG は FAPI エコシステムに対して TLS 1.3 対応を優先するよう推奨しました。TLS 1.3 は新規プロトコルで必須となり、TLS 1.2 はオプション扱いへ移行する方向性です。

実装者向けの推奨アクション（ブログより）:

1. 現在の TLS 設定を IANA レジストリと照合して監査する
2. TLS 1.3 の準備状況と相互運用性を検証する
3. 静的な暗号スイートのハードコードを避け、将来の変更に備える

#### 適合性テストの更新スケジュール

- FAPI 2.0 適合性テストの更新: 近期（near term）
- FAPI 1.0 適合性テストの更新: その後

## ミーティングと議論

Bitbucket Wiki（FAPI WG の議事録所在）については、執筆時点で 2026年3月分のページにアクセスできませんでした。FAPI WG は通常、大西洋（Atlantic）コールと太平洋（Pacific）コールを隔週で開催しており、3月にも複数回の定例コールが行われたと考えられますが、その内容は確認できませんでした。

**確認できなかった理由**: Bitbucket Wiki は認証を必要とするか、2026年3月分のページがまだ公開インデックスに含まれていない可能性があります。確認した URL: `https://bitbucket.org/openid/fapi/wiki/FAPI_Meeting_Notes_2026`

TLS 暗号スイートに関するブログ投稿（2026-03-11）は WG の内部議論の成果と考えられます。draft-ietf-uta-require-tls13 の進行や実装者からの適合性テスト失敗報告が WG コールで議論され、Errata 方針のコンセンサスが形成された可能性が高いです。

## メーリングリストの主要スレッド

FAPI WG メーリングリストアーカイブ（https://lists.openid.net/pipermail/openid-specs-fapi/2026-March/）は、執筆時点で 503 エラーないし DNS エラーにより取得できませんでした。

以下に確認できた範囲でのコンテキストを記述します。

### TLS 暗号スイート問題（推測）

2026-03-11 のブログ公表の前後、ChaCha20-Poly1305 の適合性テスト失敗事例がメーリングリスト上で議論されたと考えられます。具体的なスレッド題名・発言者・返信数は確認できませんでした。

**調査結果**: 対象月の ML スレッドは確認できませんでした（ pipermail アーカイブへの 2026年3月時点のアクセス不能）。

## GitHub 上の議論

GitHub REST API（https://api.github.com/repos/openid/fapi/issues）は執筆時点でレート制限により取得できませんでした。

WebSearch で確認できた関連 issue を以下に記載します。

### [openid/fapi#412](https://bitbucket.org/openid/fapi/issues/412/fapi-20-hard-requirement-to-support-grant) - FAPI 2.0: Hard requirement to support Grant Management

Bitbucket issue #412 は「FAPI 2.0 において Grant Management を必須要件とすべきか」を問う議論です。現在の FAPI 2.0 Security Profile では Grant Management はオプション推奨に留まっており、必須化を求める声があります。

2026年3月時点での状況は直接確認できませんでしたが、Grant Management for OAuth 2.0 は Implementer's Draft 2 の段階にあり、Final 化への道筋が引き続き議論されていると考えられます。

## 関連イベント

### 独立適合性試験プログラム: 主要組織 MOU 署名（2026-03-18）

2026年3月18日、OpenID Foundation は国際的な独立適合性試験プログラムの開始に向けて、複数の試験サービスプロバイダーが MOU に署名したことを発表しました。

**MOU 署名組織:**

| 組織                | 代表者                                     |
| ------------------- | ------------------------------------------ |
| BixeLab             | Ted Dunstone（CEO & Founder）              |
| FIDO Alliance, Inc. | Andrew Shikiar（Executive Director & CEO） |
| Fime                | （担当者記載なし）                         |
| Raidiam             | Ralph Bragg（CTO & Co-Founder）            |
| TrustID Solutions   | Tomas Horvath（Managing Partner）          |

**プログラムの概要:**

- **開始時期**: Q2 2026
- **対象仕様**: OpenID for Verifiable Presentation、OpenID for Verifiable Credential Issuance、High Assurance Interoperability Profile（HAIP）
- **背景**: 38 の管轄区域での採用に対応。既存の自己証明サービスを補完し、規制・主権要件に沿った認証経路を提供

このプログラムは FAPI 仕様を直接の対象としていませんが、FAPI を活用するオープンバンキングエコシステムで実績を積んできた Raidiam が参加しており、将来的な FAPI エコシステムへの波及が期待されます。OpenID Foundation の自己証明サービスはすでに 4,500 件以上の認証を実施しており（ブラジル、英国、オーストラリア、UAE、サウジアラビア、米国など）、独立試験プログラムはその次のステップと位置付けられています。

### IIW（Internet Identity Workshop）

IIW 38 は 2026年4月開催のため 3月は対象外です。OIDF Summit 等も 3月に特定イベントは確認できませんでした。

## 今後の予定

2026年3月完了直後の視点での予定:

- **FAPI 2.0 Errata**: TLS Cipher Suite の IANA レジストリ参照へのテキスト更新（近期）
- **FAPI 2.0 適合性テスト更新**: Errata 反映後に公開予定
- **FAPI 1.0 Errata・適合性テスト更新**: FAPI 2.0 の対応後に実施
- **独立適合性試験プログラム**: Q2 2026 開始（追加プロバイダーのオンボーディングも継続）
- **Grant Management for OAuth 2.0 Final 化**: 進捗は 3月時点で不明、引き続き WG 内議論中
- **IIW 38**（2026年4月予定）: FAPI WG メンバーの参加・発表が見込まれる

## 参考情報源

- [Adapting FAPI to evolving TLS cipher suites](https://openid.net/adapting-fapi-to-evolving-tls-cipher-suites/) - openid.net, 2026-03-11 公開。TLS 暗号スイート要件動的化に関する FAPI WG の技術的方針説明
- [Leading organisations join OIDF independent conformance test program](https://openid.net/leading-organisations-join-oidf-independent-conformance-test-program/) - openid.net, 2026-03-18 公開。BixeLab, FIDO Alliance, Fime, Raidiam, TrustID Solutions の MOU 署名発表
- [FAPI Working Group - OpenID Foundation](https://openid.net/wg/fapi/) - FAPI WG 公式ページ
- [FAPI 2.0 Security Profile (Final)](https://openid.net/specs/fapi-security-profile-2_0-final.html) - 2025年2月 Final 化
- [FAPI 2.0 Message Signing Final Specification Approved](https://openid.net/fapi-2-message-signing-final-specification-approved/) - 2025年9月 Final 化
- [FAPI Working Group Specifications](https://openid.net/wg/fapi/specifications/) - 仕様一覧
- [Grant Management for OAuth 2.0 (Implementer's Draft 1)](https://openid.net/specs/fapi-grant-management-01.html)
- [openid-specs-fapi メーリングリスト (2026-March)](https://lists.openid.net/pipermail/openid-specs-fapi/2026-March/) - 執筆時点でアクセス不能（503 エラー）
- [FAPI Meeting Notes Wiki (Bitbucket)](https://bitbucket.org/openid/fapi/wiki/browse/) - 執筆時点で 2026年3月分は確認できず
- [IANA TLS Cipher Suites Registry](https://www.iana.org/assignments/tls-parameters/tls-parameters.txt) - FAPI 新 Errata が参照先とする IANA レジストリ
