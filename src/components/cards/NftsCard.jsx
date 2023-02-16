import React from "react";
import "./nfts-card.scss";

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

  return (
    <div className="wolf-nfts-card ">
      <div className="nft-card-body">
        <div className="multimedia-zone">
          <img src={nftCover} alt={"nft-cover-carf"} />
          <div className="collection-titel-zone">
            <span>{colectionName ? colectionName : colection}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
