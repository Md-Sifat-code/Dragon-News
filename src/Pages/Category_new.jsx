import React, { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { IoMdShare } from "react-icons/io";

export default function Category_new({ item }) {
  const {
    title,
    details,
    author,
    image_url,
    thumbnail_url,
    total_view,
    rating,
  } = item;

  const [isExpanded, setIsExpanded] = useState(false); // State to toggle full content

  // Convert date format to `YYYY-MM-DD`
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0]; // Extract 'YYYY-MM-DD'
  };

  const handleReadMore = () => {
    setIsExpanded(!isExpanded); // Toggle content visibility
  };

  return (
    <div className="pop card p-4 border mb-4 shadow-md">
      <div className="flex flex-row justify-between items-center bg-[#F3F3F3]">
        {/* Left section */}
        <div className="flex flex-row justify-start items-center gap-3 p-3">
          <img
            className="w-[50px] h-[50px] rounded-full"
            src={author.img}
            alt={`${author.name}'s profile`}
          />
          <div>
            <h1 className="text-start font-bold">{author.name}</h1>
            <p>{formatDate(author.published_date)}</p> {/* Formatted date */}
          </div>
        </div>
        {/* Right section */}
        <div className="flex flex-row gap-2 p-3">
          <p>
            <CiBookmark />
          </p>
          <p>
            <IoMdShare />
          </p>
        </div>
      </div>

      <h1 className="px-3 font-bold text-start mt-2">{title}</h1>
      <img className="mt-4" src={image_url} alt={title} />

      {/* Text truncation */}
      <p
        className={`px-3 font-normal mt-8 text-gray-400 ${
          isExpanded ? "" : "line-clamp-3"
        }`}
      >
        {details}
      </p>

      {/* Read more button */}
      <button
        onClick={handleReadMore}
        className="text-[#FF8C47] text-start hover:underline mt-2 px-3"
      >
        {isExpanded ? "Read less" : "Read more"}
      </button>
      <hr className="w-full px-3 text-black font-bold mt-4" />
    </div>
  );
}
