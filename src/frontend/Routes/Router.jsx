import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home.jsx";
import ProductPage from "../ProductPage/ProductPage";
import WishlistPage from "../WishlistPage/WishlistPage.jsx";
import AuthPage from "../AuthPage/AuthPage.jsx";
import CartPage from "../CartPage/CartPage.jsx";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="products" element={<ProductPage />} />
      <Route path="wishlist" element={<WishlistPage />} />
      <Route path="login" element={<AuthPage />} />
      <Route path="cart" element={<CartPage />} />
    </Routes>
  );
};

export default Router;
