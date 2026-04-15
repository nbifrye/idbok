---
title: "OpenID Foundation Australian Digital Trust CG 活動レポート (2026年3月)"
---

# OpenID Foundation Australian Digital Trust CG 活動レポート (2026年3月)

**執筆日**: 2026-04-15（遡及執筆）

## 1. 概要

Australian Digital Trust Community Group (ADT CG) は、オーストラリアにおけるデジタルアイデンティティおよびトラストエコシステムに関する専門家の協業を促進するために OpenID Foundation が運営する Community Group である。隔週月曜 17:00 AEDT に定例コールを実施しており、Co-chair は Dima Postnikov、Victoria Richardson、Dave Hyland、Brad Carr、Olaf Grewe が務めている。

2026年3月の ADT CG は、**6月22日にメルボルンで予定されている「Innovation Day」へ向けた Trust Framework Analysis サブグループの集中的な作業**が活動の中心であった。AGDIS（Australian Government Digital ID System）を eIDAS2、NIST 800-63、UK DIATF、Canada DIACC、Singpass、BankID 等の国際的なトラストフレームワークと比較するワークブックの完成、ユースケースの検証、Top 10 相互運用性インサイトの抽出が並行して進められた。本体の CG コールでは、OIDF の各仕様のパブリックレビュー動向、Age Assurance に関する執筆企画、ANAO (Australian National Audit Office) による Digital ID プログラム監査への意見形成が主要議題となった。

メーリングリストへの投稿は 4 通（いずれも会議招集）、GitHub 上では meeting minutes 1 件と AGDIS vs NZ DISTF 比較資料の PowerPoint 3 版が公開された。

## 2. 公開された仕様・ドラフト改訂

ADT CG は独自の仕様ドラフトを策定する WG ではなく、本月に ADT CG 名義で公開された仕様改訂はない。ただし、3月9日および3月23日の定例コールで、他 WG の仕様パブリックレビュー状況が共有された:

- DADE CG（Death and the Digital Estate）からホワイトペーパーが公開され、CG コール内で紹介された。
- OpenID Foundation の3件の仕様が公開レビュー期間中で、5月までに投票が予定されている旨が報告された。
- OpenID Federation 1.1 仕様の投票が 5月4日から開始される予定が共有された（議事録 2026-03-09 より）。

ADT CG としての公式文書公開は、ワーキングドラフトとしてリポジトリに追加された AGDIS と NZ DISTF（Digital Identity Services Trust Framework）の比較プレゼンテーション 3 版（`AGDIS_vs_NZ_DISTF_OpenID_Branded.pptx` / `AGDIS_NZ_DISTF_Revised.pptx` / `AGDIS_NZ_DISTF_Revised v2.pptx`、いずれも 2026-03-30 コミット）に留まる。

## 3. ミーティングと議論

2026年3月中、ADT CG 本体の定例コールが 2 回、Trust Framework Analysis サブグループのコールが 3 回（確認できた限り）開催された。議事録・議題は GitHub リポジトリの `TrustFrameworkAnalysis/minutes/` ディレクトリおよび HackMD (`@adtcg`) で公開されている。

### 3-1. ADT CG 定例コール 2026-03-09

- **参加者（7 名）**: Victoria Richardson（議長）、Miki Brotzler、Jacob Oberman、Jason Raaschou、Dave Hyland、John Scullen、Dima Postnikov
- **主要議題**:
  - OIDF アップデート（DADE ホワイトペーパー公開、3 仕様のパブリックレビュー、OpenID Federation 1.1 投票開始予定）
  - Age Assurance イニシアチブ: 「what has worked and what hasn't work in Australia（オーストラリアで何が機能し、何が機能しなかったか）」を主題とする記事の公開方針を合意
  - John Scullen による EU スタディツアー報告（SAML 関連トピック、資料は Slack チャネルで共有）
  - コミュニティレトロスペクティブ（Derek が主導、実施日調整中）
  - ANAO による Digital ID 監査に対する ADT CG としての意見形成
  - Innovation Day 登壇への参加者フィードバック収集
  - 西オーストラリア州からの参加者誘致の必要性
- **確認されたイベント**: Biometrics Institute conference（3月19日・メルボルン）、EIC Berlin（5月19–22日）、IDENTIVERSE Las Vegas（6月15–18日）、ACGDT Innovation Day Melbourne（6月22日）
- **議事録メモ**: Victoria Richardson が事前メールで「ビクトリア州および南オーストラリア州の祝日により出席者が減る可能性があるが、NSW およびおそらく QLD からの参加は見込める」と案内している（ML 000042 より）

### 3-2. ADT CG 定例コール 2026-03-23

