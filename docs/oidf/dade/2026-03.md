---
title: "OpenID Foundation DADE CG 活動レポート (2026年3月)"
reviewed: true
---

# OpenID Foundation DADE CG 活動レポート (2026年3月)

**執筆日: 2026-04-16**（2026年3月の活動を遡及してまとめたレポートです）

## 1. 概要

Death and the Digital Estate Community Group（DADE CG）は、個人の死亡または行動不能時にデジタル資産をどのように管理・継承するかという問題に取り組む OpenID Foundation のコミュニティグループである。Dean H. Saxe、Eve Maler らが共同議長を務め、法律・技術・文化的な側面を横断したスタンダード策定を目指している。

2026年3月は、DADE CG にとって**成果物の公開というマイルストーン月**となった。2025年9月から行ったパブリックレビューを経て最終化した2文書——ホワイトペーパー「The Unfinished Digital Estate」とデジタル遺産計画ガイド——を3月3日に同時公開し、業界メディアに広く取り上げられた。一方でミーティング活動は低調で、3月4日に公開を振り返る定例会が開かれたものの、3月20日予定の次回会議はアジェンダなしとして中止となった。

月次活動の要点：

- 2026年3月3日、ホワイトペーパー「The Unfinished Digital Estate」と「Digital Estate Planning Guide」を最終版として公開
- 公開を受けた OpenID Foundation ブログ記事「Why digital estates need standards, and why we need them now」を4名の共著者が執筆
- 3月4日のミーティングで公開の振り返りと広報活動・Talking Tour の計画を議論
- 3月20日のミーティングは共同議長判断でキャンセル（進展なし）
- 3月23〜26日の RSA Conference San Francisco に Eve Maler が参加
- メーリングリストへの投稿は会議キャンセル通知の1件のみ
- GitHub リポジトリでは3月中に新規 issue / PR の作成なし

## 2. 公開された仕様・ドラフト改訂

### 「The Unfinished Digital Estate」最終版（2026年3月3日）

2025年9月に開始したパブリックコメント期間（締め切り: 2025年10月24日）を経て、ホワイトペーパー「The Unfinished Digital Estate: Culture, Law, and Technology After Death」が最終版として公開された。

