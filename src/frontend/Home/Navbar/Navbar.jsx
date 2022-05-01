import "./Navbar.css";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <header>
        <navbar className="flex-row bg-d-blue text-white">
          <div className="navbar-list navbar-primary flex-row">
            <Link to="/">
              <button className="secondary-btn">
                <h1>Cell Kart 🛒</h1>
              </button>
            </Link>
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
                <Link to="login">Logout</Link>
              </li>
              <Link to="cart">
                <AiOutlineShoppingCart className="nav-icon" />
              </Link>
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
