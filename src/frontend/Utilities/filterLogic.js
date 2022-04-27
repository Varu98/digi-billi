// to sort the products from highest price to lowest
export const priceSort = ({ sortBy }, products) => {
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
  }
  return [...products];
};

// this will filter the products by the manufacturers name
export const filterByCategory = (
  { isRealme, isApple, isVivo, isOppo, isSamsung },
  products
) => {
  let appleArray = [];
  let vivoArray = [];
  let samsungArray = [];
  let oppoArray = [];
  let realmeArray = [];
  if (!isApple && !isOppo && !isRealme && !isSamsung && !isVivo) {
    return [...products];
  }
  if (isApple) {
    appleArray = products.filter(
      (products) => products.categoryName === "Apple"
    );
  }

  if (isOppo) {
    oppoArray = products.filter((products) => products.categoryName === "Oppo");
  }

  if (isSamsung) {
    samsungArray = products.filter(
      (products) => products.categoryName === "Samsung"
    );
  }

  if (isVivo) {
    vivoArray = products.filter((products) => products.categoryName === "Vivo");
  }

  if (isRealme) {
    realmeArray = products.filter(
      (products) => products.categoryName === "Realme"
    );
  }
  return [
    ...appleArray,
    ...vivoArray,
    ...samsungArray,
    ...oppoArray,
    ...realmeArray,
  ];
};

// to filter by ratings
export const filterByRating = ({ byRating }, products) => {
  if (byRating === 5) {
    return products.filter((product) => product.ratings === 5);
  }
  if (byRating === 4) {
    return products.filter((product) => product.ratings >= 4);
  }
  if (byRating === 3) {
    return products.filter((product) => product.ratings >= 3);
  }
  if (byRating === 2) {
    return products.filter((product) => product.ratings >= 2);
  }
  return [...products];
};

// filter according to change in the price slider

export const filterBySliderPrice = ({ priceSliderValue }, products) => {
  if (priceSliderValue)
    return products.filter((product) => {
      console.log(priceSliderValue, Number(product.price.split(" ")[1]));
      return parseInt(product.price.split(" ")[1]) < priceSliderValue;
    });
};
