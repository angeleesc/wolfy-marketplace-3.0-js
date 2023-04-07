import React, { useState } from "react";
import WolfyModalLayoutReduxController from "../../../components/layout/WolfyModalLayoutReduxController";
import { closeModal, keyModalSate } from "../../../features/modals/modalsSlice";
import "./mint-modal.scss";
import { useWFileContex } from "../../../context/FileContex";
import MultimediaZone from "./MultimediaZone";
import WolfCheck from "../../../components/icons/WolfCheck";
import { useDispatch } from "react-redux";
import WolfSad from "../../../components/icons/WolfSad";
import WolfHappy from "../../../components/icons/WolfHappy";
import WolfTinking from "../../../components/icons/WolfTinking";
import { CircularProgress, circularProgressClasses } from "@mui/material";
import Check from "../../../components/icons/Check";
import { fromMatMinData } from "./constrollers/formatjson";
import { uploadFileToIpfs } from "../../../controllers/ipfsFileController";
import {
  aporveTransaction,
  getSymbol,
  getTokensIds,
  safeMint,
  safewMint,
} from "../../../controllers/ERC721Controllers";
import {
  readyToSell2,
  readyToSelltoken,
} from "../../../controllers/makertPlaceSmarContractControllers";
import MetamaskOficialLgo from "../../../components/icons/MetamaskOficialLgo";
import {
  checWaletConected,
  connetWalletMetamask,
  getWaletData,
} from "../../../controllers/Web3Controllers";

