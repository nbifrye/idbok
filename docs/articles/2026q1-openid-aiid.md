---
title: "OpenID Foundation AI Identity Management CG 活動レポート (2026 Q1)"
---

# OpenID Foundation AI Identity Management CG 活動レポート (2026 Q1)

> **執筆日**: 2026-04-15
> この記事は 2026 年 Q1（1月〜3月）を対象とした遡及執筆です。

## 1. 概要

**Artificial Intelligence Identity Management Community Group（AIIM CG）** は、AI とアイデンティティ管理の交差点における課題を整理・議論するために、OpenID Foundation ボードが 2025 年 6 月に承認したコミュニティグループである。プロトコル仕様の策定よりも先に、用語の統一・ユースケースの整理・脅威モデルの構築を通じて、将来の標準化活動の地ならしをすることを目的としている。

Co-Chair は Atul Tulshibagwale（SGNL）と Jeff Lombardo（AWS）が務め、三つのサブグループ（Taxonomy、Use-cases、Threat Modelling）が隔週木曜日の定例コールを中心に活動している。

2026 Q1 における最大のイベントは、**NIST の AI エージェントセキュリティに関する意見公募（NIST-2025-0035）への回答提出**（3 月 11 日）であった。2025 年 10 月に公開したホワイトペーパーの分析を具体的な政策提言に昇華させたこの提出は、AIIM CG が対外的なアドボカシー機能を担い始めたことを示している。

## 2. 公開された仕様・ドラフト改訂

AIIM CG として Q1 2026 に公開した仕様や公式ドラフトは確認できなかった。

ただし、関連する外部ドラフトの動向として、2026 年 3 月 30 日に IETF において **draft-klrc-aiagent-auth-01**（AI Agent Authentication and Authorization）が公開された。本ドラフトは AWS・Zscaler・Ping Identity・OpenAI などの著者が共同で執筆したもので、SPIFFE/WIMSE・OAuth 2.0・OpenID Shared Signals Framework 等の既存標準をどのように組み合わせて AI エージェントの認証・認可を実現するかを記述している。AIIM CG の Threat Modelling サブグループが NIST への回答で言及した "emerging, practical standards" の一例として位置づけられる。

## 3. 主要な議論・決定事項

### NIST 意見公募（NIST-2025-0035）への対応

NIST は 2026 年 1 月 8 日付の Federal Register にて、AI エージェントのセキュリティに関する意見公募（Request for Information）を開始した。コメント締め切りは 2026 年 3 月 9 日。

AIIM CG の **Threat Modelling サブグループ**はこれに応じ、2026 年 3 月 11 日に OIDF 名義で正式な回答文書を提出した（文書番号: NIST-2025-0035-0001）。回答の要旨は以下のとおり。

- **問題の本質は技術的障害ではなく信頼の失敗にある**: AI エージェントが自分自身をどのように証明するか、何の権限で行動しているか、問題発生時の説明責任をどこに帰属させるかが未解決。
- **現状の問題点**: 多くの組織が手動管理されたアクセスリスト・署名なし資格情報・不明確な責任連鎖に頼っており、複数組織をまたぐ規模になると機能しない。
- **推奨アプローチ**: 自動的な資格情報検証・制約付きエージェント権限・行動の追跡可能性を備えた「信頼ファブリック（trust fabric）」の構築。
- **政策提言**: 組織を締め付ける要件を課すより、トランザクショントークン・ワークロードアイデンティティフェデレーション・AI ツール認証拡張などの実用的な新興標準へ誘導するガイダンスを NIST が示すことを求めた。

この回答は、2025 年 10 月に AIIM CG が公開したホワイトペーパー「Identity Management for Agentic AI」の分析を基盤としている。

### 継続的なサブグループ活動

Taxonomy・Use-cases・Threat Modelling の 3 サブグループが Q1 2026 を通じて隔週コールを継続したことが確認されている。公開されたミーティングミニッツは確認できなかったが、Threat Modelling サブグループが NIST 回答を主導したことから、Q1 は同サブグループが特に活発であったと推察される。

