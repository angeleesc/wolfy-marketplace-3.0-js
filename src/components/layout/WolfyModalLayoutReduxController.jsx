import React from "react";
import { useSelector } from "react-redux";

export default function WolfyModalLayoutReduxController({ modalController }) {
  const modalState = useSelector((state) => state.modals);
  console.log(modalState);

  return <div>
    modal XD
  </div>;
}
