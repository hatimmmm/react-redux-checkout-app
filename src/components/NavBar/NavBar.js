import React from "react";
import { FaShoppingCart, FaStore } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = ({ amount }) => {
  return (
    <nav>
      <Link to="/products">
        <FaStore className="cart-icon" />
      </Link>
      <div className="cart-icon-container">
        <Link to="bag">
          <span className="counter">{amount}</span>
          <FaShoppingCart className="cart-icon" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
