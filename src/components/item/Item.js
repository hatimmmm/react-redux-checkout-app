import React from "react";
import { BsFillBagXFill } from "react-icons/bs";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  remItem,
  setItems,
  amountInc,
  amountDec,
} from "../../store/features/cart/cartSlice";

const Item = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  return items.map((item) => {
    return (
      <tr key={item.id}>
        <td className="img">
          <img alt={item.id} src={item.image} />
        </td>
        <td className="name">{item.name}</td>
        <td className="price">${item.price}.00</td>
        <td className="amount">
          <FaChevronUp
            className="chevron"
            onClick={() => dispatch(amountInc(item.id))}
          />
          <span>{item.amount}</span>
          <FaChevronDown
            className="chevron"
            onClick={() => dispatch(amountDec(item.id))}
          />
        </td>
        <td id="itemTotal">${item.amount * item.price}.00</td>

        {/* <td className="del-btn">
          <BsFillBagXFill
            className="delbtn"
            onClick={() => dispatch(remItem(item.id))}
          />
        </td> */}
      </tr>
    );
  });
};

export default Item;
