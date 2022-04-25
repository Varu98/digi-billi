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

    price: faker.commerce.price(20000, 80000, 0, "INR "),

    isDiscount: faker.datatype.boolean,
    desc: faker.commerce.productDescription(),
    discount: faker.datatype.number({ min: 20, max: 40 }),
    categoryName: "Realme",
    img: "https://rukminim2.flixcart.com/image/312/312/ktbu6q80/mobile/q/g/q/8i-rmx3151-realme-original-imag6zhnbsuhcqny.jpeg?q=70",
  },
  {
    _id: uuid(),
    title: "vivo Y73 | 128 GB/8 GB RAM | Diamond Flare",

    price: faker.commerce.price(20000, 80000, 0, "INR "),

    isDiscount: faker.datatype.boolean,
    desc: faker.commerce.productDescription(),
    discount: faker.datatype.number({ min: 20, max: 40 }),
    categoryName: "Vivo",
    img: "https://rukminim2.flixcart.com/image/312/312/kppt47k0/mobile/t/k/o/y73-v2059-vivo-original-imag3vdgwpf8zzvk.jpeg?q=70",
  },
  {
    _id: uuid(),
    title: "Samsung Galaxy A22 5G | 8GB RAM/128GB Storage | Grey",

    price: faker.commerce.price(20000, 80000, 0, "INR "),

    isDiscount: faker.datatype.boolean,
    desc: faker.commerce.productDescription(),
    discount: faker.datatype.number({ min: 20, max: 40 }),
    categoryName: "Samsung",
    img: "https://rukminim2.flixcart.com/image/312/312/krme93k0/mobile/k/x/5/galaxy-a22-5g-sm-a226blghins-samsung-original-imag5dgzhyf8gjta.jpeg?q=70",
  },
  {
    _id: uuid(),
    title: "OPPO Reno7 Pro 5G | 12GB RAM/256 GB | Starlight Black",

    price: faker.commerce.price(20000, 80000, 0, "INR "),

    isDiscount: faker.datatype.boolean,
    desc: faker.commerce.productDescription(),
    discount: faker.datatype.number({ min: 20, max: 40 }),
    categoryName: "Oppo",

    img: "https://rukminim2.flixcart.com/image/416/416/kzhbfrk0/mobile/r/o/e/-original-imagbgxfyvznjhcp.jpeg?q=70",
  },
  {
    _id: uuid(),
    title: "Realme Pro 5G | 12GB RAM/256 GB | Starlight Black",
    price: faker.commerce.price(20000, 80000, 0, "INR "),
    isDiscount: faker.datatype.boolean,
    desc: faker.commerce.productDescription(),
    discount: faker.datatype.number({ min: 20, max: 40 }),
    categoryName: "Realme",
    img: "https://bee-ui.netlify.app/assets/realme_phone.jpeg",
  },
  {
    _id: uuid(),
    title: "Realme 9i (Prism Black, 128 GB)  (4 GB RAM)",
    price: faker.commerce.price(20000, 80000, 0, "INR "),
    isDiscount: faker.datatype.boolean,
    desc: faker.commerce.productDescription(),
    discount: faker.datatype.number({ min: 20, max: 40 }),
    categoryName: "Realme",
    img: "https://rukminim2.flixcart.com/image/416/416/ky90scw0/mobile/m/r/u/-original-imagagnffruu7ptd.jpeg?q=70",
  },
  {
    _id: uuid(),
    title: "Realme C21Y (Cross Blue, 32 GB)  (3 GB RAM)",
    price: faker.commerce.price(20000, 80000, 0, "INR "),
    isDiscount: faker.datatype.boolean,
    desc: faker.commerce.productDescription(),
    discount: faker.datatype.number({ min: 20, max: 40 }),
    categoryName: "Realme",
    img: "https://rukminim2.flixcart.com/image/416/416/ksnjp8w0/mobile/k/o/m/c21y-rmx3261-realme-original-imag65kcytrk8dtr.jpeg?q=70",
  },
  {
    _id: uuid(),
    title: "OPPO K10 (Blue Flame, 128 GB)  (6 GB RAM)",
    price: faker.commerce.price(20000, 80000, 0, "INR "),
    isDiscount: faker.datatype.boolean,
    desc: faker.commerce.productDescription(),
    discount: faker.datatype.number({ min: 20, max: 40 }),
    categoryName: "Oppo",
    img: "https://rukminim2.flixcart.com/image/416/416/l12h1u80/mobile/z/u/m/-original-imagcpehdsg47sfp.jpeg?q=70",
  },
  {
    _id: uuid(),
    title: "OPPO F21 pro (Sunset Orange, 128 GB)  (8 GB RAM)",
    price: faker.commerce.price(20000, 80000, 0, "INR "),
    isDiscount: faker.datatype.boolean,
    desc: faker.commerce.productDescription(),
    discount: faker.datatype.number({ min: 20, max: 40 }),
    categoryName: "Oppo",
    img: "https://rukminim2.flixcart.com/image/416/416/l1zc6fk0/mobile/u/7/w/f21-pro-cph2363-oppo-original-imagdf4jphscz9jz.jpeg?q=70",
  },
  {
    _id: uuid(),
    title: "vivo T1 5G (Rainbow Fantasy, 128 GB)  (6 GB RAM)",
    price: faker.commerce.price(20000, 80000, 0, "INR "),
    isDiscount: faker.datatype.boolean,
    desc: faker.commerce.productDescription(),
    discount: faker.datatype.number({ min: 20, max: 40 }),
    categoryName: "Vivo",
    img: "https://rukminim2.flixcart.com/image/416/416/kzd147k0/mobile/z/9/h/-original-imagbe5qnquhuude.jpeg?q=70",
  },
  {
    _id: uuid(),
    title: "vivo Y53s (Deep Sea Blue, 128 GB)  (8 GB RAM)",
    price: faker.commerce.price(20000, 80000, 0, "INR "),
    isDiscount: faker.datatype.boolean,
    desc: faker.commerce.productDescription(),
    discount: faker.datatype.number({ min: 20, max: 40 }),
    categoryName: "Vivo",
    img: "https://rukminim2.flixcart.com/image/416/416/ks3jjbk0/mobile/p/b/k/y53s-v2058-vivo-original-imag5q35phmm3fjc.jpeg?q=70",
  },
  {
    _id: uuid(),
    title: "SAMSUNG Galaxy A73 5G (Awesome White, 128 GB)  (8 GB RAM)",
    price: faker.commerce.price(20000, 80000, 0, "INR "),
    isDiscount: faker.datatype.boolean,
    desc: faker.commerce.productDescription(),
    discount: faker.datatype.number({ min: 20, max: 40 }),
    categoryName: "Samsung",
    img: "https://rukminim2.flixcart.com/image/416/416/l1dwknk0/mobile/l/2/q/-original-imagcyr2zr4swxhz.jpeg?q=70",
  },
  {
    _id: uuid(),
    title: "SAMSUNG Galaxy M33 5G (Deep Ocean Blue, 128 GB)  (6 GB RAM)",
    price: faker.commerce.price(20000, 80000, 0, "INR "),
    isDiscount: faker.datatype.boolean,
    desc: faker.commerce.productDescription(),
    discount: faker.datatype.number({ min: 20, max: 40 }),
    categoryName: "Samsung",
    img: "https://rukminim2.flixcart.com/image/416/416/l1v1uvk0/mobile/t/d/x/galaxy-m33-5g-sm-m336bzbpins-samsung-original-imagdc87gdyremd3.jpeg?q=70",
  },
  {
    _id: uuid(),
    title: "APPLE iPhone 11 (White, 128 GB)",
    price: faker.commerce.price(20000, 80000, 0, "INR "),
    isDiscount: faker.datatype.boolean,
    desc: faker.commerce.productDescription(),
    discount: faker.datatype.number({ min: 20, max: 40 }),
    categoryName: "Apple",
    img: "https://rukminim2.flixcart.com/image/416/416/kgiaykw0/mobile/d/d/s/apple-iphone-11-mhdj3hn-a-original-imafwqepmfedbhb2.jpeg?q=70",
  },
  {
    _id: uuid(),
    title: "APPLE iPhone SE (Red, 64 GB)",
    price: faker.commerce.price(20000, 80000, 0, "INR "),
    isDiscount: faker.datatype.boolean,
    desc: faker.commerce.productDescription(),
    discount: faker.datatype.number({ min: 20, max: 40 }),
    categoryName: "Apple",
    img: "https://rukminim2.flixcart.com/image/416/416/k9loccw0/mobile/6/8/g/apple-iphone-se-mxvv2hn-a-original-imafrcqmfxhcrpsb.jpeg?q=70",
  },
  {
    _id: uuid(),
    title: "APPLE iPhone 13 (Blue, 128 GB)",
    price: faker.commerce.price(20000, 80000, 0, "INR "),
    isDiscount: faker.datatype.boolean,
    desc: faker.commerce.productDescription(),
    discount: faker.datatype.number({ min: 20, max: 40 }),
    categoryName: "Apple",
    img: "https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/s/n/i/iphone-13-mlpk3hn-a-apple-original-imag6vpyrhqjgqzw.jpeg?q=70",
  },
];
