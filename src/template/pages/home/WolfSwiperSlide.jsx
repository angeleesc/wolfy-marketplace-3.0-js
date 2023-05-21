import React from "react";
import { Link } from "react-router-dom";
import { staticRoutes } from "../../../helpers/static-routes";
import WolfIdentidcon from "../../../components/identicon/WolfIdentidcon";
import { saleMethod } from "../../../helpers/global-constants";
import { BsFillTagFill } from "react-icons/bs"
import { ImClock}from "react-icons/im"

export default function WolfSwiperSlide({ data }) {
  console.log("datos obtenidos del swipert");
  console.log(data);
  const { type, metadata } = data;
  console.log(metadata);

  return (
    <div className="swipe-box">
      {metadata.image && (
        <img className="swiper-image" src={metadata.image} alt="swiper-image" />
      )}
      <div className="swiper-nft-info">
        <div className="swipe-info-body">
          {/* collectionFace */}
          <div className="flex items-center">
          <div className="siwpe-avatar-section-item">
                  <Link
                    className="w-[100%] h-[100%] block"
                    to={staticRoutes.colectionInfoData(data.colection)}
                  >
                    {data.collectionFace ? (
                      <img src={data.collectionFace} alt="collection-face-photo" />
                    ) : (
                      <WolfIdentidcon name={data.colection} size={60} />
                    )}
                  </Link>
                </div>
            {metadata.nftName && <h3>{metadata.nftName}</h3>}
          </div>
          <div className="swipe-sale-info" >

          <span className="price-info">
                {data.saleMethod === saleMethod.sales ? "Precio" : "Puja Minima"}
              </span>
              <h4 className="flex items-center">
                {data.saleMethod === saleMethod.sales ? (
                  <BsFillTagFill className="mr-2" />
                ) : (
                  <ImClock className="mr-2" />
                )}
                {data.saleMethod === saleMethod.sales ? data.price : data.currentPrice} ETH
              </h4>

          </div>
        </div>
      </div>
    </div>
  );
}
