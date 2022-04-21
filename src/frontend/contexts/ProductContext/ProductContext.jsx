import axios from "axios";
import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

const ProductContext = createContext();

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

  return (
    <ProductContext.Provider value={{ products, categories }}>
      {children}
    </ProductContext.Provider>
  );
};

export { useProducts, ProductProvider };
