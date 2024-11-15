import React, { useContext, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Navigation from "../Fixed_componenet/Navigation";
import { categoryContext } from "../../Context_APIs/Category";
import Category_new from "../../Pages/Category_new";
import Login_Buttons from "../Extra_components/Login_Buttons";
import Find_buttons from "../Extra_components/Find_buttons";

function Home() {
  const { categoris } = useContext(categoryContext);
  const [selectedCategoryData, setSelectedCategoryData] = useState([]);
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  // Fetch category data based on category ID
  const fetchCategoryData = async (categoryId) => {
    try {
      const response = await fetch(
        `https://openapi.programming-hero.com/api/news/category/${categoryId}`
      );
      const data = await response.json();
      setSelectedCategoryData(data.data); // Assuming `data.data` contains the articles for the category
      setActiveCategoryId(categoryId); // Set the active category ID
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  // Fetch initial data for the first category
  useEffect(() => {
    if (categoris.length > 0) {
      const firstCategoryId = categoris[0].category_id;
      fetchCategoryData(firstCategoryId);
    }
  }, [categoris]);

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
              Spain — as it happened! Match Highlights: Germany vs Spain as...
            </p>
            <p className="mr-3">
              <span className="font-bold">Match Highlights:</span> Brazil vs
              Bangladesh — as it happened! Match Highlights: Brazil vs
              Bangladesh as...
            </p>
            <p className="mr-3">
              <span className="font-bold">Match Highlights:</span> England vs
              Japan — as it happened! Match Highlights: England vs Japan as...
            </p>
          </Marquee>
        </div>

        <div>
          <Navigation></Navigation>
        </div>
        {/* Main section */}
        <div className="grid grid-cols-12 mt-6 gap-4">
          <aside className="col-span-3">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-start mb-3">All Category</h1>
              {categoris.map((category) => (
                <button
                  onClick={() => fetchCategoryData(category.category_id)}
                  className={`btn ${
                    activeCategoryId === category.category_id
                      ? "btn-active"
                      : "btn-outline"
                  }`}
                  key={category.category_id}
                >
                  {category.category_name}
                </button>
              ))}
            </div>
          </aside>
          <div className="col-span-6">
            <h1 className="text-start font-bold mb-3">Dragon News Home</h1>
            {selectedCategoryData.length > 0 ? (
              selectedCategoryData.map((item) => (
                <Category_new key={item.id} item={item} />
              ))
            ) : (
              <p>Please select a category to view details.</p>
            )}
          </div>
          <aside className="col-span-3">
            <h1 className="text-start font-bold mb-3">Login With </h1>
            <div>
              <Login_Buttons></Login_Buttons>
              <h1 className="font-bold text-black text-start mt-4">
                Find Us On
              </h1>
              <Find_buttons></Find_buttons>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Home;
