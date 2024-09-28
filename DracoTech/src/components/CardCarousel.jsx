import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import Card from "./Card";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../styles/CardCarousel.css";

function CardCarousel({ CardData }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={60}
      slidesPerView={4}
      navigation={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      /*
        breakpoints={{
        990: {
          slidesPerView: 1,
        },
        1028: {
          slidesPerView: 4,
        },
        1920: {
          slidesPerView: 5,
        },
      }}
      */
    >
      {CardData.map((card, index) => (
        <SwiperSlide key={index}>
          <Card name={card.name} image={card.image} price={card.price} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CardCarousel;
