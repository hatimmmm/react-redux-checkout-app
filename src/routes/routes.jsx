import { createBrowserRouter } from "react-router-dom";
import Bag from "../pages/bag/Bag";
import Products from "../pages/products/Products";
import Home from "../pages/home/Home";
import GuestLayout from "../layouts/GuestLayout";
import Signup from "../pages/signup/Signup";
import Login from "../pages/login/Login";
import DefaultLayout from "../layouts/DefaultLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/bag",
        element: <Bag />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },

  {
    path: "/",
    element: <GuestLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
    ],
  },
]);

export default router;
