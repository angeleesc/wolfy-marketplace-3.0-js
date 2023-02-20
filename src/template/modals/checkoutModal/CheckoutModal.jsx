import React from "react";
import WolfyModalLayoutReduxController from "../../../components/layout/WolfyModalLayoutReduxController";
import { keyModalSate } from "../../../features/modals/modalsSlice";

export default function CheckoutModal() {
  return (
    <WolfyModalLayoutReduxController
      modalController={keyModalSate.checkoutModal}
    ></WolfyModalLayoutReduxController>
  );
}
