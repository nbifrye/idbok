---
title: "OpenID Foundation Digital Credentials Protocols WG 活動レポート (2026 Q1)"
---

# OpenID Foundation Digital Credentials Protocols WG 活動レポート (2026 Q1)

> 執筆日: 2026-04-15。本記事は 2026 年 1〜3 月の活動を遡及的にまとめたものです。

## 1. 概要

Digital Credentials Protocols (DCP) Working Group は、OpenID Foundation の主要な WG のひとつであり、検証可能クレデンシャル（Verifiable Credentials）の発行・提示プロトコルの仕様策定を担う。主要成果物は OpenID for Verifiable Credential Issuance (OID4VCI)、OpenID for Verifiable Presentations (OID4VP)、および High Assurance Interoperability Profile (HAIP) の 3 仕様体系である。

2026 年 Q1（1〜3 月）は、DCP WG にとって **コンフォーマンステスト体制の本格始動** が最大のテーマとなった四半期であった。2025 年末に予告されていたセルフサーティフィケーションプログラムが 2 月 26 日に正式ローンチされ、続いて 3 月には独立系テストサービスプロバイダーとの連携体制も整備された。一方で、次世代バージョン（1.1 系）の仕様策定も継続しており、Interactive Authorization Endpoint (IAE) 等の新機能を盛り込んだ相互運用性イベントも検討・推進された。

## 2. 公開された仕様・ドラフト改訂

### 2.1 既存 Final 仕様の継続展開

Q1 時点では、以下の 3 仕様が Final として公開済みであり、四半期を通じてコンフォーマンステストの対象となった。

| 仕様                                                     | バージョン | 状態                 |
| -------------------------------------------------------- | ---------- | -------------------- |
| OpenID for Verifiable Presentations (OID4VP)             | 1.0        | Final（2025 年公開） |
| OpenID for Verifiable Credential Issuance (OID4VCI)      | 1.0        | Final（2025 年公開） |
| OpenID4VC High Assurance Interoperability Profile (HAIP) | 1.0        | Final（2025 年公開） |

2 月 25 日には欧州委員会（European Commission）が HAIP v1.0 の軽微なギャップを精査し、「識別されたギャップはない（no identified gaps）」と結論付けた。これにより HAIP 1.0 の欧州デジタルアイデンティティウォレット（EUDIW）への適合性が追認される形となった。

### 2.2 次期バージョン（1.1 系）の策定

WG は 1.0 との後方互換性を維持したまま新機能を追加する 1.1 系の策定を継続した。

- **OID4VP 1.1**: Interactive Authorization Endpoint (IAE) 等の新機能を含む方向で議論が進行
- **HAIP 1.1**: 1.0 をベースに 1.1 向けの追加要件を整備
- **OID4VCI 1.0 + HAIP 1.0/1.1**: 発行側は 1.0 のまま継続しつつ、HAIP との組み合わせを検証

これらを対象とした相互運用性イベントが 1 月末〜2 月初旬に計画されていた（確認できた公開記録の範囲では詳細な実施報告は見当たらない）。

## 3. 主要な議論・決定事項

### 3.1 セルフサーティフィケーションプログラムの正式ローンチ（2 月 26 日）

2025 年 12 月に予告されていたセルフサーティフィケーションプログラムが、2026 年 2 月 26 日に正式に開始された。対象仕様は OID4VP 1.0・OID4VCI 1.0・HAIP 1.0 の 3 本。

**プログラムの特徴:**

- テストツールはオープンソースで無償提供（ローカル実行または OIDF サーバー経由）
- CI パイプラインへの組み込みが可能な API を公開
- 対象実装: ウォレット・イシュアー・ベリファイアー
- SD-JWT VC および ISO mdoc の両クレデンシャルフォーマットをサポート（mdoc サポートはローンチ直後に順次追加）

**価格体系（公表値）:**

| 会員種別      | 料金（1 実装 × 1 仕様あたり） |
| ------------- | ----------------------------- |
| OIDF メンバー | USD 700                       |
| 非メンバー    | USD 3,500                     |

38 以上の法域が OID4VP/OID4VCI/HAIP を採用しており、ウォレット・イシュアー・ベリファイアーの実装者が即時に利用可能な体制が整えられた。また、独立第三者によるレビューオプションも提供された。

### 3.2 独立系コンフォーマンステストプロバイダーの参画（3 月 18 日）

OpenID Foundation と覚書（MoU）を締結したテストサービスプロバイダーとして以下の 5 組織が発表された。

- **BixeLab**
- **FIDO Alliance**
- **Fime**
- **Raidiam**
- **TrustID Solutions**

これらの組織がセルフサーティフィケーションに加え、独立第三者による認定サービス（Accreditation）を提供するパートナーとして位置付けられた。さらに追加のプロバイダーがオンボーディング中であることも公表された。

