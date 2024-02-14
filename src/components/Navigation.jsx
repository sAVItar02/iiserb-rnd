import mainLogo from "./../assets/Rd.png";
import { useState, useRef } from "react";
import { quickLinks, centers, doc } from "./../data/navLinks.json";
import NavigationLinks from "./NavigationLinks";

export function Navigation() {
  const [menuItems, setMenuItems] = useState("quick-links");
  const menuRef = useRef(null);
  const caretRef = useRef(null);

  const menuHover = (e) => {
    if (e.target.id === "navigation-quick-links-btn") {
      setMenuItems("quick-links");
      menuRef.current.style.setProperty("--menu-height", "250px");
      menuRef.current.style.setProperty("--menu-width", "500px");
      caretRef.current.style.setProperty("--transX", "110px");
    }

    if (e.target.id === "navigation-centers-btn") {
      setMenuItems("centers");
      menuRef.current.style.setProperty("--menu-height", "150px");
      menuRef.current.style.setProperty("--menu-width", "550px");
      caretRef.current.style.setProperty("--transX", "260px");
    }

    if (e.target.id === "navigation-doc-btn") {
      setMenuItems("doc/forms");
      menuRef.current.style.setProperty("--menu-height", "250px");
      menuRef.current.style.setProperty("--menu-width", "550px");
      caretRef.current.style.setProperty("--transX", "400px");
    }
  };

  return (
    <>
      <header className="w-full flex items-center justify-between">
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

        <nav className="hidden md:flex items-center justify-center gap-4">
          <ul className="flex items-center justify-center relative group duration-200 ease-linear">
            <li
              id="navigation-quick-links-btn"
              onMouseEnter={menuHover}
              className="text-sm p-3 font-medium hover:text-[#269984] duration-150 ease-linear"
            >
              <button>Quick Links</button>
            </li>
            <li
              id="navigation-centers-btn"
              onMouseEnter={menuHover}
              className="text-sm p-3 font-medium hover:text-[#269984] duration-150 ease-linear"
            >
              <button>Centers & Facilities</button>
            </li>
            <li
              id="navigation-doc-btn"
              onMouseEnter={menuHover}
              className="text-sm p-3 font-medium hover:text-[#269984] duration-150 ease-linear"
            >
              <button>Doc/Forms</button>
            </li>

            <div
              ref={menuRef}
              id="menu-buffer"
              className="w-[var(--menu-width)] h-[var(--menu-height)] border border-gray-400 shadow-xl absolute z-50 top-0 invisible group-hover:translate-y-11 translate-y-20 opacity-0 group-hover:opacity-100 group-hover:visible bg-white rounded-lg duration-200 ease-linear"
            >
              <span
                ref={caretRef}
                id="caret"
                className="block h-4 w-4 border-t border-l border-gray-400 bg-white rounded-sm 0 rotate-45 absolute -top-2 left-0 group-hover:left-[var(--transX)] duration-300 ease-linear"
              ></span>
              <div className="w-[var(--menu-width)] h-[var(--menu-height)] p-5 duration-200 ease-linear overflow-hidden">
                <div
                  id="menu-container"
                  className="flex flex-col items-center justify-center gap-2 w-full whitespace-nowrap"
                >
                  {menuItems === "quick-links" && (
                    <NavigationLinks data={quickLinks} heading="Quick Links" />
                  )}

                  {menuItems === "centers" && (
                    <NavigationLinks
                      data={centers}
                      heading="Centers & Facilities"
                    />
                  )}

                  {menuItems === "doc/forms" && (
                    <NavigationLinks data={doc} heading="Doc/Forms" />
                  )}
                </div>
              </div>
            </div>
          </ul>
        </nav>

        <nav>
          <button className="text-sm font-medium px-5 py-2 rounded-lg bg-[#00ecc1] hover:bg-[#269984] hover:text-white duration-150 ease-linear">
            Donate to IISERB
          </button>
        </nav>
      </header>
    </>
  );
}
