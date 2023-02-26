import React from "react";
import { FaShoppingCart, FaStore, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./navBar.css";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { items } = useSelector((state) => state.cart);
  const amount = items.length;

  return (
    <nav>
      <NavLink to="/home" className="logo">
        <img src="/public/FIQ logo.png" alt="logo" />
      </NavLink>
      <ul>
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "link-icon active" : "link-icon"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "link-icon active" : "link-icon"
            }
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive ? "link-icon active" : "link-icon"
            }
          >
            Signup
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "link-icon active" : "link-icon"
            }
          >
            Login
          </NavLink>
        </li>
      </ul>
      <NavLink to="bag" className="cart-icon-container">
        {({ isActive }) => (
          <>
            <span className="counter">{amount}</span>
            <FaShoppingCart
              className={isActive ? "link-icon active" : "link-icon"}
            />
          </>
        )}
      </NavLink>
    </nav>
  );
};

export default NavBar;
