import React, { useState } from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import WTextFields from "../../../components/form-controls/inputs/WTextFields";
import PolygonOficialLogo from "../../../components/icons/PolygonOficialLogo";
import WolfyModalLayoutReduxController from "../../../components/layout/WolfyModalLayoutReduxController";
import { preventScroll } from "../../../controllers/domController";
import { keyModalSate } from "../../../features/modals/modalsSlice";
import { blockchainNetwork } from "../../../helpers/global-constants";
import { MdOutlineAddCircle, MdOutlineRemoveCircle } from "react-icons/md";
import { useForm, Controller } from "react-hook-form";
import "./checkout-modal.scss";

export default function CheckoutModal() {
  const [stepProcces, setStepProcces] = useState(0);
  // const [cuantityCounter, setCuantityCounter] = useState(0)
  const [isReadMode, setIsReadMode] = useState(true);

  const {
    register,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      cuantity: 0,
      bid: 0,
    },
  });

  const modalData = useSelector(
    (state) => state.modals.checkoutModal.dataToProccess
  );
  //   console.log(modalData);

  const BlockChainIcon = useMemo(() => {
    const blockChainIncon = {
      [blockchainNetwork.polygon]: PolygonOficialLogo,
    };

    return blockChainIncon[blockchainNetwork.polygon];
  }, []);

  return (
    <WolfyModalLayoutReduxController
      modalController={keyModalSate.checkoutModal}
    >
      {modalData && (
        <div className="wolf-modal-body w-[100%] max-w-[560px] min-h-[40px]">
          <h2 className="title mb-[10px]">Checkout</h2>

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

          <div className="wallet-section">
            <div></div>
            <div className="flex items-center">
              <div className="wolf-blockchain-logo">
                <BlockChainIcon />
                <span className=""></span>
              </div>
              <div className="ml-[15px] wallet-accoutn flex flex-col">
                <span className="wallet-public-key">0x23b05735...4d64f</span>
                <span className="blochain-name">Polygon</span>
              </div>
            </div>
            <div className="w-100% h-[1px] bg-wolf-gray-dark-1000 my-[10px]"></div>
          </div>
          {stepProcces === 0 && (
            <form className="bill-checkout-zone px-[15px]">
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
                    placeHolder="Ej: ETH"
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
            </form>
          )}
        </div>
      )}
    </WolfyModalLayoutReduxController>
  );
}
