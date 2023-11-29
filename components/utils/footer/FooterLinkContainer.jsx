import Link from "next/link";
import React from "react";

const FooterLinkContainer = ({ title, links = [] }) => {
  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
        {title}
      </h3>
      <div className="mt-4 space-y-4">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className="text-base text-gray-500 hover:text-gray-900 block"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterLinkContainer;
