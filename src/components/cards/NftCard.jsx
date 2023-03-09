import React from "react";
import "./nft-card.scss";
import WolfIdentidcon from "../identicon/WolfIdentidcon";

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
    sellerName,
  } = cardData;

  return (
    <div className="nft-card-container">
      <div className="card-body">
        <div className="multimedia-secction">
          <img src={nftCover} alt="cover-img" />
          <div className="seller-info-section">
            <div className="seller-info-body">
              <div className="seller-name">
                <span>vendedor</span>
                <h3>{sellerName ? sellerName : seller}</h3>
              </div>
              <div className="seller-avatar">
                {sellerFace ? (
                  <img src={sellerFace} alt="seller-avatar" />
                ) : (
                  <WolfIdentidcon name={seller} size={36} />
                )}
              </div>
            </div>
          </div>
          <div className="avatar-section-container">
            <div className="avatar-section-item">
              <img src={collectionFace} alt="collection-face-photo" />
            </div>
          </div>
        </div>
        <div className="sale-info-section">
          <div className="nft-title-section-xd">

            <h3>{nftName}</h3>

          </div>
          <div className="price-zone px-[5px]">
            <h2>{price} ETH</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
