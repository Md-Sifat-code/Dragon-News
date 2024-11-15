import React from "react";
import { Outlet } from "react-router-dom";

export default function Auth_Layout() {
  return (
    <div>
      <h1>This is Auth</h1>
      <Outlet></Outlet>
    </div>
  );
}
