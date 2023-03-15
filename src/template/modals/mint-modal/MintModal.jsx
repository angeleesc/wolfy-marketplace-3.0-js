import React, { useState } from "react";
import WolfyModalLayoutReduxController from "../../../components/layout/WolfyModalLayoutReduxController";
import { keyModalSate } from "../../../features/modals/modalsSlice";
import { useSelector } from "react-redux";
import "./mint-modal.scss";
import PreviewFile from "./PreviewFile";

export default function MintModal() {

  const [stepProcess, setStepProcess] = useState(0)

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
          
          </div>
        )}
      </div>
    </WolfyModalLayoutReduxController>
  );
}
