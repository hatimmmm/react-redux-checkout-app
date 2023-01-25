import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = ({ amount }) => {
  return (
    <nav>
      <div className="cart-icon-container">
        <span className="counter">{amount}</span>
        <FaShoppingCart className="cart-icon" />
      </div>
    </nav>
  );
};

export default NavBar;
