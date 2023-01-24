import "./App.css";
import React from "react";
import Cart from "./components/cart/Cart";
import Total from "./components/total/Total";
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
