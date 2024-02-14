import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

library.add(faChevronLeft, faChevronRight);

const Carousel = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  function showPreviousImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

  return (
    <div className="flex items-center justify-center w-full h-[388px] overflow-hidden">
      <div className="w-full h-full rounded-xl flex items-center justify-start object-cover overflow-hidden relative">
        <button
          onClick={showPreviousImage}
          className="absolute top-0 bottom-0 left-0 z-10 p-10 hover:bg-black/40 duration-150 ease-linear motion-reduce:transition-none text-white"
          aria-label="Carousel Left"
        >
          <FontAwesomeIcon
            aria-hidden
            icon={faChevronLeft}
            className="text-xs p-2 h-4 w-4 rounded-full bg-white/40"
          />
        </button>

        {images.map((image, idx) => {
          return (
            <img
              key={idx}
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover grow-0 shrink-0 duration-300 ease-linear motion-reduce:transition-none"
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          );
        })}

        <button
          onClick={showNextImage}
          className="absolute top-0 bottom-0 right-0 z-10 p-10 hover:bg-black/40 duration-150 ease-linear motion-reduce:transition-none text-white"
          aria-label="Carousel Right"
        >
          <FontAwesomeIcon
            aria-hidden
            icon={faChevronRight}
            className="text-xs p-2 h-4 w-4 rounded-full bg-white/40"
          />
        </button>

        <div className="flex items-center justify-center gap-2 absolute bottom-3 left-1/2 -translate-x-1/2">
          {images.map((_, idx) => {
            return (
              <button
                className={`h-2.5 w-2.5 rounded-full border border-white ${
                  idx === imageIndex ? "bg-white" : "bg-gray-700"
                }`}
                onClick={() => {
                  setImageIndex(idx);
                }}
                key={idx}
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
