import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Carousel1 from "../assets/AssistCombo.png"
import Carousel2 from "../assets/BuffOne.png"

const slides = [
  Carousel1,
  Carousel2,
  Carousel1,
  Carousel2,
  Carousel1,
  Carousel2,
];

export default function Carousel() {
  return (
    <div className="relative w-full bg-[#f2f2f2]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        centeredSlides
        loop
        loopAdditionalSlides={slides.length}
        slidesPerView={1.8}
        spaceBetween={0}
        speed={1000}
        grabCursor
        allowTouchMove
        freeMode={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        // navigation
        pagination={{
          clickable: true,
          type: 'bullets',
          dynamicBullets: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.1,
          },
          768: {
            slidesPerView: 1.5,
          },
          1024: {
            slidesPerView: 1.9,
          },
        }}
        className="promo-swiper"
      >
        {slides.concat(slides).map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              className="rounded-[34px] w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}