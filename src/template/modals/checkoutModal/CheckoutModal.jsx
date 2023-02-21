import React from "react";
import { useSelector } from "react-redux";
import WolfyModalLayoutReduxController from "../../../components/layout/WolfyModalLayoutReduxController";
import { keyModalSate } from "../../../features/modals/modalsSlice";
import "./checkout-modal.scss";

export default function CheckoutModal() {
  const modalData = useSelector(
    (state) => state.modals.checkoutModal.dataToProccess
  );
  //   console.log(modalData);

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
        </div>
      )}
    </WolfyModalLayoutReduxController>
  );
}
