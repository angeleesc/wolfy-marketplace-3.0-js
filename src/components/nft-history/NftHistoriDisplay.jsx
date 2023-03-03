import React from "react";
import { historyType } from "../../helpers/global-constants";

import {IoPricetag} from "react-icons/io5"

import "./nft-history.scss"

const NftListingHistoryCard = ({ cardData }) => {
  return (
    <div className="history-card">
      <h3 className="flex" > <IoPricetag className="mr-2" /> <span>Listado</span></h3>
    </div>
  );
};

const NftSellHistoryCard = ({ cardData }) => {
  return (
    <div className="history-card" >
      <h3>Venta</h3>
    </div>
  );
};

const NfTranferssHistorytCard = ({ cardData }) => {
  return (
    <div className="history-card" >
      <h3>TTranferencia</h3>
    </div>
  );
};

const NftMintHistoryCard = () => {
  return (
    <div className="history-card" >
      <h3>Acuñado</h3>
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
    <div className="nft-history-display-containes mt-[30px] ">



      {nftHistory.map((nft, i) => {

        const DefCard = preHistoryCardsList[nft.type]
        return  <DefCard cardData={nft} /> ;
      })}
    </div>
  );
}
