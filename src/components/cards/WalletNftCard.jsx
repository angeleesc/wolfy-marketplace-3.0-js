import React from "react";
import "./walllet-card.scss";
import { WolfTooltipNotButton } from "../tooltip/WolfTooltipNotButton";
import WolfTooltip from "../tooltip/WolfTooltip";
import { staticRoutes } from "../../helpers/static-routes";
import { Link, useNavigate } from "react-router-dom";
import { isImageFormatCompatible } from "../../helpers/regEx";
import { defTye } from "../../helpers/global-constants";
import WolfIdentidcon from "../identicon/WolfIdentidcon";
import { Tooltip } from "@mui/material";
import { useDispatch } from "react-redux";
import { keyModalSate, openModal } from "../../features/modals/modalsSlice";
import { TbFileDatabase } from "react-icons/tb";
import OptimismOficialLogo from "../icons/OptimismOficialLogo";

export default function WalletNftCard({ nft }) {
  // descubrimos el formto de la metadad

  // console.log(nft);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // console.log(nft);

  const {
    collection,
    collectionName,
    thumbnails,
    nftName,
    nftType,
    colectionFace,
    chainId,
    tokenId,
    blockChainNetowork,
  } = nft;
  // console.log(thumbnails[0].format);

  // console.log(thumbnails[0]);

  // console.log(thumbnails[0].format);
  // const fileType = defTye[thumbnails[0].format];
  // // console.log(fileType);

  return (
    <div className="nft-card-container">
      <div className="card-body wallet-card">
        <div className="multimedia-secction">
          {thumbnails && <img src={thumbnails[0].url} alt="miniatura" />}

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
                  <button
                    className="colleciotn-b"
                    onClick={() => {
                      navigate(staticRoutes.colectionInfoData(collection));
                    }}
                  >
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
              <button
                className="wolf-buttom wolf-btn-primary-2 my-[10px]"
                onClick={() => {
                  dispatch(
                    openModal({
                      modal: keyModalSate.listingModal,
                      data: {
                        contaract: collection,
                        tokenId,
                        nftType,
                        nftName,
                        chainId,
                        blockChainNetowork,
                        ...(thumbnails
                          ? { thumbnails: thumbnails[0].url }
                          : {}),
                      },
                    })
                  ); // dispatch(=)
                }}
              >
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
