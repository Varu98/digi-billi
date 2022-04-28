import React from "react";
import ProductCard from "../ProductCard/ProductCard.jsx";
import ProductFilter from "../ProductFilter/ProductFilter.jsx";

const ProductPage = () => {
  return (
    <>
      <div className="product-filter-container">
        <ProductFilter />
        <div className="product-container">
          <ProductCard />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
