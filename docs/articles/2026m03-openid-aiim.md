---
title: "OpenID Foundation AI Identity Management CG 活動レポート (2026年3月)"
---

# OpenID Foundation AI Identity Management CG 活動レポート (2026年3月)

> 執筆日: 2026-04-15（遡及執筆）

## 1. 概要

AI Identity Management Community Group（AIIM CG）は、AI エージェントのアイデンティティ管理・認証・認可に関する技術標準化を推進する OpenID Foundation のコミュニティグループである。2025 年 10 月に公開した「Identity Management for Agentic AI」ホワイトペーパーを起点に、タクソノミー（分類）、ユースケース、脅威モデリングの 3 つのサブグループで活動している。

2026 年 3 月の主な活動は以下の通り。

- **NIST への RFI 回答提出（3 月 11 日）**: 脅威モデリングサブグループが NIST の AI エージェントセキュリティに関する情報収集要請（NIST-2025-0035）への回答を提出した。
- **定例コールのスケジュール改訂**: 1PM PT の定例コールが定足数不足を理由に廃止され、隔週 9AM PT の総会のみに一本化された。

GitHub への新規 issue・PR は 3 月中には確認されず、議事録も非公開のため、本レポートはメーリングリストと GitHub の既存議論を中心に再構成している。

---

## 2. 公開された仕様・ドラフト改訂

### OIDF の NIST RFI 回答（2026 年 3 月 11 日）

OpenID Foundation の AIIM CG 脅威モデリングサブグループが、NIST の情報収集要請 **NIST-2025-0035**（「AI エージェントシステムのセキュリティ確保に関する RFI」）への正式回答を提出した。2025 年 10 月のホワイトペーパーの知見を具体的な政策提言へと発展させたものである。

**中心的主張**:

> AI エージェントセキュリティにおける最大のリスクは技術的な欠陥ではなく、「誰がこのエージェントに行動を許可したか」「誰の代理として動いているか」という信頼の失敗である。

現状のデプロイでは、手動管理されたアクセスリスト・署名なし認証情報・責任の所在不明という場当たり的な回避策が横行しており、スケールアップとともに機能不全に陥ると指摘した。

**提言内容**: NIST ガイダンスを通じて以下の「トラストファブリック」の構築を促すべきとした。

- 自動的なクレデンシャル検証
- エージェントへの制約された権限付与
- アクション実行の追跡可能な説明責任

具体的な新興標準として、トランザクショントークン（Transaction Tokens）、ワークロード・アイデンティティ・フェデレーション、AI プロトコル認証拡張を推奨した。

---

## 3. ミーティングと議論

AIIM CG の議事録は非公開であるため、以下はメーリングリストの投稿から再構成した情報である。

### 定例コール（2026 年 3 月 19 日）— 定足数不成立

3 月 19 日（木）1PM PT の定例コールが、参加者 5 名のみという定足数不足のため早期終了した。議長の Atul Tulshibagwale（SGNL.ai）が同日中にメーリングリストへ報告し、スケジュール体制の見直し提案を行った（詳細は §4 参照）。

なお、ウィキに残る最後の議事録は 2 月 26 日付であり、3 月分のミーティング記録は公開されていない。

---

## 4. メーリングリストの主要スレッド

### [No quorum on the call today](https://lists.openid.net/pipermail/openid-aiim/Week-of-Mon-20260316/000170.html) — 2026-03-19 開始

**参加者**: Atul Tulshibagwale、Stan Bounev、Bjorn Hjelm、Alex Babeanu、Flemming Andreasen、Eleanor Meritt、Adwait Shinganwade（計 8 通）

**問題提起（Atul Tulshibagwale）**:

> 「本日のコールは定足数未達（参加者 5 名）のため早期終了しました。1PM PT の時間帯での定例コールは繰り返し同様の問題が起きています。このシリーズを廃止し、サブグループコールがない隔週に行う総会（CG Call）のみにすることを提案します。ご意見をお聞かせください。」

提案の背景として、現行体制では毎週 2 種類のコールが混在しており、総会への出席が分散していた。

**参加者の反応**:

| 発言者             | 主旨                                                             |
| ------------------ | ---------------------------------------------------------------- |
| Stan Bounev        | 「良い提案です。支持します。」（即時賛成）                       |
| Bjorn Hjelm        | 「この提案を支持します。」                                       |
| Alex Babeanu       | "+1"（IndyKite、簡潔に同意）                                     |
| Flemming Andreasen | "+1"                                                             |
| Eleanor Meritt     | 「問題ありません。一貫した 9AM PT の時間帯の方が管理しやすい。」 |
| Adwait Shinganwade | "+1"                                                             |

全参加者が提案に賛同し、反対意見は皆無だった。

**決定（Atul Tulshibagwale、3 月 20 日）**:

> 「皆さんのご意見ありがとうございました。1PM PT 隔週木曜のシリーズをキャンセルします。」

