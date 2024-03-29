import "./Navbar.css";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import { logoutService } from "../../Utilities/logoutService";
import { useState } from "react";
const Navbar = () => {
  const { navigate, authState, authDispatch } = useAuth();
  const [showIcons, setShowIcons] = useState(true);
  const { isLoggedIn } = authState;

  return (
    <div>
      <header>
        <navbar className="flex-row bg-d-blue text-white">
          <div className="navbar-list navbar-primary flex-row">
            <Link to="/">
              <button className="secondary-btn_nav">
                <h1>
                  Cell Kart <span className="secondary-btn__icon">🛒</span>
                </h1>
              </button>
            </Link>
          </div>
          <label className="nav-search" htmlFor="">
            <AiOutlineSearch />
            <input type="text" />
          </label>
          <div className="navbar-list navbar-social">
            <button
              onClick={() => setShowIcons(!showIcons)}
              className="hamburger-menu-btn"
            >
              <i className="fas fa-bars"></i>
            </button>
            <ul
              className={
                showIcons ? "flex-row navbar-ul" : "flex-row navbar-ul-false"
              }
            >
              <li>
                {isLoggedIn ? (
                  <button
                    className="secondary-btn"
                    onClick={() => logoutService(authDispatch, navigate)}
                  >
                    Logout
                  </button>
                ) : (
                  <Link to="login">Login</Link>
                )}
              </li>
              <li>
                {" "}
                <Link to="cart">
                  <AiOutlineShoppingCart className="nav-icon" />
                </Link>
              </li>
              <li>
                <Link to="wishlist">
                  <AiOutlineHeart className="nav-icon" />
                </Link>
              </li>
            </ul>
          </div>
        </navbar>
      </header>
    </div>
  );
};

export default Navbar;
