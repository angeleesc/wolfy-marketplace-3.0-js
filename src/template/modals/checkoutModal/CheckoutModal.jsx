import React from "react";
import WolfyModalLayoutReduxController from "../../../components/layout/WolfyModalLayoutReduxController";
import { keyModalSate } from "../../../features/modals/modalsSlice";

export default function CheckoutModal() {
  return (
    <WolfyModalLayoutReduxController
      modalController={keyModalSate.checkoutModal}
    >
      <div className="wolf-modal-body w-[300px] min-h-[40px]">

      </div>
    </WolfyModalLayoutReduxController>
  );
}
