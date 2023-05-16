import React from "react";
import "./price-zone.scss";
import { saleMethod as saleMethosOption } from "../../helpers/global-constants";
import WolfIdentidcon from "../identicon/WolfIdentidcon";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { staticRoutes } from "../../helpers/static-routes";

export default function PriceZoen({
  price,
  quantity,
  saleMethod,
  seller,
  sellerName,
  sellerAvatar,
  endTime,
  bestBidder,
}) {
  return (
    <div className="sale-info-price">
      <div className="flex justify-between">
        {saleMethod === saleMethosOption.sales && (
          <>
            <div className="flex w-[100%] justify-between items-center flex-col-reverse min-[600px]:flex-row ">
              <Link to={staticRoutes.userData(seller)}>
                <div className="flex items-start my-3 ">
                  <WolfIdentidcon size={40} />
                  <div className="h-[100%] ml-2 flex flex-col justify-center">
                    <span className="text-[12px] text-wolf-gray-light-1000">
                      Vendedor
                    </span>
                    <h3 className="text-[15px] text-wolf-gray-light-1500 leading-[15px] font-semibold ">
                      {sellerName
                        ? sellerName
                        : `${seller.substring(0, 5)}...${seller.substr(-5)}`}
                    </h3>
                  </div>
                </div>
              </Link>
              <div className="flex flex-col my-3">
                <span className="text-[12px] text-wolf-gray-light-1000">
                  En venta
                </span>
                <h3 className="text-[26px] leading-[28px] text-wolf-gray-light-1900 font-semibold">
                  {price} ETH
                </h3>
              </div>
            </div>
            <div className="flex justify-center button-zone-container">
              <div className="button-zone-item">
                <button className="wolf-buttom wolf-btn-primary-2 w-[100%] ">
                  Comprar Ahora
                </button>
              </div>
              <div className="button-zone-item">
                <button className="wolf-buttom wolf-btn-primary-2 w-[100%]">
                  <MdOutlineAddShoppingCart />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      {saleMethod === saleMethosOption.auction && (
        <>
          <div className="flex w-[100%] justify-between items-center flex-col-reverse min-[600px]:flex-row ">
            <Link to={staticRoutes.userData(seller)}>
              <div className="flex items-start my-3 ">
                <WolfIdentidcon size={40} />
                <div className="h-[100%] ml-2 flex flex-col justify-center">
                  <span className="text-[12px] text-wolf-gray-light-1000">
                    Vendedor
                  </span>
                  <h3 className="text-[15px] text-wolf-gray-light-1500 leading-[15px] font-semibold ">
                    {sellerName
                      ? sellerName
                      : `${seller.substring(0, 5)}...${seller.substr(-5)}`}
                  </h3>
                </div>
              </div>
            </Link>
            <div className="flex flex-col my-3">
              <span className="text-[12px] text-wolf-gray-light-1000">
                Mejor oferta
              </span>
              <h3 className="text-[20px] leading-[28px] text-wolf-gray-light-1900 font-semibold">
                {price} ETH
              </h3>
            </div>
          </div>
          
        </>
      )}
    </div>
  );
}
