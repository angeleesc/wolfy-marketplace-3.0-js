import React from "react";
import "./feactures-swiper.scss";

import { SwiperSlide, Swiper } from "swiper/react";
import NffCardV2 from "../../../../../components/cards/NffCardV2";

export default function FeacturedSwiper({ data, loading, title, query = {} }) {
  const loadingCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const init = async () => {};

  return (
    <section className="feactured-section">
      {title && <h3>{title}</h3>}

      <Swiper
        spaceBetween={50}

        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}

        breakpoints={
          {
            300: {
              // width: 300,
              slidesPerView: 1,
            }, 

            600: {
              // width: 600,
              slidesPerView: 2
            }, 

            850: {
              // width: 600,
              slidesPerView: 3
            }, 

            1100: {
              // width: 1100, 
              slidesPerView: 4
            },

            1400: {
              // width: 1300,
              slidesPerView: 5
            },
            1500: {
              // width: 1500,
              slidesPerView: 6
            }

          }
        }

      >
        {loadingCard.map((key, i) => {
          return <SwiperSlide key={title+"-"+i}>
            <NffCardV2 loading={loading} data={data} />
          </SwiperSlide>;
        })}
      </Swiper>
    </section>
  );
}
