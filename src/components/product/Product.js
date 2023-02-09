import React from "react";
import { useSelector } from "react-redux";

const Product = ({ data }) => {
  //   const { data } = useSelector((state) => state.cart);
  return (
    <div>
      {data.map((item) => {
        return (
          <div className="card-container" key={item.id}>
            <div className="card-img">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="card-name">
              <p>{item.name}</p>
            </div>
            <div className="price-size">
              <div
                className={item.inStock ? "in-stock" : "in-stock unavailable"}
              >
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
              {}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
