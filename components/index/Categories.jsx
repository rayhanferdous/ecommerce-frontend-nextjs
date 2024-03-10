import React from "react";
import { categories } from "./constants";
import CategoriyCard from "../utils/CategoriyCard";
import { fetchWooApi } from "@/ApiHelper/fetchWooApi";

const Categories = async () => {
  //
  const categories = await fetchWooApi("products/categories");
  const data = await categories.json();
  return (
    <div className="container py-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        shop by category
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
        {data.map((category, key) => (
          <CategoriyCard
            key={key}
            image={category.image ?? "/assets/images/category/category-1.jpg"}
            title={category.name}
            link={""}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
