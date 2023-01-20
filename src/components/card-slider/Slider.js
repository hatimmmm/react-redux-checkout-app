import React from "react";
import { useSelector } from "react-redux";

export const Slideshow = () => {
  const { data } = useSelector((state) => state.cart);
  return (
    <div className="wrapper">
      <div className="slider">
        {data.map((item)=>{
            return()
            })}
      </div>
    </div>
  );
};
