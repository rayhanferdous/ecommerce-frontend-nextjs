import Image from "next/image";
import Link from "next/link";

const NewArrivalCard = ({
  productImage,
  name,
  actualPrice,
  price,
  icon,
  link,
  review,
}) => {
  return (
    <Link
      href={link ?? "/#"}
      className="bg-white shadow rounded overflow-hidden group"
    >
      <div className="relative">
        <img src={productImage} alt="product 1" className="w-full" />
        <div
          className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
        >
          <a
            href="#"
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="view product"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
          <a
            href="#"
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="add to wishlist"
          >
            <i className="fa-solid fa-heart"></i>
          </a>
        </div>
      </div>
      <div className="pt-4 pb-3 px-4">
        <a href="#">
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
            {name}
          </h4>
        </a>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-semibold">${actualPrice}</p>
          <p className="text-sm text-gray-400 line-through">${price}</p>
        </div>
        <div className="flex items-center">
          <div className="flex gap-1 text-sm text-yellow-400">
            <span>
              <Image
                width={24}
                height={24}
                src={"/assets/images/icons/star.svg"}
                alt="review"
              />
            </span>
            <span>
              <Image
                width={24}
                height={24}
                src={"/assets/images/icons/star.svg"}
                alt="review"
              />
            </span>
            <span>
              <Image
                width={24}
                height={24}
                src={"/assets/images/icons/star.svg"}
                alt="review"
              />
            </span>
            <span>
              <Image
                width={24}
                height={24}
                src={"/assets/images/icons/star.svg"}
                alt="review"
              />
            </span>
            <span>
              <Image
                width={24}
                height={24}
                src={"/assets/images/icons/star.svg"}
                alt="review"
              />
            </span>
          </div>
          <div className="text-xs text-gray-500 ml-3">({review})</div>
        </div>
      </div>
      <a
        href="#"
        className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
      >
        Add to cart
      </a>
    </Link>
  );
};

export default NewArrivalCard;
