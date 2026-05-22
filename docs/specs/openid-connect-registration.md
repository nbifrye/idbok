---
title: "OpenID Connect Dynamic Client Registration 1.0"
reviewed: true
---

# OpenID Connect Dynamic Client Registration 1.0

## 1. 概要

OpenID Connect Dynamic Client Registration 1.0 (以下、OIDC Dynamic Client Registration) は、OpenID Connect の Relying Party (RP) が OpenID Provider (OP) に対して動的に自身を登録するための仕様である。RP は自身のメタデータを JSON 形式で POST し、OP から `client_id`、必要に応じて `client_secret`、そして登録情報を後から参照・更新するための `registration_access_token` と `registration_client_uri` を受け取る。

本仕様は OpenID Connect Core 1.0 / Discovery 1.0 と並ぶ OIDC の中核三仕様の一つであり、[OpenID Connect Core 1.0](./openid-connect-core.md) で規定される ID Token・UserInfo・Request Object・クライアント認証などに関する OIDC 固有のメタデータ (例: `id_token_signed_response_alg`, `subject_type`, `sector_identifier_uri`, `userinfo_encrypted_response_alg`, `request_object_signing_alg`) を扱える点で、後発の汎用仕様である [RFC 7591](./rfc7591.md) (OAuth 2.0 Dynamic Client Registration Protocol) と区別される。

## 2. 解決する課題

OpenID Connect は「RP は OP に事前登録済みである」ことを前提とするが、Core 仕様には登録手段が規定されていない。これは次のような状況で深刻な障壁となる。

- 大量のネイティブアプリケーションを各 OP に手動登録するのは現実的でない
- フェデレーション環境で未知の RP と OP がオンデマンドに接続する必要がある
- OP が提供する OIDC 固有機能 (pairwise subject、ID Token 暗号化、Request Object 署名アルゴリズムなど) を RP がプログラマブルに宣言する必要がある

OIDC Dynamic Client Registration は、OIDC 固有のメタデータを含めて RP を JSON 一往復で登録できる API を定義し、Discovery と組み合わせることで「OP の発見 → メタデータ取得 → 動的登録 → 認証フロー」という完全自動の接続を可能にする。

なお本仕様は RFC 7591 より先に策定された (OIDC Core が 2014 年、RFC 7591 は 2015 年)。RFC 7591 は OIDC Dynamic Client Registration の汎用化として後から OAuth WG が標準化したものであり、両者は意図的に互換性を持たせて設計されている。

## 3. 主要概念・用語

### Client Registration Endpoint

RP が自身のメタデータを POST して登録を行うエンドポイント。Discovery 文書の `registration_endpoint` で公開される。

### Client Configuration Endpoint

登録済みクライアントが自身の登録情報を読み出すためのエンドポイント。登録レスポンス内の `registration_client_uri` で示される、RP ごとに固有な完全 URL として提供される。RP は URL を組み立てず、受け取った値をそのまま使う。

### Initial Access Token

登録エンドポイントへの未認証アクセスを制限したい OP が事前発行する OAuth 2.0 アクセストークン。RP は Bearer Token として登録 POST の `Authorization` ヘッダに添付する。仕様上は OPTIONAL であり、OP の方針次第で必須にも未認証許容にもできる。

### Registration Access Token

登録成功時に OP が払い出す Bearer Token。Client Configuration Endpoint への GET 時に `Authorization: Bearer` で提示する。

### Sector Identifier

Pairwise Pseudonymous Identifier (PPID) を複数ドメインで一貫させるための識別子。後述する `sector_identifier_uri` が提供される場合はその URL のホスト部、そうでない場合は `redirect_uris` のホスト部が sector identifier となる。

### Pairwise Pseudonymous Identifier (PPID)

`subject_type` が `pairwise` の場合に OP が発行する Subject 識別子。同一エンドユーザーであっても sector identifier が異なる RP には異なる `sub` 値が返るため、複数 RP 間でのユーザー名寄せを防げる。

