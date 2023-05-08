import React from "react";
import NftCard from "../cards/NftCard";

export default function UserCardList({ nfts }) {
  return (
    <div className="cards-nft-explorer-container">
      {nfts.map((nft, i) => {
        return (
          <div className="card-nfts-item" key={"nfts-explorer-card-" + i}>
               <NftCard cardData={nft} />
          </div>
        );
      })}
    </div>
  );
}
