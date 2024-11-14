import { createContext, useEffect, useState } from "react";

export const categoryContext = createContext();
export const CategoryProvider = ({ children }) => {
  const [categoris, setCategoris] = useState([]);

  // for fetching data
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategoris(data.data.news_category));
  }, []);

  return (
    <categoryContext.Provider
      value={{
        categoris,
      }}
    >
      {children}
    </categoryContext.Provider>
  );
};
