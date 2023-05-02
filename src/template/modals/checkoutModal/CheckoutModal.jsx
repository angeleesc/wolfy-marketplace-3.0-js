import React, { useState } from "react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import WTextFields from "../../../components/form-controls/inputs/WTextFields";
import PolygonOficialLogo from "../../../components/icons/PolygonOficialLogo";
import WolfyModalLayoutReduxController from "../../../components/layout/WolfyModalLayoutReduxController";
import { preventScroll } from "../../../controllers/domController";
import { keyModalSate } from "../../../features/modals/modalsSlice";
import {
  blockchainNetwork,
  saleMethod,
} from "../../../helpers/global-constants";
import { MdOutlineAddCircle, MdOutlineRemoveCircle } from "react-icons/md";
import { useForm, Controller, useWatch } from "react-hook-form";
import { closeModal } from "../../../features/modals/modalsSlice";
import "./checkout-modal.scss";
import { Skeleton } from "@mui/material";
import WolfSad from "../../../components/icons/WolfSad";
import WolfHappy from "../../../components/icons/WolfHappy";
import MetamaskOficialLgo from "../../../components/icons/MetamaskOficialLgo";
import {
  changeBlochainNetworkMetamas,
  checWaletConected,
  checkCorrertBlockchain,
  connetWalletMetamask,
  getWaletData,
} from "../../../controllers/Web3Controllers";
import { useEffect } from "react";
import OptimismOficialLogo from "../../../components/icons/OptimismOficialLogo";
import {
  buyToken,
  getEstimateGasBuyToken,
  getOrderByid,
  cancelOder,
  goToCancel,
  goToBuy,
} from "../../../controllers/makertPlaceSmarContractControllers";
import { ethers } from "ethers";
import { getAuctionById } from "../../../controllers/auctionControllers";
import * as yup from "yup";
import { useYupValidationResolver } from "../../../global-hook/useYupValidatonResolver";