- **公開日**: 2026年3月3日
- **URL**: [https://openid.net/wp-content/uploads/2026/03/The-Unfinished-Digital-Estate-Final.pdf](https://openid.net/wp-content/uploads/2026/03/The-Unfinished-Digital-Estate-Final.pdf)

本文書は、認証・認可の技術基盤が成熟した現代においても、**死亡確認・死後の委任・行動不能時の処理**という3領域が未解決のままであることを論じる。主な論点は以下の通り。

- **死亡確認の技術的空白**: 死亡診断書は国ごとに様式が異なり、発行まで10〜12日を要する。デジタルでの死亡確認を行う標準プロトコルは存在しない
- **パスキーによる新たな障壁**: デバイスバインドの認証情報は本人が認証できない状況では機能せず、遺族のアクセスを困難にする
- **AI ディープフェイクのリスク**: 生成 AI による故人の声・映像の複製が技術的に可能となったことで、同意なき「死後なりすまし」がアイデンティティ上の新問題となっている
- **プラットフォームの断片的対応**: 各サービスが独自の死亡後アカウント処理ポリシーを持ち、遺族が個別対応を強いられる現状を批判

### 「Digital Estate Planning Guide」最終版（2026年3月3日）

ホワイトペーパーと同日に、個人・遺産弁護士・ファイナンシャルアドバイザー等を対象とした実践的ガイドが公開された。

- **公開日**: 2026年3月3日
- **URL**: [https://openid.net/wp-content/uploads/2026/03/Digital-Estate-Planning-Guide-1.pdf](https://openid.net/wp-content/uploads/2026/03/Digital-Estate-Planning-Guide-1.pdf)

デジタル資産の棚卸し方法、各プラットフォーム（Apple、Facebook、GitHub、Google、Yahoo 等）固有のレガシーアカウント設定、デジタル遺言執行者の指定方法、ならびに Bequest.com・Empathy.com・Final DocX 等のサードパーティサービスを紹介するもの。

### OpenID Foundation ブログ記事（2026年3月3日）

「[Why digital estates need standards, and why we need them now](https://openid.net/why-digital-estates-need-standards-and-why-we-need-them-now/)」と題したブログ記事が Dean H. Saxe、Eve Maler、Heather Flanagan、Mike Kiser の4名の共著で公開された。主に政策立案者・プラットフォーム事業者・標準化機関それぞれへの具体的な行動要請を述べている。

## 3. ミーティングと議論

### 3月4日定例会（2026-03-04）

**開催日**: 2026年3月4日  
**出席者**: Dean H. Saxe、John Scullen（Australian Access Federation）、Victor Lu、Miki Brotzler、Eve Maler、Tim L、Dima Postnikov（議事録担当: Eve Maler）

3月3日の文書公開直後に開催された定例会であり、主たる議題は公開の振り返りと広報展開の計画だった。

**決定事項・議論内容:**

- 成果物の公開が予定通り完了したことを確認。参加者各自がブログ投稿や SNS でのシェアなどを通じて発信するよう要請された
- 2026年を通じた「Talking/Listening Tour」（業界イベントでの登壇・参加）への参加者を募集。コミュニティグループの認知向上と、DADE ワーキンググループ設立に向けた賛同者獲得を目的とする
- 3月23〜26日の RSA Conference San Francisco（カリフォルニア州サンフランシスコ）に Eve Maler が参加予定
- Miki Brotzler がメルボルンで開催される Identity Management Day（4月14日）に登壇予定
- 戦略的なアウトリーチについて Elizabeth Garber を招いてブレインストーミングを行う計画が浮上
- ローカライズ版アデンダ（地域ごとの法律・文化的観点を補足する付録）の作成について議論

**次回**: 2026年3月20日 午前7時（PDT）

### 3月20日定例会（キャンセル）

「Friday March 19th meeting cancelled」として Dean H. Saxe からメーリングリスト（openid-digital-directives）に通知が送付された（2026年3月20日 01:06 UTC）。件名は「March 19th」となっているが、2026年3月19日は木曜日であり、実際にキャンセルとなった定例会は金曜日の3月20日分である（送信者による日付の誤記と考えられる）。理由として「共同議長に共有すべき関連するアップデートがない」と記されており、会議は中止となった。次回は2週間後の通常スケジュールに戻る旨が案内された。

## 4. メーリングリストの主要スレッド

2026年3月の openid-digital-directives ML へ投稿されたメッセージは**1件のみ**であった。

- **[Friday March 19th meeting cancelled](https://lists.openid.net/pipermail/openid-digital-directives/2026-March/000084.html)** — 2026-03-20 開始（Dean H. Saxe）

内容は3月20日（現地時間）の定例会キャンセルの通知であり、技術的議論は含まれない。

対象月の ML スレッドとしてはこの1件のみが記録されており、活発な技術議論や設計判断を伴う往復は確認できなかった。3月は文書公開という成果物中心の活動であったため、ML での議論はほぼ発生しなかったものと考えられる。

## 5. GitHub 上の議論

GitHub リポジトリ（[openid/death-and-the-digital-estate](https://github.com/openid/death-and-the-digital-estate)）について、2026年3月1日〜3月31日の期間で新規 issue および PR 作成を確認したが、**該当する issue / PR は存在しなかった**。

2026年3月時点のオープン issue は主に2025年5〜6月の登録が中心であり、3月中は新たな問題提起が行われなかった。これも「The Unfinished Digital Estate」公開に伴う対外発信に注力する月であったことと整合する。

## 6. 関連イベント

### RSA Conference 2026（San Francisco、3月23〜26日）

年次のサイバーセキュリティカンファレンス RSA Conference に Eve Maler が参加。DADE CG の Talking Tour の一環として、セキュリティ業界関係者と非公式な意見交換を行うことが3月4日のミーティングで確認されていた。

### 業界メディアによる取材・報道

3月3日の文書公開は複数の業界メディアに取り上げられた。

- **Biometric Update**: 「What happens to your accounts when you die? OpenID calls for digital estate action」（Dean Saxe の「プラットフォームは死亡を例外処理ではなく、予測可能なライフサイクルイベントとして扱うべきだ」というコメントを引用）
- **THINK Digital Partners**: 「OpenID Foundation warns 'death verification' is identity's biggest unsolved problem」
- **Infosecurity Magazine**: 「Calls for Global Digital Estate Standard as Fraud Risk Grows」（ディープフェイクによる詐欺リスクに焦点）
- **Security Brief**: 「OpenID Foundation urges standards for digital estates」

## 7. 今後の予定

2026年3月時点で CG が見据えていた予定（当時の視点）：

- **2026年4月**: Miki Brotzler が Identity Management Day Melbourne（4月14日）に登壇。Eve Maler が RSA での議論を踏まえてフォローアップ
- **2026年 Talking Tour 継続**: Internet Identity Workshop（IIW）、EIC Berlin、OAuth Security Workshop、Identiverse 等への参加を計画
- **DADE ワーキンググループ設立**: Talking Tour を通じた業界関心の測定を経て、CG からより公式な WG への昇格を目指す
- **地域別アデンダの検討**: 日本・欧州・オーストラリア等、地域固有の法律・文化的観点を補足する資料の整備

## 8. 参考情報源

- [openid-digital-directives ML 2026年3月アーカイブ](https://lists.openid.net/pipermail/openid-digital-directives/2026-March/) — 対象月のスレッド一覧（1件: 会議キャンセル通知）
- [The Unfinished Digital Estate（最終版 PDF）](https://openid.net/wp-content/uploads/2026/03/The-Unfinished-Digital-Estate-Final.pdf) — 2026年3月3日公開
- [Digital Estate Planning Guide（最終版 PDF）](https://openid.net/wp-content/uploads/2026/03/Digital-Estate-Planning-Guide-1.pdf) — 2026年3月3日公開
- [Why digital estates need standards, and why we need them now](https://openid.net/why-digital-estates-need-standards-and-why-we-need-them-now/) — OpenID Foundation ブログ記事（2026年3月3日、Dean H. Saxe・Eve Maler・Heather Flanagan・Mike Kiser）
- [Open for Public Comment: The Unfinished Digital Estate](https://openid.net/open-for-comment-the-unfinished-digital-estate/) — 2025年9月〜10月に行われたパブリックレビューの告知
- [DADE CG GitHub リポジトリ](https://github.com/openid/death-and-the-digital-estate) — 対象月（2026年3月）に新規 issue / PR の作成なし
- [DADE WG Talking Tour 2026（GitHub Wiki）](https://github.com/openid/death-and-the-digital-estate/wiki/DADE-WG-%E2%80%90-Talking-Tour-2026) — 2026年の業界イベント登壇計画
- [GitHub Wiki Resources ページ](https://github.com/openid/death-and-the-digital-estate/wiki/Resources) — CG の主要リソース一覧
- [HackMD 議事録ページ（DADE CG）](https://hackmd.io/uJgxxlm-QcS8SD6r8kXTLw) — 2026年3月4日の議事録を含む
- [DADE CG ページ（openid.net）](https://openid.net/cg/death-and-the-digital-estate/)
