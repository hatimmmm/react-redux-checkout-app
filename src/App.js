import "./App.css";
import React from "react";
import AddToCart from "./components/AddToCart";
import Cart from "./components/Cart";
import Total from "./components/Total";
import { useSelector } from "react-redux";

const App = () => {
  const { data } = useSelector((state) => state.cart);
  console.log(data);
  return (
    <div className="container">
      <AddToCart />
      <Cart />
      <Total />
    </div>
  );
};

export default App;
