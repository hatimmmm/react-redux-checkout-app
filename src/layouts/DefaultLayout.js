import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";

const DefaultLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
