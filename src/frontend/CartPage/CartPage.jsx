import React from "react";

const CartPage = () => {
  return (
    <div className="flex-row">
      <my-cart class="cart-container">
        <table>
          <th>
            <h3 class="border-bottom">Price Details</h3>
          </th>
          <tr>
            <td>Price(2 items)</td>
            <td>1200 rs</td>
          </tr>
          <tr>
            <td>Discount</td>
            <td>1200 rs</td>
          </tr>
          <tr>
            <td>Delivery Charges</td>
            <td>499 rs</td>
          </tr>
          <tr>
            <th class="border-top-bottom">
              <h3>Total Amount</h3>
            </th>
            <td>2400 rs</td>
          </tr>
        </table>
        <p>you will save 20 rs on this order</p>
        <button class="primary-btn" type="submit">
          Place Order
        </button>
      </my-cart>
    </div>
  );
};

export default CartPage;
