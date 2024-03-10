import { fetchWooApi } from "@//lib/ApiHelper/fetchWooApi";
import NewArrivalCard from "../utils/NewArrivalCard";

const NewArrival = async () => {
  const products = await fetchWooApi("products");
  const data = await products.json();
  return (
    <div className="container pb-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        top new arrival
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {data.map((item, key) => (
          <NewArrivalCard
            key={key}
            name={item.name}
            link={`/product/${item.id}`}
            productImage={item.images[0].src}
            price={item.regular_price}
            actualPrice={item.price}
            review={item.rating_count}
          />
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