この決定により、AIIM CG の全体コールは **隔週木曜 9AM PT のみ** に統合された（サブグループコールとは交互に開催）。

---

## 5. GitHub 上の議論

3 月中に新規作成または更新された issue・PR は確認されなかった。ただし、2 月に開かれた以下の議論が引き続き注目される状況にある。

### [openid/cg-ai-identity-management#23](https://github.com/openid/cg-ai-identity-management/issues/23) — MCP Servers - Scope and RAR

2 月 25 日に Bjorn Hjelm が作成。FAPI WG での議論（OAuth スコープ vs. Rich Authorization Requests）を AIIM CG に持ち込んだものである。

- **Brian Campbell の立場**: 「OAuth スコープは AI ユースケースに適している。OAuth の核心機能——ソフトウェアへの限定的な権限委譲——は AI システムの要件と完全に一致している。既存の OAuth アプローチを出発点にすべき」
- **Dima の立場**: 「既存ツールの評価は必要だが、きめ細かな認可（fine-grained authorization）は切実に必要とされている。現状のデプロイでは過度に広い権限が付与されている」
- **帰結**: FAPI WG のミーティングで、この議題は AIIM CG で扱う方が適切との結論に至り、両グループ間の断絶を避けるために連携することを確認した。

**ステータス**: オープン・未解決。

### [openid/cg-ai-identity-management#22](https://github.com/openid/cg-ai-identity-management/issues/22) — Discussion: Agent Identity as a Declarative Ontological Layer

2 月 12 日に Alexander Lebed が提起した概念的フレームワーク提案。

- **提案の要旨**: 現行の認証・認可フレームワークは「エージェントとして何が存在し、誰の宣言された責任のもとにあるか」という根本的な問いを欠いている。グローバルに一意のエージェント識別子、責任主体の明示的な指定、委任スコープの形式化、意味論的意味と暗号検証の分離を含む事前レイヤー（Authentication/Authorization より前段）が必要だとする。
- **位置付け**: 既存インフラとの競合ではなく補完的なオントロジー的基盤として提案されており、プロジェクト「aiagentid.org」として公開・非商業・協働的に開発中とされている。

**ステータス**: オープン。コミュニティからの実質的な応答は 3 月時点でまだ見られない。

---

## 6. 関連イベント

3 月中に AIIM CG に直接関連するカンファレンス発表や特別セッションは確認できなかった。

NIST への RFI 回答（§2 参照）は、米国政府の AI エージェントセキュリティ政策形成プロセスに OpenID Foundation が正式に関与する動きとして業界内で注目された。

---

## 7. 今後の予定

（2026 年 3 月末時点での展望）

- **ミーティング体制の新体制への移行**: 1PM PT シリーズ廃止を受け、4 月以降は隔週 9AM PT 総会のみでの運営となる。出席率の改善が期待された。
- **MCP サーバーの認可フレームワーク**: OAuth スコープ vs. RAR の議論（#23）は継続中であり、両グループ（FAPI / AIIM）の連携による整理が見込まれた。
- **ホワイトペーパーの継続改訂**: GitHub issue #14 で公開されているホワイトペーパーフィードバックの収集が継続されており、改訂版の準備が進められていた。

---

## 8. 参考情報源

- [AIIM CG メーリングリストアーカイブ (2026年3月 Week of Mon 20260316)](https://lists.openid.net/pipermail/openid-aiim/Week-of-Mon-20260316/) — 「No quorum on the call today」スレッド（8 通）を収録
- [AIIM CG メーリングリストアーカイブ (2026年3月 Week of Mon 20260330)](https://lists.openid.net/pipermail/openid-aiim/Week-of-Mon-20260330/) — 3 月 30 日週（2 通、主に 4 月初旬の内容）
- [OIDF responds to NIST on AI agent security](https://openid.net/oidf-responds-to-nist-on-ai-agent-security/) — 2026 年 3 月 11 日付の公式発表
- [Artificial Intelligence Identity Management Community Group](https://openid.net/cg/artificial-intelligence-identity-management-community-group/) — AIIM CG の公式ページ
- [openid/cg-ai-identity-management GitHub リポジトリ](https://github.com/openid/cg-ai-identity-management) — Issue・PR・Wiki
- [Issue #23: MCP Servers - Scope and RAR](https://github.com/openid/cg-ai-identity-management/issues/23) — OAuth スコープ vs. RAR の議論
- [Issue #22: Agent Identity as a Declarative Ontological Layer](https://github.com/openid/cg-ai-identity-management/issues/22) — オントロジー的エージェント ID レイヤーの提案
- [Identity Management for Agentic AI (ホワイトペーパー, 2025年10月)](https://openid.net/wp-content/uploads/2025/10/Identity-Management-for-Agentic-AI.pdf) — CG の基礎文書
- [AIIM CG Wiki (ミーティングノート)](https://github.com/openid/cg-ai-identity-management/wiki) — 2 月 26 日まで公開（3 月分は非公開）
