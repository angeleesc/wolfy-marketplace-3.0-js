import React from "react";

export default function UserCardList({ nfts }) {
  return (
    <div className="cards-nft-explorer-container">
      {nfts.map((nft, i) => {
        return (
          <div className="card-nfts-item" key={"nfts-explorer-card-" + i}>
            <h3>Carta</h3>
          </div>
        );
      })}
    </div>
  );
}
