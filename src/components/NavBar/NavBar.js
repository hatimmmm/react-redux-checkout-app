import React from "react";
import { FaShoppingCart, FaStore } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavBar = ({ amount }) => {
  return (
    <nav>
      <NavLink to="/products">
        <FaStore className="link-icon" />
      </NavLink>
      <div className="cart-icon-container">
        <NavLink to="bag">
          <span className="counter">{amount}</span>
          <FaShoppingCart className="link-icon" />
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
