export interface DzenArticle {
  id: number;
  title: string;
  excerpt: string;
  url: string;
  image: string;
  date: string;
}

export const dzenArticles: DzenArticle[] = [
  {
    id: 1,
    title: 'Как правильно париться в русской бане: гид для новичков',
    excerpt: 'Разбираемся в тонкостях парения: температура, веники, контрасты и время заходов. Советы от мастеров Термбурга.',
    url: 'https://dzen.ru/termburg',
    image: '/images/complex/gallery8.webp',
    date: '2026-02-10',
  },
  {
    id: 2,
    title: '5 причин посещать баню зимой',
    excerpt: 'Зимнее парение — это не только приятно, но и невероятно полезно. Рассказываем о пяти главных преимуществах.',
    url: 'https://dzen.ru/termburg',
    image: '/images/complex/gallery5.webp',
    date: '2026-01-25',
  },
  {
    id: 3,
    title: 'Хаммам vs русская баня: что выбрать?',
    excerpt: 'Сравниваем две великие банные традиции. Температура, влажность, процедуры — подробный разбор для каждого.',
    url: 'https://dzen.ru/termburg',
    image: '/images/complex/gallery6.webp',
    date: '2026-01-15',
  },
  {
    id: 4,
    title: 'Детокс в бане: миф или реальность?',
    excerpt: 'Учёные и банщики сходятся во мнении: баня действительно помогает очищению организма. Но есть нюансы.',
    url: 'https://dzen.ru/termburg',
    image: '/images/complex/sauna.webp',
    date: '2026-01-05',
  },
  {
    id: 5,
    title: 'Травяные настои для парной: рецепты от Термбурга',
    excerpt: 'Делимся рецептами ароматных настоев из мяты, эвкалипта и лаванды, которые мы используем в травяной парной.',
    url: 'https://dzen.ru/termburg',
    image: '/images/complex/herbal.webp',
    date: '2025-12-20',
  },
];