## 4. プロトコルフロー

### 4.1 標準的な登録フロー

```mermaid
sequenceDiagram
    participant RP as Relying Party
    participant OP as OpenID Provider
    participant CRE as Registration Endpoint
    participant CCE as Configuration Endpoint

    Note over RP,OP: 事前: Discovery で registration_endpoint を取得
    RP->>CRE: POST /register<br/>Authorization: Bearer <initial_access_token>?<br/>{ redirect_uris, application_type, ... }
    CRE->>CRE: メタデータ検証<br/>redirect_uri ルール / sector_identifier_uri / アルゴリズム互換性
    CRE-->>RP: 201 Created<br/>{ client_id, client_secret?,<br/>registration_access_token,<br/>registration_client_uri, ... }
    Note over RP: 以降は通常の OIDC フローへ
    RP->>CCE: GET <registration_client_uri><br/>Authorization: Bearer <registration_access_token>
    CCE-->>RP: 200 OK<br/>{ 現在の登録メタデータ }
```

### 4.2 Discovery との組み合わせ

```mermaid
flowchart LR
    A[issuer URL] --> B[GET .well-known/openid-configuration]
    B --> C[Discovery 文書取得]
    C --> D[registration_endpoint 抽出]
    D --> E[POST Client Metadata]
    E --> F[client_id 取得]
    F --> G[Authorization Request]
```

[OpenID Connect Discovery 1.0](./openid-connect-discovery.md) と組み合わせると、issuer URL さえあれば RP は OP メタデータと登録エンドポイントを自動取得して接続を確立できる。

## 5. クライアントメタデータ

クライアントメタデータは登録リクエスト本文と登録レスポンス本文で同じスキーマが用いられる。以下、OIDC Dynamic Client Registration が定義する主な値を分類して示す。

### 5.1 OAuth 2.0 由来のメタデータ

| パラメータ                                                           | 内容                                                                                                                   |
| -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `redirect_uris`                                                      | RP が認可レスポンスを受け取る URI 配列。必須                                                                           |
| `response_types`                                                     | 利用する `response_type` 値の配列。デフォルトは `["code"]`                                                             |
| `grant_types`                                                        | 利用する Grant Type の配列。デフォルトは `["authorization_code"]`                                                      |
| `application_type`                                                   | `web` または `native`。デフォルトは `web`                                                                              |
| `contacts`                                                           | 担当者メールアドレス配列                                                                                               |
| `client_name` / `logo_uri` / `client_uri` / `policy_uri` / `tos_uri` | エンドユーザー向け表示情報                                                                                             |
| `jwks_uri` / `jwks`                                                  | RP の公開鍵集合。両方を同時に指定してはならない                                                                        |
| `token_endpoint_auth_method`                                         | クライアント認証方式 (`client_secret_basic` / `client_secret_post` / `client_secret_jwt` / `private_key_jwt` / `none`) |

### 5.2 OIDC 固有のメタデータ

#### 識別子と Sector

- `subject_type`: `public` または `pairwise`。`pairwise` を要求すると PPID が `sub` に入る
- `sector_identifier_uri`: `https` の URL。応答する JSON 配列に登録済み `redirect_uris` がすべて含まれていなければ登録は失敗する

#### ID Token の署名/暗号化

- `id_token_signed_response_alg`: ID Token に対する JWS アルゴリズム。デフォルトは `RS256`
- `id_token_encrypted_response_alg`: ID Token を暗号化する場合の JWE `alg`
- `id_token_encrypted_response_enc`: ID Token を暗号化する場合の JWE `enc`。`alg` 指定時のデフォルトは `A128CBC-HS256`

#### UserInfo 応答の署名/暗号化

- `userinfo_signed_response_alg`: UserInfo を JWT で返す場合の署名アルゴリズム
- `userinfo_encrypted_response_alg` / `userinfo_encrypted_response_enc`: UserInfo を暗号化する場合のアルゴリズム

