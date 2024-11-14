import React from "react";
import { NavLink } from "react-router-dom";
import user from "/assets/user.png";

export default function Navigation() {
  return (
    <section>
      <div className="container mx-auto grid grid-cols-3  mt-6">
        <div></div>
        <div className="flex flex-row gap-4 justify-center items-center">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/career"}>Career</NavLink>
        </div>
        <div className="flex flex-row gap-3  justify-end items-center ">
          <img className="w-[50px] h-[50px]" src={user} alt="" />
          <p className="btn btn-small bg-gray-700 hover:bg-black px-8  text-white font-bold">
            Login
          </p>
        </div>
      </div>
    </section>
  );
}