## 4. 会議・イベント

### 4.1 WG 定例ミーティング

DCP WG は隔週での定例ミーティングを継続した。Q1 2026 における具体的なミーティングのアジェンダや議事録は、確認できた公開記録の範囲では提供されていない。

### 4.2 相互運用性イベント（計画・検討段階）

1 月末〜2 月初旬に、OID4VP 1.1 + HAIP 1.1 および OID4VCI 1.0 + HAIP 1.0/1.1 を対象とした相互運用性イベントが検討・計画された。前四半期（2025 年 11 月 6〜13 日）の第 11 回インタロップイベントでは以下の成果が記録されており、Q1 の検証の前提となった。

- OID4VP 1.0 + HAIP 1.0 + Digital Credentials API: **98% 合格**（44 ペア）
- OID4VP 1.0 + HAIP 1.0（DC API なし）: **73% 合格**（11 ペア）
- OID4VCI 1.0: **82% 合格**（22 ペア、うち HAIP モード 11 ペアのうち 10 ペア合格）

Q1 のインタロップイベントに関しては、確認できた公開情報の範囲では詳細な結果報告は見当たらなかった。

### 4.3 EUDIW 対応

2025 年 12 月にローンチされた EUDIW リソースハブ（OpenID Foundation が運営）が Q1 を通じて活用され、欧州各国・機関の実装者に仕様・テストツール・実装ガイダンスを提供した。

## 5. 今後の予定

2026 年 Q1 完了直後（4 月以降）に予定・計画されていた事項は以下のとおり。

- **認定サービス（Accreditation）のローンチ（Q2 2026 予定）**: パイロットパートナーシップを先行展開し、EUDIW・California DMV・英国政府など各地域エコシステムのローカライズ要件に対応する正式サービスを開始する
- **ISO/IEC SC17 WG10 との共同インタロップ**: 2026 年 5 月のフランス開催 ISO/IEC SC17 WG10 ミーティングに向け、共同インタロップイベントの実施が検討されていた
- **mdoc 対応テストの拡充**: OID4VCI のコンフォーマンステストへの mdoc サポートを順次追加予定
- **テスト要件ドラフトの公開**: 欧州委員会・ETSI のコンフォーマンスプログラムと連動したテスト要件ドラフト仕様の公開を予定

## 6. 参考情報源

- [OpenID for Verifiable Credential self-certification to launch Feb 2026 – OpenID Foundation](https://openid.net/openid-for-verifiable-credential-self-certification-to-launch-feb-2026/)
  - 2025 年 12 月 18 日付の公式アナウンス。2026 年 2 月 26 日の自己認証プログラムローンチを予告。
- [Leading organisations join OIDF independent conformance test program – OpenID Foundation](https://openid.net/leading-organisations-join-oidf-independent-conformance-test-program/)
  - 2026 年 3 月 18 日付。BixeLab・FIDO Alliance・Fime・Raidiam・TrustID Solutions の MoU 締結を報告。
- [OIDF proves real-world interoperability of HAIP 1.0 with OpenID4VP 1.0 and OpenID4VCI 1.0 – OpenID Foundation](https://openid.net/haip-1-0-openid4vp-1-0-achieve-98-in-oidf-interop-testing/)
  - 2025 年 11 月のインタロップイベント（第 11 回）の詳細結果。Q1 活動の前提となる実績。
- [OpenID Foundation launches EUDIW resource hub – OpenID Foundation](https://openid.net/openid-foundation-launches-eudiw-resource-hub/)
  - 2025 年 12 月 11 日付。EUDIW リソースハブのローンチを報告。1.1 系インタロップ計画にも言及。
- [Digital Credentials Protocols (DCP) Working Group – OpenID Foundation](https://openid.net/wg/digital-credentials-protocols/)
  - DCP WG の公式ページ。仕様一覧・憲章・リポジトリへのリンクを提供。
- [Conformance Testing for OpenID for Verifiable Presentations – OpenID Foundation](https://openid.net/certification/conformance-testing-for-openid-for-verifiable-presentations/)
  - OID4VP コンフォーマンステストの技術詳細（対応バージョン・テスト項目など）。
- [How to Run Conformance Tests for OpenID for Verifiable Presentations – OpenID Foundation](https://openid.net/certification/conformance-testing-for-openid-for-verifiable-presentations/)
  - テスト実行手順のガイド。
- [OpenID Foundation launching self-certification program for 3 specs in Feb 2026 – Biometric Update](https://www.biometricupdate.com/202512/openid-foundation-launching-self-certification-program-for-3-specs-in-feb-2026)
  - メディアによるプログラムローンチの報道。価格体系等の詳細を含む。
