// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Carousel1 from "../assets/AssistCombo.png"
import Carousel2 from "../assets/BuffOne.png"

export default function Carousel() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={1}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true,  el: '.swiper-pagination', type: 'bullets', }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      allowSlideNext
      allowSlidePrev
      loop
    >
      <SwiperSlide>
        <img className="rounded-[21px]" src={Carousel2} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="rounded-[21px]" src={Carousel1} alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img  className="rounded-[21px]"src={Carousel2} alt="Slide 3" />
      </SwiperSlide>
    </Swiper>
  );
}