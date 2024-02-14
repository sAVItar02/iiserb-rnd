import React from "react";
import { useState } from "react";

const ReadMore = ({ text }) => {
  const [seeMore, setSeeMore] = useState(true);

  const closedStyles = "line-clamp-3";

  return (
    <div className="flex flex-col items-start justify-center gap-4">
      <div
        className={`${
          seeMore && closedStyles
        } text-sm text-gray-700 text-justify duration-150 ease-linear`}
      >
        {text}
      </div>
      <button
        onClick={() => {
          setSeeMore(!seeMore);
        }}
        className="text-sm px-4 py-2 rounded-lg bg-primary hover:bg-primaryDark hover:text-white duration-150 ease-linear"
      >
        {seeMore ? "Read more" : "Read less"}
      </button>
    </div>
  );
};

export default ReadMore;
