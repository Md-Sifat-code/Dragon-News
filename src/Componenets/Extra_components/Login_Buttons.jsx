import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function Login_Buttons() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 w-full">
      <button className="btn btn-outline w-full">
        <FaGoogle />
        Login With Google
      </button>
      <button className="btn btn-outline w-full">
        <FaGithub />
        Login With Github
      </button>
    </div>
  );
}
