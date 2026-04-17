---
title: "OpenID Foundation AI Identity Management CG 活動レポート (2026年2月)"
reviewed: true
---

# OpenID Foundation AI Identity Management CG 活動レポート (2026年2月)

> **執筆日:** 2026-04-17（遡及執筆）

## 1. 概要

**AI Identity Management Community Group（AIIM CG）** は、OpenID Foundation が 2025 年に設立した Community Group で、AI エージェントとデジタルアイデンティティ基盤の交差点を探求する。共同議長は Atul Tulshibagwale（SGNL）、Tobin South（WorkOS）、Jeff Lombardo（AWS）が務め、三つのサブグループ――Taxonomy（用語集）、Use Cases（ユースケース）、Threat Modelling（脅威モデリング）――が隔週木曜日 9am PT の定例ミーティングを持ち回りで開催している。

2026 年 2 月は、1 月 22 日の Threat Modelling サブグループによる MCP Identity Threat Matrix 策定セッションに続き、その成果を NIST への意見提出（3 月 6 日付）へと昇華させる集中作業の期間にあたる。GitHub 上では「エージェントのオントロジー的定義」と「MCP のスコープ／RAR 問題」という二つの新規議論が起票され、コミュニティの関心が認証・認可の「プリミティブ層」から「エージェントとは何か」という基礎的問いへと広がりつつある局面だった。

## 2. 公開された仕様・ドラフト改訂

2026 年 2 月に AIIM CG 名義で公開された仕様ドラフトや新バージョンは確認されなかった。Taxonomy サブグループが 2026 年上半期中の公開を目指す AI アイデンティティ用語集（Dictionary of Terms）は、引き続き準備中の段階だった。

## 3. ミーティングと議論

GitHub wiki には 2026 年 2 月の定例ミーティングとして **2 月 12 日** と **2 月 26 日** の 2 回が記録されている。議事録は公開されていないが（AIIM CG の議事録は非公開）、同時期に提起された GitHub issue およびメーリングリスト投稿から議論の大筋を再構成できる。

### 2 月 12 日ミーティング

この日と同日に Issue #22「Discussion: Agent Identity as a Declarative Ontological Layer」が alexander lebed により提起されており、ミーティング内の議論に触発されたか、議論の素地として投稿されたと推測される。議題の中心は「エージェントを認証・認可する前に、そもそもエージェントとは何かをどう定義するか」という存在論的問いにあったと見られる。

また Threat Modelling サブグループは、1 月 22 日に策定した MCP Identity Threat Matrix の精査と NIST RFI（NIST-2025-0035）への回答文書の起草を進めていたと考えられる。この回答は 3 月 6 日に提出され、本月の作業が直接的な下地となった。

### 2 月 26 日ミーティング

Issue #23「MCP Servers - Scope and RAR」が 2 月 25 日に提起されており、翌日のミーティングでこのテーマが取り上げられたと推測される。議論は FAPI WG との連携も念頭に置きつつ、AI/MCP 文脈における認可メカニズムの選択――OAuth スコープで十分か、それとも Rich Authorization Requests（RAR）が必要か――に踏み込んでいた。

> Issue #23 opener の bhjelm は、FAPI WG でなされた「OAuth スコープは AI 文脈での限定的な同意委任に適している（Brian Campbell の立場）」 vs.「既存ツールも評価に値するが細粒度認可が不可欠（Dima の立場）」という対立軸をクロスポストした。両サブグループ間の断片化を避けることで合意し、Dima は AIIM CG のホワイトペーパーグループが取り組んでいる情報を共有することを約束した。

## 4. メーリングリストの主要スレッド

AIIM CG のメーリングリスト（openid-aiim）では 2 月 16 日の週と 2 月 23 日の週にアーカイブが存在することを確認した（各週 6 KB 程度）。しかし pipermail の当該月インデックスへの直接アクセスが 404 を返したため、個別スレッドの内容は取得できなかった。以下はアーカイブが存在することを確認した上で「詳細内容は未取得」と記す。

