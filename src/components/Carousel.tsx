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
import SectionHeading from '../components/SectionHeading'

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
    <>
      <div className="flex flex-col items-center pt-3 py-1 md:py-4">
        <SectionHeading label="THE REAL THING" />
      </div>
      <h2 className="text-center text-3xl font-black leading-5 text-text-primary md:py-3 md:text-[60px]">
        HUNGRY FOR MORE?
      </h2>
      <div className="swiper mx-auto w-full px-4 pt-3 md:px-8 lg:px-12">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          centeredSlides
          loop
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
    </>
  );
}