export default function CheckoutModal() {
  const [stepProcces, setStepProcces] = useState(-5);

  const [isReadMode, setIsReadMode] = useState(true);
  const [price, setPrice] = useState(0);
  const [maxQ, setMaxQ] = useState(1);
  const [disableQuantityField, setDisableQuantityField] = useState(false);
  const [balace, setBalace] = useState(0);
  const [address, setAddress] = useState("");
  const [isSufficientBalance, setIsSufficientBalance] = useState(false);
  const [besBidder, setBesBidder] = useState("");
  const [auctionExpirationTime, setAuctionExpirationTime] = useState(0);

  const dispatch = useDispatch();

  // CONFIGURACION DE REACT HOOK FORM

  const checkoutValidateSchema = yup.object({
    bid: yup.string().when("saleMethod", {
      is: (saleMethodEvale) => saleMethodEvale === saleMethod.auction,
      then: yup
        .string()
        .test(
          "coorectPrice",
          "El precio debe ser mayor al que se propone en la oferta",
          (value) => {
            if (Number(value) > price) return true;
            return false;
          }
        )
        .required("La puja es requerida"),
    }),
  });

  const resolver = useYupValidationResolver(checkoutValidateSchema);

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    setValue,

    watch,
  } = useForm({
    defaultValues: {
      cuantity: 1,
      bid: 0,
    },
    resolver,
  });

  const quantityWatch = watch("cuantity");
  const bidWatch = watch("bid");

  const modalData = useSelector(
    (state) => state.modals.checkoutModal.dataToProccess
  );

  // console.log(modalData);

  const BlockChainIcon = useMemo(() => {
    const blockChainIncon = {
      [blockchainNetwork.polygon]: <PolygonOficialLogo />,
      [blockchainNetwork.optimism]: <OptimismOficialLogo size="36" />,
    };

    return blockChainIncon[blockchainNetwork.optimism];
  }, []);

  // funcion del checkout
  const cancelTokenNow = async () => {
    const result = await goToCancel(modalData.orderId);
    console.log("resultado");
    console.log("resul");
  };

  const buyTokenNow = async () => {
    const ehtPrice = ethers.utils.parseEther(price.toString());
    await goToBuy(modalData.orderId, quantityWatch.toString(), ehtPrice);
  };

  const bidTokenNow = async () => {
    console.log("oferta realizada");
  };

  const init = async () => {
    // checkeamos si esta conectado a una wallet

    const checkWallet = await checWaletConected();
    if (!checkWallet) {
      // console.log("no estas conectado a la wallet");
      setStepProcces(-3);
      return;
    }
    // si esta conectamos a la wallet
    // verificamos que este en la blockchain correcta

    const isCorrectBlochain = await checkCorrertBlockchain(420);

    if (!isCorrectBlochain) {
      setStepProcces(-2);
      return;
    }

    // verificamos si es el mismo usuario de la cuenta si es asi solo le habiliamos la opncion de cancela

    // verivicamos si tiene el balance correcto para al menos una compra

    // console.log(orderDAta);
    const walletData = await getWaletData();
    let orderDAta;
    setBalace(walletData.balance);
    setAddress(walletData.addres);

    if (modalData.saleMethod === saleMethod.auction) {
      console.log("obteniendo la orden de la subasta");

      const auctionData = await getAuctionById(modalData.orderId);

      if (!auctionData.isSuccess && !auctionData.data) {
        setStepProcces(2);
        return;
      }

      const { currentPrice, bestBidder: bBider, endTime } = auctionData.data;

      setValue("bid", (currentPrice * 1.05).toString());
      setBesBidder(bBider);
      setAuctionExpirationTime(endTime);
    } else {
      orderDAta = await getOrderByid(modalData.orderId);

      setPrice(orderDAta.price);
      setMaxQ(orderDAta.quantity);
      if (Number(orderDAta.quantity) === 1) setDisableQuantityField(true);
    }

    setBalace(walletData.balance);
    setAddress(walletData.addres);

    if (modalData.seller && modalData.seller === walletData.addres) {
      // console.log("el es duenio de la orden actuacl")
      setStepProcces(-4);
      return;
    }

    setValue("saleMethod", modalData.saleMethod);

    setStepProcces(0);
    // console.log("estas conectado a una wallet");
  };

  const conectWalletMetamas = async () => {
    const result = await connetWalletMetamask();
    if (!result) {
      setStepProcces(2);
      return;
    }
    await init();
  };

  const changeBlochainN = async () => {
    await changeBlochainNetworkMetamas(420);
    await init();
  };

  useEffect(() => {
    init();
  }, []);

  const onSubmit = async (data) => {
    console.log(data);

    if (modalData.saleMethod === saleMethod.auction) {
      bidTokenNow();
    } else {
      buyTokenNow();
    }
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
                    <span className="value">{maxQ}</span>
                  </div>
                </div>
              </div>
            )}

            {stepProcces <= 0 && (
              <div className="wallet-section">
                <div></div>
                <div className="flex items-center">
                  <div className="wolf-blockchain-logo">
                    {BlockChainIcon}
                    <span className=""></span>
                  </div>
                  <div className="ml-[15px] wallet-accoutn flex flex-col">
                    <span className="wallet-public-key">
                      0x23b05735...4d64f
                    </span>
                    <span className="blochain-name">Optimism</span>
                  </div>
                </div>
                <div className="w-100% h-[1px] bg-wolf-gray-dark-1000 my-[10px]"></div>
              </div>
            )}
            {stepProcces === 0 && (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bill-checkout-zone px-[15px]"
              >
                {modalData.saleMethod === saleMethod.sales && (
                  <>
                    <span className="text-wolf-gray-light-1000 text-[14px]">
                      Cantidad a comprar *
                    </span>
                    <div className="counter-quantity mb-[15px]">
                      <Controller
                        control={control}
                        name="cuantity"
                        render={({ field: { onChange, value } }) => (
                          <button
                            type="button"
                            className="counter-btn mr-2"
                            onClick={() => {
                              // console.log("aumentado");
                              if (Number(value) + 1 > Number(maxQ)) return;
                              // console.log(value);
                              onChange(Number(value) + 1);
                            }}
                            disabled={disableQuantityField}
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
                            disabled={disableQuantityField}
                            onClick={() => {
                              setIsReadMode(false);
                              // console.log(isReadMode);
                            }}
                            onChange={(e) => {
                              if (!isReadMode) {
                                // console.log("se puede editar");
                                onChange(e.target.value);
                                return;
                              }
                              // console.log("no se puede editar");
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
                            className="counter-btn ml-2"
                            onClick={() => {
                              // console.log("aumentado");
                              // console.log(value);
                              if (Number(value) - 1 <= 0) return;
                              onChange(Number(value) - 1);
                            }}
                            disabled={disableQuantityField}
                          >
                            <MdOutlineRemoveCircle />
                          </button>
                        )}
                      />
                    </div>
                  </>
                )}

                {modalData.saleMethod === saleMethod.auction && (
                  <div className="mb-[10px]">
                    <WTextFields
                      register={register("bid")}
                      textLabel={"Puja Minima *"}
                      step="0.00000001"
                      placeholder="Ej: ETH"
                      id="checkout-bid"
                      type="number"
                      onWheel={preventScroll}
                      errorMessage={errors.bid ? errors.bid.message : ""}
                    />
                  </div>
                )}

                <div className="w-[100%] h-[1px] bg-wolf-gray-dark-1000"></div>
                <div className="bill-checkout-item mt-[5px]">
                  <span className="bill-key">Precio</span>{" "}
                  <span className="bill-value">{price} ETH</span>
                </div>
                <div className="bill-checkout-item">
                  <span className="bill-key">Cantidad</span>{" "}
                  <span className="bill-value">{quantityWatch}</span>
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
                      {modalData.saleMethod === saleMethod.auction
                        ? "hacer una puja"
                        : "Comprar Ahora"}
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

            {stepProcces === -5 && (
              <div className="procesing-step loading-data">
                <h3>cargando</h3>
                <Skeleton animation="wave" width={"100%"} height={40} />
                <span className="text-[14px] text-wolf-gray-light-800">
                  Esto puede tardar unos minutos
                </span>
              </div>
            )}

            {
              // caso cuando no tiene saldo suficiente
              stepProcces === -4 && (
                <div className="insufficient-balance">
                  <span className="text-wolf-gray-light-1500 text-[14px]">
                    Useted es el actual dueño de esta nfts que esta en venta en
                    nuestra marketplace
                  </span>
                  <span className="text-wolf-blue-purple-600   font-semibold text-[16px] my-4 block">
                    Deseas Sacarla de venta en nuestra marketplace?
                  </span>
                  <div className="mt-[10px]">
                    <button
                      type="button"
                      className="wolf-buttom w-[100%]  wolf-buttom-primary"
                      onClick={cancelTokenNow}
                    >
                      Si deseo sacar de la venta
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
                      onClick={changeBlochainN}
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

            {
              // caso cuando no tiene saldo suficiente
              stepProcces === -3 && (
                <div className="insufficient-balance">
                  <span className="text-wollf-red-200 text-[14px] font-semibold ">
                    lo siento pero no estas conectado a ninguna wallet
                  </span>
                  <div className="mt-[10px]">
                    <button
                      type="button"
                      className="wolf-buttom wolf-buttom-primary w-[100%] mb-2 flex"
                      onClick={conectWalletMetamas}
                    >
                      <span className="mr-2">
                        <MetamaskOficialLgo size={"20"} />
                      </span>
                      <span> conectar a metamask </span>
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
                  {/* <button
                    type="button"
                    className="wolf-buttom wolf-buttom-primary w-[100%]"
                  >
                    Intentar nuevamente
                  </button> */}
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

                <div className="mt-[10px] flex flex-col">
                  <span className="text-[14px] text-wolf-gray-light-2200 font-semibold">
                    Id de la Trasancion
                  </span>
                  <span className="">0xea4e613b...0365b31912</span>
                </div>
              </div>
            )}
          </div>
        )
      }
    </WolfyModalLayoutReduxController>
  );
}