#### Request Object

- `request_object_signing_alg`: RP が送る Request Object の必須署名アルゴリズム
- `request_object_encryption_alg` / `request_object_encryption_enc`: Request Object 暗号化アルゴリズム
- `request_uris`: 事前登録された Request URI の配列。OP は登録時に取得して指紋として SHA-256 ハッシュフラグメントを利用してもよい

#### クライアント認証 JWT

- `token_endpoint_auth_signing_alg`: `private_key_jwt` / `client_secret_jwt` で使う JWS アルゴリズム

#### 認証強度・体験制御

- `default_max_age`: Authentication Request 既定の `max_age` (秒)
- `require_auth_time`: `auth_time` クレームを ID Token に必ず含めることを要求するか
- `default_acr_values`: 既定で要求する ACR 値の配列
- `initiate_login_uri`: サードパーティ起動ログイン用の HTTPS URL

### 5.3 Redirect URI の検証規則

`application_type` の値によって `redirect_uris` の制約が異なる。

- `web` クライアント: `https` スキームのみ許容され、ホスト名に `localhost` を使ってはならない。`response_type=code id_token` 等の Implicit/Hybrid を使う場合は特に厳格に検証される
- `native` クライアント: カスタム URI スキーム、または `http` のループバック URL (ホスト名は `localhost` / `127.0.0.1` / `[::1]`) のみ許容される

これらの制約は、Authorization Code・ID Token を意図しない第三者に漏洩させないための基本防御である。

## 6. リクエスト/レスポンスの詳細

### 6.1 登録リクエスト

```http
POST /connect/register HTTP/1.1
Host: server.example.com
Content-Type: application/json
Accept: application/json
Authorization: Bearer eyJhbGciOi...   # Initial Access Token (任意)

{
  "application_type": "web",
  "redirect_uris": [
    "https://client.example.org/callback",
    "https://client.example.org/callback2"
  ],
  "client_name": "My Example",
  "logo_uri": "https://client.example.org/logo.png",
  "subject_type": "pairwise",
  "sector_identifier_uri": "https://other.example.net/file_of_redirect_uris.json",
  "token_endpoint_auth_method": "client_secret_basic",
  "jwks_uri": "https://client.example.org/my_public_keys.jwks",
  "userinfo_encrypted_response_alg": "RSA-OAEP",
  "userinfo_encrypted_response_enc": "A128CBC-HS256",
  "contacts": ["ve7jtb@example.org"],
  "request_uris": [
    "https://client.example.org/rf.txt#qpXaRLh_n93TT"
  ]
}
```

### 6.2 登録レスポンス

```http
HTTP/1.1 201 Created
Content-Type: application/json
Cache-Control: no-store
Pragma: no-cache

{
  "client_id": "s6BhdRkqt3",
  "client_secret": "JuCgkRkq...",
  "client_secret_expires_at": 1577858400,
  "registration_access_token": "this.is.an.access.token.value.ffx83",
  "registration_client_uri": "https://server.example.com/connect/register?client_id=s6BhdRkqt3",
  "client_id_issued_at": 1577858400,
  ...  // リクエストで送ったメタデータと、OP が補完したデフォルト値
}
```

レスポンスは OP の最終的な解釈を含む完全なメタデータを返す。RP は応答内容を保持して以後の動作判断に用いる。`client_secret_expires_at` が `0` の場合は無期限を意味する。

### 6.3 Client Configuration Endpoint

登録済み RP は次のように自身の登録情報を読み出せる。

```http
GET /connect/register?client_id=s6BhdRkqt3 HTTP/1.1
Host: server.example.com
Accept: application/json
Authorization: Bearer this.is.an.access.token.value.ffx83
```

