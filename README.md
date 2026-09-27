# dorsalia-website

合同会社Dorsalia Arcs（Dorsalia Arcs LLC）の公式サイトのソースコードです。

- サイト: https://dorsaliaarcs.com
- 構成: [Astro](https://astro.build) で作った静的サイトを、GitHub Pages で公開しています。`main` へ push すると GitHub Actions でビルドと公開が行われます。

## 開発

Node.js 22.12 以上が必要です。

```sh
npm install
npm run dev      # http://localhost:4321 で確認
npm run build    # ./dist/ に出力
```

## 主なファイル

| 場所 | 内容 |
| :--- | :--- |
| `src/data/site.ts` | 会社情報・ブランド・ナビゲーション |
| `src/content/news/` | お知らせ（1件につき Markdown 1ファイル） |
| `src/texts/privacy.md` | プライバシーポリシー本文 |
| `src/pages/` | 各ページ |
| `public/` | 画像・CNAME など、そのまま配信するファイル |

## お問い合わせ

info@dorsaliaarcs.com
