import Link from "next/link";

const IconCard = ({ path, img, items, isIconNum = true, name }) => {
  return (
    <Link
      href={path}
      className="flex flex-col items-center justify-center text-center text-gray-700 hover:text-primary transition"
    >
      <div className="relative">
        <img src={`/assets/images/icons/${img}`} alt="cart" className="w-6" />
        {isIconNum && (
          <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
            {items}
          </div>
        )}
      </div>
      <p className="text-xs leading-3">{name}</p>
    </Link>
  );
};

export default IconCard;
