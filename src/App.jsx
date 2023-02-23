import "./App.css";
import React from "react";
import { useSelector } from "react-redux";
import NavBar from "./components/navbar/NavBar";

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
