import React from "react";
import aiImage from "./../assets/molecule.jfif";

const AIPartnership = () => {
  return (
    <div className="w-full h-full object-cover rounded-xl flex flex-col items-center justify-center gap-3 py-36 px-10 relative">
      <div className="h-full w-full object-cover overflow-hidden rounded-xl absolute z-[-1]">
        <img src={aiImage} alt="Academic Industry Partnership Image" />
      </div>

      <h1 className="w-full text-xl sm:text-2xl lg:text-3xl text-center md:text-right text-white font-semibold textShadow">
        Open Invitation for <br />
        <span className="text-[#00ecc1]">Academic-Industry Partnerships</span>
      </h1>

      <p className="flex items-center justify-center md:justify-end w-full text-sm text-white font-light md:text-right text-center mt-5 textShadow">
        <span className="max-w-[54ch]">
          Under the Skill India Programme, IISER Bhopal invites industries to
          team up with IISER Bhopal faculty members on cutting-edge research
          projects in any of the five disciplines of basic sciences.
        </span>
      </p>

      <button className="md:ml-auto px-5 py-2.5 mt-10 rounded-lg bg-[#00ecc1] hover:bg-[#269984] hover:text-white duration-150 ease-linear">
        Learn More
      </button>
    </div>
  );
};

export default AIPartnership;
