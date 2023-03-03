import React from "react";
import { historyType } from "../../helpers/global-constants";

import {IoPricetag} from "react-icons/io5"
import { MdOutlineGavel, MdPayments } from "react-icons/md"
import { BiTransfer } from "react-icons/bi"
import avatar  from "gradient-avatar"

import "./nft-history.scss"
import gradientAvatar from "gradient-avatar";

const NftListingHistoryCard = ({ cardData }) => {
  return (
    <div className="history-card">
      <h3 className="flex items-center" > <IoPricetag className="mr-2" /> <span>Listado</span></h3>
    </div>
  );
};

const NftSellHistoryCard = ({ cardData }) => {
  return (
    <div className="history-card" >
      <h3 className="flex items-center" >
        <MdPayments className="mr-2" />
        <span>    
        Venta
        </span>
        </h3>
    </div>
  );
};

const NfTranferssHistorytCard = ({ cardData }) => {



  return (
   
    <div className="history-card" >
    <h3 className="flex items-center" >
  {avatar("okcd")}

        <BiTransfer className="mr-2" />
        <span>    
        Tranferencia
        </span>
        </h3>
    </div>

  );
};

const NftMintHistoryCard = () => {
  return (
    <div className="history-card" >
    <h3 className="flex items-center" >
        <MdOutlineGavel className="mr-2" />
        <span>    
        Acuñado
        </span>
        </h3>
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
