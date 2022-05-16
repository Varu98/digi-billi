import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home.jsx";
import ProductPage from "../ProductPage/ProductPage";
import WishlistPage from "../WishlistPage/WishlistPage.jsx";
import AuthPage from "../AuthPage/AuthPage.jsx";
import Signup from "../AuthPage/Signup";
import CartPage from "../CartPage/CartPage.jsx";
import { MockMan } from "../Mockman/Mockman.jsx";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="products" element={<ProductPage />} />
      <Route path="wishlist" element={<WishlistPage />} />
      <Route path="login" element={<AuthPage />} />
      <Route path="signup" element={<Signup />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="mockman" element={<MockMan />} />
    </Routes>
  );
};

export default Router;
