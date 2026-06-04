import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Carousel1 from "../assets/imgs/Carousel/AssistCombo.png"
import Carousel2 from "../assets/imgs/Carousel/BuffOne.png"

const slides = [
  { id: 1, image: Carousel1, alt: "Assist Combo" },
  { id: 2, image: Carousel2, alt: "Buff One" },
  { id: 3, image: Carousel1, alt: "Assist Combo" },
  { id: 4, image: Carousel2, alt: "Buff One" },
  { id: 5, image: Carousel1, alt: "Assist Combo" },
  { id: 6, image: Carousel2, alt: "Buff One" },
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
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full rounded-2xl object-cover pb-8"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
