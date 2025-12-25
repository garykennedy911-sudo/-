import { Product } from './types';

const BASE_PHONES = [
  { name: "Xiaomi Redmi Note 13", price: 220 },
  { name: "Xiaomi 13 Pro", price: 850 },
  { name: "Samsung Galaxy A15", price: 160 },
  { name: "Samsung Galaxy S23 Ultra", price: 1050 },
  { name: "iPhone 11", price: 350 },
  { name: "iPhone 13", price: 600 },
  { name: "iPhone 15", price: 950 }
];

const PRODUCTS: Product[] = [];
let id = 1;

while (PRODUCTS.length < 100) {
  BASE_PHONES.forEach(p => {
    if (PRODUCTS.length < 100) {
      PRODUCTS.push({
        id: id++,
        name: p.name,
        price: p.price,
        category: "هواتف",
        description: `${p.name} هاتف ذكي بمواصفات ممتازة.`,
        image: `https://source.unsplash.com/400x400/?smartphone`
      });
    }
  });
}

export const INITIAL_PRODUCTS = PRODUCTS;