- **議長/議事録担当**: DH（Dave Hyland）/ DP（Dima Postnikov）
- **参加者（9 名）**: Miki Brotzler、Dave Hyland、Dima Postnikov、Derek Munneke、Jacob Oberman、John Scullen、Hemang Rathod、Linden Dawson、Lyla Pham（NAB）
- **主要議題・決定事項**:
  - OIDF の 3 件のパブリックレビューが継続中（投票期限は5月までに分散）
  - **イースター休暇（4月6日）に伴い次回定例は 4月20日に延期**
  - レトロスペクティブの日程調整継続（Derek 主導）
  - Age Assurance ブログの執筆開始を Slack で告知
  - ANAO による Digital ID プログラム監査への意見提出の論点整理
  - Innovation Day 準備状況レビュー
- **サブグループ状況**: SIDI Trust Framework Analysis と Age Assurance の 2 サブグループがアクティブに稼働中と報告された

### 3-3. Trust Framework Analysis サブグループ 2026-03-02

- **参加者**: Dave Hyland、Victoria Richardson、Jo Spencer、Derek Muneke、Jason Raaschou
- **議題**:
  1. 参加同意書・Slack・ML のアドミニストレーション
  2. 6月 Innovation Day 発表準備
  3. グローバルトラストフレームワーク（eIDAS2、NIST 800-63、UK DIATF、Canada DIACC、Singpass、BankID）との比較分析の継続
  4. ユースケース検証
- **主要な議論**: 議事録には「AGDIS may not be fully fit for private sector use cases（AGDIS は民間セクターのユースケースに完全には適合しない可能性がある）」との認識が記録されており、職場資格情報（workplace credentials）、年齢確認、データ共有に関する懸念、および政府向けフレームワークと商用フレームワークの構造的差異が議論された（議事録 2026-03-02 より）。
- **主なアクション**: Dave Hyland が Stefan Charsley に連絡しニュージーランドのインサイトを取得すること、既存ユースケースをグループにフィードバック用に回覧すること、スプレッドシート分析の完了、Innovation Day プレゼンテーションの開発、Innovation Day 後の「City Hub」向けパッケージングまで含めたサブグループ全体の 6月までのセッション計画策定
- **備考**: 議事録末尾の「次回ミーティング: Monday 16 March 2025」は書式上の誤記で、実際の次回は 2026-03-16。ドキュメントには同様の年号誤記が散見されるため、読む際は注意が必要。

### 3-4. Trust Framework Analysis サブグループ 2026-03-16

- **参加者**: Miki Brotzler、Dave Hyland、Olaf Grewe、Derek Munneke、Victoria Richardson、Stefan Charsley、Eric Jiang
- **議題**: 比較ワークブックレビュー、ユースケース検証、Top 10 相互運用性インサイトの抽出、Innovation Day プレゼンテーション開発
- **スコープの拡張**: 前月までの比較対象（eIDAS2、NIST 800-63、UK DIATF、Canada DIACC、Singpass、BankID）に加え、**日本の標準を特定ユースケースとして組み込む**方針が確認された（HackMD 議題より）。また、Stefan Charsley（NZ）が正式にサブグループに合流。

### 3-5. Trust Framework Analysis サブグループ 2026-03-30

- **議題（3月15日の Dave Hyland による招集メッセージより）**: ワークブックが完成し、「Top 10 insights list to consider & validate（検討・検証すべき Top 10 インサイトリスト）」を確定することが主目的と告知された（ML 000043 より）。
- **成果物**: 当日および直後に GitHub リポジトリへ 3 版の PowerPoint が `TrustFrameworkAnalysis/` 直下にアップロードされた:
  - `AGDIS_vs_NZ_DISTF_OpenID_Branded.pptx`（353 KB）
  - `AGDIS_NZ_DISTF_Revised.pptx`（316 KB）
  - `AGDIS_NZ_DISTF_Revised v2.pptx`（316 KB）
- **議事録**: 3月30日ミーティングの議事録ファイル（`2026-03-30.md` 等）はリポジトリに確認できず、次回 2026-04-13 の HackMD 議題内で「30 March: Top 10 Insights」が完了済みマイルストーンとして記録されている。

### Innovation Day（2026年6月22日）準備のマイルストーン

3月中に Trust Framework Analysis サブグループ内で確立された準備タイムライン（HackMD より）:

| 日付       | マイルストーン                    |
| ---------- | --------------------------------- |
| 2026-03-16 | ワークブックレビュー              |
| 2026-03-30 | Top 10 インサイト確定             |
| 2026-04-13 | ユースケースレビュー              |
| 2026-06-08 | プレゼンテーション最終化          |
| 2026-06-22 | Innovation Day 本番（メルボルン） |

## 4. メーリングリストの主要スレッド

