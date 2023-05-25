import React from "react";
import "./nft-card-v2.scss";
import { Skeleton } from "@mui/material";
import WolfIdentidcon from "../identicon/WolfIdentidcon";

const NftCardV2Render = ({ data }) => {
  const {
    blockChain,
    chainId,
    colection,
    collectionFace,
    colectionName,
    colectionSymbol,
    currentPrice,
    endTime,
    initPrice,
    listingAt,
    metadata,
    onSale,
    orderId,
    price,
    saleMethod,
    seller,
    id,
  } = data;

  return (
    <div className="nft-card-v2">
      <div className="nft-card-v2-body">
        <div className="multimedia-zone">
          <div className="nft-info">
            <div className="nft-info-box">
              <div className="colection-avatar-zone">
                {collectionFace ? (
                  <img src={collectionFace} alt="colection-face" />
                ) : (
                  <WolfIdentidcon size={46} name={colection} />
                )}
              </div>
              <div className="nft-info-content">
                
              </div>
            </div>
          </div>
          {metadata && metadata.thumbnail ? (
            <img
              src={metadata.thumbnail}
              alt={"thumbnails-" + saleMethod + "-" + orderId}
            />
          ) : metadata.image ? (
            <img
              src={metadata.thumbnail}
              alt={"thumbnails-" + saleMethod + "-" + orderId}
            />
          ) : null}
        </div>
        <div className="content-zone"></div>
      </div>
    </div>
  );
};

export default function NffCardV2({ data, loading }) {
  return loading ? (
    <div className="laoding-card">
      <div className="img-skeletor">
        <Skeleton
          animation="wave"
          className="skeletor-text"
          sx={{
            position: "absolute",
            right: 15,
            width: 80,
            bottom: 10,
          }}
        />
        <div className="info-skeletor">
          <Skeleton
            variant="circular"
            width={50}
            height={50}
            animation="wave"
            sx={{
              position: "absolute",
              bottom: -20,
              left: 20,
            }}
          />
        </div>
      </div>
    </div>
  ) : (
    <NftCardV2Render data={data} />
  );
}
