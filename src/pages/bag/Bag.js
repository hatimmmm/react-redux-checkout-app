import React from "react";
import "./bag.css";
import Cart from "../../components/cart/Cart";
import Total from "../../components/total/Total";

const Bag = () => {
  return (
    <div className="bag">
      <Cart />
      <Total />
    </div>
  );
};

export default Bag;
