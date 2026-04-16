---
title: "OpenID Foundation iGov WG 活動レポート (2026年3月)"
---

# OpenID Foundation iGov WG 活動レポート (2026年3月)

> 執筆日: 2026-04-16。本記事は 2026年3月 の活動を遡及的にまとめたものです。

## 1. 概要

iGov (International Government Assurance) WG は、公共部門サービスへの認証・属性情報共有を国際的に標準化するため、OAuth 2.0 および OpenID Connect のセキュリティ・プライバシープロファイルを開発する OpenID Foundation のワーキンググループです。チェア: John Bradley (Yubico)。

2026年3月の最大のイベントは、**iGov Profile for OAuth 2.0 の初 Implementer's Draft 承認に向けた公開レビュー期間の完了と投票通知の発出**です。45日間のパブリックレビューが 3月28日に終了し、翌 3月29日から会員投票が開始されました。これは iGov WG が年単位をかけて仕上げてきた OAuth 2.0 プロファイルが、はじめて正式な仕様ステータスへ移行する里程碑となります。

## 2. 公開された仕様・ドラフト改訂

### iGov Profile for OAuth 2.0 — draft-09 パブリックレビュー完了

| 項目                   | 内容                                                            |
| ---------------------- | --------------------------------------------------------------- |
| 仕様名                 | International Government Assurance (iGov) Profile for OAuth 2.0 |
| ドラフト版             | openid-igov-oauth2-1_0-09                                       |
| エディター             | K. Burgin (MITRE), T. Clancy (MITRE)                            |
| 初版公開               | 2025年12月18日                                                  |
| パブリックレビュー期間 | 2026年2月11日〜2026年3月28日（45日間）                          |
| 投票通知発出           | 2026年3月22日                                                   |

本仕様は iGov WG が公開する**初めての Implementer's Draft**であり、IP 保護が付与される安定版として位置づけられます。

フォーマット: HTML (`openid-igov-oauth2-1_0-09.html`)、XML、TXT で提供。

#### draft-09 の主な技術的変更点

draft-09 は以下の改訂を含んでいます:

- **RS256 削除・PS256 追加**: RS256 要件が撤廃され、PS256 (RSASSA-PSS with SHA-256) が署名アルゴリズム要件に加わった。ES256 および Ed25519 も引き続き許容
- **ポスト量子暗号への言及追加**: NIST の PQC 標準化を参照し、ECDHE-MLKEM (ハイブリッド鍵交換) のドラフトガイダンスを追記
- **重複削除・誤記修正**: 複数セクションにまたがる冗長な記述を整理

#### draft-09 の主要な技術要件

**クライアント要件**:

- TLS 1.3 以上必須（相互運用性のために特定の TLS 1.2 暗号スイートを許容）
- JWT 署名: PS256 / ES256 / Ed25519 のいずれか必須、"none" アルゴリズム禁止
- RSA 鍵は最低 2048 ビット、楕円曲線鍵は最低 224 ビット
- **PKCE (S256 メソッド) 必須**
- **sender-constrained トークン必須**: mTLS または DPoP を利用
- トークンエンドポイント認証: private_key_jwt または mTLS
- `state` パラメーター: エントロピー 128 ビット以上

**認可サーバー要件**:

- `authorization_code` グラントを必須サポート、implicit グラント禁止
- **JWT アクセストークン**必須: `iss`, `client_id`, `exp`, `jti`, `sub`, `aud`, `scope`, `iat`, `cnf` クレームが要求される
- トークンイントロスペクションエンドポイント必須
- 動的クライアント登録サポート

**プロテクテッドリソース要件**:

- Bearer トークンは `Authorization` ヘッダー経由のみ受け入れ
- JWT の `aud` クレーム検証必須
- RFC 9470 に基づくステップアップ認証チャレンジをサポート

### iGov Profile for OpenID Connect 1.0 — draft-04

OAuth 2.0 プロファイルと並行して、OpenID Connect 1.0 プロファイル (draft-04) も公開されている。こちらは 3月時点でドラフトステータスのまま推移しており、今回の Implementer's Draft プロセスには含まれていない。

## 3. ミーティングと議論

