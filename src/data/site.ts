// Company facts shown on the site. Keep in sync with the registry (登記) and the notes' 現在地サマリー §3.
export const company = {
  nameJa: '合同会社Dorsalia Arcs',
  nameEn: 'Dorsalia Arcs LLC',
  established: '2026年9月14日',
  representative: '代表社員　岩渕 貴洋',
  capital: '50万円',
  address: '〒103-0022 東京都中央区日本橋室町1丁目11番12号 日本橋水野ビル7階',
  corporateNumber: '9010003052698',
  email: 'info@dorsaliaarcs.com',
  business: [
    'ゲームソフトウェアの企画、開発、制作、販売及び配信',
    'コンピュータソフトウェアの企画、開発、制作、販売及び配信',
    'インターネットを利用した情報処理サービス及び情報提供サービス',
    'ソフトウェアの受託開発、保守及び技術コンサルティング',
    '音楽、映像その他デジタルコンテンツの企画、制作、販売及び配信',
  ],
};

export const brands = [
  {
    id: 'dorsalfin',
    name: 'DorsalFin Studio',
    kind: 'ゲームブランド',
    // English label under the brand name (mockup)
    tagline: 'GAME DEVELOPMENT',
    summary:
      '和風ホラーゲームの企画・開発・販売を行うゲーム制作ブランドです。2019年に活動を始め、2021年の『真砂楼』から『奥ヶ淵商店街』まで4タイトルを発売しています。',
    points: ['一人称視点の探索系ホラーゲーム', 'Steam／Nintendo Switch で展開'],
    // TODO: switch to the brand's own domain once decided
    url: 'https://dorsalfingamestudio.wixsite.com/dorsalfinstudio',
    // Mark shown left of the brand name (single-color PNG, recolored via CSS mask). Empty = arc mark.
    logo: '/brands/dorsalfin-mark.png',
    // Key visual for the TOP/BUSINESS panels (path under public/, e.g. '/brands/dorsalfin-visual.webp'). Empty = no image.
    visual: '/brands/dorsalfin-visual.webp',
    // true = not shown on the site (TOP / BUSINESS)
    hidden: false,
  },
  {
    id: 'ioby',
    name: 'iObY',
    kind: '資料作成・AI活用サポート・ツール開発',
    tagline: 'SOFTWARE / AI / BUSINESS SUPPORT',
    summary:
      'AIで作業を効率化し、そのぶん依頼者とのやり取りに時間を使うことを大切にしています。資料作成、AI活用のサポート、業務ツール「TKシリーズ」の開発を行っています。',
    points: ['資料・スライドの作成', 'AI活用のサポート', '業務ツール TKシリーズ（TKtask・TKclock）'],
    url: 'https://ioby.net',
    logo: '',
    visual: '',
    // Hidden until the iObY page/site is ready
    hidden: true,
  },
];

// Brands shown on the site.
export const visibleBrands = brands.filter((brand) => !brand.hidden);

// Mockup items plus NEWS (order chosen by the owner).
export const nav = [
  { href: '/', label: 'トップ', en: 'Top' },
  { href: '/news/', label: 'お知らせ', en: 'News' },
  { href: '/business/', label: '事業紹介', en: 'Business' },
  { href: '/company/', label: '会社概要', en: 'Company' },
  { href: '/contact/', label: 'お問い合わせ', en: 'Contact' },
];

// Site copy used by the pages (from the owner's mockup in _design/).
export const copy = {
  tagline: 'Software & Entertainment Company',
  lead: 'Dorsalia Arcs は、ゲーム開発とソフトウェア・AI・業務支援を中心に、デジタルの可能性を広げる事業を展開しています。',
  // Same lead with the mockup's line breaks for the TOP hero
  leadLines: [
    'Dorsalia Arcs は、',
    'ゲーム開発とソフトウェア・AI・業務支援を中心に、',
    'デジタルの可能性を広げる事業を展開しています。',
  ],
  newsLead: ['Dorsalia Arcs に関する', '最新情報をお届けします。'],
  contactLead: ['お仕事のご相談・ご連絡は、', '下記のメールアドレスよりお願いいたします。'],
  contactNote: '※ 取材・協業・業務相談など、上記までお気軽にご連絡ください。',
  notFound: 'お探しのページは見つかりませんでした。URLが変更されたか、削除された可能性があります。',
};

// Label shown in the tag next to each news date, per `brand` in the frontmatter.
export const newsBrandLabels = {
  dorsalia: 'NEWS',
  dorsalfin: 'DORSALFIN',
  ioby: 'IOBY',
} as const;
