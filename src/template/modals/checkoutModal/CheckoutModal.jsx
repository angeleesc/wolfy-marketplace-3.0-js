import React, { useState } from "react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import WTextFields from "../../../components/form-controls/inputs/WTextFields";
import PolygonOficialLogo from "../../../components/icons/PolygonOficialLogo";
import WolfyModalLayoutReduxController from "../../../components/layout/WolfyModalLayoutReduxController";
import { preventScroll } from "../../../controllers/domController";
import { keyModalSate } from "../../../features/modals/modalsSlice";
import { blockchainNetwork } from "../../../helpers/global-constants";
import { MdOutlineAddCircle, MdOutlineRemoveCircle } from "react-icons/md";
import { useForm, Controller } from "react-hook-form";
import { closeModal } from "../../../features/modals/modalsSlice";
import "./checkout-modal.scss";
import { Skeleton } from "@mui/material";
import WolfSad from "../../../components/icons/WolfSad";
import WolfHappy from "../../../components/icons/WolfHappy";

export default function CheckoutModal() {
  const [stepProcces, setStepProcces] = useState(0);
  // const [cuantityCounter, setCuantityCounter] = useState(0)
  const [isReadMode, setIsReadMode] = useState(true);
  const dispatch = useDispatch();

  // CONFIGURACION DE REACT HOOK FORM

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      cuantity: 0,
      bid: 0,
    },
  });

  // CONFIGURACION DE ESTADO GLOBAL DE REDUX

  const modalData = useSelector(
    (state) => state.modals.checkoutModal.dataToProccess
  );

  console.log(modalData)



  const BlockChainIcon = useMemo(() => {
    const blockChainIncon = {
      [blockchainNetwork.polygon]: PolygonOficialLogo,
    };

    return blockChainIncon[blockchainNetwork.polygon];
  }, []);

  // funcion del checkout

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <WolfyModalLayoutReduxController
      modalController={keyModalSate.checkoutModal}
    >
      {
        // caso cuando esta todos los datos en ordenr
        modalData && (
          <div className="wolf-modal-body w-[100%] max-w-[560px] min-h-[40px]">
            <h2 className="title mb-[10px]">Checkout</h2>

            {stepProcces <= 0 && (
              <div className="thumbnails-nfts">
                <div className="multimedia-zone">
                  <img src={modalData.nftCover} alt="checkout-nft-cover" />
                </div>
                <div className="price-zone">
                  <div className="price-zone-item">
                    <span className="key">Nombre :</span>
                    <span className="value">La nft xd</span>
                  </div>
                  <div className="price-zone-item">
                    <span className="key">Disponible :</span>
                    <span className="value">1</span>
                  </div>
                </div>
              </div>
            )}

            {stepProcces <= 0 && (
              <div className="wallet-section">
                <div></div>
                <div className="flex items-center">
                  <div className="wolf-blockchain-logo">
                    <div className="uncenected-signer"></div>
                    <BlockChainIcon />
                    <span className=""></span>
                  </div>
                  <div className="ml-[15px] wallet-accoutn flex flex-col">
                    <span className="wallet-public-key">
                      0x23b05735...4d64f
                    </span>
                    <span className="blochain-name">Polygon</span>
                  </div>
                </div>
                <div className="w-100% h-[1px] bg-wolf-gray-dark-1000 my-[10px]"></div>
              </div>
            )}
            {stepProcces === 0 && (
              <form
                className="bill-checkout-zone px-[15px]"
                onSubmit={handleSubmit(onSubmit)}
              >
                {false && (
                  <div className="counter-quantity mb-[15px] ">
                    <span className="text-wolf-gray-light-1000 text-[14px]">
                      Cantidad a comprar *
                    </span>
                    <Controller
                      control={control}
                      name="cuantity"
                      render={({ field: { onChange, value } }) => (
                        <button
                          type="button"
                          className="counter-btn mr-2"
                          onClick={() => {
                            console.log("aumentado");
                            console.log(value);
                            onChange(Number(value) + 1);
                          }}
                        >
                          <MdOutlineAddCircle />
                        </button>
                      )}
                    />

                    <Controller
                      control={control}
                      name="cuantity"
                      render={({ field: { onChange, value } }) => (
                        <WTextFields
                          id="checkout-quantity"
                          type="number"
                          onWheel={preventScroll}
                          readOnly={isReadMode}
                          value={value}
                          onClick={() => {
                            setIsReadMode(false);
                            console.log(isReadMode);
                          }}
                          onChange={(e) => {
                            if (!isReadMode) {
                              console.log("se puede editar");
                              onChange(e.target.value);
                              return;
                            }
                            console.log("no se puede editar");
                          }}
                          onBlur={() => {
                            setIsReadMode(true);
                          }}
                        />
                      )}
                    />

                    <Controller
                      control={control}
                      name="cuantity"
                      render={({ field: { onChange, value } }) => (
                        <button
                          type="button"
                          className="counter-btn mr-2"
                          onClick={() => {
                            console.log("aumentado");
                            console.log(value);
                            if (Number(value) - 1 <= 0) return;
                            onChange(Number(value) - 1);
                          }}
                        >
                          <MdOutlineRemoveCircle />
                        </button>
                      )}
                    />
                  </div>
                )}

                {true && (
                  <div className="mb-[10px]">
                    <WTextFields
                      register={register("bid")}
                      textLabel={"Puja Minima *"}
                      placeholder="Ej: ETH"
                      id="checkout-bid"
                      type="number"
                      onWheel={preventScroll}
                    />
                  </div>
                )}

                <div className="w-[100%] h-[1px] bg-wolf-gray-dark-1000"></div>
                <div className="bill-checkout-item mt-[5px]">
                  <span className="bill-key">Precio</span>{" "}
                  <span className="bill-value">0.005 ETH</span>
                </div>
                <div className="bill-checkout-item">
                  <span className="bill-key">Cantidad</span>{" "}
                  <span className="bill-value">1</span>
                </div>
                <div className="bill-checkout-item mb-[5px] ">
                  <span className="bill-key">Comision del la platafomar</span>{" "}
                  <span className="bill-value">0</span>
                </div>
                <div className="w-[100%] h-[1px] bg-wolf-gray-dark-1000"></div>

                <div className="mt-[10px]">
                  <div>
                    <button
                      type="submit"
                      className="wolf-buttom wolf-buttom-primary w-[100%]"
                    >
                      {true ? "hacer una puja" : "Comprar Ahora"}
                    </button>
                    <div className="mt-[10px]">
                      <button
                        type="button"
                        className="wolf-buttom w-[100%]  hover:bg-wolf-blue-200"
                        onClick={() => {
                          dispatch(
                            closeModal({
                              modal: keyModalSate.checkoutModal,
                            })
                          );
                        }}
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            )}

            {
              // caso cuando no tiene saldo suficiente
              stepProcces === -1 && (
                <div className="insufficient-balance">
                  <span className="text-wollf-red-200 text-[14px]">
                    Lo siento pero usted tiene saldo insuficiente
                  </span>
                  <div className="mt-[10px]">
                    <button
                      type="button"
                      className="wolf-buttom w-[100%]  hover:bg-wolf-blue-200"
                      onClick={() => {
                        dispatch(
                          closeModal({
                            modal: keyModalSate.checkoutModal,
                          })
                        );
                      }}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              )
            }
            {
              // caso cuando no tiene saldo suficiente
              stepProcces === -2 && (
                <div className="insufficient-balance">
                  <span className="text-wollf-red-200 text-[14px] font-semibold ">
                    Lo siento no esta conectado a la blockchain inorrecta
                  </span>
                  <div className="mt-[10px]">
                    <button
                      type="button"
                      className="wolf-buttom wolf-buttom-primary w-[100%] mb-2"
                    >
                      Cambiar de blockchain
                    </button>

                    <button
                      type="button"
                      className="wolf-buttom w-[100%]  hover:bg-wolf-blue-200"
                      onClick={() => {
                        dispatch(
                          closeModal({
                            modal: keyModalSate.checkoutModal,
                          })
                        );
                      }}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              )
            }

            {stepProcces === 1 && (
              <div className="procesing-step px-[15px] w-[100%] flex flex-col justify-center items-center">
                <h3>Procesando</h3>
                <Skeleton animation="wave" width={"100%"} height={40} />
                <span className="text-[14px] text-wolf-gray-light-800">
                  Esto puede tardar unos minutos
                </span>
              </div>
            )}

            {stepProcces === 2 && (
              <div className="px-[15px] flex flex-col justify-center items-center  fail-process">
                <h3 className="my-3">Ocurrio un Error</h3>
                <WolfSad />
                <span className="text-[14px] text-wolf-gray-light-800">
                  Ocurrio u error durante la transsacion
                </span>
                <div className="w-[100%] mt-[10px]">
                  <button
                    type="button"
                    className="wolf-buttom wolf-buttom-primary w-[100%]"
                  >
                    Intentar nuevamente
                  </button>
                  <div className="w-[100%] h-[1px] bg-wolf-gray-dark-1200 my-[15px]"></div>
                  <div className="mt-[10px]">
                    <button
                      type="button"
                      className="wolf-buttom w-[100%]  hover:bg-wolf-blue-200"
                      onClick={() => {
                        dispatch(
                          closeModal({
                            modal: keyModalSate.checkoutModal,
                          })
                        );
                      }}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            )}

            {stepProcces === 3 && (
              <div className="succes-proccess">
                <h3>Operacion finalizada correctamente</h3>
                <WolfHappy />
                <span className="text-[14px] text-wolf-gray-light-800">
                  Usted es ahoara el due;o de su nueva nft
                </span>
                <span className="text-[14px] text-wolf-gray-light-800">
                  Para saber mas puede hacer click de la operacion
                </span>
                
                <div className="mt-[10px] flex flex-col" >
                  <span className="text-[14px] text-wolf-gray-light-2200 font-semibold">Id de la Trasancion</span>
                  <span className="" >0xea4e613b...0365b31912</span>
                </div>

              </div>
            )}
          </div>
        )
      }
    </WolfyModalLayoutReduxController>
  );
}
