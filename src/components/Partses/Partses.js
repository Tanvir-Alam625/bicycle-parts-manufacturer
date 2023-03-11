import React from "react";
import { useNavigate } from "react-router-dom";
import usePartes from "../../hooks/usePartes";
import Parts from "./Parts";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import ProductSkeleton from "../../skeleton/ProductSkeleton";

const Partses = () => {
  const [parts, isLoading] = usePartes();
  const navigate = useNavigate();
  const handleBuyNowBtn = (id) => {
    navigate(`/purchase/${id}`);
  };
  return (
    <section className="my-6 mx-auto max-w-[1100px] px-2 relative">
      <h2 className="section-header mb-4 text-start text-4xl font-bold text-secondary">
        Ours Pars
      </h2>
      {isLoading ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
          </div>
        </>
      ) : (
        <>
          <div className="p-4">
            <Swiper
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              loop={{
                speed: 3000,
              }}
              autoplay={{
                delay: 3000,
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{
                clickable: true,
                el: ".swiper-pagination-product",
              }}
              cssMode={true}
              modules={[Autoplay, Navigation, Pagination]}
              className="productCarousel"
            >
              {parts?.map((part) => (
                <SwiperSlide key={part._id}>
                  <Parts data={part} handleBuyNowBtn={handleBuyNowBtn} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute top-0 right-0 flex gap-2 justify-end p-2">
              <div className="swiper-button-prev">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
              <div className="swiper-button-next">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="swiper-pagination-product my-2 flex justify-center gap-[5px]"></div>
        </>
      )}
    </section>
  );
};

export default Partses;
