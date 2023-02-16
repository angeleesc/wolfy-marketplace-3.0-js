import React from "react";
import "./nfts-card.scss";
import { Link } from "react-router-dom";
import { staticRoutes } from "../../helpers/static-routes";

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
            <Link to={staticRoutes.colectionInfoData(colection)} >{colectionName ? colectionName : colection}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
