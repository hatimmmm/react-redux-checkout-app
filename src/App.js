import "./App.css";
import React from "react";
import Cart from "./components/cart/Cart";
import Total from "./components/total/Total";
import Carousel from "./components/carousel/Carousel";

const App = () => {
  return (
    <div className="container">
      <Carousel />
      <Cart />
      <Total />
    </div>
  );
};

export default App;
