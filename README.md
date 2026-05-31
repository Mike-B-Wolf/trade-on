# TRADE-ON — 本番運用ドキュメント

このリポジトリは TRADE-ON のフロントエンドアプリケーション（Next.js / App Router）です。本書は本番公開・運用に関する設定、デプロイ手順、運用上の注意点をまとめたものです。

---

## 1. プロジェクト概要

- サイト名: TRADE-ON
- キャッチコピー: 「本物だけを、世界へ。」
- 本番URL: https://trade-on-company.com
- 開発(dev) URL: https://dev.trade-on-company.com

## 2. 技術構成

- フレームワーク: Next.js (App Router)
- ビルド: OpenNext (Cloudflare 向けビルド)
- デプロイ: Cloudflare Workers
- スタイリング: Tailwind CSS
- アニメーション: Framer Motion
- CI/CD: GitHub Actions
- メール送信: Resend

## 3. インフラ構成図

- GitHub (リポジトリ)
  - push -> GitHub Actions -> OpenNext ビルド -> wrangler deploy
- Cloudflare
  - Workers (.open-next/worker.js をデプロイ)
  - DNS / Proxy
  - Turnstile（フォーム保護）
  - Email Routing（contact@trade-on-company.com の中継）

## 4. Cloudflare Workers + OpenNext の構成

- ビルド: `npx opennextjs-cloudflare build` が OpenNext により `.open-next/worker.js` を生成します。
- `wrangler.jsonc` でワーカー名や `routes` を管理しています。
  - 本番: `name` は `trade-on`（`routes`: `trade-on-company.com/*`, `www.trade-on-company.com/*`）
  - dev: `env.dev` に `name`: `trade-on-dev`、`routes`: `dev.trade-on-company.com/*` を設定
- OpenNext 設定ファイル: [open-next.config.ts](open-next.config.ts)
- wrangler 設定: [wrangler.jsonc](wrangler.jsonc)

## 5. Cloudflare DNS / Proxy 構成

- ドメイン: trade-on-company.com
- DNS レコード: A / CNAME を Cloudflare 管理下に設定
- Proxy: Cloudflare Proxy 有効（橙雲）
- Email Routing: `contact@trade-on-company.com` を受け取り、現状はテスト転送先へ転送
- Google Search Console: `trade-on-company.com` をドメインプロパティで登録・所有権確認済み。Cloudflare DNS に Google verification 用 TXT レコードを追加し、`https://trade-on-company.com/sitemap.xml` を送信済み。

## 6. ブランチ運用ルール

- `main`: production 用ブランチ。`push` により本番自動デプロイがトリガされます。
- `develop`: dev 環境用ブランチ。`push` により dev 自動デプロイがトリガされます。
- 開発フロー: feature ブランチ -> `develop` で統合・ステージング確認 -> 問題なければ `main` にマージして本番反映

## 7. develop / production の役割

- `develop`: dev.trade-on-company.com に即時反映されるステージング用途。QA や実装確認に使用。
- `main`: production（顧客公開）用。厳密なレビューを経てマージする。

## 8. GitHub Actions の deploy フロー

