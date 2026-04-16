---
title: "OpenID Foundation AB/Connect WG 活動レポート (2026年3月)"
---

# OpenID Foundation AB/Connect WG 活動レポート (2026年3月)

> 執筆日: 2026-04-16（遡及執筆）

## 1. 概要

AB/Connect Working Group（AB/Connect WG）は、OpenID Foundation 内で最も長い歴史を持つワーキンググループの一つであり、OAuth 2.0 を基盤とする OpenID Connect 仕様群を主導してきた。Artifact Binding (AB) Working Group と Connect Working Group が統合されたこの WG は、Michael B. Jones（Self-Issued Consulting）、Nat Sakimura（NAT Consulting）、Frederik Krogsdal Jacobsen（Idura）の三名が共同議長を務めている。

2026年3月は、AB/Connect WG にとって重要な節目となった月である。**OpenID Connect Relying Party Metadata Choices 1.0** が最終仕様として承認されるという大きなマイルストーンを達成した。また、**OpenID Federation 1.1** および **OpenID Federation for OpenID Connect 1.1** の 60 日間公開レビュー期間が継続する中、`connect-key-binding` や `connect-ephemeral-sub` の仕様ドラフトでも技術的な議論が進んだ。

## 2. 公開された仕様・ドラフト改訂

### OpenID Connect Relying Party Metadata Choices 1.0 最終仕様承認

2026年3月26日、OpenID Foundation のメンバーシップ投票にて **OpenID Connect Relying Party Metadata Choices 1.0** が最終仕様（Final Specification）として承認された。

**投票結果（2026年3月11日〜25日）:**

| 結果 | 票数                                        |
| ---- | ------------------------------------------- |
| 賛成 | 87                                          |
| 反対 | 0                                           |
| 棄権 | 17                                          |
| 合計 | 104（全 450 名中 23.1%、定足数 20% を超過） |

この仕様は、OpenID Connect Dynamic Client Registration 1.0 を拡張し、Relying Party（RP）がメタデータパラメータに対して単一の値だけでなく「サポートする値の集合」を表現できるようにするものである。特に OpenID Federation 1.0 で定義される Automatic Registration において、OP がどの選択肢を採用したかを RP に通知する登録レスポンスが存在しない場合に有用である。

最終仕様として承認されたことにより実装者に対する知的財産保護が提供され、仕様はこれ以上の改訂を受けない安定版となった。Michael B. Jones は自身のブログ Self-Issued にて「Final OpenID Connect RP Metadata Choices Specification」として 3 月 31 日に承認を報告している。

公開レビューは 2026 年 1 月 9 日から 3 月 10 日（60 日間）実施され、反対票ゼロという圧倒的なコンセンサスのもとで承認に至った。

### OpenID Federation 1.1 / OpenID Federation for OpenID Connect 1.1 公開レビュー継続

2026 年 2 月 17 日から始まった **OpenID Federation 1.1** および **OpenID Federation for OpenID Connect 1.1** の 60 日間公開レビューが 3 月を通じて継続した（レビュー期間: 2026 年 2 月 17 日〜4 月 18 日）。

この仕様分割の背景には、OpenID Federation 1.0 のプロトコル非依存な基盤部分が OpenID Connect 以外のプロトコルでも利用され始めたという事情がある。2025 年 4 月の SUNET 主催 Federation Interop イベントで分離のコンセンサスが成立し、Michael B. Jones が主導して次の二仕様に整理した。

- **OpenID Federation 1.1**: プロトコル非依存のフェデレーション基盤機能
- **OpenID Federation for OpenID Connect 1.1**: OpenID Connect および OAuth 2.0 向けプロトコル固有機能（エンティティタイプ識別子・メタデータ・クライアント登録フロー等）

両仕様を合わせた機能は OpenID Federation 1.0 と等価であり、機能の追加・削除はなくプロトコル依存性の有無で整理されている。AB/Connect WG が主導するこれら仕様の最終仕様化投票は 2026 年 4 月 21 日〜5 月 5 日に実施予定であった。

## 3. ミーティングと議論

AB/Connect WG の議事録は非公開であり、メーリングリストの 2026 年 3 月分アーカイブも本執筆時点でアクセスできなかった（pipermail が 503 エラー）。WG は隔週火曜日（日本時間 8:00 AM）および毎週木曜日（米国太平洋時間 7:00 AM）に定例ミーティングを開催している。

3 月の定例議題として、RP Metadata Choices 1.0 の承認投票（3 月 11 日開始）の進捗確認、OpenID Federation 1.1 の公開レビューへの対応、および複数の仕様ドラフト（connect-key-binding、connect-ephemeral-sub 等）の状況共有が行われたと考えられる。

## 4. メーリングリストの主要スレッド

openid-specs-ab メーリングリストの 2026 年 3 月分 pipermail アーカイブは本執筆時点でアクセスできなかった。RP Metadata Choices 1.0 の最終仕様投票に関する通知メールやフィードバックが流通していたと考えられるが、具体的なスレッド内容は確認できなかった。

