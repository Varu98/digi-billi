export const priceSort = (sortBy, products) => {
  if (sortBy === "LOW_TO_HIGH") {
    return products.sort(
      (a, b) =>
        parseInt(a.price.split(" ")[1]) - parseInt(b.price.split(" ")[1])
    );
  } else if (sortBy === "HIGH_TO_LOW") {
    return products.sort(
      (a, b) =>
        parseInt(b.price.split(" ")[1]) - parseInt(a.price.split(" ")[1])
    );
  } else {
    return [...products];
  }
};
