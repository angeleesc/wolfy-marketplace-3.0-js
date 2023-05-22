import React from "react";
import "./feactures-swiper.scss";

import { SwiperSlide, Swiper } from "swiper/react";

export default function FeacturedSwiper({ data, loading, title, query = {} }) {
  const loadingCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const init = async () => {};

  return (
    <section className="feactured-section">
      {title && <h3>{title}</h3>}

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {loadingCard.map((key, i) => {
          return <SwiperSlide key={title+"-"+i}>
            Slide {key}
          </SwiperSlide>;
        })}
      </Swiper>
    </section>
  );
}
