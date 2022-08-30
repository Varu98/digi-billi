import { useState } from "react";
import { useProducts } from "../Contexts/ProductContext";
import { AiOutlineFilter } from "react-icons/ai";
import "./ProductFilter.css";

const ProductFilter = () => {
  const {
    filterState: {
      sortBy,
      isRealme,
      isApple,
      isVivo,
      isOppo,
      isSamsung,
      priceSliderValue,
    },
    filterDispatch,
  } = useProducts();
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div>
      <button onClick={() => setShowFilter(!showFilter)} className="showfilter">
        <AiOutlineFilter />
      </button>
      <div
        className={
          showFilter ? "filter-container" : "filter-container showfilter-false"
        }
      >
        <div className="filter-content-container showfilter-false">
          <filter-header className="flex-row flex-space-btw">
            <h2>Filters</h2>
            <button
              onClick={() => {
                filterDispatch({ type: "CLEAR_ALL_FILTERS" });
              }}
            >
              clear
            </button>
          </filter-header>

          <filter-section>
            <h2>Price</h2>
            <div className="price-range flex-row">
              <span>10000</span>
              <span>90000</span>
            </div>
            <input
              type="range"
              name=""
              min="10000"
              max="90000"
              step={10000}
              value={priceSliderValue}
              id="filter-range-input"
              onChange={(e) => {
                filterDispatch({
                  type: "PRICE_SLIDER",
                  payload: e.target.value,
                });
              }}
            />
          </filter-section>

          <filter-section className="flex-column">
            <h2>Category</h2>
            <label htmlFor="mobile-brand">
              <input
                name="mobile-brand"
                type="checkbox"
                onChange={() => {
                  filterDispatch({ type: "REALME" });
                }}
                checked={isRealme}
              />
              Realme
            </label>
            <label htmlFor="mobile-brand">
              <input
                name="mobile-brand"
                type="checkbox"
                onChange={() => {
                  filterDispatch({ type: "OPPO" });
                }}
                checked={isOppo}
              />
              Oppo
            </label>
            <label htmlFor="mobile-brand">
              <input
                name="mobile-brand"
                type="checkbox"
                onChange={() => {
                  filterDispatch({ type: "SAMSUNG" });
                }}
                checked={isSamsung}
              />
              Samsung
            </label>
            <label htmlFor="mobile-brand">
              <input
                name="mobile-brand"
                type="checkbox"
                onChange={() => {
                  filterDispatch({ type: "VIVO" });
                }}
                checked={isVivo}
              />
              Vivo
            </label>
            <label htmlFor="mobile-brand">
              <input
                name="mobile-brand"
                type="checkbox"
                checked={isApple}
                onChange={() => {
                  filterDispatch({ type: "APPLE" });
                }}
              />
              Apple
            </label>
          </filter-section>

          <filter-section className="flex-column">
            <h2>Rating</h2>
            <label htmlFor="rating">
              <input
                onChange={() => {
                  filterDispatch({ type: "RATING", payload: 5 });
                }}
                name="rating"
                type="radio"
              />
              5 Star
            </label>
            <label htmlFor="rating">
              <input
                onChange={() => {
                  filterDispatch({ type: "RATING", payload: 4 });
                }}
                name="rating"
                type="radio"
              />
              4 Star and above
            </label>
            <label htmlFor="rating">
              <input
                onChange={() => {
                  filterDispatch({ type: "RATING", payload: 3 });
                }}
                name="rating"
                type="radio"
              />
              3 Star and above
            </label>
            <label htmlFor="rating">
              <input
                onChange={() => {
                  filterDispatch({ type: "RATING", payload: 2 });
                }}
                name="rating"
                type="radio"
              />
              2 Star and above
            </label>
          </filter-section>

          <filter-section className="flex-column">
            <h2>Sort</h2>
            <label htmlFor="price-sort">
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
            <label htmlFor="price-sort">
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
