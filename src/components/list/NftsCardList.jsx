import React from "react";
import NftsCard from "../cards/NftsCard";
import "./nfts-list.scss";

export default function NftsCardList({ cards }) {
  return (
    <div className="cards-nft-explorer-container">
      {cards.map((card, i) => {
        return (
          <div className="card-nfts-item" key={"nfts-explorer-card-" + i}>
            <NftsCard cardData={card} />
          </div>
        );
      })}
    </div>
  );
}
