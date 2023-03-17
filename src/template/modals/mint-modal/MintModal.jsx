import React, { useState } from "react";
import WolfyModalLayoutReduxController from "../../../components/layout/WolfyModalLayoutReduxController";
import { closeModal, keyModalSate } from "../../../features/modals/modalsSlice";
import "./mint-modal.scss";
import { useWFileContex } from "../../../context/FileContex";
import MultimediaZone from "./MultimediaZone";
import WolfCheck from "../../../components/icons/WolfCheck";
import { useDispatch } from "react-redux";
import WolfSad from "../../../components/icons/WolfSad";
import WolfHappy from "../../../components/icons/WolfHappy";

export default function MintModal() {
  const [stepProcess, setStepProcess] = useState(3);
  const [ethereumStepProcess, setEthereumStepProcess] = useState(5);
  const fileContext = useWFileContex();
  const dispatch = useDispatch();

  const { metadataFile } = fileContext.curentfile;

  const starMinpres = async () => {
    console.log("opracion exitosa");
  };

  return (
    <WolfyModalLayoutReduxController modalController={keyModalSate.mintModal}>
      <div className="wolf-modal-body w-[100%] max-w-[560px] min-h-[40px]">
        {stepProcess === 0 && (
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
        )}
        {stepProcess === 2 && (
          <div className="wolf-mint-modal-header">
            <MultimediaZone file={metadataFile} />
            <div className="multimedia-content">
              <h3>Oparacion Fallida</h3>
              {/* <WolfCheck size={"120"} /> */}
              <WolfSad size="120" />
              <span>
                Ha ocurrido un eero durante la oprecion de la creacion de la
                nft. que deseas
              </span>
            </div>
          </div>
        )}
        {stepProcess === 3 && (
          <div className="wolf-mint-modal-header">
            <MultimediaZone file={metadataFile} />
            <div className="multimedia-content">
              <h3>Oparacion Exitosa</h3>
              {/* <WolfCheck size={"120"} /> */}
              <WolfHappy size="120" />
              <span>Tu nft ha sido creada</span>
            </div>
          </div>
        )}
        {stepProcess === 0 && (
          <div className="flex justify-center mt-5">
            <button
              className="wolf-buttom w-[50%] wolf-btn-primary-2 mr-1"
              onClick={() => {
                starMinpres();
              }}
            >
              Comnezar
            </button>
            <button
              className="wolf-buttom w-[50%] wolf-btn-secondary-traparent ml-1 border-[2px]  border-wolf-gray-dark-800"
              onClick={() => {
                dispatch(
                  closeModal({
                    modal: keyModalSate.mintModal,
                  })
                );
              }}
            >
              Cancelar
            </button>
          </div>
        )}
        {stepProcess === 2 && (
          <div className="flex justify-center mt-5">
            <button
              className="wolf-buttom w-[50%] wolf-btn-primary-2 mr-1"
              onClick={() => {
                starMinpres();
              }}
            >
              intentar nuevamente
            </button>
            <button
              className="wolf-buttom w-[50%] wolf-btn-secondary-traparent ml-1 border-[2px]  border-wolf-gray-dark-800"
              onClick={() => {
                dispatch(
                  closeModal({
                    modal: keyModalSate.mintModal,
                  })
                );
              }}
            >
              Cancelar
            </button>
          </div>
        )}
        {stepProcess === 3 && (
          <div className="flex justify-center mt-5">
            <button
              className="wolf-buttom w-[50%] wolf-btn-primary-2 mr-1"
              onClick={() => {
                starMinpres();
              }}
            >
              Finalizar
            </button>
            <button
              className="wolf-buttom w-[50%] wolf-btn-secondary-traparent ml-1 border-[2px]  border-wolf-gray-dark-800"
              onClick={() => {
                dispatch(
                  closeModal({
                    modal: keyModalSate.mintModal,
                  })
                );
              }}
            >
              Hacer otra NFT
            </button>
          </div>
        )}
      </div>
    </WolfyModalLayoutReduxController>
  );
}
