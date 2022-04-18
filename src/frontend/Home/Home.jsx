import React from "react";
import "./Home.css";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-wrapper">
      <Link to="/products">
        <div className="category-img-container">
          <img className="category-img" src="assets/trending.jpg" alt="" />
          <img className="category-img" src="assets/bestsellers.jpg" alt="" />
          <img className="category-img" src="assets/latest.jpg" alt="" />
          <img className="category-img" src="assets/valentine's.jpg" alt="" />
        </div>
      </Link>
      {/* Banner Image */}
      <div className="banner-img">
        <Link to="/products">
          <img src="assets/mobileBanner.jpg" alt="" />
        </Link>
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