- [2026-Feb-16 週アーカイブ](https://lists.openid.net/pipermail/openid-aiim/) — 取得試みるも 404
- [2026-Feb-23 週アーカイブ](https://lists.openid.net/pipermail/openid-aiim/) — 取得試みるも 404

GitHub の Issue #23 から間接的に確認できた議論（FAPI WG との MCP スコープ/RAR 論点）はミーティング欄に記述した。

## 5. GitHub 上の議論

### [openid/cg-ai-identity-management#22](https://github.com/openid/cg-ai-identity-management/issues/22) — Discussion: Agent Identity as a Declarative Ontological Layer

**開始:** 2026-02-12、提起者: alexanderlebed

**問題提起の内容:** AI エージェントがより自律的になるにつれ、認証・認可の仕組みが機能する前提として「そのエージェントが何であるか」を宣言的に定義する基盤レイヤーが必要だという提案。Alexander Lebed は「Agent ID」フレームワークの概念を提示し、以下の四要素を核心に据えた：

1. 永続的なグローバル一意識別子
2. 明示的なプリンシパル責任宣言
3. 委任権限スコープの形式化
4. 意味論的意味と暗号証明の分離

**主要参加者の立場:** Lebed は OpenID 標準との競合ではなく補完関係を強調し、「OpenID はエージェントの認証方法を定義する。Agent ID はエージェントが何であるかをそもそも定義する」と位置づけた。2026 年 2 月時点では提起者のみで、返信コメントは未着。

**状態:** オープン（未解決）

---

### [openid/cg-ai-identity-management#23](https://github.com/openid/cg-ai-identity-management/issues/23) — MCP Servers - Scope and RAR

**開始:** 2026-02-25、提起者: bhjelm

**問題提起の内容:** FAPI WG でなされた議論を AIIM CG にクロスポスト。MCP（Model Context Protocol）を通じた AI ツール連携における認可の粒度問題として、OAuth スコープと Rich Authorization Requests（RAR）のどちらが適しているかが論点となった。

**主要参加者の主張:**

- **Brian Campbell（OAuth コア仕様著者）:** OAuth スコープは「ソフトウェアへの限定的な同意委任」を実現しており AI 文脈に適している。まず確立された OAuth アプローチから始めるべきと主張。
- **Dima:** 既存ツールの評価は支持するが、現状の実装はアクセス権限が過剰すぎるとして細粒度認可の必要性を主張。

**合意事項:** FAPI WG と AIIM CG 間での断片化を避けることで合意。Dima は AIIM CG のホワイトペーパーグループが進める AI×アイデンティティ交差点に関する情報を共有することをコミットした。

**状態:** オープン（継続的な議論予定）

---

### Threat Modelling サブグループ — MCP Identity Threat Matrix の継続策定

1 月 22 日の集中セッションで初期ドラフトが作成された MCP Identity Threat Matrix は、2 月も引き続き精査・拡張された。この成果は 3 月 6 日に NIST-2025-0035 への回答文書として提出されており、主要な脅威カテゴリは以下の通りだった。

| カテゴリ                    | 代表的脅威                                        |
| --------------------------- | ------------------------------------------------- |
| データ流出                  | 悪意ある MCP サーバーによるコンテキスト送出       |
| 認証情報窃取                | 直接秘密要求、過剰権限付与                        |
| コード/サプライチェーン攻撃 | 脆弱性インジェクション、任意コード実行            |
| アイデンティティ/認可失敗   | 混乱した代理（Confused Deputy）、未認可ツール使用 |
| 監視ブラインドスポット      | WebSocket アップグレードによるガードレール回避    |

Threat Modelling サブグループ共同議長 Sarah Cecchetti（Semperis）と Chris Phillips（Adiuco）が取りまとめ、SAFE-MCP が文書化する 6 種の認証情報アクセス手法を上回る 20 以上の手法をカタログ化した。

## 6. 関連イベント

2026 年 2 月に AIIM CG メンバーが登壇した公開イベントは確認できなかった。ただし 2 月 13 日には OpenID Federation 1.0 の TIIME 2026 実装テストがアムステルダムで開催されており（FAPI/Connect WG 関連）、AIIM CG が推奨するトラストファブリック実装の参照例として内部で言及されていた可能性がある。

## 7. 今後の予定（2026 年 2 月末時点の視点）

2026 年 3 月に向けた直近の予定：

- **NIST RFI 回答の提出**（3 月初旬）: Threat Modelling サブグループによる NIST-2025-0035 への意見書最終化と提出
- **Taxonomy サブグループの用語集公開**（2026 年 H1 中）: AI アイデンティティ管理に関する標準的術語辞典の公開に向けた作業継続
- **Issue #22・#23 の議論深化**: エージェントのオントロジー的定義と MCP 認可メカニズム選択についての継続議論
- **定例 Threat Modelling セッション**: MCP Identity Threat Matrix のさらなるカバレッジ拡張（Safe MCP との比較分析を含む）

## 8. 参考情報源

- [OpenID Foundation AIIM CG 公式ページ](https://openid.net/cg/artificial-intelligence-identity-management-community-group/) — CG の目的・参加方法
- [cg-ai-identity-management GitHub リポジトリ](https://github.com/openid/cg-ai-identity-management) — Issue・PR・Wiki
- [GitHub wiki ホーム（ミーティングノート一覧含む）](https://github.com/openid/cg-ai-identity-management/wiki) — 2026-02-12・2026-02-26 のミーティングノートへのリンク（内容は非公開ロード失敗）
- [Issue #22: Agent Identity as a Declarative Ontological Layer](https://github.com/openid/cg-ai-identity-management/issues/22) — 2026-02-12 提起、エージェント存在論的定義の提案
- [Issue #23: MCP Servers - Scope and RAR](https://github.com/openid/cg-ai-identity-management/issues/23) — 2026-02-25 提起、MCP 認可メカニズムの議論
- [OIDF AIIM Threat Modelling による NIST-2025-0035 回答（PDF）](https://openid.net/wp-content/uploads/2026/03/Attachment1_NIST-2025-0035-0001.pdf) — 2026-03-06 提出、1 月〜2 月の作業成果
- [OIDF responds to NIST on AI agent security（ブログ）](https://openid.net/oidf-responds-to-nist-on-ai-agent-security/) — 2026-03-11 公開、回答の要旨
- [Identity Management for Agentic AI ホワイトペーパー（PDF）](https://openid.net/wp-content/uploads/2025/10/Identity-Management-for-Agentic-AI.pdf) — 2025-10-07 公開、AIIM CG の基礎文書
- [openid-aiim ML アーカイブ](https://lists.openid.net/pipermail/openid-aiim/) — 2026 年 2 月の週別アーカイブは存在確認済み（Week-of-Mon-20260216、Week-of-Mon-20260223）だが本文取得不可
