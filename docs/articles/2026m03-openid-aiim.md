---
title: "OpenID Foundation AIIM CG 活動レポート (2026年3月)"
---

# OpenID Foundation AIIM CG 活動レポート (2026年3月)

> **執筆日:** 2026-04-15（遡及執筆）  
> 本記事は 2026年3月 の活動を事後的に記録したものです。

## 1. 概要

**AI Identity Management Community Group (AIIM CG)** は、OpenID Foundation Board により 2025年4月に設置されたコミュニティグループである。AI プラットフォームが既存のアイデンティティ標準を十分に活用できていない状況（「AI コミュニティとアイデンティティコミュニティのサイロ化」）を解消するため、ユースケース調査・AI アーキテクチャ分析・推奨事項の策定を担う。なお、グローバル標準プロトコルの開発は WG に委ねる方針で、CG 自体は策定主体ではない。

**共同議長:** Atul Tulshibagwale (SGNL) / Jeff Lombardo (AWS)  
**サブグループ構成:**

| サブグループ     | 共同議長                   |
| ---------------- | -------------------------- |
| Taxonomy         | Jeff Lombardo              |
| Use-Cases        | Alex Babeanu (IndyKite)    |
| Threat Modelling | Sarah Cecchetti (Semperis) |

2026年3月の主な活動は以下の2点に集約される。

1. **NIST RFI (NIST-2025-0035) への回答提出（3月9日締切・3月11日公開）** — Threat Modelling サブグループが 2月から主導してきた AI エージェントセキュリティに関する RFI 回答が完成し、OIDF として提出・公開された。
2. **ミーティングスケジュールの見直し** — 3月19日の全体コールが定足数不足（出席5名）で早期解散となり、隔週開催のうち午後1時PT枠の全体コールを廃止することが決定された。

GitHub リポジトリ上での新規 issue 作成・PR マージは3月中に確認できなかった。

---

## 2. 公開された仕様・ドラフト改訂

### OIDF による NIST AI エージェントセキュリティ RFI 回答（3月11日公開）

- **発表日:** 2026年3月11日
- **発表URL:** https://openid.net/oidf-responds-to-nist-on-ai-agent-security/
- **提出文書:** https://openid.net/wp-content/uploads/2026/03/Attachment1_NIST-2025-0035-0001.pdf
- **規制情報:** https://www.regulations.gov/document/NIST-2025-0035-0001

NIST/NCCoE が募集した RFI「Request for Information Regarding Security of Artificial Intelligence Agents」（NIST-2025-0035、締切: 3月9日）に対し、AIIM CG の Threat Modelling サブグループが回答を作成し、OIDF として提出した。

回答の核心的主張は「AI エージェントセキュリティの最大のリスクは技術的失敗ではなく、信頼の失敗にある」というものである。現状のデプロイメントは手動管理のアクセスリスト・署名のないクレデンシャル・不明確な説明責任チェーンという場当たり的な解決策に依存しており、自動的にクレデンシャルを検証し、エージェントの権限を制約し、行動を説明責任のある主体に追跡できる「信頼ファブリック」の必要性を訴える。

推奨される具体的な標準として、Transaction Tokens・Workload Identity Federation・AI ツールプロトコルの認証拡張が挙げられている。

OIDF アナウンスから引用された主要な寄稿者のコメント：

> 「OpenID Foundation の AIIM コミュニティグループの活動は極めて重要です。この技術はまだ草創期であるため、実装がばらばらな状態です。」  
> — **Sarah Cecchetti**（AIIM Threat Modelling サブグループ議長、Semperis プロダクトマネジメントディレクター）

> 「OpenID Foundation の AIIM CG の NIST 回答作成への参加を通じて、多種多様なアイデアや新興課題がより鮮明に焦点化されました。」  
> — **Chris Phillips**（独立アイデンティティアーキテクト、Adiuco）

この回答は2月中の ML 上での集中的な議論（後述）を経て完成したものであり、3月は提出・公開フェーズに相当する。

