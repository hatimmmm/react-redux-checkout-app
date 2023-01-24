import "./App.css";
import React from "react";
import Cart from "./components/cart/Cart";
import Total from "./components/total/Total";
import Carousel from "./components/carousel/Carousel";
import Products from "./pages/products/Products";

const App = () => {
  return (
    <div className="container">
      <Products />
    </div>
  );
};

export default App;
