import { v4 as uuid } from "uuid";
import { faker } from "@faker-js/faker";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "realme 8i | 64 GB/4 GB RAM | Space Black",

    price: faker.commerce.price(20000, 50000, 0, "INR "),

    isDiscount: faker.datatype.boolean,
    desc: faker.commerce.productDescription(),
    discount: faker.datatype.number({ min: 20, max: 40 }),
    categoryName: "trending",
    img: "https://rukminim2.flixcart.com/image/312/312/ktbu6q80/mobile/q/g/q/8i-rmx3151-realme-original-imag6zhnbsuhcqny.jpeg?q=70",
  },
  {
    _id: uuid(),
    title: "vivo Y73 | 128 GB/8 GB RAM | Diamond Flare",

    price: faker.commerce.price(20000, 50000, 0, "INR "),

    isDiscount: faker.datatype.boolean,
    desc: faker.commerce.productDescription(),
    discount: faker.datatype.number({ min: 20, max: 40 }),
    categoryName: "trending",
    img: "https://rukminim2.flixcart.com/image/312/312/kppt47k0/mobile/t/k/o/y73-v2059-vivo-original-imag3vdgwpf8zzvk.jpeg?q=70",
  },
  {
    _id: uuid(),
    title: "Samsung Galaxy A22 5G | 8GB RAM/128GB Storage | Grey",

    price: faker.commerce.price(20000, 50000, 0, "INR "),

    isDiscount: faker.datatype.boolean,
    desc: faker.commerce.productDescription(),
    discount: faker.datatype.number({ min: 20, max: 40 }),
    categoryName: "trending",

    img: "https://rukminim2.flixcart.com/image/312/312/krme93k0/mobile/k/x/5/galaxy-a22-5g-sm-a226blghins-samsung-original-imag5dgzhyf8gjta.jpeg?q=70",
  },
  {
    _id: uuid(),
    title: "OPPO Reno7 Pro 5G | 12GB RAM/256 GB | Starlight Black",

    price: faker.commerce.price(20000, 50000, 0, "INR "),

    isDiscount: faker.datatype.boolean,
    desc: faker.commerce.productDescription(),
    discount: faker.datatype.number({ min: 20, max: 40 }),
    categoryName: "trending",

    img: "https://rukminim2.flixcart.com/image/312/312/kzhbfrk0/mobile/0/r/j/-original-imagbgxffuvx56mm.jpeg?q=70",
  },
  {
    _id: uuid(),
    title: "Realme Pro 5G | 12GB RAM/256 GB | Starlight Black",
    price: faker.commerce.price(20000, 50000, 0, "INR "),
    isDiscount: faker.datatype.boolean,
    desc: faker.commerce.productDescription(),
    discount: faker.datatype.number({ min: 20, max: 40 }),
    categoryName: "trending",
    img: "https://bee-ui.netlify.app/assets/realme_phone.jpeg",
  },
];
