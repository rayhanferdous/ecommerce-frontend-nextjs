import Link from "next/link";

const NavLinkCard = ({ path, name }) => {
  return (
    <Link
      href={path}
      className="sm-max:text-gray-200 sm-max:hover:text-white transition"
    >
      {name}
    </Link>
  );
};

export default NavLinkCard;
