---
title: "OpenID Foundation AuthZEN WG 活動レポート (2026年2月)"
---

# OpenID Foundation AuthZEN WG 活動レポート (2026年2月)

> 執筆日: 2026-04-17（遡及執筆）

## 1. 概要

AuthZEN Working Group (WG) は、Policy Decision Point (PDP) と Policy Enforcement Point (PEP) 間の標準化された認可 API を策定する OpenID Foundation のワーキンググループである。2026年1月12日に Authorization API 1.0 が Final Specification として承認されたばかりであり、2月はその直後の最初の活動月にあたる。

2026年2月は、Final Specification 承認後の「次のステップ」として、2つの大きなテーマが浮上した。一つは Model Context Protocol (MCP) との統合プロファイルの策定、もう一つは 1.0 の認定（Certification）プログラムの仕様化である。毎週木曜の定例 WG コールが継続され（2月5日・12日・19日・26日）、これらの議題を中心に活発な議論が展開された。

## 2. 公開された仕様・ドラフト改訂

2月単月での仕様の新規公開やドラフト改訂はなかった。Authorization API 1.0 Final Specification は前月（1月12日）に承認済みであり、2月は次フェーズの準備期間にあたる。

なお、GitHub 上では Dependabot による依存ライブラリの自動更新 PR が 16 件マージされた（axios、webpack、lodash、jws 等のセキュリティパッチおよびマイナーバージョンアップ）。仕様本体の変更ではなく、インターオペラビリティデモ用コンポーネントへの保守更新である。

## 3. ミーティングと議論

### 2026年2月5日 定例コール

**参加者:** Alex Olivier、Atul Tulshibagwale、Thomas Tran、Robin Vanhove、John Jiang、Martin Besozzi、Edmund Jay、Roland Baum

**主要議題と決定事項:**

- **SDK プロモーション**: Go / .NET / Java / Python / JS / Rust の各 SDK へのリンクを WG ウェブページおよび GitHub から掲載する方針を確認。
- **MCP プロファイル**: Martin Besozzi が MCP の情報モデルを AuthZEN の Subject/Action/Resource にマッピングする作業を発表。エージェントがユーザーの代理で動作する場合の Subject 同一性表現が論点となった。
- **認定レベルの設計**: Basic（単一評価）・Batch（複数評価）・Search（エンティティ探索）の 3 段階を提案。各レベルにおいて Core（識別子のみ）と Properties（属性評価）のサブレベルを設ける案が示された。
- **不明エンティティ型の扱い**: Search 操作で未知のエンティティ型が渡された場合、HTTP 400 を返すべきか空配列を返すべきかで議論が生じた（→ 後の 2/26 コールで「空配列返却」に決定）。
- **SDK 認定**: FAPI や OpenODIC の認定モデルを参考に、SDK に対する独立した認定プログラムが必要かどうかを検討。結論は持ち越し。

(議事録 2026-02-05 より)

### 2026年2月12日 定例コール

**参加者:** Alex Babeanu、David Brossard、Alex Olivier、Dave Hyland、Atul Tulshibagwale、Victor Lu、Michiel Trimpe、Jonas Primbs、Chaithanya Yambari、Thomas Tran、Roland Baum（計 11 名）

**主要議題と決定事項:**

- **AI/エージェント文脈での AuthZEN 活用**: エージェントがツール、ゲートウェイ、MCP サーバーを介してデータベースにアクセスするシナリオで、どのレイヤーに AuthZEN を適用するかを議論。ゲートウェイレベルでの認可チェックが現実的とされた。
- **Protobuf リリース**: Gert が v1.0.0 の golang バインディングを修正した v1.0.1 のプロトバフスキーマをリリース。
- **Mattermost の実装事例**: ある組織が CEL（Common Expression Language）を使って内部 PDP に AuthZEN を実装中。2〜3ヶ月以内に PEP フックを組み込む計画が共有された。
- **IGA ユースケース**: Zluri がアクセス再認定やライセンス監査などのアイデンティティガバナンスシナリオにカスタムコンテキストを加えた AuthZEN 実装を検討していると報告。
- **MCP WG との連携**: MCP WG が AuthZEN プロポーザルを自分たちの仕様に含めることを断ったため、AuthZEN プロファイルとして AuthZEN WG が主体的に策定することが決定。
- **認定仕様の分割**: Core 要件と拡張機能（Extended Capabilities）に分離する方針が決まった。
- **未解決: Search の不明型の扱い**: 明示的なガイダンスが仕様に欠如している点を確認。

(議事録 2026-02-12 より)

### 2026年2月26日 定例コール

