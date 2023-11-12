import React from "react";
import { newArrivals } from "./constants";
import NewArrivalCard from "../utils/NewArrivalCard";

const NewArrival = () => {
  return (
    <div className="container pb-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        top new arrival
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {newArrivals.map((item, key) => (
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

export default NewArrival;
