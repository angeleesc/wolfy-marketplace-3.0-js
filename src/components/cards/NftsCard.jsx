import React from "react";
import "./nfts-card.scss";
import { Link } from "react-router-dom";
import { staticRoutes } from "../../helpers/static-routes";
import { saleMethod as saleMethodOp } from "../../helpers/global-constants"

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
  } = cardData;


let saleMehodUi 

switch (saleMethod) {
  case saleMethodOp.sales: saleMehodUi = "Venta"
    break;


  default:
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
        </div>
        <div className="price-area">
          <span>{ }</span>
        </div>
      </div>
    </div>
  );
}
