import React from "react";
import "./nfts-card.scss";
import { Link } from "react-router-dom";
import { staticRoutes } from "../../helpers/static-routes";
import { saleMethod as saleMethodOp } from "../../helpers/global-constants";
import { FiShoppingCart } from "react-icons/fi";
import { WolfTooltipNotButton } from "../tooltip/WolfTooltipNotButton";
import WolfTooltip from "../tooltip/WolfTooltip";
import OptimismLogon from "../icons/OptimismLogon";
import { MdContentCopy } from "react-icons/md";
import { useDispatch } from "react-redux";
import { keyModalSate, openModal } from "../../features/modals/modalsSlice";

export default function NftsCard({ cardData }) {
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
    tokenId,
    copies,
    sale,
    order,
  } = cardData;

  // let saleMehodUi;
  let chekoutButtonBuy;
  const dispatch = useDispatch();

  switch (saleMethod) {
    case saleMethodOp.sales:
      // saleMehodUi = "Venta";
      chekoutButtonBuy = "Comprar Ahora";
      break;

    case saleMethodOp.auction:
      // saleMehodUi = "Subasta";
      chekoutButtonBuy = "Hacer una puja";
      break;

    default:
      // saleMehodUi = "No a la venta";
      chekoutButtonBuy = "Nada";

      break;
  }

  return (
    <div className="wolf-nfts-card ">
      <div className="nft-card-body">
        <div className="multimedia-zone">
          <div className="blockchain-logo">
            <OptimismLogon />
          </div>
          <Link to={staticRoutes.tokenInfoData(order)}>
            <img
              className="wolf-main-multimedia-data"
              src={nftCover}
              alt={"nft-cover-carf"}
            />
          </Link>
          <div className="face-avatar-zone">
            <WolfTooltip title="nombre xd">
              <WolfTooltipNotButton>
                <div className="avatar-img glass mb-2">
                  <div className="bg-gradient"></div>
                  {sellerFace ? (
                    <img src={sellerFace} alt={"seller-" + seller} />
                  ) : (
                    <div className="hash-zone"></div>
                  )}
                </div>
              </WolfTooltipNotButton>
            </WolfTooltip>

            <Link to={staticRoutes.colectionInfoData(colection)}>
              <div className="avatar-img ">
                <div className="bg-gradient"></div>
                {collectionFace ? (
                  <img src={collectionFace} alt={"colection-" + colection} />
                ) : (
                  <div className="hash-zone"></div>
                )}
              </div>
            </Link>
          </div>

          <Link to={staticRoutes.tokenInfoData(order)} >
            <div className="collection-titel-zone">
              <Link to={staticRoutes.colectionInfoData(colection)}>
                {colectionName ? colectionName : colection}
              </Link>
            </div>
          </Link>
        </div>
        <div className="info-area">
          <Link to={staticRoutes.tokenInfoData(order)}>
            <h3 className="nft-title">{nftName}</h3>
            <div className="price-area">
              {/* <span className="tag-label">{saleMehodUi}</span> */}
              <h3 className="price w-[100%]">
                <span> {price} ETH </span>
                <div className="cuantity flex ">
                  {<MdContentCopy />} <span>{`${sale}`}</span>
                </div>
              </h3>
            </div>
          </Link>

          <div className="wolf-btn-area">
            <button
              className="go-checkout"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(
                  openModal({
                    modal: keyModalSate.checkoutModal,
                    data: {
                      order,
                      nftCover,
                      nftName,
                    },
                  })
                );
              }}
            >
              <span>{chekoutButtonBuy}</span>
            </button>
            <div className="w-[1px] h-[100%] bg-white"></div>
            <button className="add-cart">
              <span>
                <FiShoppingCart />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