**参加者:** Alex Olivier、Atul Tulshibagwale（zirotrust）、David Brossard、Mike K.、Edmund Jay、Julio Auto、Michael McCoy

**主要議題と決定事項:**

- **MCP 次のステップ**: Atul の COAZ（Context-Oriented AuthZation）プロポーザルと Martin Besozzi の提案の 2 つが並行して進んでいることを確認。次回以降で統合方針を議論。
- **認定シナリオの更新**: 認定レベルを「Core/Properties 分割」方式で確定。Core は識別子のみのテスト、Properties はサブジェクト・リソース・アクションの属性評価を含む。
- **バッチエラー処理の厳格化**: PDP は HTTP 200 に正しい評価件数を返すこととし、失敗ケースは HTTP エラーではなく `"decision": false` で表現する。
- **デフォルト値のマージ動作**: エンティティレベルでの上書き（サブフィールドマージではなく）とすることを決定。
- **ページネーション**: v1 ではマルチページデモを必須としないことを確認。
- **不明エンティティ型**: HTTP 400 でなく空配列を返すことで合意。
- **EIC Awards**: David Brossard が EIC（European Identity and Cloud Conference）2026 への AuthZEN の Awards 応募内容を更新・共有。EIC 2026 は 2026年5月19〜22日にベルリンで開催予定。
- **OpenID 3月ニュースレター**: David が WG のコンテンツ寄稿を担当。

(議事録 2026-02-26 より)

## 4. メーリングリストの主要スレッド

2026年2月のメーリングリスト (`openid-specs-authzen`) には 14 通のメッセージが投稿された。主要なスレッドは以下の通り。

### MCP Profile（2026-02-04 開始）

- **発端**: Atul Tulshibagwale が MCP 統合の重要性を提起し、GitHub Issue #429 の MCP プロファイル提案（Martin Besozzi 著）を WG に周知。
- **議論内容**: MCP のツール呼び出し（`tools/call`）等のメソッドを AuthZEN の Subject/Action/Resource/Context にマッピングする手法について意見交換。ユーザーの代理で動作する自律エージェントのアイデンティティ表現が未解決の課題として浮上。

### Fwd: first draft of AuthZen profile for MCP（PR #435 告知、2026-02-04）

- **発端**: Atul Tulshibagwale が PR #435「AuthZen profile for MCP の最初のドラフト」（tulshi 著）を ML に転送して周知。
- **内容**: PR では MCP メソッドを AuthZEN の評価リクエストにマッピングする「COAZ（Context-Oriented AuthZation）」拡張の仕様ドラフトが含まれる。マルチバリュー評価マッピング（複数の権限チェックが必要なツール）や AuthZEN Search API の活用案が議論の焦点となった。

### Cert profile update: sub-levels, batch merge test, discovery level, properties-based search（2026-02-19）

- **発信者**: Alex Olivier
- **内容**: 認定プロファイルの仕様更新を ML に共有。Core/Properties サブレベルの設計、バッチテストのマージ動作、Discovery レベルの追加、プロパティベース Search の仕様化に関する変更点を報告。WG 内でのレビューと合意形成を促す目的。

### Notes from yesterday's call（2026-02-27）

- **発信者**: David Brossard
- **内容**: 2026-02-26 の定例コールの議事録を ML に配布。MCP プロポーザルの現状、認定シナリオの決定事項、EIC Awards 応募の進捗などが含まれる。

## 5. GitHub 上の議論

2月に注目すべき GitHub アクティビティは新規 issue 2 件と PR 1 件。なお、依存ライブラリの自動更新 PR（Dependabot）16 件は本質的な議論を含まないため本節では割愛する。

### [openid/authzen#429](https://github.com/openid/authzen/issues/429) - AuthZEN MCP Profile Proposal

- **著者**: embesozzi（Martin Besozzi）
- **作成**: 2026-02-04
- **内容**: MCP サーバーおよびゲートウェイが AuthZEN を使用して認可チェックを実装するための標準マッピングを提案。MCP の JSON-RPC 情報モデルを AuthZEN の評価リクエストに変換する手法を定義。`tools/call`・`resources/read` 等 8 つの MCP 標準メソッドについて Subject/Action/Resource/Context へのマッピング例を提示。OAuth 2.1 JWT トークンから Subject を抽出し、ツール引数を Resource Properties に含めるきめ細かな認可シナリオまでカバー。
- **状態**: Draft（2月末時点でオープン）

### [openid/authzen#433](https://github.com/openid/authzen/issues/433) - AuthZEN Authorization API 1.0 - Certification Scenario

