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
          <div className="seller-info">
            <div className="seller-info-body">
              <div className="avatar-section">
                {sellerFace ? (
                  <img src={sellerFace} alt="seller-face" />
                ) : (
                  <WolfIdentidcon name={seller} size={36} />
                )}
              </div>
              <div className="seller-info-card">
                <span className="mb-[2px]">Vendedor</span>
                {/* <div className="w-[100%] h-[1px] my-[2px] bg-wolf-blue-purple-600"></div> */}
                <h3>
                  {sellerName
                    ? sellerName
                    : `${seller.substring(0, 5)}...${seller.substr(-5)}`}
                </h3>
              </div>
            </div>
          </div>

          <div className="collection-info">
            <span>{colectionName}</span>
          </div>

          <div className="avatar-section-container">
            <div className="avatar-section-item">
              <img src={collectionFace} alt="collection-face-photo" />
            </div>
            {/* <div className="collection-nft-title">
              <span>{colectionName}</span>
              <h3>{nftName}</h3>
            </div> */}
          </div>
        </div>
        <div className="sale-info-section">
          <div className="nft-title-section-xd">
            {/* <span>{ colectionName }</span> */}
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
