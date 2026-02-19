export interface MenuItem {
  name: string;
  price: number;
  description?: string;
  image?: string;
}

export interface CafeMenu {
  hotDrinks: MenuItem[];
  coldDrinks: MenuItem[];
  snacks: MenuItem[];
  desserts: MenuItem[];
}

export const cafeMenu: CafeMenu = {
  hotDrinks: [
    { name: 'Чай травяной', price: 200 },
    { name: 'Чай чёрный/зелёный', price: 180 },
    { name: 'Капучино', price: 280 },
    { name: 'Латте', price: 300 },
    { name: 'Американо', price: 220 },
    { name: 'Какао', price: 260 },
  ],
  coldDrinks: [
    { name: 'Морс клюквенный', price: 250 },
    { name: 'Лимонад домашний', price: 280 },
    { name: 'Смузи фруктовый', price: 350 },
    { name: 'Вода минеральная', price: 150 },
  ],
  snacks: [
    { name: 'Сырная тарелка', price: 650 },
    { name: 'Фруктовая тарелка', price: 550 },
    { name: 'Брускетты (3 шт)', price: 450 },
    { name: 'Цезарь с курицей', price: 520 },
    { name: 'Греческий салат', price: 480 },
  ],
  desserts: [
    { name: 'Чизкейк', price: 380 },
    { name: 'Тирамису', price: 420 },
    { name: 'Панна-котта', price: 350 },
    { name: 'Мороженое (3 шарика)', price: 300 },
  ],
};
