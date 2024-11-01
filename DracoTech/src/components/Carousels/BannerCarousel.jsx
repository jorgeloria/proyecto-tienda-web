import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "../../styles/BannerCarousel.css";

function BannerCarousel() {
  return (
    <div className="banner-carousel">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        loop={true}
        className="mySwiper delay"
        autoplay= {{
          delay: 6000
        }}
      >
        <SwiperSlide>
          <img src="/src/assets/BannerRTX4060.png" alt="Banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/src/assets/BannerRTX4060.png" alt="Banner" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BannerCarousel;
