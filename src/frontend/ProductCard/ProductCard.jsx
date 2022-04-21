import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useProducts } from "../contexts/ProductContext/ProductContext";
import "./ProductCard.css";

const ProductCard = () => {
  const { products } = useProducts();
  return (
    <>
      {products.map(({ _id, title, price, discount, img, desc }) => (
        <div key={_id} className="price-card">
          <AiOutlineHeart className="wishlist-icon" />
          <span className="price-card-img">
            <img src={img} alt="" />
          </span>
          <div className="price-card-header">
            <div className="price-card-product-name">{title}</div>
            <span className="price-card-product-price">{price}</span>
            <span className="price-card-price-badge">
              <span className="price-card-discount-rate">{discount}%</span>
              <span className="material-icons price-card-icon-discount">
                {" "}
                discount{" "}
              </span>
            </span>
          </div>
          <div className="price-card-body">{desc}</div>
          <div className="price-card-footer">
            <button className="secondary-btn">Details</button>
            <button className="primary-btn">
              Buy
              <span className="material-icons price-card-icon-cart">
                shopping_cart
              </span>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
