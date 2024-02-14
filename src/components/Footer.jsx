import React from "react";
import mainLogo from "./../assets/Rd.png";
import FooterLinks from "./FooterLinks";
import { siteMap, contact } from "./../data/footerLinks.json";

const Footer = () => {
  return (
    <div className="w-full bg-white border-t border-gray-300 py-10 px-10 flex items-center justify-center md:justify-between flex-wrap-reverse gap-10">
      <div className="flex md:items-start justify-between flex-col gap-4">
        <a
          href="#"
          id="logo"
          className="flex items-center justify-center gap-2"
        >
          <img
            src={mainLogo}
            alt="iiserb logo"
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <h2 className="text-lg font-semibold leading-tight text-[#ba2e1f]">
              R&D
            </h2>
            <p className="leading-tight text-sm opacity-75 font-medium">
              IISER Bhopal
            </p>
          </div>
        </a>

        <p className="text-xs max-w-[32ch]">
          Copyright © 2020 Indian Institute of Science Education and Research
          Bhopal. All rights reserved
        </p>
      </div>

      <div className="flex items-center justify-center gap-10 flex-wrap">
        <FooterLinks heading="site map" links={siteMap} />
        <FooterLinks heading="contact us" links={contact} />
      </div>
    </div>
  );
};

export default Footer;
