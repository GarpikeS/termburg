export interface SocialLinks {
  vk: string;
  telegram: string;
  instagram: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface ContactInfo {
  phone: string;
  address: string;
  metro: string;
  email: string;
  workingHours: string;
  social: SocialLinks;
  coordinates: Coordinates;
  howToGet: string[];
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
    'От м. Печатники: выход к ул. Гурьянова, 5 минут пешком',
    'На автомобиле: бесплатная парковка на территории комплекса',
    'На автобусе: остановка «Гурьянова» маршруты 161, 670',
  ],
};
