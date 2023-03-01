export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  href: string;
  description: string;
  categoryType: string
}

export const products = [
  {
    id: 1,
    name: 'Ботинки Alexander McQueen',
    categoryType: "Boots",
    price: 539000,
    rating: 2.7,
    href: "https://kaspi.kz/shop/p/botinki-alexander-mcqueen-2352949-108760193/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hed/h5f/68664466767902/botinki-alexander-mcqueen-2352949-108760193-1.jpg",
    description: 'Трехслойная высокая подошва. Боковые вставки из эластичной ткани. Крупная строчка швов.'
  },
  {
    id: 2,
    name: 'Сапоги Alexander McQueen',
    price: 736000,
    categoryType: "Boots",
    rating: 4.3,
    href: "https://kaspi.kz/shop/p/sapogi-alexander-mcqueen-arc-2362831-108760906/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha6/hb1/68666703052830/sapogi-alexander-mcqueen-arc-2362831-108760906-1.jpg",
    description: 'Верх выполнен из водонепроницаемой эластичной ткани, которая полностью облегает ногу, верхняя часть ребристая. Инновационный каблук из нержавеющей стали с желтым оттенком. Круглый носок.'
  },
  {
    id: 3,
    name: 'Isabel Marant',
    categoryType: "Boots",
    price: 768000,
    rating: 3.9,
    href: "https://kaspi.kz/shop/p/isabel-marant-2350840-chernyi-105617057/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf4/h44/52098449801246/isabel-marant-2350840-cernyj-105617057-1.jpg",
    description: "Носок с металлической пряжкой серебристого цвета"
  },
  {
    id: 4,
    name: "Ботинки Alexander McQueen",
    price: 539000,
    categoryType: "Boots",
    rating: 4.0,
    href: "https://kaspi.kz/shop/p/botinki-alexander-mcqueen-2352944-108759135/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdf/h56/68662473949214/botinki-alexander-mcqueen-2352944-108759135-1.jpg",
    description: "Высокая подошва 2 см. Многослойная подошва из резины. Боковые вставки из прорезиненной ткани. Крупная строчка швов."
  },

  {
    id: 5,
    name: 'Ботильоны Isabel Marant',
    price: 621000,
    rating: 2.3,
    categoryType: "Boots",
    href: "https://kaspi.kz/shop/p/isabel-marant-2350453-chernyi-105617355/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc5/h26/52093163339806/isabel-marant-2350453-cernyj-105617355-1.jpg",
    description: "Острый носок, каблук трапеция"
  },
  {
    id: 6,
    name: "Isabel Marant",
    price: 634000,
    categoryType: "Boots",
    rating: 0,
    href: "https://kaspi.kz/shop/p/isabel-marant-2352632-chernyi-105617208/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8b/h26/52098453471262/isabel-marant-2352632-cernyj-105617208-1.jpg",
    description: "Полукруглый носок, квадратный каблук"
  },

  {
    id: 7,
    name: 'GIORGIO FABIANI',
    price: 219780,
    categoryType: "Boots",
    rating: 0,
    href: "https://kaspi.kz/shop/p/giorgio-fabiani-f191651-102125268/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/img/m/p/hb2/h20/64564170817566.jpg?format=preview-medium",
    description: "Высота каблука: 6 см"
  },
  {
    id: 8,
    name: "GIOVANNI FABIANI",
    price: 239274,
    rating: 0,
    categoryType: "Boots",
    image: "https://resources.cdn-kaspi.kz/img/m/p/h4e/ha9/64149408645150.jpg?format=preview-medium",
    href: "https://kaspi.kz/shop/p/giovanni-fabiani-g5449ms-102279719/?c=750000000",
    description: "Сезон: зима"
  },

  {
    id: 9,
    name: 'Alexander Mc Queen',
    price: 382000,
    categoryType: "Boots",
    rating: 0,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hd8/h22/63753526870046.jpg?format=preview-medium",
    href: "https://kaspi.kz/shop/p/alexander-mc-queen-657575w4l3m-1355-chernyi-103570221/?c=750000000",
    description: "Модель: ботинки"
  },
  {
    id: 10,
    name: "Кроссовки Nike ZOOMX VAPORFLY NEXT",
    price: 202300,
    rating: 5.0,
    categoryType: "Boots",
    href: "https://kaspi.kz/shop/p/nike-zoomx-vaporfly-next-2-dv9428-100-mul-tikolor-107715498/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/ha3/66117664636958/nike-dv9428-100-mul-tikolor-107715498-1.jpg",
    description: "Профессиональные беговые кроссовки с карбоновой пластиной"
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
