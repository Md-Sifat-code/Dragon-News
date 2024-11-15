import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Componenets/Layout/Layout";
import Error from "./Componenets/Fixed_componenet/Error";
import Home from "./Componenets/Home_components/Home";
import About from "./Componenets/Extra_components/About";
import Career from "./Componenets/Extra_components/Career";
import { CategoryProvider } from "./Context_APIs/Category";
import Auth_Layout from "./Componenets/Layout/Auth_Layout";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth_Layout></Auth_Layout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <CategoryProvider>
    <RouterProvider router={router} />
  </CategoryProvider>
);
