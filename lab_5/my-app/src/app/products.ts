export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  href: string;
  description: string;
  categoryType: string;
  likes: number;
}

export const products = [
  {
    likes: 0,
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
    likes: 0,

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
    likes: 0,

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
    likes: 0,

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
    likes: 0,

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
    likes: 0,

    id: 6,
    name: 'Lenovo IdeaPad 3',
    price: 169990,
    rating: 4.3,
    categoryType: "Laptops",
    href: "https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h92/he5/66993674059806/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705-1.jpg",
    description: ""
  },
  {
    likes: 0,

    id: 7,
    name: 'Acer Nitro 5',
    price: 389980,
    rating: 4.3,
    categoryType: "Laptops",
    href: "https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h9b/h1b/67236399120414/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg",
    description: ""
  },
  {
    likes: 0,

    id: 8,
    name: 'Apple Macbook Air 13',
    price: 478888,
    rating: 4.4,
    categoryType: "Laptops",
    href: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h67/h95/33125682380830/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg",
    description: ""
  },
  {
    likes: 0,

    id: 9,
    name: 'ASUS TUF Gaming A15',
    price: 369990,
    rating: 5.0,
    categoryType: "Laptops",
    href: "https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/ha2/he7/62100002570270/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-1.jpg",
    description: ""
  },
  {
    likes: 0,

    id: 10,
    name: 'Apple Macbook Pro 14',
    price: 980990,
    rating: 3.7,
    categoryType: "Laptops",
    href: "https://kaspi.kz/shop/p/apple-macbook-pro-14-mkgp3-seryi-102866247/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/img/m/p/ha3/h9b/64200744763422.jpg?format=preview-medium",
    description: ""
  },

  {
    likes: 0,

    id: 11,
    name: 'Apple Iphone 13',
    price: 370990,
    rating: 4.3,
    categoryType: "Smartphones",
    href: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/img/m/p/h09/ha2/64208868933662.jpg?format=preview-medium",
    description: ""
  },

  {
    likes: 0,

    id: 12,
    name: 'Xiaomi Redmi 10 Pro 8',
    price: 128880,
    rating: 2.5,
    categoryType: "Smartphones",
    href: "https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/img/m/p/h94/h74/64487156645918.jpg?format=preview-medium",
    description: ""
  },

  {
    likes: 0,

    id: 13,
    name: 'Samsung Galaxy A33',
    price: 127880,
    rating: 4.5,
    categoryType: "Smartphones",
    href: "https://kaspi.kz/shop/p/samsung-galaxy-a33-5g-6-gb-128-gb-goluboi-104399147/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/img/m/p/hed/he1/64374718890014.jpg?format=preview-medium",
    description: ""
  },

  {
    likes: 0,

    id: 14,
    name: 'Vivo Y35',
    price: 127880,
    rating: 4.5,
    categoryType: "Smartphones",
    href: "https://kaspi.kz/shop/p/vivo-y35-4-gb-128-gb-zolotistyi-107358117/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/img/m/p/h3e/hbb/65154223570974.jpg?format=preview-medium",
    description: ""
  },

  {
    likes: 0,

    id: 15,
    name: 'Samsung Galaxy A32',
    price: 177760,
    rating: 3.3,
    categoryType: "Smartphones",
    href: "https://kaspi.kz/shop/p/samsung-galaxy-a32-4-gb-64-gb-chernyi-101171611/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/img/m/p/h0d/h2a/64008665956382.jpg?format=preview-medium",
    description: ""
  },

  {
    likes: 0,

    id: 16,
    name: 'MOYVI рюкзак',
    price: 9500,
    rating: 3.9,
    categoryType: "Backpacks",
    href: "https://kaspi.kz/shop/p/moyyi-rjukzak-6010-chernyi-iz-iskusstvennoi-kozhi-105894061/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h98/h7e/52601961512990/moyyi-rukzak-6010-cernyj-iz-iskusstvennoj-kozi-105894061-1.jpg",
    description: ""
  },

  {
    likes: 0,

    id: 17,
    name: 'LEGRAN рюкзак',
    price: 8500,
    rating: 3.9,
    categoryType: "Backpacks",
    href: "https://kaspi.kz/shop/p/legran-rjukzak-102016-bezhevyi-108624872/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h55/hd7/68332053823518/legran-ryukzak-102016-bezhevyi-108624872-1.jpg",
    description: ""
  },
  {
    likes: 0,

    id: 18,
    name: 'Рюкзак Наруто Аниме',
    price: 9500,
    rating: 3.9,
    categoryType: "Backpacks",
    href: "https://kaspi.kz/shop/p/rjukzak-naruto-anime-108294538/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/img/m/p/ha6/h09/67492803674142.jpg?format=preview-medium",
    description: ""
  },
  {
    likes: 0,
    id: 19,
    name: 'BAILLR рюкзак',
    price: 8200,
    rating: 3.9,
    categoryType: "Backpacks",
    href: "https://kaspi.kz/shop/p/baillr-rjukzak-2001-belyi-105460018/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/img/m/p/hb2/he4/65070772191262.jpg?format=preview-medium",
    description: ""
  },
  {
    likes: 0,

    id: 20,
    name: 'XIGUL рюкзак',
    price: 7900,
    rating: 3.9,
    categoryType: "Backpacks",
    href: "https://kaspi.kz/shop/p/xigul-rjukzak-sm0012-chernyi-105822119/?c=750000000",
    image: "https://resources.cdn-kaspi.kz/img/m/p/h68/hc8/64449712029726.jpg?format=preview-medium",
    description: ""
  },

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
