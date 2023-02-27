import React from "react";
import { useNavigate } from "react-router-dom";
import usePartes from "../../hooks/usePartes";
import Spinner from "../Spinner/Spinner";
import Parts from "./Parts";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Mousewheel, Navigation } from "swiper";

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
    <section className="my-6 mx-auto max-w-[1100px] px-2">
      <h2 className="section-header mb-4 text-start text-4xl font-bold text-secondary">
        Ours Pars
      </h2>
      {/* <div className="parts-items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 "> */}
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
        navigation={true}
        cssMode={true}
        modules={[ Autoplay, Navigation]}
        className="mySwiper"
      >
        {parts.map((part) => (
          <SwiperSlide key={part._id}>
            <Parts data={part} handleBuyNowBtn={handleBuyNowBtn} />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Partses;
