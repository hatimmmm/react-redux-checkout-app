import "./App.css";
import React from "react";
import Products from "./pages/products/Products";
import Bag from "./pages/bag/Bag";
import { useSelector } from "react-redux";
import NavBar from "./components/navbar/NavBar";
import { Routes, Route, RouterProvider } from "react-router-dom";
import router from "./routes/routes.js";

const App = () => {
  const { items } = useSelector((state) => state.cart);
  const amount = items.length;

  return (
    <div className="container">
      <NavBar amount={amount} />
    </div>
  );
};

export default App;
