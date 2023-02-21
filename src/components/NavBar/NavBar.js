import React from "react";
import { FaShoppingCart, FaStore } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./navBar.css";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { items } = useSelector((state) => state.cart);
  const amount = items.length;

  return (
    <nav>
      <NavLink to="/products">
        {({ isActive }) => (
          <FaStore
            className={isActive ? "link-icon-active" : "link-icon-inactive"}
          />
        )}
      </NavLink>
      <div className="cart-icon-container">
        <NavLink to="bag">
          {({ isActive }) => (
            <>
              <span className="counter">{amount}</span>
              <FaShoppingCart
                className={isActive ? "link-icon-active" : "link-icon-inactive"}
              />
            </>
          )}
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
