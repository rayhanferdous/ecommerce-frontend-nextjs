import Link from "next/link";

const NavLinkCard = ({ path, name }) => {
  return (
    <Link href={path} F className="text-gray-200 hover:text-white transition">
      {name}
    </Link>
  );
};

export default NavLinkCard;
