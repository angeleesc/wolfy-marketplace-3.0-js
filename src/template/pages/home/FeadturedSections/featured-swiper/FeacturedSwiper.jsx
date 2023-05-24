import React from "react";
import "./feactures-swiper.scss";

import { SwiperSlide, Swiper } from "swiper/react";
import NffCardV2 from "../../../../../components/cards/NffCardV2";
import WolfDoubtful from "../../../../../components/icons/WolfDoubtful";

const breakpoints = {
  300: {
    // width: 300,
    slidesPerView: 1,
  },

  600: {
    // width: 600,
    slidesPerView: 2,
  },

  850: {
    // width: 600,
    slidesPerView: 3,
  },

  1100: {
    // width: 1100,
    slidesPerView: 4,
  },

  1400: {
    // width: 1300,
    slidesPerView: 5,
  },
  1500: {
    // width: 1500,
    slidesPerView: 6,
  },
};

export default function FeacturedSwiper({
  data,
  loading,
  title,
  onEmptyResulMessage,
  hasErrorRequest,
}) {
  // const loadingCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const loadingCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <section className="feactured-section">
      {title && <h3>{title}</h3>}

      {loading ? (
        <Swiper
          spaceBetween={50}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={breakpoints}
        >
          {loadingCard.map((key, i) => {
            return (
              <SwiperSlide key={title + "-" + i}>
                <NffCardV2 loading={loading} data={data[0]} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : data.length > 0 ? (
        <Swiper
          spaceBetween={50}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={breakpoints}
        >
          {data.map((dataD, i) => {
            return (
              <SwiperSlide key={title+"-"+i} >
                <NffCardV2 loading={loading} data={dataD} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <div className="not-result-data">
          <div className="flex  flex-col justify-center items-center">
            <h4>
              {hasErrorRequest
                ? "ocurrio un error"
                : onEmptyResulMessage
                ? onEmptyResulMessage
                : "Mensase sin resultado"}
            </h4>
            <WolfDoubtful />
          </div>
        </div>
      )}
    </section>
  );
}
