import React, { useContext } from "react";
import Marquee from "react-fast-marquee";
import Navigation from "../Fixed_componenet/Navigation";
import { categoryContext } from "../../Context_APIs/Category";

function Home() {
  const { categoris } = useContext(categoryContext);
  console.log(categoris);
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

        <div>
          <Navigation></Navigation>
        </div>
        {/* this will be te main section */}
        <div className="grid grid-cols-12 mt-6 gap-4">
          <aside className="col-span-3">
            <div className="flex  flex-col gap-2">
              {categoris.map((categgory) => (
                <p className="btn btn-outline" key={categgory.category_id}>
                  {categgory.category_name}
                </p>
              ))}
            </div>
          </aside>
          <div className="col-span-6">This will be the middle</div>
          <aside className="col-span-3">this is right</aside>
        </div>
      </div>
    </section>
  );
}

export default Home;
