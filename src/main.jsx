import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Componenets/Layout/Layout";
import Error from "./Componenets/Fixed_componenet/Error";
import Home from "./Componenets/Home_components/Home";
import About from "./Componenets/Extra_components/About";
import Career from "./Componenets/Extra_components/Career";
import { CategoryProvider } from "./Context_APIs/Category";
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
]);
createRoot(document.getElementById("root")).render(
  <CategoryProvider>
    <RouterProvider router={router} />
  </CategoryProvider>
);
