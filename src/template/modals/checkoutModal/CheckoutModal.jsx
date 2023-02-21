import React, { useState } from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import WTextFields from "../../../components/form-controls/inputs/WTextFields";
import PolygonOficialLogo from "../../../components/icons/PolygonOficialLogo";
import WolfyModalLayoutReduxController from "../../../components/layout/WolfyModalLayoutReduxController";
import { preventScroll } from "../../../controllers/domController";
import { keyModalSate } from "../../../features/modals/modalsSlice";
import { blockchainNetwork } from "../../../helpers/global-constants";
import "./checkout-modal.scss";

export default function CheckoutModal() {
  const [stepProcces, setStepProcces] = useState(0);

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
            <form className="bill-checkout-zone">
              <div className="counter-quantity mb-[15px] ">
                <button className="counter-btn" ></button>
                <WTextFields
                  id="checkout-quantity"
                  type="number"
                  onWheel={preventScroll}
                  
                />
              </div>

              <div className="w-[100%] h-[1px] bg-wolf-gray-dark-1000"></div>
              <div className="bill-checkout-item">
                <span className="bill-key">Precio</span>{" "}
                <span className="bill-value">0.005 ETH</span>
              </div>
              <div className="bill-checkout-item">
                <span className="bill-key">Cantidad</span>{" "}
                <span className="bill-value">1</span>
              </div>
              <div className="bill-checkout-item">
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