OP は 200 OK で現在のメタデータを JSON で返す。トークンが無効なら `401 Unauthorized`、当該クライアントの読出権限がないトークンなら `403 Forbidden` を返す。**ブルートフォース攻撃抑止のため、認証失敗時に 404 を返してはならない。**

## 7. Sector Identifier と Pairwise Subject Identifier

`subject_type=pairwise` を要求する RP に対し、OP は同一エンドユーザーであっても sector が異なれば別の `sub` を発行する。これにより複数 RP 間でのユーザー名寄せを防げる。

### 7.1 Sector の決定

```mermaid
flowchart TD
    A{sector_identifier_uri ありか?} -- Yes --> B[その URL のホスト部を sector とする]
    A -- No --> C{redirect_uris のホストはすべて同一か?}
    C -- Yes --> D[redirect_uris のホスト部を sector とする]
    C -- No --> E[登録失敗]
```

### 7.2 sector_identifier_uri の検証

`sector_identifier_uri` は `https` URL でなければならず、応答内容は JSON 配列で、登録された `redirect_uris` をすべて含んでいなければならない。条件を満たさない場合、登録は `invalid_client_metadata` で拒否される。検証は登録時のみで、OP は以後ファイルを再取得・再検証する義務を負わない。

### 7.3 PPID の計算指針

PPID 自体の算出アルゴリズムは実装依存だが、仕様は次の性質を要求する。

- 同じ Sector Identifier・同じローカルユーザーに対しては常に同じ値を返す
- ローカルユーザー識別子から逆算できないこと
- Sector Identifier が異なれば異なる値となること

参考実装としては、`(sector_identifier, local_account_id, salt)` を入力にして暗号学的ハッシュ関数を適用する方式が広く用いられる。

## 8. エラーレスポンス

登録失敗時、OP は HTTP `400 Bad Request` と JSON のエラー本文を返す。

| エラーコード              | 意味                                                             |
| ------------------------- | ---------------------------------------------------------------- |
| `invalid_redirect_uri`    | `redirect_uris` のいずれかが OP の検証規則を満たさない           |
| `invalid_client_metadata` | クライアントメタデータの値が無効、または OP が拒否する組み合わせ |

```json
HTTP/1.1 400 Bad Request
Content-Type: application/json
Cache-Control: no-store
Pragma: no-cache

{
  "error": "invalid_redirect_uri",
  "error_description": "One or more redirect_uri values are invalid"
}
```

なお、後発の [RFC 7591](./rfc7591.md) は Software Statement を導入し、`invalid_software_statement` / `unapproved_software_statement` という追加のエラーコードを規定している。OIDC Dynamic Client Registration 単体ではこれらのコードは規定されていないが、RFC 7591 のメタデータと併用する OP は両仕様のエラーコードを併せて返しうる。

## 9. RFC 7591 / RFC 7592 との関係

OIDC Dynamic Client Registration は次の点で汎用 OAuth 仕様群と関係する。

| 項目                                      | OIDC Dynamic Client Registration     | RFC 7591                         | RFC 7592                          |
| ----------------------------------------- | ------------------------------------ | -------------------------------- | --------------------------------- |
| 主目的                                    | OIDC RP の動的登録                   | OAuth 2.0 クライアントの動的登録 | 登録後の管理 (Read/Update/Delete) |
| OIDC 固有メタデータ (ID Token 暗号化など) | 規定                                 | 参照 (任意)                      | 参照 (任意)                       |
| Software Statement                        | 不在                                 | 規定                             | 規定                              |
| Read 操作                                 | 規定 (Client Configuration Endpoint) | 言及のみ                         | 規定                              |
| Update / Delete 操作                      | 規定なし                             | 規定なし                         | 規定 (PUT / DELETE)               |

実装としては OIDC OP の多くが両仕様を統合的にサポートしており、OP は OIDC Dynamic Client Registration のメタデータに加えて `software_statement` などの RFC 7591 由来フィールドを受け取れる。逆に RFC 7591 のみを実装した OAuth 2.0 認可サーバーは、OIDC 固有メタデータを単に無視する。

