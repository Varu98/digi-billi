import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Bestsellers",
    description: "Our most popular products based on sales. Updated hourly.",
  },
  {
    _id: uuid(),
    categoryName: "BudgetFriendly",
    description: "Handpicked mobile accessories to suit your budget",
  },
  {
    _id: uuid(),
    categoryName: "Latest",
    description: "Explore what's trending in tech",
  },
  {
    _id: uuid(),
    categoryName: "wfh",
    description: "The perfect accessories to satisfy your work from home needs",
  },
];