2026年3月の `openid-au-digital-trust` メーリングリスト投稿は、会議招集メッセージが 4 通のみであった。実質的な技術的往復議論は確認できず、議論そのものは Slack チャネルおよび HackMD の共同編集、Zoom コール上で行われている構造である。以下に記録のため 4 通を列挙する:

- [ADTCG Agenda and Minutes from previous meeting](https://lists.openid.net/pipermail/openid-au-digital-trust/Week-of-Mon-20260309/000042.html) — 2026-03-09 00:23 UTC, Victoria Richardson。祝日による出席者減への予告と、3月9日定例のアジェンダ HackMD・Zoom 情報の案内。
- [ADT Subgroup meeting 5 PM AEST](https://lists.openid.net/pipermail/openid-au-digital-trust/Week-of-Mon-20260309/000043.html) — 2026-03-15 23:19 UTC, David Hyland。3月16日の Trust Framework Analysis サブグループコール招集。「ワークブック完成」「Top 10 インサイトリストを検証する」旨が本文に明記されており、サブグループの進捗を示唆する実質情報を含む唯一のメール。
- [ADT CG. Meeting](https://lists.openid.net/pipermail/openid-au-digital-trust/Week-of-Mon-20260323/000044.html) — 2026-03-23 03:51 UTC, David Hyland。3月23日定例コールの当日告知。
- [Trustframeworks Subgroup](https://lists.openid.net/pipermail/openid-au-digital-trust/Week-of-Mon-20260323/000045.html) — 2026-03-29 23:14 UTC, David Hyland。3月30日サブグループコールの告知。

**観察**: ML の活用が軽量（会議告知のみ）である点は ADT CG の従来からの傾向で、技術的議論は公開 HackMD 議題ページと GitHub コミット（議事録・成果物）が実質的な一次情報源となる。`non-public` に分類されがちな CG だが、GitHub と HackMD を辿ることで議論内容の相当部分は再構成できる。

## 5. GitHub 上の議論

2026年3月に `openid/cg-australian-digital-trust` リポジトリで起票・更新された issue / PR は 0 件であった（`is:issue updated:2026-03-01..2026-03-31` / `is:pr merged:...` いずれも該当なし）。リポジトリ全体でも open issue / open PR は常時 0 件で、CG の作業プロセスは issue tracker ではなく GitHub 上での **ファイル直接コミット** と **議事録 Markdown のアップロード** で進む設計となっている。

3月に記録されたコミットは以下の 4 件:

- `9144a8a` — 2026-03-02, dphhyland, _Add meeting minutes for March 2, 2026_ — `TrustFrameworkAnalysis/minutes/2026-03-02.md` を新規追加（+88 行）
- `1c930a0` — 2026-03-30, dphhyland, _Add files via upload_ — `TrustFrameworkAnalysis/AGDIS_vs_NZ_DISTF_OpenID_Branded.pptx` を追加（バイナリ、353 KB）
- `6d3e801` — 2026-03-30, dphhyland, _Add files via upload_ — `TrustFrameworkAnalysis/AGDIS_NZ_DISTF_Revised.pptx` を追加（バイナリ、316 KB）
- `3e742b2` — 2026-03-30, dphhyland, _Add files via upload_ — `TrustFrameworkAnalysis/AGDIS_NZ_DISTF_Revised v2.pptx` を追加（バイナリ、316 KB）

3月30日の 3 版アップロードは、**Innovation Day のマイルストーン「Top 10 Insights 確定」のために作成されたプレゼンテーション初版・改訂版・改訂 v2 版** であると位置付けられる。バイナリ PPTX のため GitHub 上での diff 確認はできないが、ファイル名から AGDIS と NZ DISTF の比較プレゼンテーションを OpenID Foundation ブランディングに寄せて改訂していった足跡が読み取れる。

なお、ADT CG 本体（隔週定例）の議事録は `/minutes/` ディレクトリに存在するが、3月時点で同ディレクトリへの 2026年分コミットはなく、2025-11-17 が最新である（サブグループの `TrustFrameworkAnalysis/minutes/` と混在しないよう注意）。本体定例の議事録は HackMD 側のみで維持されている可能性が高い。

## 6. 関連イベント

3月中に ADT CG メンバーが関与・言及したオーストラリア関連イベント:

- **Biometrics Institute conference** — 2026-03-19 メルボルン開催（3月9日 CG コールで参加予定が共有）
- **ANAO (Australian National Audit Office) Digital ID 監査** — 3月時点で consultation phase にあり、ADT CG として意見提出の論点整理を進めていた
- **Productivity Commission フォローアップ** — 2025年9月に ADT CG が提出した Interim Report へのコメント提出を受けた次段階の政策対話が並行していた（3月コール内で直接の議題としては記録されていないが、コンテキストとして継続中）

今後のイベント予告（3月時点で共有されたもの）:

- **EIC Berlin** — 2026-05-19〜22
- **IDENTIVERSE Las Vegas** — 2026-06-15〜18
- **ADT CG Innovation Day Melbourne** — 2026-06-22（ADT CG 主催の主力イベント）

## 7. 今後の予定（2026年3月末時点）

- **2026-04-06**: イースターマンデーのため本体定例は休会
- **2026-04-13**: Trust Framework Analysis サブグループ — 「スキーインストラクター」ユースケース（オーストラリア人 NZ 就労/NZ 人 AU 就労）を含むユースケースレビュー
- **2026-04-20**: ADT CG 本体定例コール再開
- **2026-06-08**: Trust Framework Analysis サブグループ — Innovation Day プレゼンテーション最終化
- **2026-06-22**: Innovation Day（メルボルン）— AGDIS と各国フレームワークの比較知見、Top 10 相互運用性インサイトの発表
- **継続中の作業項目**: Age Assurance ブログ執筆、コミュニティレトロスペクティブ、ANAO Digital ID 監査への意見提出、西オーストラリア州からの参加者誘致

## 8. 参考情報源

### CG 全般

- [Australian Digital Trust Community Group（OpenID Foundation 公式ページ）](https://openid.net/cg/australian-digital-trust-community-group/) — CG 憲章、Co-chair、定例スケジュール
- [openid/cg-australian-digital-trust（GitHub リポジトリ）](https://github.com/openid/cg-australian-digital-trust) — 議事録、charter.md、ワーキング成果物

### 2026年3月の議事録・議題

- [TrustFrameworkAnalysis/minutes/2026-03-02.md](https://github.com/openid/cg-australian-digital-trust/blob/main/TrustFrameworkAnalysis/minutes/2026-03-02.md) — サブグループ 3月2日議事録
- [HackMD: ADT CG Agenda 2026-03-09（`BJi36tsFWg`）](https://hackmd.io/@adtcg/BJi36tsFWg) — 本体定例 3月9日議題・議事メモ
- [HackMD: Trust Framework Analysis Subgroup 2026-03-16（`rypuSy3tWe`）](https://hackmd.io/@adtcg/rypuSy3tWe) — サブグループ 3月16日議題
- [HackMD: ADT CG Agenda 2026-03-23（`BJ2av40qWx`）](https://hackmd.io/@adtcg/BJ2av40qWx) — 本体定例 3月23日議題・議事メモ
- [HackMD: Trust Framework Analysis Subgroup 2026-04-13（`H1DtWEDoZg`）](https://hackmd.io/@adtcg/H1DtWEDoZg) — 3月30日サブグループコールの後続ドキュメント（3月30日自体の議事として作成されたページを引き継ぎ）

### 2026年3月のメーリングリスト投稿

- [Week-of-Mon-20260309/000042.html](https://lists.openid.net/pipermail/openid-au-digital-trust/Week-of-Mon-20260309/000042.html) — Victoria Richardson による 3月9日定例案内
- [Week-of-Mon-20260309/000043.html](https://lists.openid.net/pipermail/openid-au-digital-trust/Week-of-Mon-20260309/000043.html) — David Hyland による 3月16日サブグループ案内（ワークブック完成告知）
- [Week-of-Mon-20260323/000044.html](https://lists.openid.net/pipermail/openid-au-digital-trust/Week-of-Mon-20260323/000044.html) — David Hyland による 3月23日定例案内
- [Week-of-Mon-20260323/000045.html](https://lists.openid.net/pipermail/openid-au-digital-trust/Week-of-Mon-20260323/000045.html) — David Hyland による 3月30日サブグループ案内
- [メーリングリスト pipermail アーカイブ全体](https://lists.openid.net/pipermail/openid-au-digital-trust/) — 週単位でアーカイブ化されており、`Week-of-Mon-YYYYMMDD/` 形式で参照可能

### 2026年3月の GitHub 成果物

- [コミット 9144a8a（議事録追加）](https://github.com/openid/cg-australian-digital-trust/commit/9144a8a) — 2026-03-02
- [コミット 1c930a0（AGDIS vs NZ DISTF ブランド版）](https://github.com/openid/cg-australian-digital-trust/commit/1c930a0) — 2026-03-30
- [コミット 6d3e801（AGDIS/NZ DISTF 改訂版）](https://github.com/openid/cg-australian-digital-trust/commit/6d3e801) — 2026-03-30
- [コミット 3e742b2（AGDIS/NZ DISTF 改訂 v2）](https://github.com/openid/cg-australian-digital-trust/commit/3e742b2) — 2026-03-30

### 関連コンテキスト

- [ADT CG による Productivity Commission Interim Report へのコメント（2025年9月）](https://openid.net/australian-digital-trust-community-group-responds-to-productivity-commissions-digital-technology-report/) — 3月の ANAO 論点整理の前段コンテキスト
