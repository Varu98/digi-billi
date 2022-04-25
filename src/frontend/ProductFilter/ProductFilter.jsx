import React from "react";
import { useProducts } from "../Contexts/ProductContext/ProductContext";
import "./ProductFilter.css";

const ProductFilter = () => {
  const {
    filterState: { sortBy },
    filterDispatch,
  } = useProducts();

  return (
    <div>
      <div className="filter-container">
        <div className="filter-content-container">
          <filter-section className="flex-row flex-space-btw">
            <h2>Filters</h2>
            <button>clear</button>
          </filter-section>

          <filter-section>
            <h2>Price</h2>
            <div className="price-range flex-row">
              <span>50</span>
              <span>150</span>
              <span>200</span>
            </div>
            <input type="range" name="" id="filter-range-input" />
          </filter-section>

          <filter-section className="flex-column">
            <h2>Category</h2>
            <label for="mobile-brand">
              <input name="mobile-brand" type="checkbox" />
              Realme
            </label>
            <label for="mobile-brand">
              <input name="mobile-brand" type="checkbox" />
              Redmi
            </label>
            <label for="mobile-brand">
              <input name="mobile-brand" type="checkbox" />
              Motorola
            </label>
          </filter-section>

          <filter-section className="flex-column">
            <h2>Rating</h2>
            <label for="rating">
              <input name="rating" type="radio" />4 Star and above
            </label>
            <label for="rating">
              <input name="rating" type="radio" />3 Star and above
            </label>
            <label for="rating">
              <input name="rating" type="radio" />2 Star and above
            </label>
          </filter-section>

          <filter-section className="flex-column">
            <h2>Sort</h2>
            <label for="price-sort">
              <input
                checked={sortBy && sortBy === "LOW_TO_HIGH"}
                onChange={() => {
                  filterDispatch({
                    type: "SORT_BY_PRICE",
                    payload: "LOW_TO_HIGH",
                  });
                }}
                name="price-sort"
                type="radio"
              />
              Price - Low To High
            </label>
            <label for="price-sort">
              <input
                onChange={() => {
                  filterDispatch({
                    type: "SORT_BY_PRICE",
                    payload: "HIGH_TO_LOW",
                  });
                }}
                checked={sortBy && sortBy === "HIGH_TO_LOW"}
                name="price-sort"
                type="radio"
              />
              Price - High To Low
            </label>
          </filter-section>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
