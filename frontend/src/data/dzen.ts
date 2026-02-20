export interface DzenArticle {
  id: number;
  title: string;
  excerpt: string;
  url: string;
  image: string;
  date: string;
}

const DZEN_CHANNEL = 'https://dzen.ru/id/652f7beb5939720dfbfa6bc8';

export const dzenArticles: DzenArticle[] = [
  {
    id: 1,
    title: 'Детская анимация каждую субботу в Термбурге',
    excerpt: 'Каждую субботу в 15:00 приглашаем маленьких гостей на увлекательную детскую анимацию в нашем уютном Термбурге!',
    url: 'https://dzen.ru/shorts/698ae7c4e2b37f7e4e8c206b',
    image: '/images/complex/gallery4.webp',
    date: '2026-02-10',
  },
  {
    id: 2,
    title: 'Отборочный этап чемпионата по банному мастерству ЖОГОВО 2026',
    excerpt: 'В Москве морозы, а у нас в Термбурге жарко! Приглашаем на отборочный этап Народного чемпионата по банному мастерству.',
    url: 'https://dzen.ru/shorts/6982e6b889768b7def949c78',
    image: '/images/complex/gallery5.webp',
    date: '2026-02-04',
  },
  {
    id: 3,
    title: 'Школа плавания в термальном комплексе Термбург',
    excerpt: 'Обучение плаванию для детей и взрослых в нашем термальном бассейне. Сертифицированные тренеры, индивидуальный подход.',
    url: 'https://termburg.ru/news/shkola-plavaniya-v-termalnom-komplekse-termburg/',
    image: '/images/complex/pool.webp',
    date: '2025-09-25',
  },
  {
    id: 4,
    title: 'Термбург — лучшие бани Москвы',
    excerpt: 'Почему Термбург входит в топ банных комплексов столицы: 15+ термальных зон, авторские парения и уникальная атмосфера.',
    url: 'https://termburg.ru/news/termburg-luchshie-bani-moskvy/',
    image: '/images/complex/gallery6.webp',
    date: '2025-09-24',
  },
  {
    id: 5,
    title: 'Баня в Москве в термальном комплексе Термбург',
    excerpt: 'Всё о банях Термбурга: русская парная, хаммам, японское офуро и скандинавские парения — в одном пространстве.',
    url: 'https://termburg.ru/news/banya-v-moskve-v-termalnom-komplekse-termburg/',
    image: '/images/complex/herbal.webp',
    date: '2025-11-12',
  },
];

export { DZEN_CHANNEL };
