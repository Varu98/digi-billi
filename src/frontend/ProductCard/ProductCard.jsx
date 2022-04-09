import React from "react";
import { products } from "../../backend/db/products";

const ProductCard = () => {
  return (
    <>
      {products.map(
        ({ _id, title, price, isDisc, discount, categoryName, img, desc }) => (
          <div key={_id} className="price-card">
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
        )
      )}
    </>
  );
};

export default ProductCard;
