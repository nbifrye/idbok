---
title: "OpenID Foundation AB/Connect WG 活動レポート (2026 Q1)"
reviewed: true
---

# OpenID Foundation AB/Connect WG 活動レポート (2026 Q1)

> **執筆日:** 2026-04-15
> この記事は 2026年第1四半期（1月〜3月）の活動を遡及的にまとめたものです。

## 1. 概要

AB/Connect Working Group（Connect WG）は、OpenID Connect コアプロトコルならびに関連仕様群の策定・維持を担う OpenID Foundation の主力ワーキンググループである。OAuth 2.0 を基盤とした認証・アイデンティティ連携の標準化において中心的な役割を果たしている。

2026年Q1（1〜3月）は、長年にわたって開発が続けられてきた **OpenID Federation 1.0 が最終仕様として承認**された歴史的な四半期となった。あわせて OpenID Connect Relying Party Metadata Choices 1.0 の最終仕様化、TIIME 2026 での相互運用性イベント開催など、仕様成熟と実装普及の両面で大きな前進があった。

---

## 2. 公開された仕様・ドラフト改訂

### OpenID Federation 1.0 最終仕様承認（2月17日）

Connect WG が 2016年から約10年をかけて開発してきた **OpenID Federation 1.0** が、2026年2月17日に OpenID Foundation 最終仕様として承認された。

**投票結果:**

- 賛成: 85票
- 反対: 0票
- 棄権: 20票
- 合計: 105票（全425会員の24.7%が参加、定足数20%を超過）

最終仕様は `https://openid.net/specs/openid-federation-1_0-final.html` で公開されている。OpenID Federation は、信頼チェーン（Trust Chain）を用いた分散型エンティティ間のメタデータ交換・信頼確立メカニズムを定義する仕様であり、特に欧州のデジタルID基盤（EUDIW 等）で広く参照されている。

パブリックレビュー期間（2025年12月4日〜2026年2月2日、60日間）中に公開されたフィードバックを反映したドラフト -47 が1月20日に公開され、投票（2月3日〜17日、14日間）を経て正式承認に至った。

### OpenID Federation 1.1 最終仕様パブリックレビュー開始（2月17日）

OpenID Federation 1.0 承認と同日（2月17日）、Connect WG は **OpenID Federation 1.1** および関連仕様の最終仕様化に向けたパブリックレビューを開始した。

- **レビュー期間:** 2026年2月17日〜4月18日（60日間）
- **投票予定:** 2026年4月21日〜5月5日（14日間）

OpenID Federation 1.1 は 1.0 に続く進化版であり、関連仕様（OpenID Federation for OpenID Connect 1.1）とともに審査が進められている。

### OpenID Connect Relying Party Metadata Choices 1.0 最終仕様承認（3月25日頃）

Connect WG が推薦した **OpenID Connect Relying Party Metadata Choices 1.0** が最終仕様として承認された（3月25日の投票期間終了後、3月31日に最終仕様として公開）。

**内容:** OpenID Connect Dynamic Client Registration 1.0 を拡張し、RP（Relying Party）がメタデータパラメータについて「単一の値」ではなく「対応値の集合」を表明できるようにする仕様。OpenID Federation の自動登録シナリオでは OpenID Provider からの登録レスポンスがないため、RP が事前にサポート値を申告することで OP が適切な選択を行えるようにすることが目的。

- **著者:** Michael B. Jones（Self-Issued Consulting）、Roland Hedberg（independent）、John Bradley（Yubico）、Filip Skokan（Okta）
- **レビュー期間:** 2026年1月9日〜3月10日（60日間）
- **投票期間:** 2026年3月11日〜25日（14日間）
- **仕様ドラフト:** レビュー期間中に指摘された文言の問題を修正した版（draft -05）が3月12日に公開された

---

## 3. 主要な議論・決定事項

### OpenID Federation 1.0 の承認と次世代仕様への移行

2月17日の OpenID Federation 1.0 承認をもって、Connect WG は 1.0 系列の開発を完了し、公式に 1.1 系列の標準化プロセスへと移行した。1.0 は「最終仕様」として今後改訂されないが、1.1 は 1.0 の後継として機能拡張が継続される。

OpenID Federation for Wallet Architectures 1.0（デジタルID ウォレット向け拡張）や Extended Subordinate Listing 1.0 等の関連仕様も引き続き進展しており、欧州 EUDIW エコシステムへの対応が主要な動機の一つとなっている。

### OpenID Connect RP Metadata Choices の技術的意義

この仕様は OpenID Federation を活用した自動登録フロー（Federation Automatic Registration）における実装上の課題を解消するものとして位置づけられている。仕様の完成により、OpenID Federation を通じた RP 登録の相互運用性が向上することが期待される。

