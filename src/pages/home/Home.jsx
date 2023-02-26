import React from "react";
import { NavLink } from "react-router-dom";
import Features from "../../components/features/Features";
import Main from "../../components/main/Main";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Main />
      <Features />
    </div>
  );
};

export default Home;
