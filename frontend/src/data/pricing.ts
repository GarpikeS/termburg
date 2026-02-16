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
}

export interface SpaPrice {
  id: string;
  name: string;
  duration: string;
  adultPrice: number;
}

export const weekdayPricing: PricingSlot[] = [
  {
    id: 'wd-morning',
    name: 'Утро',
    duration: '8:00-12:00',
    adultPrice: 1800,
    childPrice: 900,
  },
  {
    id: 'wd-day',
    name: 'День',
    duration: '12:00-17:00',
    adultPrice: 2200,
    childPrice: 1100,
  },
  {
    id: 'wd-evening',
    name: 'Вечер',
    duration: '17:00-23:00',
    adultPrice: 2500,
    childPrice: 1250,
  },
  {
    id: 'wd-allday',
    name: 'Весь день',
    duration: '8:00-23:00',
    adultPrice: 3200,
    childPrice: 1600,
  },
];

export const weekendPricing: PricingSlot[] = [
  {
    id: 'we-morning',
    name: 'Утро',
    duration: '8:00-12:00',
    adultPrice: 2200,
    childPrice: 1100,
  },
  {
    id: 'we-day',
    name: 'День',
    duration: '12:00-17:00',
    adultPrice: 2800,
    childPrice: 1400,
  },
  {
    id: 'we-evening',
    name: 'Вечер',
    duration: '17:00-23:00',
    adultPrice: 3200,
    childPrice: 1600,
  },
  {
    id: 'we-allday',
    name: 'Весь день',
    duration: '8:00-23:00',
    adultPrice: 4000,
    childPrice: 2000,
  },
];

export const subscriptions: Subscription[] = [
  {
    id: 'sub-5',
    name: '5 посещений',
    period: '5 визитов',
    adultPrice: 12000,
    discount: 15,
  },
  {
    id: 'sub-10',
    name: '10 посещений',
    period: '10 визитов',
    adultPrice: 22000,
    discount: 20,
  },
  {
    id: 'sub-unlimited',
    name: 'Безлимит на месяц',
    period: '30 дней',
    adultPrice: 35000,
    discount: 0,
  },
];

export const spaPricing: SpaPrice[] = [
  {
    id: 'spa-classic',
    name: 'Классический массаж',
    duration: '60 мин',
    adultPrice: 4500,
  },
  {
    id: 'spa-thai',
    name: 'Тайский массаж',
    duration: '90 мин',
    adultPrice: 6500,
  },
  {
    id: 'spa-stone',
    name: 'Стоун-терапия',
    duration: '60 мин',
    adultPrice: 5000,
  },
  {
    id: 'spa-relax',
    name: 'SPA-программа «Релакс»',
    duration: '120 мин',
    adultPrice: 9500,
  },
  {
    id: 'spa-detox',
    name: 'SPA-программа «Детокс»',
    duration: '150 мин',
    adultPrice: 12000,
  },
  {
    id: 'spa-peeling',
    name: 'Пилинг и обёртывание',
    duration: '90 мин',
    adultPrice: 7000,
  },
];
