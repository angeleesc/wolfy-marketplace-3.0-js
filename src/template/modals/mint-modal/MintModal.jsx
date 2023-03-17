import React, { useState } from "react";
import WolfyModalLayoutReduxController from "../../../components/layout/WolfyModalLayoutReduxController";
import { keyModalSate } from "../../../features/modals/modalsSlice";
import "./mint-modal.scss";
import { useWFileContex } from "../../../context/FileContex";
import MultimediaZone from "./MultimediaZone";
import WolfCheck from "../../../components/icons/WolfCheck";

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
        <div className="wolf-mint-modal-header">
          <MultimediaZone file={metadataFile} />
          <div className="multimedia-content">
            <h3>Todo esta listo</h3>
            <WolfCheck size={"120"} />
            <span>
              Todos los datos estan listo haz click en comensar para hacer tu
              nueva nft
            </span>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <button className="wolf-buttom w-[50%] wolf-btn-primary-2 mr-1">
            Comnezar
          </button>
          <button className="wolf-buttom w-[50%] wolf-btn-secondary-traparent ml-1 border-[2px]  border-wolf-gray-dark-800">
            Cancelar
          </button>
        </div>
      </div>
    </WolfyModalLayoutReduxController>
  );
}
