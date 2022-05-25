import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { IoTrashBinOutline } from "react-icons/io5";
import { useCart } from "../Contexts/CartContext";
import { useWishlist } from "../Contexts/WishlistContext";
import "./CartPage.css";
const CartPage = () => {
  const { cartState, cartDispatch } = useCart();
  const { cartItems } = cartState;
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { wishlistItems } = wishlistState;
  const addPrice = cartItems.reduce((accum, e) => {
    let filteredPrice = Number.parseInt(e.price.split(" ")[1]);
    accum = accum + filteredPrice;
    return accum;
  }, 0);

  const totalPrice = Math.floor(addPrice - addPrice * (30 / 100) + 499);

  return (
    <div className="cart-wrapper">
      <div className="cart-items-wrapper">
        {cartItems.map((product) => {
          const { _id, img, title, price, discount, ratings, desc } = product;

          return (
            <div key={_id} className="price-card">
              {wishlistItems.some((item) => item._id === _id) ? (
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
      <div>
        {" "}
        <my-cart className="cart-container">
          <table>
            <th>
              <h3 className="border-bottom">Price Details</h3>
            </th>
            <tr>
              <td>Price({cartItems.length} Items)</td>
              <td>{addPrice} rs</td>
            </tr>
            <tr>
              <td>Discount</td>
              <td>30 %</td>
            </tr>
            <tr>
              <td>Delivery Charges</td>
              <td>499 rs</td>
            </tr>
            <tr>
              <th className="border-top-bottom">
                <h3>Total Amount</h3>
              </th>
              <td>{totalPrice} rs</td>
            </tr>
          </table>
          <p>
            you will save {Math.floor(addPrice * (30 / 100))} rs on this order
          </p>
          <button className="primary-btn" type="submit">
            Place Order
          </button>
        </my-cart>
      </div>
    </div>
  );
};

export default CartPage;
