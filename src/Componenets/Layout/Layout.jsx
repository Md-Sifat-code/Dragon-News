import React from "react";
import Navbar from "../Fixed_componenet/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Fixed_componenet/Footer";

export default function Layout() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
