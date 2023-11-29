import Link from "next/link";
import React from "react";

const CategoriyCard = ({ image, title, link }) => {
  return (
    <div className="relative rounded-sm overflow-hidden group">
      <img
        width={200}
        height={200}
        src={image}
        alt="category 1"
        className="w-full"
      />
      <Link
        href={link}
        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
      >
        {title}
      </Link>
    </div>
  );
};

export default CategoriyCard;
