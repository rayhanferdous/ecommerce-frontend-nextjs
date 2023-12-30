import React from "react";
import { recomandedForYou } from "./constants";
import NewArrivalCard from "../utils/NewArrivalCard";

const Recomanded = () => {
  return (
    <div className="container pb-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        recomended for you
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {recomandedForYou.map((item, key) => (
          <NewArrivalCard
            key={key}
            name={item.name}
            productImage={item.productImage}
            price={item.price}
            actualPrice={item.actualPrice}
            review={item.review}
          />
        ))}
      </div>
    </div>
  );
};

export default Recomanded;
