import React from "react";
import "./nft-card.scss";
import WolfIdentidcon from "../identicon/WolfIdentidcon";
import { MdAddShoppingCart } from "react-icons/md";
import { WolfTooltipNotButton } from "../tooltip/WolfTooltipNotButton";
import WolfTooltip from "../tooltip/WolfTooltip";

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
            <WolfTooltip  title={ <div className="flex flex-col" >
              <span>Collecion</span>
              <h3>{colectionName}</h3>
            </div> } placement='left' >
              <WolfTooltipNotButton>
                <div className="avatar-section-item">
                  <img src={collectionFace} alt="collection-face-photo" />
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
              <h2>{price} ETH</h2>
            </div>
          </div>
          <div className="checkout-secction">
            <button className="wolf-buttom wolf-btn-primary-2 mr-2 ">
              Comprar
            </button>
            <button className="wolf-buttom wolf-btn-primary-2 ">
              <MdAddShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
