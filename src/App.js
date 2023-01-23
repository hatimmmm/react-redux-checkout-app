import "./App.css";
import React from "react";
// import AddToCart from "./components/AddToCart";
import Cart from "./components/Cart";
import Total from "./components/Total";
import { useSelector } from "react-redux";
import Slider from "./components/card-slider/Slider";

const App = () => {
  return (
    <div className="container">
      <Slider />
      <Cart />
      <Total />
    </div>
  );
};

export default App;
