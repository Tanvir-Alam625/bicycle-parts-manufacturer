import React from "react";
import slider1 from "../../image/banner1.jpg";
import slider2 from "../../image/banner2.jpg";
import slider3 from "../../image/banner3.jpg";
import slider4 from "../../image/banner4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";


const Banner = () => {
  return (
    <>
     <Swiper 
      modules={[Autoplay, Pagination]}
      pagination={
        {
          clickable:true
        }
      }
      loop={true}
      autoplay={
        {
        delay:3000,
        disableOnInteraction: false,
      }
      }
      className="mySwiper"
     >
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