export default function MintModal() {
  const [stepProcess, setStepProcess] = useState(-3);
  const [ethereumStepProcess, setEthereumStepProcess] = useState(5);
  const [balance, setBalance] = useState(null);
  const [walletAccoutn, setWalletAccoutn] = useState(null);

  const fileContext = useWFileContex();
  const dispatch = useDispatch();

  const { metadataFile, ...rest } = fileContext.curentfile;

  const starMinpres = async () => {
    const dataformated = fromMatMinData(rest);
    // console.log(dataformated);
    console.log("opracion exitosa");
    setStepProcess(1);

    // obtenemos la url del archivo json de la metadata
    const ipfsUrlMetadata = await uploadFileToIpfs(metadataFile, dataformated);
    console.log(ipfsUrlMetadata.url);
    await safewMint(ipfsUrlMetadata.url);

    if (rest.isPutOnMarketplace === true) {
      console.log("se ponde en venta");
      await aporveTransaction();
      await readyToSell2(rest.nftPrice);
      setStepProcess(3);
      return;
    }

    console.log("no se pondra en venta");

    // if()
  };

  const conectMetamas = async () => {
    const isCenected = await connetWalletMetamask();
    if (isCenected) {
      const walletAccoutn = await getWaletData();
      setBalance(walletAccoutn.balance);
      setWalletAccoutn(walletAccoutn.addres);
    }
  };

  const init = async () => {
    // verificamos si esta coectado a una wallet ya sea metamask u otra

    let anyWaletConect = false;

    const isConectedMetamas = await checWaletConected();
    if (isConectedMetamas) {
      anyWaletConect = true;
    } else {
      anyWaletConect = false;
    }

    if(anyWaletConect){
      console.log("esta conectado a una walet")
    }else{
      console.log("")
    }

  };

  return (
    <WolfyModalLayoutReduxController modalController={keyModalSate.mintModal}>
      <div className="wolf-modal-body w-[100%] max-w-[560px] min-h-[40px]">
        {stepProcess === -3 && (
          <div className="wolf-mint-modal-header  ">
            <MultimediaZone file={metadataFile} />
            <div className="multimedia-content justify-center flex items-center flex-col">
              <h3 className="mb-[20px]">No esta conectado</h3>
              <span>
                Para realizar una operacion en la blochain es nesesario estar
                conectado a al waler
              </span>
            </div>
          </div>
        )}
        {stepProcess === -3 && (
          <div className="flex flex-col items-center justify-center mt-5">
            <button
              className="wolf-buttom flex w-[100%] wolf-btn-primary-2 my-2 "
              onClick={() => {
                // starMinpres();
                conectMetamas();
              }}
            >
              <MetamaskOficialLgo size={30} className="mx-[20px]" />{" "}
              <span> Conectar a metamask</span>
            </button>
            <button
              className="wolf-buttom w-[100%] wolf-btn-secondary-traparent border-[2px] my-2 border-wolf-gray-dark-800"
              onClick={() => {
                dispatch(
                  closeModal({
                    modal: keyModalSate.mintModal,
                  })
                );
              }}
            >
              Cancelar
            </button>
          </div>
        )}

        {stepProcess === 0 && (
          <div className="wolf-mint-modal-header">
            <MultimediaZone file={metadataFile} />
            <div className="multimedia-content">
              <h3>Todo esta listo</h3>
              <WolfCheck size={"120"} />
              <span>
                Todos los datos estan listo haz click en comenzar para hacer tu
                nueva nft
              </span>
            </div>
          </div>
        )}
        {stepProcess === 2 && (
          <div className="wolf-mint-modal-header">
            <MultimediaZone file={metadataFile} />
            <div className="multimedia-content">
              <h3>Oparacion Fallida</h3>
              {/* <WolfCheck size={"120"} /> */}
              <WolfSad size="120" />
              <span>
                Ha ocurrido un eero durante la oprecion de la creacion de la
                nft. que deseas
              </span>
            </div>
          </div>
        )}
        {stepProcess === 3 && (
          <div className="wolf-mint-modal-header">
            <MultimediaZone file={metadataFile} />
            <div className="multimedia-content">
              <h3>Oparacion Exitosa</h3>
              {/* <WolfCheck size={"120"} /> */}
              <WolfHappy size="120" />
              <span>Tu nft ha sido creada</span>
            </div>
          </div>
        )}
        {stepProcess === 0 && (
          <div className="flex justify-center mt-5">
            <button
              className="wolf-buttom w-[50%] wolf-btn-primary-2 mr-1"
              onClick={() => {
                starMinpres();
              }}
            >
              Comnezar
            </button>
            <button
              className="wolf-buttom w-[50%] wolf-btn-secondary-traparent ml-1 border-[2px]  border-wolf-gray-dark-800"
              onClick={() => {
                dispatch(
                  closeModal({
                    modal: keyModalSate.mintModal,
                  })
                );
              }}
            >
              Cancelar
            </button>
          </div>
        )}
        {stepProcess === 2 && (
          <div className="flex justify-center mt-5">
            <button
              className="wolf-buttom w-[50%] wolf-btn-primary-2 mr-1"
              onClick={() => {
                starMinpres();
              }}
            >
              intentar nuevamente
            </button>
            <button
              className="wolf-buttom w-[50%] wolf-btn-secondary-traparent ml-1 border-[2px]  border-wolf-gray-dark-800"
              onClick={() => {
                dispatch(
                  closeModal({
                    modal: keyModalSate.mintModal,
                  })
                );
              }}
            >
              Cancelar
            </button>
          </div>
        )}
        {stepProcess === 3 && (
          <div className="flex justify-center mt-5">
            <button
              className="wolf-buttom w-[50%] wolf-btn-primary-2 mr-1"
              onClick={() => {
                starMinpres();
              }}
            >
              Finalizar
            </button>
            <button
              className="wolf-buttom w-[50%] wolf-btn-secondary-traparent ml-1 border-[2px]  border-wolf-gray-dark-800"
              onClick={() => {
                dispatch(
                  closeModal({
                    modal: keyModalSate.mintModal,
                  })
                );
              }}
            >
              Hacer otra NFT
            </button>
          </div>
        )}
        {stepProcess === 1 && (
          <div className="wolf-mint-modal-procees">
            <div className="ethereum-procces-step-1">
              <MultimediaZone file={metadataFile} />
              <div className="progres-bar-box">
                <h3 className="absolute bottom-0">Cargando 50%</h3>

                <div className="progras-bar-content">
                  <WolfTinking size="60" />
                  <CircularProgress
                    variant="determinate"
                    size={120}
                    value={100}
                    sx={{
                      position: "absolute",
                      color: "#23272f",
                      backgroundColor: "#0c0d10",
                      borderRadius: "50%",
                    }}
                  />
                  <CircularProgress
                    size={120}
                    variant="determinate"
                    value={50}
                    sx={{
                      position: "absolute",
                      color: "#3B43DD",
                      borderRadius: "50%",
                      [`& .${circularProgressClasses.circle}`]: {
                        strokeLinecap: "round",
                      },
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="w-[100%] flex justify-between items-center mt-[20px]">
              <span className="text-[16px] font-semibold text-wolf-gray-light-1200">
                Creacion de la collecion
              </span>

              <div className="relative w-[30px] h-[30px] flex items-center justify-center ">
                <CircularProgress
                  sx={{
                    position: "absolute",
                    color: "#4e5667",
                    borderRadius: "50%",
                    [`& .${circularProgressClasses.circle}`]: {
                      strokeLinecap: "round",
                    },
                  }}
                  size={30}
                />
                <Check />
              </div>
            </div>
            <div className="w-[100%] flex justify-between items-center mt-[20px]">
              <span className="text-[16px] font-semibold text-wolf-gray-light-1200">
                Acuñando las nfts
              </span>

              <div className="relative w-[30px] h-[30px] flex items-center justify-center ">
                <CircularProgress
                  sx={{
                    position: "absolute",
                    color: "#4e5667",
                    borderRadius: "50%",
                    [`& .${circularProgressClasses.circle}`]: {
                      strokeLinecap: "round",
                    },
                  }}
                  size={30}
                />
                <Check />
              </div>
            </div>
            <div className="w-[100%] flex justify-between items-center mt-[20px]">
              <span className="text-[16px] font-semibold text-wolf-gray-light-1200">
                Aprobando la transacion
              </span>

              <div className="relative w-[30px] h-[30px] flex items-center justify-center ">
                <CircularProgress
                  sx={{
                    position: "absolute",
                    color: "#4e5667",
                    borderRadius: "50%",
                    [`& .${circularProgressClasses.circle}`]: {
                      strokeLinecap: "round",
                    },
                  }}
                  size={30}
                />
                <Check />
              </div>
            </div>
            <div className="w-[100%] flex justify-between items-center mt-[20px]">
              <span className="text-[16px] font-semibold text-wolf-gray-light-1200">
                Poniendolos en venta
              </span>

              <div className="relative w-[30px] h-[30px] flex items-center justify-center ">
                <CircularProgress
                  sx={{
                    position: "absolute",
                    color: "#4e5667",
                    borderRadius: "50%",
                    [`& .${circularProgressClasses.circle}`]: {
                      strokeLinecap: "round",
                    },
                  }}
                  size={30}
                />
                <Check />
              </div>
            </div>
          </div>
        )}
      </div>
    </WolfyModalLayoutReduxController>
  );
}
