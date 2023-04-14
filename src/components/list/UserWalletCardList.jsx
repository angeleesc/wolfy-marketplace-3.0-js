import React from "react";
import WalletNftCard from "../cards/WalletNftCard";

export default function UserWalletCardList({ nfts }) {
  return (
    <div className="cards-nft-explorer-container pb-[80px]">
      {nfts.map((nft, i) => {
        return (
          <div className="card-nfts-item" key={"nfts-explorer-card-" + i}>
            <WalletNftCard nft={nft}  />
          </div>
        );
      })}
    </div>
  );
}
