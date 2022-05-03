import axios from "axios";
import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import {
  filterByCategory,
  filterByRating,
  filterBySliderPrice,
  priceSort,
} from "../Utilities/filterLogic";
import { useReducer } from "react";
import { filterReducer, initialFiltersState } from "../Reducers/filterReducer";

const ProductContext = createContext();

// use of custom hooks to call the product context globally
const useProducts = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    //   iife function to get products and categories from db
    (async () => {
      try {
        const {
          data: { products },
        } = await axios.get("/api/products");
        setProducts(products);

        const {
          data: { categories },
        } = await axios.get("/api/categories");

        setCategories(categories);
      } catch {
        //   use of console error in to highlight error in the ProductContext file
        console.error("error in fetching product data from ProductContext ");
      }
    })();
  }, []);

  useEffect(() => {});

  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initialFiltersState
  );

  const filteredProductsByPriceSlider = filterBySliderPrice(
    filterState,
    products
  );

  const productsByRating = filterByRating(
    filterState,
    filteredProductsByPriceSlider
  );

  const filteredProducts = filterByCategory(filterState, productsByRating);

  const newProducts = priceSort(filterState, filteredProducts);

  return (
    <ProductContext.Provider
      value={{
        newProducts,
        filterState,
        filterDispatch,
        products,
        categories,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { useProducts, ProductProvider };
