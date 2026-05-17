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
    <div className="swiper relative w-full">
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
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          type: 'bullets',
        }}
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