## 4. 会議・イベント

### AIIM CG 定例コール

隔週木曜日 9:00 AM PT に本体の定例コールが開催されている。参加には Participation Agreement への署名が必要。Q1 2026 中もこのスケジュールに沿った開催が継続された。

### OIDF ハイブリッドワークショップの予告

2026 年 3 月 13 日に、OIDF が 4 月 27 日開催のハイブリッドワークショップの参加登録を開始した。同ワークショップは IIW Spring 2026 の直前にカリフォルニア州マウンテンビュー近郊（対面＋オンライン）で開催予定。アジェンダには "Deep dive into latest white papers" および "Working Group Updates" が含まれており、AIIM CG のホワイトペーパーや NIST 回答が議題に上がることが期待されていた。

## 5. 今後の予定

（2026 Q1 完了時点での視点）

- **2026 年 4 月 27 日 OIDF ハイブリッドワークショップ**: AIIM CG の活動成果が披露される場として注目。ホワイトペーパーの次のフェーズに向けた議論も見込まれていた。
- **NIST ガイダンスの策定**: OIDF の提言を受けた NIST のガイダンス文書の公開が今後の焦点。AIIM CG はフォローアップのアドボカシーを継続する見込み。
- **IETF との連携**: draft-klrc-aiagent-auth を含む AI エージェント認証分野の IETF ドラフトに対し、OIDF としてのフィードバックや調整を深めることが課題として残っていた。
- **ホワイトペーパー第二弾の検討**: 2025 年 10 月の初版ホワイトペーパーを受けて、次のフェーズ（具体的な仕様推奨やユースケース別ガイダンス等）に向けた議論が見込まれていた。

## 6. 参考情報源

- [Artificial Intelligence Identity Management Community Group - OpenID Foundation](https://openid.net/cg/artificial-intelligence-identity-management-community-group/)
  — AIIM CG の公式ページ。グループの目的・構成・参加方法を掲載。
- [OIDF responds to NIST on AI agent security - OpenID Foundation](https://openid.net/oidf-responds-to-nist-on-ai-agent-security/)
  — 2026 年 3 月 11 日付のブログ記事。NIST-2025-0035 への回答提出を発表。
- [Response to NIST Request for Information Regarding Security (PDF)](https://openid.net/wp-content/uploads/2026/03/Attachment1_NIST-2025-0035-0001.pdf)
  — OIDF が提出した NIST 回答の全文（NIST-2025-0035-0001）。
- [New whitepaper tackles AI agent identity challenges - OpenID Foundation](https://openid.net/new-whitepaper-tackles-ai-agent-identity-challenges/)
  — 2025 年 10 月 7 日に公開された AIIM CG ホワイトペーパーの発表記事。
- [Let's Discuss Identity Management in AI - OpenID Foundation](https://openid.net/lets-discuss-identity-management-in-ai/)
  — 2025 年 6 月 24 日付。AIIM CG 発足のアナウンスメント。
- [draft-klrc-aiagent-auth-01 - AI Agent Authentication and Authorization (IETF)](https://datatracker.ietf.org/doc/draft-klrc-aiagent-auth/)
  — IETF における AI エージェント認証・認可のフレームワーク Internet-Draft。2026 年 3 月 30 日に -01 版公開。
- [Registration Open for OpenID Foundation Hybrid Workshop on Mon 27th April 2026](https://openid.net/registration-open-for-openid-foundation-hybrid-workshop-on-mon-27th-april-2026/)
  — 2026 年 3 月 13 日付。4 月 27 日開催のハイブリッドワークショップの告知。
- [Federal Register: RFI Regarding Security Considerations for AI Agents (2026-00206)](https://www.federalregister.gov/documents/2026/01/08/2026-00206/request-for-information-regarding-security-considerations-for-artificial-intelligence-agents)
  — NIST-2025-0035 の連邦官報掲載（2026 年 1 月 8 日）。コメント期限は 2026 年 3 月 9 日。
