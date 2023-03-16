import React, { useState } from "react";
import WolfyModalLayoutReduxController from "../../../components/layout/WolfyModalLayoutReduxController";
import { keyModalSate } from "../../../features/modals/modalsSlice";
import { useSelector } from "react-redux";
import "./mint-modal.scss";
import PreviewFile from "./PreviewFile";
import { CircularProgress } from "@mui/material";
import { AiFillCheckCircle } from "react-icons/ai";
import { uploadFileToIpfs } from "../../../controllers/ipfsFileController";

const cuadradopromise = (value) => {
  return new Promise((resolve, rejet) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 1000);
  });
};
export default function MintModal() {
  const [stepProcess, setStepProcess] = useState(0);
  const [ethereumStepProcess, setEthereumStepProcess] = useState(5);

  const modalData = useSelector(
    (state) => state.modals[keyModalSate.mintModal].dataToProccess
  );

  console.log(modalData);

  return (
    <WolfyModalLayoutReduxController modalController={keyModalSate.mintModal}>
      <div className="wolf-modal-body w-[100%] max-w-[560px] min-h-[40px]">
        <h3>Modal xd</h3>
      </div>
    </WolfyModalLayoutReduxController>
  );
}
