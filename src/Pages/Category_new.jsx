import React from "react";

export default function Category_new({ item }) {
  const { title, details, author } = item;
  return (
    <div>
      <div>
        {/* left */}
        <div>
          <img src={author.img} alt="" />
          <div>
            <h1>{author.name}</h1>
            <p>{author.published_date}</p>
          </div>
        </div>
        {/* right */}
        <div></div>
      </div>
    </div>
  );
}
