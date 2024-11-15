import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
export default function Find_buttons() {
  return (
    <div className="join w-full join-vertical justify-start mt-4 ">
      <button className="btn join-item flex justify-start items-center text-gray-500">
        <FaFacebook className="text-blue-400" />
        Facebook
      </button>
      <button className="btn join-item flex justify-start items-center text-gray-500">
        <FaSquareXTwitter className="font-bold text-black" />
        Twitter
      </button>
      <button className="btn join-item flex justify-start items-center text-gray-500">
        <FaSquareInstagram className="fonbt-bold text-pink-500" />
        Instagram
      </button>
    </div>
  );
}
