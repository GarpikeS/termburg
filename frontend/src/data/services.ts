export interface ServiceItem {
  id: string;
  name: string;
  duration: string;
  price: number;
  priceNote?: string;
  description: string;
}

export const includedServices: string[] = [
  'Доступ ко всем термальным зонам',
  'Шезлонг и полотенце',
  'Шапочка для парения',
  'Тапочки и халат',
  'Чай в зоне отдыха',
  'Wi-Fi',
];

export const spaServices: ServiceItem[] = [
  {
    id: 'spa-classic',
    name: 'Классический массаж',
    duration: '60 мин',
    price: 4500,
    description: 'Общий расслабляющий массаж всего тела для снятия напряжения и восстановления сил',
  },
  {
    id: 'spa-thai',
    name: 'Тайский массаж',
    duration: '90 мин',
    price: 6500,
    description: 'Традиционный тайский массаж с элементами растяжки и акупрессуры',
  },
  {
    id: 'spa-stone',
    name: 'Стоун-терапия',
    duration: '60 мин',
    price: 5000,
    description: 'Массаж горячими вулканическими камнями для глубокого расслабления мышц',
  },
  {
    id: 'spa-relax',
    name: 'SPA-программа «Релакс»',
    duration: '120 мин',
    price: 9500,
    description: 'Комплексная программа: пилинг, обёртывание, массаж и уход за лицом',
  },
  {
    id: 'spa-detox',
    name: 'SPA-программа «Детокс»',
    duration: '150 мин',
    price: 12000,
    description: 'Детоксикационная программа: скраб, грязевое обёртывание, лимфодренажный массаж',
  },
  {
    id: 'spa-peeling',
    name: 'Пилинг и обёртывание',
    duration: '90 мин',
    price: 7000,
    description: 'Глубокое очищение кожи пилингом с последующим питательным обёртыванием',
  },
];

export const steamServices: ServiceItem[] = [
  {
    id: 'steam-author',
    name: 'Авторское парение',
    duration: '60 мин',
    price: 3000,
    description: 'Индивидуальное парение по авторской методике',
  },
  {
    id: 'steam-couple',
    name: 'Парение для двоих',
    duration: '90 мин',
    price: 5000,
    description: 'Романтическое парение для пары',
  },
  {
    id: 'steam-corporate',
    name: 'Корпоративное парение',
    duration: '120 мин',
    price: 2000,
    priceNote: 'от 2000₽/чел',
    description: 'Парение для групп до 10 человек',
  },
  {
    id: 'steam-kids',
    name: 'Детское парение',
    duration: '30 мин',
    price: 1500,
    description: 'Мягкое знакомство с культурой парения для детей от 7 лет',
  },
];

export const swimmingSchool: ServiceItem[] = [
  {
    id: 'swim-kids',
    name: 'Обучение плаванию для детей',
    duration: '45 мин',
    price: 2000,
    description: 'Группы по возрасту, до 6 человек',
  },
  {
    id: 'swim-adults',
    name: 'Обучение плаванию для взрослых',
    duration: '60 мин',
    price: 2500,
    description: 'Индивидуальный подход',
  },
  {
    id: 'swim-aqua',
    name: 'Аквааэробика',
    duration: '45 мин',
    price: 1500,
    description: 'Группы до 10 человек',
  },
];
