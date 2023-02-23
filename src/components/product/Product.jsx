import React, { useState } from "react";
import { useSelector } from "react-redux";
import RemBtn from "./rem-btn/RemBtn";
import AddBtn from "./add-btn/AddBtn";
import { useEffect } from "react";
import "./product.css";

const Product = ({ item, items, onAdd }) => {
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => console.log(isClicked), [isClicked]);

  return (
    <div className="card-container">
      <div className="card-img">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="card-name">
        <p>{item.name}</p>
      </div>
      <div className="price-size">
        <div className={item.inStock ? "in-stock" : "in-stock unavailable"}>
          {item.inStock ? "in stock" : "unavailable"}
        </div>
        <div className="card-price">$ {item.price}.00</div>
      </div>
      <div>
        {items.find((i) => i.id === item.id) ? (
          <RemBtn onAdd={onAdd} newItem={item} />
        ) : (
          <AddBtn
            onAdd={onAdd}
            newItem={item}
            classname={!item.inStock ? "disabled-btn" : "add-to-cart"}
          />
        )}
      </div>
    </div>
  );
};

export default Product;
