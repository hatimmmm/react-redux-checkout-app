import "./App.css";
import React from "react";
import Products from "./pages/products/Products";
import Bag from "./pages/bag/Bag";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import { setTotal } from "./store/features/cart/cartSlice";
import { useEffect } from "react";

const App = () => {
  const { items } = useSelector((state) => state.cart);
  const amount = items.length;
  const dispatch = useDispatch();

  return (
    <div className="container">
      <NavBar amount={amount} />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Bag" element={<Bag />} />
      </Routes>
    </div>
  );
};

export default App;
