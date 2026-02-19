export interface SocialLinks {
  vk: string;
  telegram: string;
  instagram: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface RouteStep {
  number: number;
  text: string;
  image?: string;
}

export interface RouteDirection {
  id: string;
  title: string;
  icon: 'metro' | 'car' | 'bus';
  steps: RouteStep[];
}

export interface ContactInfo {
  phone: string;
  address: string;
  metro: string;
  email: string;
  workingHours: string;
  social: SocialLinks;
  coordinates: Coordinates;
  howToGet: RouteDirection[];
}

export const contactInfo: ContactInfo = {
  phone: '+7 (909) 167-47-46',
  address: 'г. Москва, ул. Гурьянова, д. 30, 2 этаж',
  metro: 'м. Печатники',
  email: 'info@termburg.ru',
  workingHours: 'Ежедневно с 9:00 до 23:00',
  social: {
    vk: 'https://vk.com/termburg',
    telegram: 'https://t.me/termburg',
    instagram: 'https://instagram.com/termburg',
  },
  coordinates: {
    lat: 55.680707,
    lng: 37.715830,
  },
  howToGet: [
    {
      id: 'metro',
      title: 'От метро',
      icon: 'metro',
      steps: [
        { number: 1, text: 'Выйдите на станции м. Печатники (Люблинская линия)' },
        { number: 2, text: 'Выход к ул. Гурьянова (последний вагон из центра)' },
        { number: 3, text: 'Идите прямо по ул. Гурьянова ~400 м' },
        { number: 4, text: 'Термбург будет справа, д. 30, вход со двора, 2 этаж' },
      ],
    },
    {
      id: 'car',
      title: 'На автомобиле',
      icon: 'car',
      steps: [
        { number: 1, text: 'Введите в навигаторе: ул. Гурьянова, д. 30' },
        { number: 2, text: 'Въезд на парковку со стороны двора' },
        { number: 3, text: 'Бесплатная парковка для гостей комплекса' },
      ],
    },
    {
      id: 'bus',
      title: 'На автобусе',
      icon: 'bus',
      steps: [
        { number: 1, text: 'Автобусы 161, 670 — остановка «Гурьянова»' },
        { number: 2, text: 'От остановки 2 минуты пешком в сторону д. 30' },
        { number: 3, text: 'Вход со двора, 2 этаж' },
      ],
    },
  ],
};
