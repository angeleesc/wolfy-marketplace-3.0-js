import React, { useEffect, useState } from "react";
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
import {
  CircularProgress,
  circularProgressClasses,
  duration,
} from "@mui/material";
import Check from "../../../components/icons/Check";
import { fromMatMinData } from "./constrollers/formatjson";
import { uploadFileToIpfs } from "../../../controllers/ipfsFileController";
import { hoursToSeconds, minutesToSeconds } from "date-fns";
import {
  aporveTransaction,
  getEstimateGasMint,
  getLasNtokenId,
  getTokensIds,
  safeMint,
  safeMintBatch,
} from "../../../controllers/ERC721Controllers";
import {
  goToSell,
  readyToSell2,
  readyToSelltoken,
} from "../../../controllers/makertPlaceSmarContractControllers";
import MetamaskOficialLgo from "../../../components/icons/MetamaskOficialLgo";
import {
  addNewBlockChainNetWork,
  changeBlochainNetworkMetamas,
  checWaletConected,
  checkCorrertBlockchain,
  connetWalletMetamask,
  getWaletData,
} from "../../../controllers/Web3Controllers";
import {
  saleMethod,
  smartContracts,
  stateProcessMint,
} from "../../../helpers/global-constants";
import Fail from "../../../components/icons/Fail";
import { retardante } from "../../../controllers/domController";
import { goToAuctionHttp } from "../../../controllers/auctionControllers";

