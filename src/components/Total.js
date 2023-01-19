import React from "react";

const Total = ({ items }) => {
  return (
    <div className="total">
      <table>
        <tbody>
          <tr>
            <td>SUBTOTAL</td>
            <td></td>
          </tr>
          <tr>
            <td>TOTAL</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Total;
