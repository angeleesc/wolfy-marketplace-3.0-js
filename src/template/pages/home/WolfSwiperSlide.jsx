import React from "react";

export default function WolfSwiperSlide({ data }) {
  console.log("datos obtenidos del swipert")
  console.log(data)
  const { type, metadata } = data;

  return <div className="swipe-box" >
    <h3>swipe xd</h3>
  </div>;
}
