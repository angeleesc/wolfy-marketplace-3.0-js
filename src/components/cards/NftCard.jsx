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
        <div className="multimedia-secction">
            <img src={nftCover} alt="cover-img" />
            <div className="avatar-section" >
                <img src={collectionFace} alt="collection-face-photo" />
            </div>
        </div>
        <div className="sale-info-section"></div>
      </div>
    </div>
  );
}
