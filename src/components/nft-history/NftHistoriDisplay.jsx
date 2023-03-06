import React from "react";
import { historyType } from "../../helpers/global-constants";
import { IoPricetag } from "react-icons/io5";
import { MdOutlineGavel, MdPayments } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { MdAccessTime } from "react-icons/md";

import "./nft-history.scss";
import WolfIdentidcon from "../identicon/WolfIdentidcon";

const NftListingHistoryCard = ({ cardData }) => {
  // console.log(cardData)

  const { seller, time, quantity, sellerName, sellerAvatar } = cardData;
  const timeAgo = formatDistanceToNow(time);

  return (
    <div className="history-card">
      <h3 className="flex items-center justify-between w-[100%]">
        <div className="flex items-center">
          <IoPricetag className="mr-2" /> <span>Listado</span>
        </div>
        <div className="flex">
          <span>{quantity}</span> <span className="ml-2">ETH</span>
        </div>
      </h3>
      <div className="w-[100%] flex justify-between">
        <span className="flex items-center text-wolf-gray-light-500 text-[12px]">
          <MdAccessTime className="mr-1" />
          {timeAgo}
        </span>
        <span className="text-wolf-gray-light-500 text-[12px]">80.25 USD</span>
      </div>
      <div className="w-[100%] h-[1px] bg-wolf-gray-dark-800 mt-2"></div>
      <div className="flex justify-between">
        <div className="flex mt-2 items-center">
          <WolfIdentidcon />
          <div className="ml-2">
            <span className="text-[12px] text-wolf-gray-light-1000">
              Vendedor
            </span>
            <h4 className="text-[14px] text-wolf-gray-light-1500 font-semibold">
              {sellerName
                ? sellerName
                : `${seller.substring(0, 5)}...${seller.substr(-5)}`}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

const NftSellHistoryCard = ({ cardData }) => {
  const {
    seller,
    sellerName,
    buyer,
    buyerName,
    sellerAvatar,
    buyerAvatar,
    price,
    time,
  } = cardData;
  const timeAgo = formatDistanceToNow(time);

  return (
    <div className="history-card">
      <h3 className="flex items-center justify-between w-[100%]">
        <div className="flex items-center">
          <MdPayments className="mr-2" />
          <span>Venta</span>
        </div>
        <div className="flex">
          <span>{price}</span> <span className="ml-2">ETH</span>
        </div>
      </h3>
      <div className="w-[100%] flex justify-between">
        <span className="flex items-center text-wolf-gray-light-500 text-[12px]">
          <MdAccessTime className="mr-1" />
          {timeAgo}
        </span>
        <span className="text-wolf-gray-light-500 text-[12px]">80.25 USD</span>
      </div>
      <div className="w-[100%] h-[1px] bg-wolf-gray-dark-800 mt-2"></div>
      <div className="flex justify-between">
        <div className="flex mt-2 items-center">
          <WolfIdentidcon />
          <div className="ml-2">
            <span className="text-[12px] text-wolf-gray-light-1000">
              Vendedor
            </span>
            <h4 className="text-[14px] text-wolf-gray-light-1500 font-semibold">
              {sellerName
                ? sellerName
                : `${seller.substring(0, 5)}...${seller.substr(-5)}`}
            </h4>
          </div>
        </div>
        <div className="flex mt-2 items-center">
          <WolfIdentidcon />
          <div className="ml-2">
            <span className="text-[12px] text-wolf-gray-light-1000">
              Comprador
            </span>
            <h4 className="text-[14px] text-wolf-gray-light-1500 font-semibold">
              {buyerName
                ? buyerName
                : `${buyer.substring(0, 5)}...${buyer.substr(-5)}`}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

const NfTranferssHistorytCard = ({ cardData }) => {
  // const Avatar = avatar("angel-xd");

  const {
    seller,
    sellerName,
    sllerAvatar,
    buyer,
    buyerName,
    buyerAvatar,
    time,
    quantity,
  } = cardData;

  const timeAgo = formatDistanceToNow(time);

  return (
    <div className="history-card">
      <h3 className="flex items-center justify-between w-[100%]">
        <div className="flex items-center">
          <BiTransfer className="mr-2" />
          <span>Tranferencia</span>
        </div>
        {quantity && (
          <div className="flex">
            <span>{quantity}</span> <span className="ml-2">ETH</span>
          </div>
        )}
      </h3>
      <div className="w-[100%] flex justify-between">
        <span className="flex items-center text-wolf-gray-light-500 text-[12px]">
          <MdAccessTime className="mr-1" />
          {timeAgo}
        </span>
        {quantity && (
          <span className="text-wolf-gray-light-500 text-[12px]">
            80.25 USD
          </span>
        )}
      </div>
      <div className="w-[100%] h-[1px] bg-wolf-gray-dark-800 mt-2"></div>
      <div className="flex justify-between"></div>
      <div className="flex justify-between">
        <div className="flex mt-2 items-center">
          <WolfIdentidcon />
          <div className="ml-2">
            <span className="text-[12px] text-wolf-gray-light-1000">
              Vendedor
            </span>
            <h4 className="text-[14px] text-wolf-gray-light-1500 font-semibold">
              {sellerName
                ? sellerName
                : `${seller.substring(0, 5)}...${seller.substr(-5)}`}
            </h4>
          </div>
        </div>
        <div className="flex mt-2 items-center">
          <WolfIdentidcon />
          <div className="ml-2">
            <span className="text-[12px] text-wolf-gray-light-1000">
              Comprador
            </span>
            <h4 className="text-[14px] text-wolf-gray-light-1500 font-semibold">
              {buyerName
                ? buyerName
                : `${buyer.substring(0, 5)}...${buyer.substr(-5)}`}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

const NftMintHistoryCard = ({ cardData }) => {
  const { author, time, quantity, authorName } = cardData;

  const timeAgo = formatDistanceToNow(time);

  return (
    <div className="history-card">
      <h3 className="flex items-center justify-between w-[100%]">
        <div className="flex items-center">
          <MdOutlineGavel className="mr-2" />
          <span>Acuñado</span>
        </div>
        {quantity && (
          <div className="flex">
            <span>{quantity}</span> <span className="ml-2">ETH</span>
          </div>
        )}
      </h3>
      <div className="w-[100%] flex justify-between">
        <span className="flex items-center text-wolf-gray-light-500 text-[12px]">
          <MdAccessTime className="mr-1" />
          {timeAgo}
        </span>
        {quantity && (
          <span className="text-wolf-gray-light-500 text-[12px]">
            80.25 USD
          </span>
        )}
      </div>
      <div className="w-[100%] h-[1px] bg-wolf-gray-dark-800 mt-2"></div>
      <div className="flex mt-2 items-center">
        <WolfIdentidcon />
        <div className="ml-2">
          <span className="text-[12px] text-wolf-gray-light-1000">Autor</span>
          <h4 className="text-[14px] text-wolf-gray-light-1500 font-semibold">
            {authorName
              ? authorName
              : `${author.substring(0, 5)}...${author.substr(-5)}`}
          </h4>
        </div>
      </div>
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
        return <DefCard cardData={nft} key={"nft-history-" + i} />;
      })}
    </div>
  );
}
