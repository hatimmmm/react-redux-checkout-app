import React from "react";
import { useSelector } from "react-redux";

const Total = () => {
  const { items } = useSelector((state) => state.cart);
  const initAmount = 0;
  const initPrice = 0;

  const sumAmount = items.reduce(
    (accumulator, currentValue) => accumulator + currentValue.amount,
    initAmount
  );
  const sumPrice = items.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    initPrice
  );
  let subtotal = sumPrice * sumAmount;
  let total = subtotal + subtotal * (20 / 100);

  return (
    <div className="total">
      <table>
        <tbody>
          <tr>
            <td>SUBTOTAL</td>
            <td>${subtotal}</td>
          </tr>
          <tr>
            <td>TOTAL</td>
            <td>${total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Total;