## 10. セキュリティに関する考慮事項

### 10.1 通信路保護

登録エンドポイントおよび Configuration Endpoint への通信はすべて TLS でなければならない (BCP 195 準拠が推奨される)。`client_secret` や `registration_access_token` が平文で流れることは絶対に避ける。

### 10.2 なりすまし防止

`logo_uri`、`policy_uri`、`tos_uri` を表示する OP は、それらが `redirect_uri` と同一ドメインであるかを検証することが推奨される。攻撃者が著名サービスのロゴを設定し、ユーザーを欺いて同意画面を通過させる手口に対する基本防御である。

### 10.3 未認証登録の扱い

OP が Initial Access Token を要求しない場合、任意の第三者がクライアント登録を行えるため、`client_name` や `logo_uri` を信用してはならない。動的に登録された未認証クライアントには、UI 上で「未確認のアプリケーション」等の警告を出すことが推奨される。

### 10.4 Registration Access Token の管理

`registration_access_token` が漏洩すると、攻撃者が当該クライアントの登録情報を読み (RFC 7592 併用時は更新・削除も)、`client_secret` を取り出すことができる。RP は当該トークンを `client_secret` と同等の機密として保管しなければならない。

### 10.5 Native クライアント特有のリスク

iOS のカスタム URI スキームは登録の一意性が保証されないため、複数アプリが同じスキームを登録すると Authorization Code が意図しないアプリへ渡る恐れがある。Native クライアントは [RFC 8252](https://datatracker.ietf.org/doc/html/rfc8252) (OAuth 2.0 for Native Apps) のガイダンスに従い、PKCE ([RFC 7636](./rfc7636.md)) を併用することが強く推奨される。

### 10.6 Sector Identifier URI の取得

OP は `sector_identifier_uri` を登録時に取得して検証する。攻撃者が悪意ある URL を指定し OP に大量のリクエストを誘発させる SSRF 的攻撃を防ぐため、取得対象は `https` に限定し、レスポンスサイズ・タイムアウトを制限することが推奨される。

## 11. 関連仕様

- [OpenID Connect Core 1.0](./openid-connect-core.md) - 本仕様で扱うメタデータの大半 (ID Token 署名、UserInfo 暗号化、Request Object など) を定義する
- [OpenID Connect Discovery 1.0](./openid-connect-discovery.md) - `registration_endpoint` を公開し、本仕様の起点となる
- [RFC 7591](./rfc7591.md) - OAuth 2.0 汎用版の動的クライアント登録。本仕様と互換性を持つ
- [RFC 7592](./rfc7592.md) - 動的登録クライアントの管理 (Read/Update/Delete)
- [RFC 8252](https://datatracker.ietf.org/doc/html/rfc8252) - Native App での OAuth 2.0 ガイダンス
- [RFC 7636](./rfc7636.md) - PKCE
- [RFC 7515](./rfc7515.md) / [RFC 7516](./rfc7516.md) / [RFC 7517](./rfc7517.md) / [RFC 7518](./rfc7518.md) / [RFC 7519](./rfc7519.md) - JOSE/JWT 関連

## 12. 参考文献

- [OpenID Connect Dynamic Client Registration 1.0 incorporating errata set 2](https://openid.net/specs/openid-connect-registration-1_0.html)
- [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html)
- [OpenID Connect Discovery 1.0](https://openid.net/specs/openid-connect-discovery-1_0.html)
- [RFC 7591 - OAuth 2.0 Dynamic Client Registration Protocol](https://datatracker.ietf.org/doc/html/rfc7591)
- [RFC 7592 - OAuth 2.0 Dynamic Client Registration Management Protocol](https://datatracker.ietf.org/doc/html/rfc7592)
- [RFC 8252 - OAuth 2.0 for Native Apps](https://datatracker.ietf.org/doc/html/rfc8252)
