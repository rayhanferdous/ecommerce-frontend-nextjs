import React from "react";
import { footerLinks } from "../utils/footer/footerConst";
import FooterLinkContainer from "../utils/footer/FooterLinkContainer";

const Footer = () => {
  return (
    <>
      <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
        <div className="container grid grid-cols-1 ">
          <div className="col-span-1 space-y-4">
            <img src="assets/images/logo.svg" alt="logo" className="w-30" />
            <div className="mr-2">
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                hic?
              </p>
            </div>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <i className="fa-brands fa-facebook-square"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <i className="fa-brands fa-instagram-square"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <i className="fa-brands fa-twitter-square"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <i className="fa-brands fa-github-square"></i>
              </a>
            </div>
          </div>

          <div className="flex flex-wrap justify-between gap-4 md:gap-8">
            {footerLinks.map((link, index) => (
              <FooterLinkContainer
                key={index}
                title={link.title}
                links={link.links}
              />
            ))}
          </div>
        </div>
      </footer>

      <div className="bg-gray-800 py-4">
        <div className="container flex items-center justify-between max-sm:flex-wrap max-sm:gap-8">
          <p className="text-white">TailCommerce - All Right Reserved</p>
          <img src="/assets/images/methods.png" alt="methods" className="h-5" />
        </div>
      </div>
    </>
  );
};

export default Footer;