また、OpenID Federation 1.1 の公開レビュー継続に伴い、フィードバックは openid-specs-ab メーリングリストを通じて WG に送付されるよう案内されていた。

## 5. GitHub 上の議論

### `openid/connect-key-binding` リポジトリ

AB/Connect WG 管理下の `connect-key-binding` リポジトリで 3 月に注目すべき 2 件のアクティビティがあった。

#### [openid/connect-key-binding#11](https://github.com/openid/connect-key-binding/pull/11) - Rename c_hash to c_s256（3 月 6 日マージ）

EthanHeilman による PR#11「Rename c_hash to c_s256」が Dick Hardt（dickhardt）のレビューを経て 2026 年 3 月 6 日にマージされた。この変更は、Token Request 時に DPoP JWT 内で提示する認可コードハッシュのクレーム名を `c_hash` から `c_s256` に改名するものである。

PR 内では 5 つの選択肢が検討された：

1. 切り詰めたハッシュ値 → コリジョンリスクがあり不採用
2. フル SHA-256 ハッシュを `c_hash` として → OpenID Connect Core 1.0 の ID Token に既存の `c_hash` クレームがあり名前衝突するため不採用
3. フル SHA-256 ハッシュを `c_s256` として → **採用**
4. 生の認可コードをそのまま含める → 認可コード漏洩リスクが増大するため不採用
5. チャレンジ値を省略する → Unknown Key Share (UKS) 攻撃に脆弱になるため不採用

この PR ではあわせて、`c_s256` が公開鍵置換攻撃（UKS 攻撃）の防御にどう機能するかを論じるセキュリティサブセクションが追加された。UKS 攻撃とは、攻撃者が正規の RP の鍵をすり替えることで、被害者の認証情報を不正に利用しようとする攻撃パターンである。

#### [openid/connect-key-binding#12](https://github.com/openid/connect-key-binding/pull/12) - Use Token Exchange instead（3 月 30 日オープン）

2026 年 3 月 30 日、JonasPrimbs が PR#12「Use Token Exchange instead」を開いた。Authorization Code Grant・Refresh Token Grant・Device Authorization Grant の代わりに Token Exchange（RFC 8693）を採用することを提案する内容で、主な主張は以下の 3 点である：

1. **仕様の簡素化**: 参照する複数の RFC（RFC 6749、OIDC Core、RFC 9449、RFC 8693）を Token Exchange フレームワークに集約できる
2. **将来性**: 新しい認証フローが自動的に DPoP バインドされた Access Token を生成できるよう設計できる
3. **柔軟性**: フロントエンド（`aud=rp-frontend`）とバックエンド（`aud=rp-backend`）に別々のスコープを持つ ID Token を取得できる

これに対し EthanHeilman は、スコープ付き ID Token のアイデアは評価するものの、OpenID Connect Key Binding の目的は「既存の OpenID フローに DPoP セキュリティを最小限の OP 変更で追加する」ことであり、Token Exchange への全面移行は仕様のスコープ外であると指摘した。EthanHeilman は、このアプローチを別仕様として検討すべきと提案し、PR は 3 月末時点でオープンのまま残った。

### `openid/connect-ephemeral-sub` リポジトリ

OpenID Connect Ephemeral Subject Identifier 1.0 のリポジトリでは、3 月末に用語定義に関する 2 件の issue がクローズした。

#### [openid/connect-ephemeral-sub#6](https://github.com/openid/connect-ephemeral-sub/issues/6) - Thoughts on 'Visit' language（3 月 30 日クローズ）

2026 年 1 月 22 日に 0xandybarlow が開いたこの issue は、仕様中の「visit（訪問）」という語の曖昧さを問題提起するものであった。仕様では「エフェメラルなサブジェクト識別子は Relying Party への各 End User の visit ごとに異なる sub 値を提供する」と記述されているが、「visit」は OpenID Connect や OAuth 2.0 全体を通じて未定義の語である。

0xandybarlow は「visit」の意図が「個別の HTTP リクエスト」ではなく「個別の認証セッション」を指すのであれば、セッション中は同一の ephemeral sub が保持され、ログアウトや有効期限後に初めて変わることを仕様上明確にすべきと提案した。この issue は 2026 年 3 月 30 日にクローズされた。

#### [openid/connect-ephemeral-sub#3](https://github.com/openid/connect-ephemeral-sub/issues/3) - Slight tightening of definition（3 月 31 日クローズ）

Macke によるこの issue は、仕様のセクション 4 における「エフェメラル識別子」の定義をより精密にすることを提案した。具体的には「値は再利用されるべきでなく、クライアントが End-User の複数の visit を相関づけられないようにすること」「応答値には十分なエントロピーが必要であること」を定義に明示すべきという内容であった。この issue は 2026 年 3 月 31 日にクローズされた。

