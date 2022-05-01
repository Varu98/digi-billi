import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { IoTrashBinOutline } from "react-icons/io5";
import { useCart } from "../Contexts/CartContext";
import { useWishlist } from "../Contexts/WishlistContext";

import "./WishlistPage.css";
const WishlistPage = () => {
  const { cartState, cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { wishlistItems } = wishlistState;

  return (
    <>
      {" "}
      <h2 class="wishlist-title align-center">Wishlist</h2>
      <div className="cart-items-wrapper">
        {wishlistState.wishlistItems.map((product) => {
          const { _id, img, title, price, discount, ratings, desc } = product;

          return (
            <div key={_id} className="price-card">
              {wishlistState.wishlistItems.some((item) => item._id === _id) ? (
                <span>
                  <button
                    className="btn-wishlist"
                    onClick={() => {
                      wishlistDispatch({
                        type: "REMOVE_FROM_WISHLIST",
                        payload: product._id,
                      });
                    }}
                  >
                    <AiFillHeart className="wishlist-icon" />
                  </button>
                </span>
              ) : (
                <span>
                  <button
                    className="btn-wishlist"
                    onClick={() => {
                      wishlistDispatch({
                        type: "ADD_TO_WISHLIST",
                        payload: product,
                      });
                    }}
                  >
                    <AiOutlineHeart className="wishlist-icon" />
                  </button>
                </span>
              )}

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
                <span className="price-card-product-price">{ratings}⭐️</span>
                {cartState.cartItems.some((product) => product._id === _id) ? (
                  <button
                    style={{ backgroundColor: "#A30000" }}
                    onClick={() => {
                      cartDispatch({
                        type: "REMOVE_FROM_CART",
                        payload: product._id,
                      });
                    }}
                    className="secondary-btn"
                  >
                    Remove from Cart
                    <IoTrashBinOutline className="price-card-icon-cart" />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      cartDispatch({ type: "ADD_TO_CART", payload: product });
                    }}
                    className="primary-btn"
                  >
                    Add To Cart
                    <span className="material-icons price-card-icon-cart">
                      shopping_cart
                    </span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WishlistPage;