---

## 3. ミーティングと議論

### 3月19日 全体CG コール — 定足数不足と運営改革

3月19日（木）午後1時PT の全体CG コールは、出席者が5名のみで **定足数に達せず**、早期解散となった。これを受け、議長の Atul Tulshibagwale はその日のうちにメーリングリストで以下の提案を行った：

> 「本日のコールは定足数不足（出席5名）により早期に閉会しました。これはこの時間帯（午後1時PT）に開催する場合に繰り返し観察されているパターンと一致しています。サブグループコールを開催しない週の全体CG コールのみを残し、午後1時PT のコールシリーズを廃止することを提案します。ご意見をお聞かせください。」  
> （2026-03-19、Atul Tulshibagwale、メーリングリストより）

提案に対し、Stan Bounev（VeriClouds）、Bjorn Hjelm、Alex Babeanu（IndyKite）、Flemming Andreasen（Cisco）、Adwait Shinganwade が即日賛成を表明した。Eleanor Meritt のみ「午前9時PT の一貫した時間帯のほうが把握しやすい」とスケジュール管理の観点から意見を述べたが、廃止に反対したわけではない。

翌3月20日（金）、Atul Tulshibagwale はコミュニティの総意を確認し、**午後1時PT 枠の隔週全体コール（一連のシリーズ）を廃止**すると確定した。以後の全体CG コールは、サブグループコールのない週に午前9時PT で開催する体制へ移行する。

### サブグループコール

Taxonomy・Use-Cases・Threat Modelling の各サブグループは、隔週木曜日午前9時PT のスケジュールで3月中も継続して開催された。ただし、議事録は非公開であるため詳細な内容は確認できていない。

---

## 4. メーリングリストの主要スレッド

3月のメーリングリストアーカイブは週次単位で管理されており、月次インデックス（`/2026-March/`）は提供されていない。3月に属する週のアーカイブを確認した結果、技術的議論を含む新規スレッドは確認できず、実質的な3月のスレッドは以下の1本のみであった。

---

