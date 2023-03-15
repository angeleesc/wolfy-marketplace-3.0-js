import React, { useState } from "react";
import WolfyModalLayoutReduxController from "../../../components/layout/WolfyModalLayoutReduxController";
import { keyModalSate } from "../../../features/modals/modalsSlice";
import { useSelector } from "react-redux";
import "./mint-modal.scss";
import PreviewFile from "./PreviewFile";
import { CircularProgress } from "@mui/material";
import { AiFillCheckCircle } from "react-icons/ai";

export default function MintModal() {
  const [stepProcess, setStepProcess] = useState(3);
  const [ethereumStepProcess, setEthereumStepProcess] = useState(0);

  const modalData = useSelector(
    (state) => state.modals[keyModalSate.mintModal].dataToProccess
  );

  const starEtherProcess = async () => {
    console.log("process");
    setStepProcess(1);
    setEthereumStepProcess(1);
  };

  console.log(modalData);

  return (
    <WolfyModalLayoutReduxController modalController={keyModalSate.mintModal}>
      <div className="wolf-modal-body w-[100%] max-w-[560px] min-h-[40px]">
        {modalData && (
          <div className="mint-modal-content">
            <h3 className="mb-2">Acuñado de la nft</h3>
            <PreviewFile
              file={modalData.metadataFile}
              currentStep={stepProcess}
            />
            {stepProcess === 0 && (
              <div className="step-box mt-3">
                <span>
                  todos los datos estan correcto ahora da click en comenza para
                  crea las nfts
                </span>
                <div className="mt-3">
                  <button
                    className="wolf-buttom wolf-btn-primary-2 w-[100%] my-2"
                    onClick={starEtherProcess}
                  >
                    Comenzar
                  </button>
                  <div className="w-[100%] h-[1px]  bg-wolf-gray-light-100"></div>
                  <button className="wolf-buttom w-[100%] my-2 wolf-btn-secondary-traparent">
                    Cancelar
                  </button>
                </div>
              </div>
            )}
            {stepProcess === 1 && (
              <div className="step-box mt-3">
                {ethereumStepProcess === 1 && (
                  <div className="flex justify-between items-center">
                    <h4>Subiendo el archivo</h4>
                    <div className="relative overflow-hidden py-[15px] flex justify-center items-center ">
                      <CircularProgress
                        sx={{
                          color: "#23272f",
                          borderRadius: "50%",
                        }}
                        size={40}
                        value={100}
                      />

                      <AiFillCheckCircle
                        className="absolute text-wolf-gray-accent-500"
                        size={40}
                      />
                    </div>
                  </div>
                )}
                {ethereumStepProcess === 2 && (
                  <div className="flex justify-between items-center">
                    <h4>Creando la colecion</h4>
                    <div className="relative overflow-hidden py-[15px] flex justify-center items-center ">
                      <CircularProgress
                        sx={{
                          color: "#23272f",
                          borderRadius: "50%",
                        }}
                        size={40}
                        value={100}
                      />

                      <AiFillCheckCircle
                        className="absolute text-wolf-gray-accent-500"
                        size={40}
                      />
                    </div>
                  </div>
                )}
                {ethereumStepProcess === 3 && (
                  <div className="flex justify-between items-center">
                    <h4>Acuñando la nfts</h4>
                    <div className="relative overflow-hidden py-[15px] flex justify-center items-center ">
                      <CircularProgress
                        sx={{
                          color: "#23272f",
                          borderRadius: "50%",
                        }}
                        size={40}
                        value={100}
                      />

                      <AiFillCheckCircle
                        className="absolute text-wolf-gray-accent-500"
                        size={40}
                      />
                    </div>
                  </div>
                )}
                {ethereumStepProcess === 4 && (
                  <div className="flex justify-between items-center">
                    <h4>Aprovando la transacion</h4>
                    <div className="relative overflow-hidden py-[15px] flex justify-center items-center ">
                      <CircularProgress
                        sx={{
                          color: "#23272f",
                          borderRadius: "50%",
                        }}
                        size={40}
                        value={100}
                      />

                      <AiFillCheckCircle
                        className="absolute text-wolf-gray-accent-500"
                        size={40}
                      />
                    </div>
                  </div>
                )}
                {ethereumStepProcess === 5 && (
                  <div className="flex justify-between items-center">
                    <h4>Poniendo en venta </h4>
                    <div className="relative overflow-hidden py-[15px] flex justify-center items-center ">
                      <CircularProgress
                        sx={{
                          color: "#23272f",
                          borderRadius: "50%",
                        }}
                        size={40}
                        value={100}
                      />

                      <AiFillCheckCircle
                        className="absolute text-wolf-gray-accent-500"
                        size={40}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
            {stepProcess === 2 && (
              <div className="step-box mt-3">
                <span>
                  Durante el proseso de acu;ado susedio un error. que deseas
                  hacer ?
                </span>
                <div className="mt-3">
                  <button
                    className="wolf-buttom wolf-btn-primary-2 w-[100%] my-2"
                    onClick={starEtherProcess}
                  >
                    intentar nuevamente
                  </button>
                  <div className="w-[100%] h-[1px]  bg-wolf-gray-light-100"></div>
                  <button className="wolf-buttom w-[100%] my-2 wolf-btn-secondary-traparent">
                    Cancelar
                  </button>
                </div>
              </div>
            )}
            {stepProcess === 3 && (
              <div className="step-box mt-3">
                <span>
                  El proceso ha sido finalizado correctamente. que desea hacer
                </span>
                <div className="mt-3">
                  <button
                    className="wolf-buttom wolf-btn-primary-2 w-[100%] my-2"
                    // onClick={starEtherProcess}
                  >
                   ver mi nft en la marketplace
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
