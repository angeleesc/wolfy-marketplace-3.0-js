import React from "react";

export default function WolfSwiperSlide({ data }) {
  console.log("datos obtenidos del swipert")
  console.log(data)
  const { type, metadata } = data;

  return <div className="swipe-box" >
    {
      metadata.image && <img className="swiper-image" src={metadata.image} alt="swiper-image" />
    }
  </div>;
}
