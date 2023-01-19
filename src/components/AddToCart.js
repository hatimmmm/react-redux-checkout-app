import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { setName, setQuantity } from "../store/features/cart/addToCartSlice";

const ErrMsg = ({ msg }) => {
  return <div className="errMsg"></div>;
};

const AddToCart = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.cart);
  const { name } = useSelector((state) => state.addToCart);
  const { quantity } = useSelector((state) => state.addToCart);

  return (
    <form className="add-form">
      <div className="form-control">
        <label>TV's</label>
        <select
          name="tv"
          onChange={(e) => dispatch(setName(e.currentTarget.value))}
        >
          <option></option>
          {data.map((item) => {
            return <option key={item.name}>{item.name}</option>;
          })}
        </select>
      </div>

      <div className="form-control">
        <label>Quantity</label>
        <input
          value={quantity}
          type="number"
          onChange={(e) =>
            dispatch(setQuantity(parseInt(e.currentTarget.value)))
          }
        ></input>
      </div>

      <button type="submit" className="btn">
        <FaCartPlus className="btn-icon" />
      </button>
    </form>
  );
};

export default AddToCart;
