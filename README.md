席でタバコが吸えるカフェを検索・シェアできるサービス「Smoke Map」のリポジトリ

## 環境構築

1. パッケージをインストール

```bash
pnpm run dev
```

2. .env.localを作成する  
ファイルへの記載内容は、@26ryssに問い合わせる  

3. 立ち上げる

```bash
pnpm run dev
```

[http://localhost:3000](http://localhost:3000) をブラウザ上で開くとアプリを確認できる

## 使用技術
- Framework: Next.js
- Library: React
- BaaS: Supabase
- UI Library: shadcn/ui
- CSS Framework: tailwindcss
- Other: Google Map API

## デザインに関するディレクトリ構成
app/_components以下で管理
- /ui-parts: atomsとmoleculesを統合した概念で、汎用的なパーツを管理
- /pages/[Page Name]: organismsのうち特定のページでしか呼び出されないものを管理する
- /projects: さまざまなページで使われる共通の機能(ログインを求めるモーダルなど)

## ER図
![ER図](./public/smoke-map-er.png)

## Demo
※ Currently, we only have 渋谷 and 新宿 for area.
### Top Page
<img src="/image/top_pc.png" width="600">

### Map View
<video width="640" height="360" controls>
  <source src="/image/map.mov" type="video/quicktime">
</video>

### Search
<img src="/image/search.png" width="600">

### Review and Vote
Once you login, you can vote and write reviews
<img src="/image/review.png" width="600">
<img src="/image/vote.png" width="600">