export interface PricingSlot {
  id: string;
  name: string;
  duration: string;
  adultPrice: number;
  childPrice: number;
}

export interface Subscription {
  id: string;
  name: string;
  period: string;
  adultPrice: number;
  discount: number;
  description?: string;
}

export interface Certificate {
  id: string;
  name: string;
  price: number;
  description: string;
}

export const weekdayPricing: PricingSlot[] = [
  {
    id: 'wd-1h',
    name: '1 час',
    duration: '1 час',
    adultPrice: 540,
    childPrice: 270,
  },
  {
    id: 'wd-2h',
    name: '2 часа',
    duration: '2 часа',
    adultPrice: 1050,
    childPrice: 525,
  },
  {
    id: 'wd-3h',
    name: '3 часа',
    duration: '3 часа',
    adultPrice: 1500,
    childPrice: 750,
  },
  {
    id: 'wd-4h',
    name: '4 часа',
    duration: '4 часа',
    adultPrice: 1900,
    childPrice: 950,
  },
  {
    id: 'wd-unlimited',
    name: 'Безлимит на день',
    duration: '9:00–23:00',
    adultPrice: 2500,
    childPrice: 1250,
  },
];

export const weekendPricing: PricingSlot[] = [
  {
    id: 'we-1h',
    name: '1 час',
    duration: '1 час',
    adultPrice: 760,
    childPrice: 380,
  },
  {
    id: 'we-2h',
    name: '2 часа',
    duration: '2 часа',
    adultPrice: 1400,
    childPrice: 700,
  },
  {
    id: 'we-3h',
    name: '3 часа',
    duration: '3 часа',
    adultPrice: 2000,
    childPrice: 1000,
  },
  {
    id: 'we-4h',
    name: '4 часа',
    duration: '4 часа',
    adultPrice: 2600,
    childPrice: 1300,
  },
  {
    id: 'we-unlimited',
    name: 'Безлимит на день',
    duration: '9:00–23:00',
    adultPrice: 3250,
    childPrice: 1625,
  },
];

export const subscriptions: Subscription[] = [
  {
    id: 'sub-main-1',
    name: 'Основной безлимит',
    period: '1 месяц',
    adultPrice: 13500,
    discount: 0,
    description: 'Безлимитное посещение каждый день',
  },
  {
    id: 'sub-day-1',
    name: 'Дневной безлимит',
    period: '1 месяц (9:00–16:00)',
    adultPrice: 11700,
    discount: 13,
    description: 'Посещение в дневное время с 9:00 до 16:00',
  },
  {
    id: 'sub-parent-1',
    name: 'Хороший родитель',
    period: '1 месяц (1 взр. + 1 реб.)',
    adultPrice: 17600,
    discount: 0,
    description: '1 взрослый + 1 ребёнок до 13 лет',
  },
  {
    id: 'sub-family-1',
    name: 'Семейный',
    period: '1 месяц (2 взр. + 1 реб.)',
    adultPrice: 30375,
    discount: 10,
    description: '2 взрослых + 1 ребёнок',
  },
  {
    id: 'sub-trio-1',
    name: 'На троих',
    period: '1 месяц (3 взрослых)',
    adultPrice: 33750,
    discount: 17,
    description: '3 взрослых с безлимитным посещением',
  },
];

export interface GiftBox {
  id: string;
  name: string;
  contents: string;
  price: number;
}

export interface MerchItem {
  id: string;
  name: string;
  price: number;
  description: string;
}

export const certificates: Certificate[] = [
  {
    id: 'cert-3000',
    name: 'Сертификат 3 000 ₽',
    price: 3000,
    description: 'Идеально для первого знакомства с Термбургом',
  },
  {
    id: 'cert-5000',
    name: 'Сертификат 5 000 ₽',
    price: 5000,
    description: 'Комплексное посещение с процедурами',
  },
  {
    id: 'cert-10000',
    name: 'Сертификат 10 000 ₽',
    price: 10000,
    description: 'Премиальный подарок с SPA-услугами',
  },
];

export const giftBoxes: GiftBox[] = [
  {
    id: 'box-relax',
    name: 'Бокс Релакс',
    contents: 'Сертификат + халат + набор чая',
    price: 7500,
  },
  {
    id: 'box-premium',
    name: 'Бокс Премиум',
    contents: 'Сертификат + халат + SPA-набор + шампанское',
    price: 15000,
  },
];

export const merchItems: MerchItem[] = [
  { id: 'merch-robe', name: 'Халат Термбург', price: 3500, description: 'Махровый халат с вышивкой логотипа' },
  { id: 'merch-towel', name: 'Полотенце Термбург', price: 1200, description: 'Банное полотенце из египетского хлопка' },
  { id: 'merch-slippers', name: 'Тапочки Термбург', price: 800, description: 'Уютные войлочные тапочки' },
  { id: 'merch-tea', name: 'Чайный набор', price: 1500, description: 'Коллекция травяных чаёв из нашего кафетерия' },
  { id: 'merch-cap', name: 'Банная шапка', price: 600, description: 'Войлочная шапка для парной с логотипом' },
];

