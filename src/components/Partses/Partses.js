import React from "react";
import { useNavigate } from "react-router-dom";
import usePartes from "../../hooks/usePartes";
import Spinner from "../Spinner/Spinner";
import Parts from "./Parts";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper";

const Partses = () => {
  const [parts, isLoading] = usePartes();
  const navigate = useNavigate();
  const handleBuyNowBtn = (id) => {
    navigate(`/purchase/${id}`);
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <section className="my-6 mx-auto max-w-[1100px] px-2 relative">
      <h2 className="section-header mb-4 text-start text-4xl font-bold text-secondary">
        Ours Pars
      </h2>
      <div className="p-4">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={{
          speed:3000
        }}
        autoplay={{
          delay:3000
        }}
        navigation= {{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        cssMode={true}
        modules={[ Autoplay, Navigation]}
        className="productCarousel"
      >
        {parts.map((part) => (
          <SwiperSlide key={part._id}>
            <Parts data={part} handleBuyNowBtn={handleBuyNowBtn} />
          </SwiperSlide>
        ))}
      </Swiper>
        <div className="absolute top-0 right-0 flex gap-2 justify-end">
          <div className="swiper-button-prev">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </div>
          <div className="swiper-button-next">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partses;
