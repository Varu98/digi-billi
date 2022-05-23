import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home.jsx";
import ProductPage from "../ProductPage/ProductPage";
import WishlistPage from "../WishlistPage/WishlistPage.jsx";
import AuthPage from "../AuthPage/AuthPage.jsx";
import Signup from "../AuthPage/Signup";
import CartPage from "../CartPage/CartPage.jsx";
import { MockMan } from "../Mockman/Mockman.jsx";
import RequiresAuth from "./RequiresAuth.jsx";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="mockman" element={<MockMan />} />
      <Route path="products" element={<ProductPage />} />
      <Route path="login" element={<AuthPage />} />
      <Route path="signup" element={<Signup />} />
      <Route
        path="wishlist"
        element={
          <RequiresAuth>
            <WishlistPage />
          </RequiresAuth>
        }
      />
      <Route
        path="cart"
        element={
          <RequiresAuth>
            <CartPage />
          </RequiresAuth>
        }
      />
    </Routes>
  );
};

export default Router;