## 6. 関連イベント

### OpenID Foundation 適合性テストプログラム独立監査体制の整備

2026 年 3 月 27 日、OpenID Foundation は Kantara Initiative が同 Foundation の Independent Conformance Testing Program における最初の「Authorized Auditor（認定監査機関）」として MOU を締結したと発表した。

これに先立ち、BixeLab、FIDO Alliance Inc.、Fime、Raidiam、TrustID Solutions の 5 組織が Testing Service Provider として MOU を締結していた。Authorized Auditor は Testing Service Applicant の正当性を確認するデューデリジェンスを実施し、OpenID Foundation の要件・評価基準に基づく構造化された評価を行う。

この適合性テストプログラムは、AB/Connect WG が管轄する OpenID Connect 仕様を含む OpenID Foundation 仕様全般の実装認証を支える重要なインフラである。

## 7. 今後の予定

2026年3月末時点での見通し：

- **OpenID Connect Relying Party Metadata Choices 1.0**: 最終仕様として承認済み（2026年3月26日）。実装者向け IP 保護が確定し、仕様は改訂を受けない安定版となった
- **OpenID Federation 1.1 / OpenID Federation for OpenID Connect 1.1**: 公開レビュー期間（〜2026年4月18日）が継続中。投票通知が 2026 年 4 月 14 日に発出予定で、投票は 4 月 21 日〜5 月 5 日の 14 日間を予定
- **OpenID Connect Key Binding 1.0**: `c_s256` 改名後のドラフト整備を継続。PR#12（Token Exchange 提案）への対応も引き続き議論
- **OpenID Connect Ephemeral Subject Identifier 1.0**: 用語定義に関する 2 件の issue が決着し、次のドラフト改訂への反映が期待される

## 8. 参考情報源

- [OpenID Connect Relying Party Metadata Choices 1.0 Final Specification Approved](https://openid.net/openid-connect-relying-party-metadata-choices-1-0-final-specification-approved/) - 2026年3月26日承認アナウンス
- [Notice of Vote to Approve Proposed OpenID Connect Relying Party Metadata Choices 1.0 Final Specification](https://openid.net/notice-of-vote-to-approve-proposed-openid-connect-relying-party-metadata-choices-1-0-final-specification/) - 2026年2月25日公開の投票通知
- [Public Review Period for Proposed OpenID Connect Relying Party Metadata Choices 1.0 Final Specification](https://openid.net/public-review-period-for-proposed-openid-connect-relying-party-metadata-choices-1-0-final-specification/) - 60 日間公開レビュー案内
- [Public Review Period for Proposed OpenID Federation 1.1 Final Specifications](https://openid.net/public-review-period-for-proposed-openid-federation-1-1-final-specifications/) - OpenID Federation 1.1 公開レビュー期間: 2026年2月17日〜4月18日
- [AB/Connect Working Group - OpenID Foundation](https://openid.net/wg/connect/) - WG 公式ページ
- [AB/Connect Working Group – Specifications](https://openid.net/wg/connect/specifications/) - 仕様一覧
- [openid/connect-key-binding#11 - Rename c_hash to c_s256](https://github.com/openid/connect-key-binding/pull/11) - 2026年3月6日マージ
- [openid/connect-key-binding#12 - Use Token Exchange instead](https://github.com/openid/connect-key-binding/pull/12) - 2026年3月30日オープン
- [openid/connect-ephemeral-sub#6 - Thoughts on 'Visit' language](https://github.com/openid/connect-ephemeral-sub/issues/6) - 2026年3月30日クローズ
- [openid/connect-ephemeral-sub#3 - Slight tightening of definition](https://github.com/openid/connect-ephemeral-sub/issues/3) - 2026年3月31日クローズ
- [openid/connect-key-binding GitHub リポジトリ](https://github.com/openid/connect-key-binding) - AB/Connect WG 管理の Key Binding 仕様リポジトリ
- [openid/connect-ephemeral-sub GitHub リポジトリ](https://github.com/openid/connect-ephemeral-sub) - Ephemeral Subject Identifier 仕様リポジトリ
- [openid/federation-connect-1.1 GitHub リポジトリ](https://github.com/openid/federation-connect-1.1) - OpenID Federation for OpenID Connect 1.1
- [openid-specs-ab メーリングリスト（pipermail）](https://lists.openid.net/pipermail/openid-specs-ab/) - 2026年3月分は本執筆時点でアクセス不可（503 エラー）
- [OIDF sets the stage for independent oversight of conformance testing](https://openid.net/oidf-sets-the-stage-for-independent-oversight-of-conformance-testing/) - 2026年3月27日、Kantara Initiative が Authorized Auditor として MOU 締結
- [Final OpenID Connect RP Metadata Choices Specification – Mike Jones: self-issued](https://self-issued.info/?p=2824) - 2026年3月31日、Mike Jones によるブログ記事