- 本番ワークフロー: [.github/workflows/deploy.yml](.github/workflows/deploy.yml)
  - トリガ: `push` on `main`
  - ステップ: checkout -> setup-node -> `npm ci` -> `npx opennextjs-cloudflare build` (NEXT_PUBLIC_SITE_URL: https://trade-on-company.com) -> `npx wrangler deploy`
- dev ワークフロー: [.github/workflows/deploy-dev.yml](.github/workflows/deploy-dev.yml)
  - トリガ: `push` on `develop`
  - ステップ: checkout -> setup-node -> `npm ci` -> `npx opennextjs-cloudflare build` (NEXT_PUBLIC_SITE_URL: https://dev.trade-on-company.com) -> `npx wrangler deploy --env dev`
- CI 上では GitHub Secrets を使用して Cloudflare への認証情報などを渡します。

## 9. dev / production の URL 構成

- production: https://trade-on-company.com
- www production: https://www.trade-on-company.com
- dev: https://dev.trade-on-company.com

## 10. 問い合わせフォームの処理フロー

- フロントエンドフォーム: `app/components/contact/03_ContactForm.tsx` を経由して API に POST
- API エンドポイント: `app/api/contact/route.ts` が受け取り処理を行う
  - Turnstile 検証（サーバーサイド）
  - バリデーション
  - メール送信（Resend API を使用）
  - 成功時: 自動返信（設定済みの Gmail アドレスを利用）および管理者転送
- 受信/転送: Cloudflare Email Routing で `contact@trade-on-company.com` を転送設定
- sitemap/robots:
  - `https://trade-on-company.com/sitemap.xml` は `/` および `/contact` を含む
  - 本番 `robots.txt` は `Allow: /` で Google 検索をブロックしていない
  - 一部 AI ボットは Cloudflare 側で制御されているが、通常の Google クロールは許可されている
- 問い合わせフォーム改善:
  - 管理者向けメール本文を整形済み
  - ユーザー向け自動返信本文を整形済み
  - 署名に Web / Mail / TEL を追加済み
  - フッター CONTACT に `contact@trade-on-company.com` を追加済み
  - 返信がない場合・急ぎの場合の電話案内を自動返信に追加済み

## 11. Turnstile のセキュリティ構成

- Turnstile フロントエンドキーをページに埋め込み（環境変数名: `NEXT_PUBLIC_TURNSTILE_SITE_KEY`）
- サーバー側での検証に `TURNSTILE_SECRET_KEY` を使用し、API で検証済みのみ処理を通す
- ブラウザ側に Secret を露出しない構成（公開キーのみ）
- Turnstile widget の許可ホストに以下を登録済み:
  - localhost
  - trade-on-company.com
  - www.trade-on-company.com
  - dev.trade-on-company.com
- dev 環境で認証失敗が起きた場合は、site key / secret key のペアと許可ホストを確認する

## 12. WAF / RateLimit の概要

- Cloudflare WAF: ルールを適用し既知の脆弱性やボットから保護
- RateLimit: API エンドポイント（例: /api/contact）などに対してレート制限を設定
- 具体設定は Cloudflare ダッシュボードで管理（本 README では設定内容のサマリを記載）

## 13. Resend / Email Routing / Gmail のメール構成

- 送信: Resend を利用（API キーは `RESEND_API_KEY`）
- 送信元: contact@trade-on-company.com
- 通知先: `CONTACT_TO` で設定（本番 / dev で別のキーペアを運用）
- 転送: Cloudflare Email Routing を使用し現在は test.matisse.homepage@gmail.com に転送設定
- 自動返信: tradeon.contact.reply@gmail.com を運用

## 14. 必要な環境変数一覧

- NEXT_PUBLIC_SITE_URL — 表示用サイト URL（例: https://trade-on-company.com / https://dev.trade-on-company.com）
- NEXT_PUBLIC_TURNSTILE_SITE_KEY — Turnstile 公開キー
- TURNSTILE_SECRET_KEY — Turnstile シークレット（サーバーでのみ使用）
- RESEND_API_KEY — Resend API キー
- CONTACT_TO — 問い合わせ通知先メールアドレス
- MAIL_FROM — 送信元メールアドレス（省略可、未設定時は contact@trade-on-company.com）
- その他（必要に応じて）: Cloudflare Worker 用の Binding 名や外部 API キー

## 15. GitHub Secrets 一覧

- CLOUDFLARE_API_TOKEN
- CLOUDFLARE_ACCOUNT_ID
- RESEND_API_KEY
- TURNSTILE_SECRET_KEY
- NEXT_PUBLIC_TURNSTILE_SITE_KEY
- CONTACT_TO

※ 実値は絶対にコミットしないでください。

## 16. ローカル開発手順

1. レポジトリをクローン
2. Node バージョンは `node 22` 系を推奨
3. 依存をインストール

```bash
npm install
```

4. 開発サーバー起動

```bash
npm run dev
```

5. 環境変数: `.env.local` に最低限 `NEXT_PUBLIC_TURNSTILE_SITE_KEY` と `TURNSTILE_SECRET_KEY`（テスト用）を設定

## 17. dev 環境反映手順

1. `develop` ブランチへ変更を push
2. GitHub Actions (deploy-dev.yml) が自動で実行される
3. 成功すると `dev.trade-on-company.com` に反映される

## 18. production 反映手順

1. `main` ブランチへマージ / push
2. GitHub Actions (deploy.yml) が自動で実行される
3. 成功すると `trade-on-company.com` に反映される

## 19. デプロイ確認方法

- GitHub Actions の実行ログを確認（Actions ページ）
- `npx wrangler publish` / `npx wrangler deploy` のログに `.open-next/worker.js` のアップロード成功が出ることを確認
- ブラウザで対象 URL にアクセスしてページ表示・フォーム送信を確認

## 20. 運用時の注意事項

- 本番用 Secrets を GitHub に必ず設定すること
- Cloudflare の DNS Proxy 設定変更は即時影響するため運用時間外に行うことを推奨
- Email Routing の転送先変更は Cloudflare ダッシュボードで行い、コード変更は不要

## 21. セキュリティ上の注意事項

- Secret は GitHub Secrets に保存し、環境変数でのみ参照
- Turnstile の検証はサーバー側で必ず行う
- 監査ログ・通知を有効にして不正アクセスを早期検知

## 22. APIキー / Secret の取り扱い注意

- コードや README に実値を含めない
- 開発環境では最小限のテスト用キーを使用する
- 秘密鍵が漏洩した場合は即時ローテーションし、影響範囲を調査

## 23. 本番公開前チェック項目

- [ ] DNS が正しく設定され Cloudflare Proxy が有効
- [ ] Cloudflare WAF ルールの適用確認
- [ ] Turnstile サイトキーとシークレットが本番用に設定されている
- [ ] Email Routing の転送先が本番担当に設定済み
- [ ] GitHub Secrets が揃っている（一覧参照）
- [ ] 本番環境でフォーム送信のテスト完了

## 24. トラブルシュート

- ビルド失敗: `npx opennextjs-cloudflare build` をローカルで実行しエラーメッセージを確認
- wrangler デプロイ失敗: GitHub Actions の `wrangler deploy` ステップのログを確認。`CLOUDFLARE_API_TOKEN` と `CLOUDFLARE_ACCOUNT_ID` を確認
- Turnstile 検証エラー: サーバー側の検証レスポンスとシークレットが一致しているかを確認
- dev 環境で問い合わせ送信失敗が発生し、原因は `trade-on-dev` Worker 側の `RESEND_API_KEY` 不整合と判明
- Resend では dev 用 API キーを新規発行し、`trade-on-dev` Worker に再登録して `develop` を再デプロイ後、dev 環境の送信成功を確認
- production と dev は Resend API Key を分けて運用
- Cloudflare Logs: `POST /api/contact`, `CONTACT ENV ERROR`, `CONTACT TURNSTILE ERROR`, `CONTACT ERROR`, `Resend API error` を確認

## 25. Cloudflare Web Analytics

Cloudflare Web Analytics を本番環境で有効化して、アクセス解析を実施しています。

- 実装場所: [app/layout.tsx](app/layout.tsx) の RootLayout コンポーネント内
- スクリプト: `https://static.cloudflareinsights.com/beacon.min.js`
- 計測環境:
  - production: 有効（`NEXT_PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN` が設定されている場合）
  - dev: 無効化（dev 環境では計測しない）
- dev 環境のアクセスも Cloudflare Web Analytics で確認できるため、分析時は production / dev を区別して確認する
- 設定方法:
  1. Cloudflare ダッシュボードで Web Analytics を有効化
  2. tokenId を取得
  3. GitHub Secrets に `NEXT_PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN` を追加
  4. `.env.local` (ローカル開発) または GitHub Actions でも参照可能
- データは Cloudflare ダッシュボード → Analytics → Web Analytics で確認可能

## 26. 今後の追加予定

- SEO / OGP 対応済み
- Analytics 有効化済み
- Google Search Console 登録済み
- sitemap送信済み
- 本番公開前に Email Routing 転送先を test.matisse.homepage@gmail.com から、ひかるさん側の正式運用メールアドレスへ変更
- 問い合わせ内容の DB 保存
- Cloudflare Logs の長期保存・通知
- Bot 対策強化
- 必要に応じた本番 repo 分離

---

変更履歴

- 本ファイル作成: README.md
- 関連設定: [wrangler.jsonc](wrangler.jsonc), [.github/workflows/deploy-dev.yml](.github/workflows/deploy-dev.yml)

