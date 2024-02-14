import React from "react";

const FooterLinks = ({ heading, links }) => {
  return (
    <div className="flex flex-col md:items-start justify-center gap-4 flex-wrap">
      <h2 className="text-sm text-gray-700 font-bold uppercase">{heading}</h2>
      <ul className="flex flex-col sm:items-start justify-center gap-3 text-sm text-gray-700">
        {links.map((item, idx) => {
          return (
            <li
              key={idx}
              className="hover:text-primaryDark duration-150 ease-linear"
            >
              <a href={item.src}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterLinks;
