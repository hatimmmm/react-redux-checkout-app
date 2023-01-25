import React from "react";
import { BsFillBagXFill } from "react-icons/bs";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { remItem } from "../../store/features/cart/cartSlice";
import { useState } from "react";

const Item = () => {
  let currQuantity = 1;

  const increase = () => currQuantity++;
  const decrease = () => currQuantity--;

  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  return items.map((item) => {
    return (
      <tr key={item.id}>
        <td className="img">
          <img alt={item.name} src={item.image} />
        </td>
        <td className="name">{item.name}</td>
        <td className="price">${item.price}.00</td>
        <td className="quantity">
          <FaChevronUp className="chevron" onClick={() => increase()} />
          <span>{currQuantity}</span>
          <FaChevronDown className="chevron" onClick={() => decrease()} />
        </td>
        <td className="del-btn">
          <BsFillBagXFill
            className="delbtn"
            onClick={() => dispatch(remItem(item.id))}
          />
        </td>
      </tr>
    );
  });
};

export default Item;
