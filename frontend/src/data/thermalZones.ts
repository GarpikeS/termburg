export interface ThermalZone {
  id: number;
  name: string;
  description: string;
  temperature: string;
  features: string[];
  image: string;
}

export const thermalZones: ThermalZone[] = [
  {
    id: 1,
    name: 'Римские термы',
    description: 'Классические термальные купели с различной температурой воды.',
    temperature: '36-42°C',
    features: ['Термальные купели', 'Гидромассаж', 'Ароматерапия'],
    image: '/images/zones/zone-1.jpg',
  },
  {
    id: 2,
    name: 'Хаммам',
    description: 'Турецкая парильня с мягким паром и мраморными лежаками.',
    temperature: '45-50°C',
    features: ['Мраморные лежаки', 'Мыльный массаж', 'Пилинг'],
    image: '/images/zones/zone-2.jpg',
  },
  {
    id: 3,
    name: 'Японская баня (Офуро)',
    description: 'Деревянные купели с горячей водой по японской традиции.',
    temperature: '40-45°C',
    features: ['Кедровые купели', 'Травяные настои', 'Медитация'],
    image: '/images/zones/zone-3.jpg',
  },
  {
    id: 4,
    name: 'Инфракрасная сауна',
    description: 'Мягкий глубокий прогрев инфракрасными лучами.',
    temperature: '50-60°C',
    features: ['Глубокий прогрев', 'Детоксикация', 'Расслабление'],
    image: '/images/zones/zone-4.jpg',
  },
  {
    id: 5,
    name: 'Соляная пещера',
    description: 'Комната с микроклиматом соляных шахт.',
    temperature: '20-22°C',
    features: ['Галотерапия', 'Оздоровление дыхания', 'Релаксация'],
    image: '/images/zones/zone-5.jpg',
  },
  {
    id: 6,
    name: 'Травяная сауна',
    description: 'Ароматная сауна с настоями целебных трав.',
    temperature: '60-70°C',
    features: ['Фитотерапия', 'Ароматерапия', 'Иммунитет'],
    image: '/images/zones/zone-6.jpg',
  },
  {
    id: 7,
    name: 'Бассейн',
    description: 'Просторный бассейн с термальной водой.',
    temperature: '28-30°C',
    features: ['Термальная вода', 'Гидромассажные зоны', 'Водопад'],
    image: '/images/zones/zone-7.jpg',
  },
  {
    id: 8,
    name: 'Ледяная купель',
    description: 'Контрастная купель для закаливания.',
    temperature: '4-6°C',
    features: ['Закаливание', 'Контрастные процедуры', 'Бодрость'],
    image: '/images/zones/zone-8.jpg',
  },
];
