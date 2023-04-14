import React from "react";
import "./walllet-card.scss";
import { WolfTooltipNotButton } from "../tooltip/WolfTooltipNotButton";
import WolfTooltip from "../tooltip/WolfTooltip";
import { staticRoutes } from "../../helpers/static-routes";
import { Link } from "react-router-dom";
import { isImageFormatCompatible } from "../../helpers/regEx";
import { defTye } from "../../helpers/global-constants";
import WolfIdentidcon from "../identicon/WolfIdentidcon";
import { Tooltip } from "@mui/material";

export default function WalletNftCard({ nft }) {
  // descubrimos el formto de la metadad

  // console.log(nft);

  const {
    collection,
    collectionName,
    thumbnails,
    nftName,
    nftType,
    colectionFace,
    tokenId,
  } = nft;
  // console.log(thumbnails[0].format);

  console.log(thumbnails[0].format);
  const fileType = defTye[thumbnails[0].format];
  console.log(fileType);

  return (
    <div className="nft-card-container">
      <div className="card-body wallet-card">
        <div className="multimedia-secction">
          {thumbnails &&
            (fileType ? (
              fileType === "image" ? (
                <img src={thumbnails[0].url} alt="miniatura" />
              ) : (
                <div>
                  <h3>Es un video</h3>
                </div>
              )
            ) : (
              <div>
                <h3>Formato desconocido</h3>
              </div>
            ))}

          <div className="wallet-colection-info">
            <div className="waller-nft-info">
              <div className="wallet-avatar-section">
                {/* {colectionFace ? <div></div> : <WolfIdentidcon size={42} />}
                 */}
                <WolfTooltip
                  title={
                    <div className="tooltip-box">
                      <span className="text-wolf-gray-light-1200">
                        Colection :
                      </span>
                      <h3 className="text-[14px] text-wolf-gray-light-1700 font-semibold ">
                        {collectionName
                          ? collectionName
                          : `${collection.substr(0, 5)}...${collection.substr(
                              -4
                            )}`}
                      </h3>
                    </div>
                  }
                  placement="top"
                  arrow
                >
                  <button className="colleciotn-b">
                    {colectionFace ? <div></div> : <WolfIdentidcon size={42} />}
                  </button>
                </WolfTooltip>
              </div>
              <span>Nft {nftType && nftType}</span>
              <h3>{nftName ? nftName : "Desconocido"}</h3>

              {tokenId && (
                <div className="token-id">
                  <span>{tokenId}</span>
                </div>
              )}
            </div>
          </div>

          <div className="button-zone">
            <div className="flex  flex-col justify-center absolute top-[0px] w-[100%] h-[205px] px-[20px]">
              <button className="wolf-buttom wolf-btn-primary-2 my-[10px]">
                Poner en la Marketplace
              </button>
              <button className="wolf-buttom wolf-btn-primary-2 my-[10px]">
                Ver Detarlle de la nft
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
