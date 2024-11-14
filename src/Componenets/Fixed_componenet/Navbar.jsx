import React from "react";
import logo from "/assets/logo.png";
export default function Navbar() {
  return (
    <section>
      <div className="container mx-auto flex flex-col gap-3 justify-center items-center py-6">
        <img
          className="md:w-96"
          src={logo}
          alt="This is the logo of this websiite"
        />
        <h1 className="text-center font-normal text-gray-500">
          Journalism Without Fear or Favour
        </h1>
      </div>
    </section>
  );
}
