import React from "react";
import "./nfts-card.scss";
import { Link } from "react-router-dom";
import { staticRoutes } from "../../helpers/static-routes";
import { saleMethod as saleMethodOp } from "../../helpers/global-constants";
import { FiShoppingCart } from "react-icons/fi";

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
  } = cardData;

  let saleMehodUi;
  let chekoutButtonBuy;

  switch (saleMethod) {
    case saleMethodOp.sales:
      saleMehodUi = "Venta";
      chekoutButtonBuy = "Comprar Ahora";
      break;

    case saleMethodOp.auction:
      saleMehodUi = "Subasta";
      chekoutButtonBuy = "Hacer una puja";
      break;

    default:
      saleMehodUi = "No a la venta";
      saleMehodUi = "Nada";

      break;
  }

  return (
    <div className="wolf-nfts-card ">
      <div className="nft-card-body">
        <div className="multimedia-zone">
          <img
            className="wolf-main-multimedia-data"
            src={nftCover}
            alt={"nft-cover-carf"}
          />

          <div className="face-avatar-zone">
            <div className="avatar-img mb-2">
              {sellerFace ? (
                <img src={sellerFace} alt={"seller-" + seller} />
              ) : (
                <div className="hash-zone"></div>
              )}
            </div>
            <div className="avatar-img ">
              {collectionFace ? (
                <img src={collectionFace} alt={"colection-" + colection} />
              ) : (
                <div className="hash-zone"></div>
              )}
            </div>
          </div>

          <div className="collection-titel-zone">
            <Link to={staticRoutes.colectionInfoData(colection)}>
              {colectionName ? colectionName : colection}
            </Link>
          </div>
        </div>
        <div className="info-area">
          <h3 className="nft-title">{nftName}</h3>
          <div className="price-area">
            <span className="tag-label">{saleMehodUi}</span>
            <h3 className="price">
              {price} ETH{" "}
              <span className="cuantity"> {`${sale}/${copies}`} </span>{" "}
            </h3>
          </div>
          <div className="wolf-btn-area">
            <button className="go-checkout">
              <span>{chekoutButtonBuy}</span>
            </button>
            <div className="w-[1px] h-[100%] bg-white" ></div>
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
