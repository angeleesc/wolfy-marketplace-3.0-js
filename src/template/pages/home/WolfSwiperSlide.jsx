import React from "react";

export default function WolfSwiperSlide({ data }) {
  console.log("datos obtenidos del swipert")
  console.log(data)
  const { type, metadata } = data;
  console.log(metadata)

  return <div className="swipe-box" >
    {
      metadata.image && <img className="swiper-image" src={metadata.image} alt="swiper-image" />
    }
    <div className="swiper-nft-info" >

      <div className="swipe-info-body">
        {metadata.nftName && <h3>{metadata.nftName}</h3> }
      </div>


    </div>
  </div>;
}
