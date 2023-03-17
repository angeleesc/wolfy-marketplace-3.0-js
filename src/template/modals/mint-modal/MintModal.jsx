import React, { useState } from "react";
import WolfyModalLayoutReduxController from "../../../components/layout/WolfyModalLayoutReduxController";
import { keyModalSate } from "../../../features/modals/modalsSlice";
import "./mint-modal.scss";
import { useWFileContex } from "../../../context/FileContex";
import MultimediaZone from "./MultimediaZone";

export default function MintModal() {
  const [stepProcess, setStepProcess] = useState(0);
  const [ethereumStepProcess, setEthereumStepProcess] = useState(5);
  const fileContext = useWFileContex();

  const { metadataFile } = fileContext.curentfile;

  console.log("el modal recibio");
  console.log(fileContext.curentfile);
  console.log("fin del recibimiento");

  return (
    <WolfyModalLayoutReduxController modalController={keyModalSate.mintModal}>
      <div className="wolf-modal-body w-[100%] max-w-[560px] min-h-[40px]">
        <div className="header">
          <MultimediaZone file={metadataFile} />
        </div>
      </div>
    </WolfyModalLayoutReduxController>
  );
}
