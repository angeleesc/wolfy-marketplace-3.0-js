import React from "react";
import { historyType } from "../../helpers/global-constants";

const NftListingHistoryCard = ({ cardData }) => {
  return (
    <div className="history-card">
      <h3>linting card</h3>
    </div>
  );
};

const NftSellHistoryCard = ({ cardData }) => {
  return (
    <div>
      <h3>Sell history</h3>
    </div>
  );
};

const NfTranferssHistorytCard = ({ cardData }) => {
  return (
    <div>
      <h3>Transfer histori</h3>
    </div>
  );
};

const NftMintHistoryCard = () => {
  return (
    <div>
      <h3>Mint history</h3>
    </div>
  );
};

export default function NftHistoriDisplay({ nftHistory }) {
  const preHistoryCardsList = {
    [historyType.listing]: NftListingHistoryCard,
    [historyType.sell]: NftSellHistoryCard,
    [historyType.mint]: NftMintHistoryCard,
    [historyType.transfer]: NfTranferssHistorytCard,
  };

  return (
    <div className="nft-history-display-containes">



      {nftHistory.map((nft, i) => {

        const DefCard = preHistoryCardsList[nft.type]

        return  <DefCard cardData={nft} /> ;
      })}
    </div>
  );
}