export default function MintModal() {
  const [stepProcess, setStepProcess] = useState(-5);
  const [balance, setBalance] = useState(null);
  const [walletAccoutn, setWalletAccoutn] = useState(null);

  // estados del ethereum step

  const [stepFileUpload, setstepFileUpload] = useState(true);
  const [fileProgres, setFileProgres] = useState(0);

  const [stepCreateColletion, setStepCreateCollection] = useState(false);
  const [stepCreateCollectionStatus, setStepCreateCollectionStatus] = useState(
    stateProcessMint.checking
  );

  const [stepSafeMint, setStepSafeMint] = useState(false);
  const [stepSafeMintSatus, setStepSafeMintSatus] = useState(
    stateProcessMint.checking
  );

  const [stepAproveTransaction, setStepAproveTransaction] = useState(false);
  const [stepAprovetransactionStatus, setstepAprovetransactionStatus] =
    useState(stateProcessMint.checking);

  const [stepListinMakePlace, setStepListinMakePlace] = useState(false);
  const [stepListingStatus, setStepListingStatus] = useState(
    stateProcessMint.checking
  );

  const fileContext = useWFileContex();
  const dispatch = useDispatch();

  const { metadataFile, ...rest } = fileContext.curentfile;

  const updateMintStatusMint = (value) => {
    setStepSafeMintSatus(value);
  };

  const updateAprovetransactionStatus = (value) => {
    setstepAprovetransactionStatus(value);
  };

  const updateListingStatus = (value) => {
    setStepListingStatus(value);
  };

  const starMinpres = async () => {
    const dataformated = fromMatMinData(rest);
    // console.log(dataformated);
    console.log("opracion exitosa");
    setStepProcess(1);

    // obtenemos la url del archivo json de la metadata
    const ipfsUrlMetadata = await uploadFileToIpfs(
      metadataFile,
      dataformated,
      setFileProgres
    );

    if (!ipfsUrlMetadata.isSucces) {
      setStepProcess(2);
      return;
    }
    setStepSafeMint(true);

    const metadatas = [];

    for (let i = 0; i < Number(rest.amount); i++) {
      metadatas.push(ipfsUrlMetadata.url);
    }

    const mintResult = await safeMintBatch(metadatas);
    if (!mintResult.isSucces) {
      updateMintStatusMint(stateProcessMint.fail);
      setStepProcess(2);
      return;
    }

    const tokensIds = await getLasNtokenId(Number(rest.amount));
    console.log("tokens id obtenidos");
    console.log(tokensIds);
    updateMintStatusMint(stateProcessMint.success);

    if (rest.isPutOnMarketplace === true) {
      // const aproveResult = await aporveTransaction();
      // const res = await goToSell(tokensIds, rest.nftPrice);

      if (rest.salesMethod === saleMethod.sales) {
        console.log("se pondra a la venta");

        const aproveResult = await aporveTransaction(smartContracts.market);
        const res = await goToSell(tokensIds, rest.nftPrice);
      } else if (rest.salesMethod === saleMethod.auction) {
        console.log("se pondra en subasta");

        const sHours = hoursToSeconds(Number(rest.auctionHours));
        const sDays = hoursToSeconds(Number(rest.auctionDays) * 24);
        const sMinutes = minutesToSeconds(Number(rest.auctionMinutes));

        const duration = sHours + sDays + sMinutes;

        console.log(duration);

        const aproveResult = await aporveTransaction(smartContracts.Auction);
        const res = await goToAuctionHttp(
          smartContracts.ERC721UUPS,
          tokensIds,
          rest.nftPrice,
          duration
        );
      }
    }

    setStepProcess(3);
  };

  const conectMetamas = async () => {
    const isCenected = await connetWalletMetamask();
    if (isCenected) {
      const walletAccoutn = await getWaletData();
      setBalance(walletAccoutn.balance);
      setWalletAccoutn(walletAccoutn.addres);

      if (walletAccoutn.balance <= 0) {
        setStepProcess(-2);
        return;
      }

      setStepProcess(0);
      return;
    }

    setStepProcess(2);
  };

  const init = async () => {
    let anyWaletConect = false;
    let haveEnoughBalance = false;

    console.log(rest);

    const isConectedMetamas = await checWaletConected();
    if (isConectedMetamas) anyWaletConect = true;

    if (!anyWaletConect) {
      console.log("esta conectado a una walet");
      setStepProcess(-3);
      return;
    }
    const chainId = Number(rest.chainId);
    console.log(chainId);
    const isCorrectBlockchain = await checkCorrertBlockchain(chainId);
    if (!isCorrectBlockchain) {
      console.log("estas en la blockchain incorrecta");
      setStepProcess(-1);
      return;
    }

    if (isConectedMetamas) {
      const walletData = await getWaletData();

      if (walletData.balance <= 0) {
        console.log("no tienes saldo suficiente");
        setStepProcess(-2);
        return;
      }

      // verificamos si esta en la blockchain corecta

      setStepProcess(0);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <WolfyModalLayoutReduxController modalController={keyModalSate.mintModal}>
      <div className="wolf-modal-body w-[100%] max-w-[560px] min-h-[40px]">
        {stepProcess === -5 && (
          <>
            <div className="wolf-mint-modal-header  ">
              <MultimediaZone file={metadataFile} />
              <div className="multimedia-content justify-center flex items-center flex-col">
                <h3 className="mb-[20px] text-center">
                  La blockChain nop esta en su billetera
                </h3>
                <span className="p-2">
                  Para realizar una operacion en la blochain es nesesario tener
                  la blockchain en su billetera
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-5">
              <button
                className="wolf-buttom flex w-[100%] justify-center wolf-btn-primary-2 my-2 "
                onClick={async () => {
                  try {
                    await addNewBlockChainNetWork();
                    init();
                  } catch (error) {
                    setStepProcess(-6);
                  }
                }}
              >
                <span>Agregar la blockchain</span>
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
          </>
        )}

        {stepProcess === -4 && (
          <div className="wolf-mint-modal-header  ">
            <MultimediaZone file={metadataFile} />
            <div className="multimedia-content justify-center flex items-center flex-col">
              <h3 className="mb-[20px]">Cargando</h3>
              <span>
                Estamos verificando si tienes los datos correcto para realizar
                la operacion
              </span>
            </div>
          </div>
        )}
        {stepProcess === -3 && (
          <div className="wolf-mint-modal-header  ">
            <MultimediaZone file={metadataFile} />
            <div className="multimedia-content justify-center flex items-center flex-col">
              <h3 className="mb-[20px]">No esta conectado</h3>
              <span>
                Para realizar una operacion en la blochain es nesesario estar
                conectado a al wallet
              </span>
            </div>
          </div>
        )}
        {stepProcess === -1 && (
          <>
            <div className="wolf-mint-modal-header  ">
              <MultimediaZone file={metadataFile} />
              <div className="multimedia-content justify-center flex items-center flex-col">
                <h3 className="mb-[20px] text-center">
                  No esta En la blockchain correcta
                </h3>
                <span className="p-2">
                  Para realizar una operacion en la blochain es nesesario estar
                  en la misma blockchain
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-5">
              <button
                className="wolf-buttom flex w-[100%] justify-center wolf-btn-primary-2 my-2 "
                onClick={async () => {
                  try {
                  const isSucces =   await changeBlochainNetworkMetamas();

                  if(!isSucces) throw new Error("No existe la blockchain")

                    init();
                  } catch (error) {
                    setStepProcess(-5);
                  }
                }}
              >
                <span> Cambiar de blockchain</span>
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
          </>
        )}

        {stepProcess === -2 && (
          <div className="wolf-mint-modal-header  ">
            <MultimediaZone file={metadataFile} />
            <div className="multimedia-content justify-center flex items-center flex-col">
              <h3 className="mb-[20px]">Saldo insuficiente</h3>
              <span>
                Para realizar una operacion en la blochain es nesesario tener el
                saldo suficiente para realizar la transacion
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

        {stepProcess === -2 && (
          <div className="flex flex-col items-center justify-center mt-5">
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
              <h3>Operacion Exitosa</h3>
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
                dispatch(
                  closeModal({
                    modal: keyModalSate.mintModal,
                  })
                );
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
                <h3 className="absolute bottom-0">Cargando {fileProgres}%</h3>

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
                    value={fileProgres}
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
            {/* <div className="w-[100%] h-[30px] flex justify-between items-center mt-[20px]">
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
            </div> */}
            <div className="w-[100%] h-[30px] flex justify-between items-center mt-[20px]">
              <span className="text-[16px] font-semibold text-wolf-gray-light-1200">
                Acuñando las nfts
              </span>
              {stepSafeMint && (
                <div className="relative w-[30px] h-[30px] flex items-center justify-center ">
                  {stepSafeMintSatus === stateProcessMint.checking && (
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
                  )}
                  {stepSafeMintSatus === stateProcessMint.success && (
                    <div className="absolute">
                      <Check />
                    </div>
                  )}
                  {stepSafeMintSatus === stateProcessMint.fail && (
                    <div className="absolute">
                      <Fail />
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="w-[100%] h-[30px] flex justify-between items-center mt-[20px]">
              <span className="text-[16px] font-semibold text-wolf-gray-light-1200">
                Aprobando la transacion
              </span>

              {stepAproveTransaction && (
                <div className="relative w-[30px] h-[30px] flex items-center justify-center ">
                  {stepAprovetransactionStatus ===
                    stateProcessMint.checking && (
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
                  )}
                  {stepAprovetransactionStatus === stateProcessMint.success && (
                    <div className="absolute">
                      <Check />
                    </div>
                  )}
                  {stepAprovetransactionStatus === stateProcessMint.fail && (
                    <div className="absolute">
                      <Fail />
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="w-[100%] h-[30px] flex justify-between items-center mt-[20px]">
              <span className="text-[16px] font-semibold text-wolf-gray-light-1200">
                Poniendolos en venta
              </span>

              {stepListinMakePlace && (
                <div className="relative w-[30px] h-[30px] flex items-center justify-center ">
                  {stepListingStatus === stateProcessMint.checking && (
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
                  )}

                  {stepListingStatus === stateProcessMint.success && (
                    <div className="absolute">
                      <Check />
                    </div>
                  )}

                  {stepListingStatus === stateProcessMint.fail && (
                    <div className="absolute">
                      <Fail />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </WolfyModalLayoutReduxController>
  );
}
