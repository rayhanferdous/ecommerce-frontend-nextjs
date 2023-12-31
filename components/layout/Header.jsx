"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  allCategories,
  iconCardItems,
  navLinks,
} from "../utils/header/headerConst";
import NavLinkCard from "../utils/header/NavLinkCard";
import SearchField from "../utils/header/SearchField";
import IconCard from "../utils/header/IconCard";
import DrawerContainer from "../utils/header/DrawerContainer";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <>
      <header className="py-4 shadow-sm bg-white">
        <div className="container flex items-center justify-between gap-6">
          <Link href="/">
            <img src="/assets/images/logo.svg" alt="Logo" className="w-32" />
          </Link>
          <div
            onClick={() => setOpenSearch(!openSearch)}
            className="hidden max-sm-max:flex w-full justify-end"
          >
            <div className="bg-primary p-1.5 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5 stroke-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>
          <div className="block max-sm-max:hidden">
            <SearchField />
          </div>
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
        <div className="container flex gap-5">
          <div
            onClick={() => setOpenDrawer(!openDrawer)}
            className="px-8 py-4 bg-primary items-center cursor-pointer hidden max-sm-max:flex"
          >
            <img
              src="/assets/images/icons/burger-menu.svg"
              alt="all-categories"
              className="w-6"
            />
            <span className="capitalize ml-2 text-white">All Categories</span>
          </div>
          <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group max-sm-max:hidden">
            <img
              src="/assets/images/icons/burger-menu.svg"
              alt="all-categories"
              className="w-6"
            />
            <span className="capitalize ml-2 text-white">All Categories</span>

            <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible max-sm:hidden">
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

          <div className="flex items-center justify-between max-sm-max:justify-end flex-grow md:pl-12 py-5">
            <div className="flex items-center sm-max:gap-3 md:gap-6 capitalize max-sm-max:hidden">
              {navLinks.map((link, index) => (
                <NavLinkCard key={index} path={link.path} name={link.name} />
              ))}
            </div>
            <Link
              href={"/"}
              className="text-white sm-max:text-gray-200 sm-max:hover:text-white transition"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
      <DrawerContainer
        title={"Drawer"}
        isOpen={openDrawer}
        setIsOpen={setOpenDrawer}
      >
        <div className="items-center flex-col sm-max:gap-3 md:gap-6 capitalize hidden max-sm-max:flex">
          {navLinks.map((link, index) => (
            <NavLinkCard key={index} path={link.path} name={link.name} />
          ))}
        </div>
      </DrawerContainer>
      <DrawerContainer
        title={"Search"}
        isOpen={openSearch}
        setIsOpen={setOpenSearch}
        position="top"
      >
        <SearchField />
      </DrawerContainer>
    </>
  );
};

export default Header;
