import React, { useState } from "react";
import WolfyModalLayoutReduxController from "../../../components/layout/WolfyModalLayoutReduxController";
import { keyModalSate } from "../../../features/modals/modalsSlice";
import { useSelector } from "react-redux";
import "./mint-modal.scss";
import PreviewFile from "./PreviewFile";

export default function MintModal() {
  const [stepProcess, setStepProcess] = useState(0);
  const [ethereumStepProcess, setEthereumStepProcess] = useState(0);

  const modalData = useSelector(
    (state) => state.modals[keyModalSate.mintModal].dataToProccess
  );

  console.log(modalData);

  return (
    <WolfyModalLayoutReduxController modalController={keyModalSate.mintModal}>
      <div className="wolf-modal-body w-[100%] max-w-[560px] min-h-[40px]">
        {modalData && (
          <div className="mint-modal-content">
            <h3 className="mb-2">Acuñado de la nft</h3>
            <PreviewFile file={modalData.metadataFile} />
            {stepProcess === 0 && (
              <div className="step-box mt-3">
                <span>
                  todos los datos estan correcto ahora da click en comenza para
                  crea las nfts
                </span>
                <div className="mt-3">
                  <button className="wolf-buttom wolf-btn-primary-2 w-[100%] my-2 ">
                    Comenzar
                  </button>
                  <div className="w-[100%] h-[1px]  bg-wolf-gray-light-100"></div>
                  <button className="wolf-buttom w-[100%] my-2 wolf-btn-secondary-traparent">
                    Cancelar
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </WolfyModalLayoutReduxController>
  );
}
