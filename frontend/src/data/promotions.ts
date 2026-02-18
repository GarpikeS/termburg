export interface Promotion {
  id: number;
  title: string;
  description: string;
  conditions: string;
  discount?: number;
  validUntil?: string;
  badge: string;
  banner: string;
}

export const promotions: Promotion[] = [
  {
    id: 1,
    title: 'Школа плавания для детей в Термбург!',
    description: 'Дети 6–12 лет. Пятница 16:00 и Воскресенье 10:00. Группы по 4–6 человек. Абонемент на месяц 8 000 ₽ за 8 занятий по 45 минут.',
    conditions: 'Запись по телефону',
    badge: 'Детям',
    banner: 'https://termburg.ru/wp-content/uploads/2025/08/termburg_banner_plavanie_560h400-1.jpg',
  },
  {
    id: 2,
    title: 'Стаканчик кофе в подарок',
    description: 'Бесплатный кофе при покупке любой СПА-услуги. Пн–Пт с 10:00 до 13:00.',
    conditions: 'При покупке SPA-услуги',
    badge: 'SPA',
    banner: 'https://termburg.ru/wp-content/uploads/2025/08/termburg_banner_kofe_560h400.jpg',
  },
  {
    id: 3,
    title: 'Скидка 30% студентам',
    description: 'Скидка 30% студентам очной формы обучения после 16:00.',
    conditions: 'При предъявлении студенческого билета',
    discount: 30,
    badge: 'Студентам',
    banner: 'https://termburg.ru/wp-content/uploads/2025/04/termburg_banner_studenty_skidka_560h400.jpg',
  },
  {
    id: 4,
    title: 'Подарок для Именинника!',
    description: 'Бесплатное посещение в день рождения.',
    conditions: 'При предъявлении паспорта',
    badge: 'Именинникам',
    banner: 'https://termburg.ru/wp-content/uploads/2025/01/termburg_banner_den_rozhdeniya_560h400.jpg',
  },
  {
    id: 5,
    title: 'Скидка 50% пенсионерам',
    description: 'Скидка 50% на посещение каждый вторник.',
    conditions: 'При предъявлении пенсионного удостоверения',
    discount: 50,
    badge: 'Для пенсионеров',
    banner: 'https://termburg.ru/wp-content/uploads/2024/09/560h400_2.jpg',
  },
  {
    id: 6,
    title: 'Йога Вторник и Четверг в Термбург!',
    description: 'Занятия йогой по вторникам и четвергам.',
    conditions: 'Включено в стоимость посещения',
    badge: 'Йога',
    banner: 'https://termburg.ru/wp-content/uploads/2025/05/joga_560h400.jpg',
  },
];
