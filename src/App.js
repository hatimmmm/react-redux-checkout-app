import "./App.css";
import React from "react";
import Cart from "./components/cart/Cart";
import Total from "./components/total/Total";
import Carousel from "./components/carousel/Carousel";
import Products from "./pages/products/Products";
import Bag from "./pages/bag/Bag";
import { useSelector } from "react-redux";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const { items } = useSelector((state) => state.cart);
  const amount = items.length;

  return (
    <div className="container">
      <NavBar amount={amount} />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/Bag" element={<Bag />} />
      </Routes>
    </div>
  );
};

export default App;
