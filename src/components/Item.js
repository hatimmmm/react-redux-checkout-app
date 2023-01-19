import React from "react";
import { BsFillBagXFill } from "react-icons/bs";

const Item = () => {
  return (
    <tr>
      <td className="img"></td>
      <td className="name"></td>
      <td className="size"></td>
      <td className="price"></td>
      <td className="quantity"></td>
      <td className="del-btn">
        <BsFillBagXFill className="delbtn" />
      </td>
    </tr>
  );
};

export default Item;
