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

## デザインに関するディレクトリ構成
app/_components以下で管理
- /ui-parts: atomsとmoleculesを統合した概念で、汎用的なパーツを管理
- /pages/[Page Name]: organismsのうち特定のページでしか呼び出されないものを管理する
- /projects: さまざまなページで使われる共通の機能(ログインを求めるモーダルなど)

## ER図
![ER図](./public/smoke-map-er.png)

## Demo
### Top Page
<img src="/image/top_pc.png" width="500">

## Map View
<video src="/image/map.mov" width="600"></video>