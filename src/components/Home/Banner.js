import React from "react";
import slider1 from "../../image/alessio-soggetti-JQGGf6OuIdQ-unsplash.jpg";
import slider2 from "../../image/cesar-carlevarino-aragon-NL_DF0Klepc-unsplash (1).jpg";
import slider3 from "../../image/robert-bye-tG36rvCeqng-unsplash (1).jpg";
import slider4 from "../../image/tom-conway-0dtQVPebr0Q-unsplash (1).jpg";
import { MinusSmIcon } from "@heroicons/react/solid";

const Banner = () => {
  return (
    <>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full relative">
          <img
            alt="slider"
            src={slider1}
            className="w-full h-[500px] object-cover"
          />
          <div className="slider-items  absolute top-[200px]  flex justify-center flex-col items-center w-full">
            <h2 className="text-4xl font-bold text-center text-base-100 ">
              Easton Road Bar EC70 42CM Aero <br /> 31.8 Handlebar - Black
            </h2>
            <button className="btn btn-secondary py-2 px-12 mt-[20px]">
              {" "}
              Buy Now
            </button>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full relative">
          <img
            alt="slider"
            src={slider2}
            className="w-full h-[500px] object-cover"
          />
          <div className="slider-items  absolute top-[200px]  flex justify-center flex-col items-center w-full">
            <h2 className="text-4xl font-bold text-center text-base-100 ">
              Bi-Cycle Ranse <br /> and repair extensions
            </h2>
            <button className="btn btn-secondary py-2 px-12 mt-[20px]">
              {" "}
              Buy Now
            </button>
          </div>
        </div>
        <div id="item3" className="carousel-item w-full relative">
          <img
            alt="slider"
            src={slider3}
            className="w-full h-[500px] object-cover"
          />
          <div className="slider-items  absolute top-[200px]  flex justify-center flex-col items-center w-full">
            <h2 className="text-4xl font-bold text-center text-base-100 ">
              Easton Road Bar EC70 42CM Aero <br /> BiCycle Aluminum
            </h2>
            <button className="btn btn-secondary py-2 px-12 mt-[20px]">
              {" "}
              Buy Now
            </button>
          </div>
        </div>
        <div id="item4" className="carousel-item w-full relative">
          <img
            alt="slider"
            src={slider4}
            className="w-full h-[500px] object-cover"
          />
          <div className="slider-items  absolute top-[200px]  flex justify-center flex-col items-center w-full">
            <h2 className="text-4xl font-bold text-center text-base-100 ">
              Easton Road Bar EC70 42CM Aero <br /> 31.8 Handlebar - Black
            </h2>
            <button className="btn btn-secondary py-2 px-12 mt-[20px]">
              {" "}
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs btn-secondary">
          <MinusSmIcon className="w-5" />
        </a>
        <a href="#item2" className="btn btn-xs btn-secondary">
          <MinusSmIcon className="w-5" />
        </a>
        <a href="#item3" className="btn btn-xs btn-secondary">
          <MinusSmIcon className="w-5" />
        </a>
        <a href="#item4" className="btn btn-xs btn-secondary">
          <MinusSmIcon className="w-5" />
        </a>
      </div>
    </>
  );
};

export default Banner;
