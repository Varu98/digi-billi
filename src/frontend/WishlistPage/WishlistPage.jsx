import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./WishlistPage.css";
const WishlistPage = () => {
  return (
    <div>
      {" "}
      <h2 class="wishlist-title align-center">Wishlist</h2>
      <div class="wishlist-container flex-row">
        <ProductCard />
      </div>
    </div>
  );
};

export default WishlistPage;
