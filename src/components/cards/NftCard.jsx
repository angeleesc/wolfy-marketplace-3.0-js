import React from "react";
import "./nft-card.scss";

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
    tokenId,
    copies,
    sale,
    order,
  } = cardData;

  return (
    <div className="nft-card-container">
      <div className="card-body">
        <div className="multimedia-secction"></div>
        <div className="sale-info-section"></div>
      </div>
    </div>
  );
}
