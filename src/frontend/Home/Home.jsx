import React from "react";
import "./Home.css";
import ProductCard from "../ProductCard/ProductCard.jsx";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="category-img-container">
        <img className="category-img" src="assets/trending.jpg" alt="" />
        <img className="category-img" src="assets/bestsellers.jpg" alt="" />
        <img className="category-img" src="assets/latest.jpg" alt="" />
        <img
          className="category-img"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/WLA/Feb22/MobPage/Tiles/D38622198_440x440_4.jpg"
          alt=""
        />
      </div>
      {/* Banner Image */}
      <div className="banner-img">
        <img src="assets/mobileBanner.jpg" alt="" />
      </div>
      <div className="display-products-banner">
        <span className="display-products-banner__content">
          Trending Products
        </span>
      </div>
      <div className="display-products-banner__products">
        <ProductCard />
      </div>

      <div className="display-products-banner">
        <span className="display-products-banner__content">
          Products under 10,000 INR
        </span>
      </div>
      <div className="display-products-banner__products">
        <ProductCard />
      </div>
    </div>
  );
};

export default Home;
