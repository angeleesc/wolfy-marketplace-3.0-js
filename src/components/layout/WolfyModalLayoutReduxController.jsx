import React from "react";
import { useSelector } from "react-redux";

export default function WolfyModalLayoutReduxController({ modalController }) {
  const modalState = useSelector((state) => state.modals[modalController]);
  console.log(modalState);

  if (modalState.open === true) return <div>modal XD</div>;

  return null;
}