iGov WG の会議体は 4週間ごとの火曜日 8:00 AM PT に開催されている。2026年3月の定例ミーティング（推定: 3月3日または3月31日前後）の議事録は非公開であり、OpenID Foundation の公開リソースからは確認できなかった。

議事録が non-public な WG であるため、以下では ML とパブリック記録から再構成した情報を記述する。3月の定例ミーティングでは、進行中のパブリックレビューへの対応状況や、3月22日付の投票通知の準備が主要議題であったと推測される。

## 4. メーリングリストの主要スレッド

`openid-specs-igov` メーリングリストの 2026年3月アーカイブ (`https://lists.openid.net/pipermail/openid-specs-igov/2026-March/`) へのアクセスを試みたが、404 エラーにより取得できなかった。

パブリックレビュー期間中のフィードバック送付先は当該 ML であり、ドラフト仕様に対する技術的コメントのやり取りがあったと考えられるが、具体的なスレッド内容は本稿執筆時点では確認できなかった。確認できたこととして:

- パブリックレビュー参加方法として、コントリビューション同意書への署名後、`openid-specs-igov@lists.openid.net` へのフィードバック送信が案内されていた
- 2026年1月・2月のアーカイブも直接取得できなかった（インデックスには存在が表示されるが個別URLが 404）

## 5. GitHub 上の議論

iGov WG のリポジトリは主に **Bitbucket** (`bitbucket.org/openid/igov`) でホストされており、当初 SKILL に登録されている GitHub (`github.com/openid/iGov`) は 404 を返した。Bitbucket リポジトリへのアクセスも認証エラーにより内部の詳細は確認できなかった。

2026年3月に向けた活動として、draft-09 の仕様文書（HTML/XML/TXT）がパブリックレビュー用に公開されていたことは確認できているが、それに対応したリポジトリ上の commit 履歴やレビューコメントは本稿では検証できていない。

## 6. 関連イベント

2026年3月時点で iGov WG が明示的に関与したカンファレンスや外部イベントについては、公開記録から確認できなかった。

なお、関連する文脈として OpenID Foundation は 2026年2月に OpenID for Verifiable Credentials の self-certification プログラムを開始しており、iGov の Implementer's Draft 化と合わせて、各 WG における仕様成熟化が加速している時期にあたる。

## 7. 今後の予定（2026年3月末時点の視点）

2026年3月末時点で予定されていた主な動き:

- **2026年3月29日〜4月12日**: iGov Profile for OAuth 2.0 の Implementer's Draft 承認投票  
  投票ページ: `https://openid.net/foundation/members/polls/403`
- 投票結果を受けて Implementer's Draft として正式公開
- iGov Profile for OpenID Connect 1.0 (draft-04) の後続作業継続

## 8. 参考情報源

- [OpenID Foundation - iGov WG ページ](https://openid.net/wg/igov/)
- [Public Review Period for Proposed Implementer's Draft of iGov Profile for OAuth 2.0](https://openid.net/public-review-period-for-proposed-implementers-draft-of-igov-profile-for-oauth-2/) — パブリックレビュー開始告知 (2026-02-11)
- [Notice of Vote to Approve Proposed Implementer's Draft of iGov Profile for OAuth 2.0](https://openid.net/notice-of-vote-to-approve-proposed-implementers-draft-of-international-government-assurance-profile-for-oauth-2/) — 投票通知 (2026-03-22)
- [iGov WG Specifications ページ](https://openid.net/wg/igov/specifications/)
- [iGov WG Charter](https://openid.net/wg/igov/charter/)
- [International Government Assurance Profile (iGov) for OAuth 2.0 - draft 09](https://openid.net/specs/openid-igov-oauth2-1_0.html) — 仕様本文
- [International Government Assurance Profile (iGov) for OpenID Connect 1.0 - draft 04](https://openid.net/specs/openid-igov-openid-connect-1_0.html)
- [openid-specs-igov ML アーカイブ (2026年3月)](https://lists.openid.net/pipermail/openid-specs-igov/2026-March/) — 2026年3月インデックスへのアクセスは本稿執筆時点では 404
- [openid-specs-igov ML アーカイブ (全期間)](https://lists.openid.net/pipermail/openid-specs-igov/) — アーカイブのトップインデックス（月一覧）
