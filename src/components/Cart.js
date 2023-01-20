import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";

const Cart = () => {
  return (
    <div id="cart-scroll" className="cart">
      <table>
        <thead>
          <tr>
            <th className="img">IMAGE</th>
            <th className="name">NAME</th>
            <th className="size">SIZE</th>
            <th className="price">PRICE</th>
            <th className="quantity">QUANTITY</th>
            <th className="del-btn">ACTION</th>
          </tr>
        </thead>
        <tbody>
          <Item />
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
