import React from "react";
import { BsFillBagXFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { remItem } from "../store/features/cart/cartSlice";

const Item = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  return items.map((item) => {
    return (
      <tr key={item.id}>
        <td className="img">
          <img alt={item.name} src={item.image} />
        </td>
        <td className="name">{item.name}</td>
        <td className="size">{item.size}</td>
        <td className="price">{item.price}</td>
        <td className="quantity">{item.quantity}</td>
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
