import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faNewspaper,
  faBook,
  faCertificate,
  faBookOpen,
  faDiagramProject,
  faFile,
  faUsers,
  faBuilding,
  faFlask,
  faToolbox,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faNewspaper,
  faBook,
  faCertificate,
  faBookOpen,
  faDiagramProject,
  faFile,
  faUsers,
  faBuilding,
  faFlask,
  faToolbox,
  faFileLines
);

const NavigationLinks = ({ data, heading }) => {
  return (
    <div className="w-full">
      <h2 className="w-full text-left font-semibold text-sm text-gray-500 animate-fadeIn mb-5 uppercase">
        {heading}
      </h2>
      <ul className="grid grid-cols-2 gap-3 w-full animate-fadeIn">
        {data.map((item, idx) => {
          return (
            <li key={idx} className="py-1.5">
              <button className="text-sm font-medium flex items-center justify-center gap-2 group/icon">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-blue-600 group-hover/icon:text-black duration-150 ease-linear"
                />
                <p className="text-gray-500 group-hover/icon:text-black duration-150 ease-linear">
                  {item.name}
                </p>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavigationLinks;
