import React from "react";
import "./wolf-hero-v2.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// esta seccion esta dividido de dos formas
// colleciones destacadas
// en el tab sra de categoria
// nfts destacadas
// la nft con la oferta mas alta
// la nft recien egregaga
// la nft mas carra
// la nft mas barata

export default function Hero() {
  return (
    <div className="wolf-hero-v2">
      <section className="swiper-section">
        <div className="hero-swiper-section-tab-menu">
          <button className="hero-swiper-button-active">
            <h3>Nfts</h3>
          </button>
          <button>
            <h3>Arte</h3>
          </button>
          <button>
            <h3>Gaming</h3>
          </button>
        </div>
        <div className="mt-[20px]">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            ...
          </Swiper>
        </div>
      </section>
    </div>
  );
}