- **著者**: alexolivier（Alex Olivier）
- **作成**: 2026-02-12
- **内容**: PDP が Authorization API 1.0 の適合認定を受けるための仕様文書。Basic・Batch・Search・Discovery の 4 独立レベル、各レベルに Core と Properties の 2 サブレベルという構成。テストフィクスチャ（alice/bob の 2 サブジェクト、record-1/record-2 の 2 リソース、read/write/delete の 3 アクション）と 8 つの必須判断パターンを規定。バッチエラー処理の厳格化（HTTP 200 + `"decision": false`）、未知フィールドの許容、リクエスト ID ヘッダのエコー等のテスト要件が含まれる。
- **状態**: オープン（フィードバック募集中）

### [openid/authzen#435](https://github.com/openid/authzen/pull/435) - First draft of AuthZen profile for MCP

- **著者**: tulshi（Atul Tulshibagwale）
- **作成**: 2026-02-14
- **議論参加者**: baboulebou（Alex Babeanu、承認）、vatsalgupta（自律エージェントのアイデンティティ表現について問題提起）、davidjbrossard、julioauto ほか計 6 名
- **論点**:
  - マッピングを MCP サーバー内に埋め込むべきか、ゲートウェイで処理すべきか
  - AuthZEN が MCP 固有プロファイルを定義することの適切性（MCP WG 側での不採用を受けた AuthZEN WG の判断）
  - 特定のリソース識別子がない場合の AuthZEN Search API 活用
  - 「SARC」（Subject, Action, Resource, Context）という略称の採用の是非
- **状態**: 2月末時点でオープン（レビュー進行中）

## 6. 関連イベント

- **EIC 2026 Awards 応募**: David Brossard が KuppingerCole 主催 European Identity and Cloud Conference 2026（2026年5月19〜22日、ベルリン）への AuthZEN Awards 応募を行い、WG に更新版を共有した。詳細は非公開。
- **Gartner IAM 2026（次回予定）**: 前月（2025年12月）の Gartner IAM Summit 米国テキサス州グレープバイン会場での AuthZEN インターオペラビリティデモが成功を収め、次回 Gartner IAM 2026 ロンドン会場では AI 統合（MCP 等）に焦点を当てたデモが計画されていた。

## 7. 今後の予定（2026年2月末時点の視点）

- **MCP プロファイル**: PR #435（Atul 案）と Issue #429（Martin Besozzi 案）の 2 提案を継続検討し、統合または選択を 3 月以降に決定する予定。
- **認定プログラム**: Issue #433 で定義した認定シナリオ仕様を完成させ、PDP ベンダー向けのセルフ認定プログラムの準備を進める。
- **Mattermost 統合**: 内部 PDP への PEP フック実装が 2〜3 ヶ月以内に完了する見込み（実際の事例報告として期待）。
- **OpenID ニュースレター**: 3 月号への WG 活動報告寄稿（David Brossard が担当）。
- **Authorization API 1.x**: Final Specification 承認後の仕様改訂サイクルを開始する計画が示されており、1.0 の実装フィードバックをもとに 1.1 の策定が始まると予想された。

## 8. 参考情報源

- [AuthZEN WG メーリングリスト 2026年2月アーカイブ（スレッド一覧）](https://lists.openid.net/pipermail/openid-specs-authzen/2026-February/thread.html)
- [HackMD 議事録 2026-02-05](https://hackmd.io/@oidf-wg-authzen/wg-meeting-20260205)
- [HackMD 議事録 2026-02-12](https://hackmd.io/@oidf-wg-authzen/wg-meeting-20260212)
- [HackMD 議事録 2026-02-26](https://hackmd.io/@oidf-wg-authzen/wg-meeting-20260226)
- [GitHub Issue #429: AuthZEN MCP Profile Proposal](https://github.com/openid/authzen/issues/429)
- [GitHub Issue #433: AuthZEN Authorization API 1.0 - Certification Scenario](https://github.com/openid/authzen/issues/433)
- [GitHub PR #435: First draft of AuthZen profile for MCP](https://github.com/openid/authzen/pull/435)
- [Authorization API 1.0 Final Specification 承認発表（2026-01-12）](https://openid.net/authorization-api-1-0-final-specification-approved/)
- [AuthZEN shows enterprise readiness at Gartner IAM Summit（2025-12-22）](https://openid.net/authzen-shows-enterprise-readiness-at-gartner-iam-summit/)
- [AuthZEN WG 仕様一覧ページ](https://openid.net/wg/authzen/specifications/)
- [EIC 2026 カンファレンス情報](https://www.kuppingercole.com/events/eic2026)