**[[Openid-aiim] No quorum on the call today](https://lists.openid.net/pipermail/openid-aiim/2026-March-4/)** — 2026-03-19 開始  
**参加者:** Atul Tulshibagwale、Stan Bounev、Bjorn Hjelm、Alex Babeanu、Flemming Andreasen、Eleanor Meritt、Adwait Shinganwade（計7名、8通）

**発端:** 議長 Atul Tulshibagwale が3月19日の全体CG コールが定足数不達（5名）で閉会したことを報告し、午後1時PT 枠の隔週開催廃止を提案。

**議論の流れ:** 6名が即日賛成を表明。Eleanor Meritt のみ「一定の時間帯に統一する方が管理しやすい」と補足意見を述べたが、廃止自体には異議なし。

**到達した合意:** 3月20日に議長が廃止を正式確認。午前9時PT 隔週枠への一本化が決定された。

---

なお、週次アーカイブ「Week of Mon 2026-03-30」に含まれるメッセージ（Jeff Lombardo の Taxonomy サブグループ欠席連絡・Tom Jones のユースケース共有）は実際には4月2〜3日付であり、実質的には4月活動に分類される。

---

## 5. GitHub 上の議論

該当月（2026-03-01〜2026-03-31）に **新規 issue の作成はゼロ、マージ済み PR もゼロ**であった。リポジトリ `openid/cg-ai-identity-management` の最終コミットは 2025年10月9日であり、3月中にコードベースへの変更はなかった。

3月時点でオープン状態だった主要 issue：

| #                                                                    | タイトル                                                       | 開始日     | 起票者         |
| -------------------------------------------------------------------- | -------------------------------------------------------------- | ---------- | -------------- |
| [#23](https://github.com/openid/cg-ai-identity-management/issues/23) | MCP Servers - Scope and RAR                                    | 2026-02-25 | bhjelm         |
| [#22](https://github.com/openid/cg-ai-identity-management/issues/22) | Discussion: Agent Identity as a Declarative Ontological Layer  | 2026-02-12 | alexanderlebed |
| [#20](https://github.com/openid/cg-ai-identity-management/issues/20) | What are the different actors for each component of the chain? | 2025-10-09 | identitymonk   |
| [#14](https://github.com/openid/cg-ai-identity-management/issues/14) | Feedback on the Agentic AI whitepaper                          | 2025-09-30 | tobinsouth     |

これらの issue は2月以前に開始されており、3月中に新規コメント活動が確認できたものはなかった。

また、3月時点でオープン状態の PR（#21、#15、#13）もマージされずに残留しており、最新コミット以降のリポジトリ開発は事実上停止状態であった。

---

## 6. 関連イベント

### [un]prompted AI Security Practitioner Conference（3月3〜4日）

2026年3月3〜4日に **[un]prompted** と題した AI セキュリティカンファレンスが開催された（https://unpromptedcon.org）。リモート参加も可能な形式で、Jeff Lombardo が2月26日の ML 投稿でメンバーに案内した。AIIM CG のテーマと関連する AI エージェントセキュリティを扱うイベントとして位置づけられる。

### NIST AI Agent Standards Initiative

2026年2月に NIST が発表した「AI Agent Standards Initiative」（https://www.nist.gov/caisi/ai-agent-standards-initiative）は、AIIM CG の活動文脈と密接に関連する。AIIM はこのイニシアティブの RFI（NIST-2025-0035）に応じた形であり、今後も NIST との関係が続く見込みである。

---

## 7. 今後の予定

3月時点で把握されていた次月以降の動き（当時の視点）：

- **NCCoE コンセプトペーパーへのコメント（4月2日締切）:** Flemming Andreasen が2月の ML で指摘した NCCoE 文書「Accelerating the Adoption of Software and AI Agent Identity and Authorization」のコメント期限が4月2日であり、AIIM CG の NIST 回答素材を活用した対応が検討されていた。
- **ミーティング体制の移行:** 3月20日に決定した午前9時PT 隔週一本化体制が4月以降は本格運用される。
- **サブグループ継続作業:** Taxonomy サブグループは2026年上半期ロードマップとして「用語辞典」の作成を予定。Use-Cases・Threat Modelling の各サブグループも隔週ペースを維持。
- **Tom Jones によるユースケース提案:** 4月初旬に ML で共有された「Privacy-enhanced User Experience Agent interactions with Mobile Certificates」ユースケースのレビューが4月の議題になる見込みであった。

---

## 8. 参考情報源

| リソース                                                                           | 説明                                                                  |
| ---------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| https://lists.openid.net/pipermail/openid-aiim/                                    | AIIM CG メーリングリストアーカイブ（週次インデックス一覧）            |
| https://lists.openid.net/pipermail/openid-aiim/2026-March-4/                       | 3月16日週のアーカイブ（「No quorum on the call today」スレッド・8通） |
| https://openid.net/oidf-responds-to-nist-on-ai-agent-security/                     | OIDF による NIST RFI 回答発表（2026-03-11）                           |
| https://openid.net/wp-content/uploads/2026/03/Attachment1_NIST-2025-0035-0001.pdf  | NIST-2025-0035 への OIDF 提出文書                                     |
| https://www.regulations.gov/document/NIST-2025-0035-0001                           | regulations.gov 上の提出記録                                          |
| https://github.com/openid/cg-ai-identity-management                                | AIIM CG GitHub リポジトリ（3月中の新規 issue・PR なし）               |
| https://github.com/openid/cg-ai-identity-management/issues                         | オープン issue 一覧                                                   |
| https://openid.net/cg/artificial-intelligence-identity-management-community-group/ | AIIM CG 公式ページ                                                    |
| https://unpromptedcon.org                                                          | [un]prompted AI セキュリティカンファレンス（2026-03-03/04）           |
| https://www.nist.gov/caisi/ai-agent-standards-initiative                           | NIST AI Agent Standards Initiative                                    |
