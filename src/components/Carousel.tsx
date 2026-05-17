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
    <div className="swiper mx-auto w-full px-4 pt-3 md:px-8 lg:px-12">      
<Swiper
  modules={[Navigation, Pagination, Autoplay]}
  centeredSlides
  loop
  loopAdditionalSlides={slides.length}
  speed={1000}
  grabCursor
  allowTouchMove
  freeMode={true}
  autoplay={{
    delay: 6000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  pagination={{
    clickable: true,
    type: "bullets",
  }}

  breakpoints={{
    0: {
      slidesPerView: 1.3,
      spaceBetween: 12,
    },

    640: {
      slidesPerView: 1.7,
      spaceBetween: 16,
    },

    768: {
      slidesPerView: 1.9,
      spaceBetween: 20,
    },

    1024: {
      slidesPerView: 2.3,
      spaceBetween: 24,
    },

    1400: {
      slidesPerView: 2.6,
      spaceBetween: 28,
    },
  }}
>
      {slides.concat(slides).map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Slide ${index}`}
            className="rounded-2xl w-full object-cover pb-8"
          />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
}