---

## 4. 会議・イベント

### TIIME 2026 – OpenID Federation 相互運用イベント（2月13日・アムステルダム）

2026年2月13日、Trust and Internet Identity Meeting Europe（TIIME）アンカンファレンスの一環として、アムステルダムで **OpenID Federation 相互運用イベント** が開催された。

**参加状況:**

- 参加実装数: 9実装
- 参加者数: 12名
- 参加国: クロアチア、フィンランド、ギリシャ、イタリア、オランダ、ポーランド、セルビア、スウェーデン、米国（9か国）

各国の実装がリアルタイムで相互接続のテストを行い、テスト用フェデレーションは対面セッション終了後も稼働を継続した。OpenID Foundation 理事の Mike Jones は「アイデンティティコミュニティが集まり、TIIME 2026 で OpenID Federation 専用デーを組織した」とコメントしている。

OpenID Foundation エグゼクティブディレクターの Gail Hodges は「このイベントは仕様の価値を証明するとともに、今後開始予定の OpenID Federation オープンソーステストのプレッシャーテストにもなっている」と述べた。

このイベントは OpenID Federation 1.0 が最終仕様の地位を獲得した時期と重なり、仕様成熟と実装普及の両面から注目を集めた。

### 定例 WG ミーティング

Connect WG は Q1 期間中も定例の週次・隔週ミーティングを継続した（火曜 8:00 JST 隔週、木曜 7:00 PDT 週次）。ただし、公開された議事録は確認できなかった。

---

## 5. 今後の予定

2026年3月末時点（Q1 完了直後）の視点では、以下の動きが予定されていた。

- **OpenID Federation 1.1 最終仕様投票:** 2026年4月21日〜5月5日
  - レビュー期間（〜4月18日）の結果を受けて投票が実施される予定
- **OpenID Foundation ハイブリッドワークショップ:** 2026年4月27日
  - カリフォルニア州マウンテンビュー近郊およびオンラインで開催予定
  - 春季 IIW（Internet Identity Workshop）の直前に予定
- **OpenID Federation 自己認証プログラムの開始:** 時期未定
  - TIIME 2026 でのテストが基盤となり、オープンソーステスト整備後に開始予定

---

## 6. 参考情報源

- [AB/Connect Working Group - OpenID Foundation](https://openid.net/wg/connect/)
  - Connect WG の公式ページ。仕様一覧・ミーティングスケジュール等を掲載
- [OpenID Federation 1.0 Final Specification Approved - OpenID Foundation](https://openid.net/openid-federation-1-0-final-specification-approved/)
  - 2026年2月17日の承認アナウンス（投票結果含む）
- [Public Review Period for Proposed OpenID Federation 1.0 Final Specification](https://openid.net/public-review-period-for-proposed-openid-federation-1-final-specification/)
  - パブリックレビュー開始アナウンス（2025年12月〜2026年2月）
- [Public Review Period for Proposed OpenID Federation 1.1 Final Specifications](https://openid.net/public-review-period-for-proposed-openid-federation-1-1-final-specifications/)
  - OpenID Federation 1.1 パブリックレビュー開始アナウンス（2026年2月17日）
- [Notice of Vote to Approve Proposed OpenID Connect Relying Party Metadata Choices 1.0 Final Specification](https://openid.net/notice-of-vote-to-approve-proposed-openid-connect-relying-party-metadata-choices-1-0-final-specification/)
  - RP Metadata Choices 1.0 最終仕様投票アナウンス（2026年2月25日）
- [Public Review Period for Proposed OpenID Connect Relying Party Metadata Choices 1.0 Final Specification](https://openid.net/public-review-period-for-proposed-openid-connect-relying-party-metadata-choices-1-0-final-specification/)
  - RP Metadata Choices 1.0 パブリックレビュー開始アナウンス（2026年1月9日）
- [Nine countries prove OpenID Federation interoperability - OpenID Foundation](https://openid.net/nine-countries-prove-openid-federation-interoperability/)
  - TIIME 2026 相互運用イベント報告記事
- [The Journey to OpenID Federation 1.0 is Complete – Mike Jones: self-issued](https://self-issued.info/?p=2813)
  - OpenID Federation 1.0 完成を振り返る Mike Jones のブログ
- [Final OpenID Connect RP Metadata Choices Specification – Mike Jones: self-issued](https://self-issued.info/?p=2824)
  - RP Metadata Choices 1.0 最終仕様についての Mike Jones のブログ
- [AB/Connect Working Group – Specifications - OpenID Foundation](https://openid.net/wg/connect/specifications/)
  - Connect WG の全仕様一覧（最終仕様・Implementer's Draft・ドラフト等）
