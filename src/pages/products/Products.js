import React from "react";
import { useSelector } from "react-redux";
import Carousel from "../../components/carousel/Carousel";

const Products = () => {
  const { items } = useSelector((state) => state.cart);
  const { products } = useSelector((state) => state.cart);
  return (
    <div className="products-container">
      <Carousel data={products.Apple} logo="img/brand-logo/Apple.png" />
      <Carousel data={products.Samsung} logo="img/brand-logo/Samsung.png" />
      <Carousel data={products.Microsoft} logo="img/brand-logo/Microsoft.png" />
      <Carousel data={products.Google} logo="img/brand-logo/Google.png" />
    </div>
  );
};

export default Products;
