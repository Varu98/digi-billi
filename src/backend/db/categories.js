import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Samsung",
    description: "Our most popular products based on sales. Updated hourly.",
  },
  {
    _id: uuid(),
    categoryName: "Vivo",
    description: "Handpicked mobile accessories to suit your budget",
  },
  {
    _id: uuid(),
    categoryName: "Realme",
    description: "Explore what's trending in tech",
  },
  {
    _id: uuid(),
    categoryName: "Oppo",
    description: "The perfect accessories to satisfy your work from home needs",
  },
  {
    _id: uuid(),
    categoryName: "Apple",
    description: "An Apple a day keeps the Inconvenience away ",
  },
];
