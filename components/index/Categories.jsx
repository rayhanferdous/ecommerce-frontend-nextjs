import React from "react";
import { categories } from "./constants";
import CategoriyCard from "../utils/CategoriyCard";

const Categories = () => {
  return (
    <div className="container py-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        shop by category
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {categories.map((category, key) => (
          <CategoriyCard
            key={key}
            image={category.image}
            title={category.title}
            link={category.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
