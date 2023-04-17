import React, { useState } from "react";
import WolfyModalLayoutReduxController from "../../../components/layout/WolfyModalLayoutReduxController";
import { closeModal, keyModalSate } from "../../../features/modals/modalsSlice";
import { useDispatch, useSelector } from "react-redux";
import { readyTosell3 } from "../../../controllers/makertPlaceSmarContractControllers";
import { smartContracts } from "../../../helpers/global-constants";
import wondering from "../../../static-images/wondering.png";
import "./.lidting-modal.scss";
import OptimismOficialLogo from "../../../components/icons/OptimismOficialLogo";
import MetamaskOficialLgo from "../../../components/icons/MetamaskOficialLgo";

export default function ListingModal() {
  const [stepProccess, setStepProccess] = useState(-5);

  const modalData = useSelector(
    (state) => state.modals.listingModal.dataToProccess
  );

  console.log(modalData);

  const { contaract, tokenId, nftType, nftName, thumbnails } = modalData;

  const dispatch = useDispatch();

  const goToSell = async () => {
    const result = await readyTosell3(
      [tokenId],
      "0.0004",
      smartContracts.ERC721UUPS
    );
    console.log("operacion exitoxa listing modadl");
  };

  {
  }
  // ventana para verificar si tiene metamas instalado
  // ventana para verificar si esta en la blockchain de la nmft corrrecta
  // ventana para verificar si tiene la blochain resgistrada en sun wallet
  // ventana para verifica si tiene balance suficiente para hacer la transacion por ahora cero

  return (
    <WolfyModalLayoutReduxController
      modalController={keyModalSate.listingModal}
    >
      {modalData && (
        <div className="wolf-modal-body w-[100%] max-w-[560px] min-h-[40px]">
          <div className="listing-modal-body">
            <div className="listing-modal-header">
              <h3>Poner a la venta</h3>

              <div className="flex items-center">
                <div className="multimedia-zone relative">
                  <div className="blockChain-logo">
                    <OptimismOficialLogo size="25" />
                  </div>
                  {thumbnails ? (
                    <img src={thumbnails} alt="thunails-nft" />
                  ) : (
                    <div className="not-image">
                      <img
                        src={wondering}
                        alt="not-image"
                        className=" wondering"
                      />
                      <h4>Formato desconocido</h4>
                    </div>
                  )}
                </div>
                <div className="info-section">
                  <h4>Datos de la nft</h4>
                  <p>
                    <span>Nombre</span> {nftName}{" "}
                  </p>
                  <p>
                    <span>Tipo De nft</span> {nftType}{" "}
                  </p>
                  {/* <p>
                    <span>Colection</span>{" "}
                    {contaract.substring(0, 5) +
                      "..." +
                      contaract.substring(-5)}{" "}
                  </p> */}
                </div>
              </div>
            </div>
            <div className="listing-modal-content">
              {stepProccess === -5 && (
                <>
                  <h4>No tiene una wallet para hacer la transacion</h4>
                  <span>
                    Para porder poner esta nft a la venta es nesesatio tene una
                    wallet
                  </span>
                  <span>Que deseas hacer</span>
                  <div>
                    <button
                      className="wolf-buttom wolf-btn-primary-2 w-[100%] flex justify-center"
                      onClick={() => {
                        window.open("https://metamask.io/");
                      }}
                    >
                      <span className="pr-[15px] block">
                        <MetamaskOficialLgo size={"20"} />
                      </span>
                      <span>Instalar metamas (recomendado)</span>
                    </button>
                    <button
                      className="wolf-buttom wolf-btn-secondary-traparent mt-3 text-center w-[100%]"
                      onClick={() => {
                        dispatch(
                          closeModal({
                            modal: keyModalSate.listingModal,
                          })
                        );
                      }}
                    >
                      Cancelar
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          <button className="" onClick={goToSell}>
            poner en venta
          </button>
        </div>
      )}
    </WolfyModalLayoutReduxController>
  );
}
