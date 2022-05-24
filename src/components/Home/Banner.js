import React from "react";
import slider1 from "../../image/alessio-soggetti-JQGGf6OuIdQ-unsplash.jpg";
import slider2 from "../../image/cesar-carlevarino-aragon-NL_DF0Klepc-unsplash.jpg";
import slider3 from "../../image/robert-bye-tG36rvCeqng-unsplash.jpg";
import slider4 from "../../image/tom-conway-0dtQVPebr0Q-unsplash.jpg";
import { MinusSmIcon } from "@heroicons/react/solid";

const Banner = () => {
  return (
    <>
      <div class="carousel w-full">
        <div id="item1" class="carousel-item w-full relative">
          <img
            alt="slider"
            src={slider1}
            class="w-full h-[500px] object-cover"
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
        <div id="item2" class="carousel-item w-full relative">
          <img
            alt="slider"
            src={slider2}
            class="w-full h-[500px] object-cover"
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
        <div id="item3" class="carousel-item w-full relative">
          <img
            alt="slider"
            src={slider3}
            class="w-full h-[500px] object-cover"
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
        <div id="item4" class="carousel-item w-full relative">
          <img
            alt="slider"
            src={slider4}
            class="w-full h-[500px] object-cover"
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
      <div class="flex justify-center w-full py-2 gap-2">
        <a href="#item1" class="btn btn-xs btn-secondary">
          <MinusSmIcon className="w-5" />
        </a>
        <a href="#item2" class="btn btn-xs btn-secondary">
          <MinusSmIcon className="w-5" />
        </a>
        <a href="#item3" class="btn btn-xs btn-secondary">
          <MinusSmIcon className="w-5" />
        </a>
        <a href="#item4" class="btn btn-xs btn-secondary">
          <MinusSmIcon className="w-5" />
        </a>
      </div>
    </>
  );
};

export default Banner;
