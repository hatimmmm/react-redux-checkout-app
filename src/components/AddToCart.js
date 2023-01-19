import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
// const ErrMsg = ({ msg }) => {
//   return <div className="errMsg"></div>;
// };

const AddToCart = () => {
  const { data } = useSelector((state) => state.cart);
  return (
    <form className="add-form">
      <div className="form-control">
        <label>TV's</label>
        <select name="tv">
          <option></option>
          {data.map((item) => {
            return <option key={item.name}>{item.name}</option>;
          })}
        </select>
      </div>

      <div className="form-control">
        <label>Quantity</label>
        <input type="number"></input>
      </div>

      <button type="submit" className="btn">
        <FaCartPlus className="btn-icon" />
      </button>
    </form>
  );
};

export default AddToCart;
