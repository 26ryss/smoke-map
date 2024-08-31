const users = [
  {
    display_name: 'User',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const areas = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: '渋谷',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: '新宿',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: '表参道',
  }
]

const stores = [
  {
    "name": "Lighters",
    "address": "東京都渋谷区神南1-15-7",
    "area_id": areas[0].id,
    "description": "渋谷駅徒歩10分に位置する「Lighters」。全席喫煙可能。煙草を吸いながら本格的なイタリアン料理やこだわりの自家製ドリンクを楽しめるお店です。",
    "url": "https://www.lighters-shibuya.com/",
    "eye_catch_url": null
  },
  {
    "name": "Cafe Kitsune",
    "address": "東京都渋谷区神宮前4-12-10 表参道ヒルズ",
    "area_id": areas[2].id,
    "description": "パリ発のカフェ「Cafe Kitsune」。洗練されたインテリアと落ち着いた雰囲気の中で、美味しいコーヒーを楽しめます。",
    "url": "https://www.cafekitsune.com/",
    "eye_catch_url": null
  },
  {
    "name": "Streamer Coffee Company",
    "address": "東京都渋谷区宇田川町35-6 渋谷モディ",
    "area_id": areas[0].id,
    "description": "ラテアートで有名な「Streamer Coffee Company」。広々とした空間でリラックスしながらコーヒーを堪能できます。",
    "url": "https://streamercoffee.com/",
    "eye_catch_url": null
  },
  {
    "name": "Fuglen Tokyo",
    "address": "東京都渋谷区富ヶ谷1-16-11",
    "area_id": areas[0].id,
    "description": "ノルウェー発のカフェ「Fuglen Tokyo」。北欧スタイルの落ち着いた雰囲気の中で、こだわりのコーヒーを楽しめます。",
    "url": "http://fuglencoffee.no/tokyo/",
    "eye_catch_url": null
  },
  {
    "name": "The Roastery by Nozy Coffee",
    "address": "東京都渋谷区神宮前5-17-13",
    "area_id": areas[2].id,
    "description": "原宿・裏参道にある「The Roastery by Nozy Coffee」。焙煎したての新鮮なコーヒーが楽しめる人気カフェ。",
    "url": "https://tyharborbrewing.co.jp/jp/the_roastery/",
    "eye_catch_url": null
  },
  {
    "name": "Blue Bottle Coffee 新宿店",
    "address": "東京都新宿区新宿3-38-2 ルミネ新宿 LUMINE1 1F",
    "area_id": areas[0].id,
    "description": "サンフランシスコ発のスペシャリティコーヒーショップ「Blue Bottle Coffee」。おしゃれな空間で一杯ずつ淹れる鮮度抜群のコーヒーが楽しめます。",
    "url": "https://bluebottlecoffee.jp/",
    "eye_catch_url": null
  },
  {
    "name": "Sarutahiko Coffee ビームス ジャパン店",
    "address": "東京都新宿区新宿3-32-6 BEAMS JAPAN 1F",
    "area_id": areas[1].id,
    "description": "自家焙煎のスペシャリティコーヒーを提供する「猿田彦珈琲」。BEAMSとコラボレーションした店舗で、独自の世界観を楽しめます。",
    "url": "https://sarutahiko.co/",
    "eye_catch_url": null
  },
  {
    "name": "Cafe La Bohéme 新宿御苑",
    "address": "東京都新宿区新宿1-1-7 コスモ新宿御苑ビル B1F",
    "area_id": areas[1].id,
    "description": "「Cafe La Bohéme」は新宿御苑に位置し、ヨーロッパ風のインテリアと豊富なメニューが特徴のカフェ。",
    "url": "http://www.boheme.jp/",
    "eye_catch_url": null
  },
  {
    "name": "Paul Bassett 新宿店",
    "address": "東京都新宿区西新宿1-26-2 新宿野村ビル B1",
    "area_id": areas[1].id,
    "description": "エスプレッソの世界チャンピオン、ポール・バセット氏プロデュースのカフェ。高品質なエスプレッソや美味しいペストリーが楽しめます。",
    "url": "http://www.paulbassett.jp/",
    "eye_catch_url": null
  },
  {
    "name": "Verve Coffee Roasters 新宿ミロード",
    "address": "東京都新宿区西新宿1-1-3 新宿ミロード モザイク通り",
    "area_id": areas[1].id,
    "description": "カリフォルニア州サンタクルーズ発の「Verve Coffee Roasters」。開放的な雰囲気の中で、こだわりのコーヒーを堪能できます。",
    "url": "https://vervecoffee.jp/",
    "eye_catch_url": null
  }
]

export { users, areas, stores };