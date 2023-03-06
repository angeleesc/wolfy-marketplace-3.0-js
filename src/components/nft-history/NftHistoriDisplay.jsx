import React from "react";
import { historyType } from "../../helpers/global-constants";

import { IoPricetag } from "react-icons/io5";
import { MdOutlineGavel, MdPayments } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import avatar from "gradient-avatar";

import "./nft-history.scss";
import gradientAvatar from "gradient-avatar";
import Avatar from "boring-avatars";

const NftListingHistoryCard = ({ cardData }) => {
  return (
    <div className="history-card">
      <h3 className="flex items-center">
        {" "}
        <IoPricetag className="mr-2" /> <span>Listado</span>
      </h3>
    </div>
  );
};

const NftSellHistoryCard = ({ cardData }) => {
  return (
    <div className="history-card">
      <h3 className="flex items-center">
        <MdPayments className="mr-2" />
        <span>Venta</span>
      </h3>
    </div>
  );
};

const NfTranferssHistorytCard = ({ cardData }) => {
  // const Avatar = avatar("angel-xd");

  return (
    <div className="history-card">
      <h3 className="flex items-center">
        {/* <img src="https://storage.googleapis.com/histories/hola.svg" alt="" /> */}


        <BiTransfer className="mr-2" />
        <span>Tranferencia</span>
        <div className="flex" >
          <Avatar
            size={40}
            name="0x346fdA7625E527015B215F8Bff36d8805b709BBA"
            variant="beam"
            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          />
        </div>
      </h3>
    </div>
  );
};

const NftMintHistoryCard = () => {
  return (
    <div className="history-card">
      <h3 className="flex items-center">
        <MdOutlineGavel className="mr-2" />
        <span>Acuñado</span>
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
        const DefCard = preHistoryCardsList[nft.type];
        return <DefCard cardData={nft} />;
      })}
    </div>
  );
}
