export interface Promotion {
  id: number;
  title: string;
  description: string;
  conditions: string;
  discount?: number;
  validUntil?: string;
  badge: string;
}

export const promotions: Promotion[] = [
  {
    id: 1,
    title: 'Пенсионерам скидка 30%',
    description: 'Скидка 30% на посещение в будние дни для гостей старше 60 лет',
    conditions: 'При предъявлении пенсионного удостоверения',
    discount: 30,
    badge: 'Для пенсионеров',
  },
  {
    id: 2,
    title: 'Студентам скидка 20%',
    description: 'Скидка 20% на утреннее посещение в будни',
    conditions: 'При предъявлении студенческого билета',
    discount: 20,
    badge: 'Студентам',
  },
  {
    id: 3,
    title: 'Именинникам — бесплатно!',
    description: 'Бесплатное посещение в день рождения и 3 дня после',
    conditions: 'При предъявлении паспорта',
    badge: 'Именинникам',
  },
  {
    id: 4,
    title: 'Кофе при заказе SPA',
    description: 'Бесплатный капучино или латте при заказе любой SPA-процедуры',
    conditions: 'Автоматически',
    badge: 'SPA',
  },
  {
    id: 5,
    title: 'Приведи друга — скидка 15%',
    description: 'Скидка 15% вам и вашему другу при первом посещении друга',
    conditions: 'Друг должен быть в Термбурге впервые',
    discount: 15,
    badge: 'Друзьям',
  },
  {
    id: 6,
    title: 'Семейный выходной',
    description: 'Скидка 25% при посещении семьёй от 3 человек в выходные',
    conditions: 'Минимум 1 взрослый + 2 ребёнка или 2 взрослых + 1 ребёнок',
    discount: 25,
    badge: 'Семьям',
  },
];
