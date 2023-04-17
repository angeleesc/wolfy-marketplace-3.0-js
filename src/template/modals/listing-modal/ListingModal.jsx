import React, { useState } from "react";
import WolfyModalLayoutReduxController from "../../../components/layout/WolfyModalLayoutReduxController";
import { closeModal, keyModalSate } from "../../../features/modals/modalsSlice";
import { useDispatch, useSelector } from "react-redux";
import { readyTosell3 } from "../../../controllers/makertPlaceSmarContractControllers";
import { saleMethod, smartContracts } from "../../../helpers/global-constants";
import wondering from "../../../static-images/wondering.png";
import "./.lidting-modal.scss";
import OptimismOficialLogo from "../../../components/icons/OptimismOficialLogo";
import MetamaskOficialLgo from "../../../components/icons/MetamaskOficialLgo";
import { Controller, useForm } from "react-hook-form";
import TextFieldInputGroup from "../../../components/form-controls/inputs/TextFieldInputGroup";
import { preventScroll } from "../../../controllers/domController";
import TagBlack from "../../../components/icons/TagBlack";
import ClockBlack from "../../../components/icons/ClockBlack";

export default function ListingModal() {
  const [stepProccess, setStepProccess] = useState(1);

  const modalData = useSelector(
    (state) => state.modals.listingModal.dataToProccess
  );

  console.log(modalData);

  const { contaract, tokenId, nftType, nftName, thumbnails } = modalData;
  const {
    reset,
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      salesMethod: saleMethod.sales,
    },
  });

  const saleMethodWacth = watch("salesMethod");

  const dispatch = useDispatch();

  const goToSell = async () => {
    const result = await readyTosell3(
      [tokenId],
      "0.0004",
      smartContracts.ERC721UUPS
    );
    console.log("operacion exitoxa listing modadl");
  };

  const onSubmit = async (data) => {
    console.log(data);
  };

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
                    para hacel la operacion es nesecatio tene un servicio de
                    wallet asociado
                  </span>
                  <span>que deseas hacer</span>

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

              {stepProccess === -4 && (
                <>
                  <h4>No tiene estas conectado a una Walllet</h4>
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
                      <span>Conectar metamas</span>
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

              {stepProccess === -3 && (
                <>
                  <h4>No tiene estas En la blochain correcta</h4>
                  <span>
                    para poner en venta la wallet debe estar en la mima
                    blockchain donde se encuentra la nft
                  </span>
                  <span>Que deseas hacer</span>
                  <div>
                    <button
                      className="wolf-buttom wolf-btn-primary-2 w-[100%] flex justify-center"
                      onClick={() => {
                        window.open("https://metamask.io/");
                      }}
                    >
                      <span>Cambiar de Blockchain</span>
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

              {stepProccess === -2 && (
                <>
                  <h4>No tiene estas En la blockhain correcta</h4>
                  <span>
                    para poner en venta la wallet debe estar en la mima
                    blockchain donde se encuentra la nft
                  </span>
                  <span>Que deseas hacer</span>
                  <div>
                    <button
                      className="wolf-buttom wolf-btn-primary-2 w-[100%] flex justify-center"
                      onClick={() => {
                        window.open("https://metamask.io/");
                      }}
                    >
                      <span>Cambiar de Blockchain</span>
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
              {stepProccess === -1 && (
                <>
                  <h4>La blockchain no esta registrada en la wallet</h4>
                  <span>
                    es nesesario tener la blockchain asociada a la nfts al la
                    wallet para hacer la operacion
                  </span>
                  <span>Que deseas hacer</span>
                  <div>
                    <button
                      className="wolf-buttom wolf-btn-primary-2 w-[100%] flex justify-center"
                      onClick={() => {
                        window.open("https://metamask.io/");
                      }}
                    >
                      Agregar la Blockchain
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
              {stepProccess === 0 && (
                <>
                  <h4>Fondo insufuciente</h4>
                  <span>
                    no tiene los fondos nesesario para hace la operacio
                  </span>
                  <span>Que deseas hacer</span>
                  <div>
                    <button
                      className="wolf-buttom wolf-btn-primary-2 w-[100%] flex justify-center"
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
              {stepProccess === 1 && (
                <>
                  <h4>Datos para la venta</h4>
                  <form className="wolf-form">
                    <div className="wolft-form-control-label mb-[10px]">
                      <span>Metodo de operacion</span>
                    </div>

                    <Controller
                      control={control}
                      name="salesMethod"
                      render={({ field: { onChange, value: lValue } }) => {
                        return (
                          <div className="grid grid-cols-2">
                            <button
                              className="boton-group-box "
                              type="button"
                              onClick={() => {
                                onChange(saleMethod.sales);
                              }}
                            >
                              <div
                                className={`botom-group-body ${
                                  lValue === saleMethod.sales &&
                                  "boton-box-active"
                                }`}
                              >
                                <h4>Precio fijo</h4>
                                <TagBlack />
                              </div>
                            </button>
                            {/* <button
                              className="boton-group-box"
                              type="button"
                              onClick={() => {
                                onChange(saleMethod.auction);
                              }}
                            >
                              <div
                                className={`botom-group-body ${
                                  lValue === saleMethod.auction &&
                                  "boton-box-active"
                                }  `}
                              >
                                <h4>Subasta</h4>
                                <ClockBlack />
                              </div>
                            </button> */}
                          </div>
                        );
                      }}
                    />

                    <TextFieldInputGroup
                      textLabel={
                        saleMethodWacth === saleMethod.auction
                          ? "Puja Minima *"
                          : "Precio *"
                      }
                      info={"Colloca el precio establecido"}
                      register={register("nftPrice")}
                      type="number"
                      step="0.00000001"
                      onWheel={preventScroll}
                      placeholder="Ej 0.05"
                      errorMessage={
                        errors.nftPrice ? errors.nftPrice.message : ""
                      }
                    />
                  </form>

                  <div>
                    <button
                      className="wolf-buttom wolf-btn-primary-2 w-[100%] flex justify-center"
                      onClick={() => {
                        window.open("https://metamask.io/");
                      }}
                    >
                      Poner a la venta
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

          {/* <button className="" onClick={goToSell}>
            poner en venta
          </button> */}
        </div>
      )}
    </WolfyModalLayoutReduxController>
  );
}
