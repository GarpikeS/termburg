export interface BathType {
  id: number;
  name: string;
  description: string;
  temperature: string;
  features: string[];
  image: string;
}

/** @deprecated Use bathTypes instead */
export type ThermalZone = BathType;

export const bathTypes: BathType[] = [
  {
    id: 1,
    name: 'Русская парная',
    description: 'Классическая русская баня с берёзовыми и дубовыми вениками.',
    temperature: '80-100°C',
    features: ['Веники', 'Парение на полке', 'Ледяная купель'],
    image: '/images/complex/gallery8.webp',
  },
  {
    id: 2,
    name: 'Сибирская парная',
    description: 'Мощная жаровая баня по сибирской традиции с кедровым паром.',
    temperature: '90-110°C',
    features: ['Кедровый пар', 'Жаровой камень', 'Глубокий прогрев'],
    image: '/images/complex/sauna.webp',
  },
  {
    id: 3,
    name: 'Травяная парная',
    description: 'Ароматная парная с настоями целебных трав и мягким паром.',
    temperature: '55-65°C',
    features: ['Фитотерапия', 'Ароматерапия', 'Укрепление иммунитета'],
    image: '/images/complex/herbal.webp',
  },
  {
    id: 4,
    name: 'Хаммам',
    description: 'Турецкая парильня с мягким паром и мраморными лежаками.',
    temperature: '45-50°C',
    features: ['Мраморные лежаки', 'Мыльный массаж', 'Пилинг'],
    image: '/images/complex/gallery6.webp',
  },
  {
    id: 5,
    name: 'Шаманская сауна',
    description: 'Сауна с элементами шаманских ритуалов и ароматами тайги.',
    temperature: '70-85°C',
    features: ['Ритуальное парение', 'Ароматы тайги', 'Медитация'],
    image: '/images/complex/gallery5.webp',
  },
  {
    id: 6,
    name: 'Деревенская сауна',
    description: 'Уютная сауна в деревенском стиле с печью по-чёрному.',
    temperature: '80-90°C',
    features: ['Печь по-чёрному', 'Деревенский колорит', 'Веники'],
    image: '/images/complex/gallery4.webp',
  },
  {
    id: 7,
    name: 'Бани-бочки',
    description: 'Компактные кедровые бочки на открытой террасе с видом на парк.',
    temperature: '60-80°C',
    features: ['Кедровая бочка', 'Вид на парк', 'Терраса'],
    image: '/images/complex/barrels.webp',
  },
  {
    id: 8,
    name: 'Песчаная сауна',
    description: 'Необычная сауна с прогретым песком для глубокого расслабления.',
    temperature: '50-60°C',
    features: ['Тёплый песок', 'Детоксикация', 'Расслабление'],
    image: '/images/complex/pool.webp',
  },
  {
    id: 9,
    name: 'Сауна с гималайской солью',
    description: 'Сауна со стенами из розовой гималайской соли для галотерапии.',
    temperature: '55-65°C',
    features: ['Гималайская соль', 'Галотерапия', 'Оздоровление дыхания'],
    image: '/images/complex/gallery5.webp',
  },
  {
    id: 10,
    name: 'Липовая сауна',
    description: 'Нежная сауна из липы с мягким ароматом и приятным теплом.',
    temperature: '60-75°C',
    features: ['Липовый аромат', 'Мягкий пар', 'Релаксация'],
    image: '/images/complex/herbal.webp',
  },
  {
    id: 11,
    name: 'Инфракрасная сауна',
    description: 'Мягкий глубокий прогрев инфракрасными лучами.',
    temperature: '50-60°C',
    features: ['Глубокий прогрев', 'Детоксикация', 'Расслабление'],
    image: '/images/complex/sauna.webp',
  },
  {
    id: 12,
    name: 'Бани индивидуального парения',
    description: 'Приватные бани для персонального парения с мастером.',
    temperature: '70-90°C',
    features: ['Приватность', 'Персональный мастер', 'Индивидуальная программа'],
    image: '/images/complex/gallery8.webp',
  },
];

/** @deprecated Use bathTypes instead */
export const thermalZones = bathTypes;
