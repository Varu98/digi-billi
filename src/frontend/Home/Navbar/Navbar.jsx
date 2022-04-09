import React from "react";
import "./Navbar.css";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
const Navbar = () => {
  return (
    <div>
      <header>
        <navbar className="flex-row bg-d-blue text-white">
          <div className="navbar-list navbar-primary flex-row">
            <button className="secondary-btn">
              <h1>Cell Kart 🛒</h1>
            </button>
          </div>
          <label htmlFor="">
            <AiOutlineSearch />
            <input type="text" />
          </label>
          <div className="navbar-list navbar-social">
            <button className="hamburger-menu-btn">
              <i className="fas fa-bars"></i>
            </button>
            <ul className="flex-row navbar-ul">
              <li>
                <button className="secondary-btn">Logout</button>
              </li>
              <AiOutlineShoppingCart className="nav-icon" />
              <li>
                <AiOutlineHeart className="nav-icon" />
              </li>
            </ul>
          </div>
        </navbar>
      </header>
    </div>
  );
};

export default Navbar;
