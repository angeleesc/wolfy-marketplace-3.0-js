import React, { useCallback, useRef } from "react";
import "./wolf-hero-v2.scss";
import "swiper/css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import WolfSwiperSlide from "./wolfSwiperSlide";

// esta seccion esta dividido de dos formas
// colleciones destacadas
// en el tab sra de categoria
// nfts destacadas
// la nft con la oferta mas alta
// la nft recien egregaga
// la nft mas carra
// la nft mas barata

export default function Hero() {
  const slideRef = useRef(null);

  const handlePref = useCallback(() => {
    if (!slideRef.current) return;
    slideRef.current.swiper.slidePrev();
  });

  const handleNext = useCallback(() => {
    if (!slideRef.current) return;
    slideRef.current.swiper.slideNext();
  });

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
        <div className="wolf-v2-swiper-box">
          <button onClick={handlePref}> Anterior</button>
          <button onClick={handleNext}>Siguiente</button>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            ref={slideRef}
          >
            <SwiperSlide>
              <WolfSwiperSlide />
            </SwiperSlide>
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
