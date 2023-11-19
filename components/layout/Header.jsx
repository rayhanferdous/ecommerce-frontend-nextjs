import Link from "next/link";
import React from "react";
import {
  allCategories,
  iconCardItems,
  navLinks,
} from "../utils/header/headerConst";
import NavLinkCard from "../utils/header/NavLinkCard";
import SearchField from "../utils/header/SearchField";
import IconCard from "../utils/header/IconCard";

const Header = () => {
  return (
    <>
      <header className="py-4 shadow-sm bg-white">
        <div className="container flex items-center justify-between">
          <Link href="/">
            <img src="/assets/images/logo.svg" alt="Logo" className="w-32" />
          </Link>

          <SearchField />

          <div className="flex items-center space-x-4">
            {iconCardItems.map((item, index) => (
              <IconCard
                key={index}
                path={item.path}
                img={item.img}
                items={item.items}
                isIconNum={item.isIconNum}
                name={item.name}
              />
            ))}
          </div>
        </div>
      </header>

      <nav className="bg-gray-800">
        <div className="container flex">
          <div className="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden">
            <img
              src="/assets/images/icons/burger-menu.svg"
              alt="all-categories"
              className="w-6"
            />
            <span className="capitalize ml-2 text-white">All Categories</span>

            <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
              {allCategories.map((category, index) => (
                <Link
                  key={index}
                  href="/"
                  className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                >
                  <img
                    src={`/assets/images/icons/${category.img}`}
                    alt={category.name}
                    className="w-5 h-5 object-contain"
                  />
                  <span className="ml-6 text-gray-600 text-sm">
                    {category.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
            <div className="flex items-center space-x-6 capitalize">
              {navLinks.map((link, index) => (
                <NavLinkCard key={index} path={link.path} name={link.name} />
              ))}
            </div>
            <NavLinkCard path={"/"} name={"Login"} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
