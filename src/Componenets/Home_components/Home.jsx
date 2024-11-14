import React from "react";
import Marquee from "react-fast-marquee";

function Home() {
  return (
    <section className="pop">
      <div className="container mx-auto">
        <div className="flex flex-row gap-3 items-center p-4 bg-gray-100">
          <p className="btn btn-sm px-4 bg-[#D72050] font-bold text-white border-none">
            Latest
          </p>
          <Marquee pauseOnHover>
            <p className="mr-3">
              <span className="font-bold">Match Highlights:</span> Germany vs
              Spain — as it happened ! Match Highlights: Germany vs Spain as...
            </p>
            <p className="mr-3">
              <span className="font-bold">Match Highlights:</span> Brazil vs
              Bangladesh — as it happened ! Match Highlights: Brazil vs
              Bangladesh as...
            </p>
            <p className="mr-3">
              <span className="font-bold">Match Highlights:</span> England vs
              Japan — as it happened ! Match Highlights: England vs Japan as...
            </p>
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default Home;
