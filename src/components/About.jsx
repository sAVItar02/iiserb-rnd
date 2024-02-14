import React from "react";
import Carousel from "./Carousel";
import { images } from "./../data/carouselImages.json";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="flex lg:flex-row flex-col items-center justify-center gap-16 flex-wrap">
        <div className="flex flex-col items-start justify-center gap-3 animate-fadeInLeft w-full flex-[4]">
          <h2 className="w-full text-left text-xl font-semibold">
            <span className="text-primaryDark">Office</span>, R&D Affairs
          </h2>
          <p className="text-sm text-justify text-gray-700 w-full lg:max-w-[60ch]">
            The Research & Development office of IISER Bhopal has been
            established to provide specialized administrative and managerial
            support for the operation of sponsored research, consultancy and
            other R&D related activities of the Institute. The research
            viewpoint has now progressed from an individual laboratory work to a
            collaborative one that occurs not just at national but at
            international level. The office provides support for the interaction
            of an IISER faculty with external agency around the globe. The
            office also provides support for the Institute-Industry interaction
            and takes care of the filing and management of patents. The research
            in this Institute aims toward exploring new fields and generating
            innovative ideas using young and bright minds in order to contribute
            to the development of the society and the growth of the industry.
            The Institute benefits tremendously from such research activities
            that not only address the current problems in the society but also
            aim toward the development of new technologies. To achieve these
            objectives, the faculty members are supported by state-of-the-art
            facilities and infrastructure.
          </p>
        </div>
        <div className="animate-fadeInRight flex-[8]">
          <Carousel images={images} />
        </div>
      </div>
    </div>
  );
};

export default About;
