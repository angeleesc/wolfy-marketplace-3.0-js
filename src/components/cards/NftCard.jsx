import React from "react";
import "./nft-card.scss";
import WolfIdentidcon from "../identicon/WolfIdentidcon";
import { MdAddShoppingCart } from "react-icons/md";
import { WolfTooltipNotButton } from "../tooltip/WolfTooltipNotButton";
import WolfTooltip from "../tooltip/WolfTooltip";
import { Link } from "react-router-dom";
import { staticRoutes } from "../../helpers/static-routes";
import { useDispatch } from "react-redux";
import { keyModalSate, openModal } from "../../features/modals/modalsSlice";
import { saleMethod as saleMethodOp } from "../../helpers/global-constants";
import { BsFillTagFill } from "react-icons/bs";
import { ImClock } from "react-icons/im";
import { FaHourglassStart } from "react-icons/fa";

export default function NftCard({ cardData }) {
  const {
    nftName,
    colectionName,
    seller,
    colection,
    collectionFace,
    sellerFace,
    isCollectionCheck,
    isSellerCheck,
    nftCover,
    price,
    saleMethod,
    // tokenId,
    // copies,
    // sale,
    order,
    id,
    orderId,
    isOwner,
    sellerName,
    walletLog,
    currentPrice,
  } = cardData;

  console.log("es el dueno de la order", walletLog && walletLog === seller);

  const dispatch = useDispatch();

  console.log("es duenio", isOwner);

  return (
    <div className="nft-card-container">
      <div className="card-body">
        <div className="multimedia-secction">
          <Link
            className="w-[100%] h-[100%]"
            to={staticRoutes.tokenInfoData(order)}
          >
            {nftCover && <img src={nftCover} alt="cover-img" />}
          </Link>

          {saleMethod === saleMethodOp.auction && (
            <div className="auction-hourglass">
              <div className="auction-hourglass-body">
                <div className="p-0 m-0 flex flex-col justify-center">
                  <span>termina</span>
                  <h3 >3 minutos</h3>
                </div>
              </div>
            </div>
          )}

          <Link
            className="seller-info-section"
            to={staticRoutes.userData(seller)}
          >
            <div className="seller-info-body">
              <div className="seller-name">
                <span>Vendedor</span>
                <h3 className="seller-title">
                  {sellerName ? sellerName : seller}
                </h3>
              </div>
              <div className="seller-avatar">
                {sellerFace ? (
                  <img src={sellerFace} alt="seller-avatar" />
                ) : (
                  <WolfIdentidcon name={seller} size={36} />
                )}
              </div>
            </div>
          </Link>
          <div className="avatar-section-container">
            <WolfTooltip
              title={
                <div className="flex flex-col">
                  <span>Collecion</span>
                  <h3>{colectionName}</h3>
                </div>
              }
              placement="left"
            >
              <WolfTooltipNotButton>
                <div className="avatar-section-item">
                  <Link
                    className="w-[100%] h-[100%] block"
                    to={staticRoutes.colectionInfoData(colection)}
                  >
                    {collectionFace ? (
                      <img src={collectionFace} alt="collection-face-photo" />
                    ) : (
                      <WolfIdentidcon size={42} />
                    )}
                  </Link>
                </div>
              </WolfTooltipNotButton>
            </WolfTooltip>
          </div>
        </div>
        <div className="footer-section">
          <div className="sale-info-section">
            <div className="nft-title-section-xd">
              <h3>{nftName}</h3>
            </div>
            <div className="price-zone px-[5px]">
              <span className="price-info">
                {saleMethod === saleMethodOp.sales ? "Precio" : "Puja Minima"}
              </span>
              <h2 className="flex items-center">
                {saleMethod === saleMethodOp.sales ? (
                  <BsFillTagFill className="mr-2" />
                ) : (
                  <ImClock className="mr-2" />
                )}
                {saleMethod === saleMethodOp.sales ? price : currentPrice} ETH
              </h2>
            </div>
          </div>
          <div className="checkout-secction">
            {walletLog && walletLog === seller ? (
              <button
                className="wolf-buttom wolf-btn-primary-2 mr-2 "
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(
                    openModal({
                      modal: keyModalSate.checkoutModal,
                      data: {
                        order,
                        orderId,
                        nftCover,
                        nftName,
                        saleMethod,
                        walletLog,
                        seller,
                      },
                    })
                  );
                }}
              >
                Cancelar
              </button>
            ) : (
              <>
                <button
                  className="wolf-buttom wolf-btn-primary-2 mr-2 "
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(
                      openModal({
                        modal: keyModalSate.checkoutModal,
                        data: {
                          order,
                          orderId,
                          nftCover,
                          nftName,
                          saleMethod,
                        },
                      })
                    );
                  }}
                >
                  {saleMethod === saleMethodOp.sales
                    ? "comprar"
                    : "hacer una puja"}
                </button>
                {saleMethod === saleMethodOp.sales && (
                  <button className="wolf-buttom wolf-btn-primary-2 ">
                    <MdAddShoppingCart />
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
