import React from "react";
import heroImage from "./../assets/dna.jfif";

const Hero = () => {
  return (
    <div className="w-full h-full object-cover rounded-xl flex flex-col items-center justify-center gap-3 py-36 px-10 relative">
      <div className="h-full w-full object-cover overflow-hidden rounded-xl absolute z-[-1]">
        <img src={heroImage} alt="Hero Image" />
      </div>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center text-white font-semibold">
        <span className="text-[#00ecc1]">Research</span> and{" "}
        <span className="text-[#00ecc1]">Development</span>
      </h1>
      <p className="text-white text-base lg:text-xl text-center">
        Indian Institute of Science Education and Research Bhopal
      </p>

      <p className="max-w-[60ch] text-sm text-white font-extralight text-center mt-5 [text-shadow:0_0_5px_rgba(0,0,0,1)]">
        The research in this Institute aims toward exploring new fields and
        generating innovative ideas using young and bright minds in order to
        contribute to the development of the society and the growth of the
        industry.
      </p>

      <button className="px-5 py-2.5 mt-10 rounded-lg bg-[#00ecc1] hover:bg-[#269984] hover:text-white duration-150 ease-linear">
        More about us
      </button>
    </div>
  );
};

export default Hero;
