import React, { useState } from "react";
import WTextFields from "../../../components/form-controls/inputs/WTextFields";
import WTextAreaInput from "../../../components/form-controls/inputs/WTextAreaInput";
import { FormControlLabel, Switch, TextField } from "@mui/material";
import "./style/botom-group-box.scss";
import CAdd from "../../../components/icons/CAdd";
import Logo from "../../../components/icons/Logo";
import CSearch from "../../../components/icons/CSearch";
import TagBlack from "../../../components/icons/TagBlack";
import ClockBlack from "../../../components/icons/ClockBlack";
import DateTimePikerNotModal from "../../../components/form-controls/pickers/DateTimePikerNotModal";
import DatePikckerReacDP from "../../../components/form-controls/pickers/DatePikckerReacDP";

export default function MintNftForm() {
  const [isAddAtribute, setIsAddAtribute] = useState(false);
  const [isMarketAtribute, setIsMarketAtribute] = useState(true);

  return (
    <form className="wolf-form">
      <h3 className="my-4">Datos Basico de la nft</h3>

      <WTextFields
        id="nft-name"
        textLabel="Nombre de la nft *"
        info="Coloque un nombre para la nft unico"
        // errorMessage="este campo es requerido"
        // warningMessage="advertencia este nomber no es original"
        placeholder="Gato fans 151"
      />

      <div className="my-4">
        <WTextAreaInput
          id="nft-description"
          textLabel="Descripcion *"
          placeholder="ejemplo es un gato de la edicion x"
          info="Describe claramente y detalladamente la nft"
        />
      </div>

      <WTextFields
        id="nft-url"
        textLabel="Enlace de la url"
        info="Puedes colocar el link de la pagina url donde esta alojado principalmente la nft este campo es opcional. nota te recomendamos que utilises una url ipfs para que tu pagina sea para siempre"
        placeholder="Ej https://www.gatos-crypto.com"
      />

      <FormControlLabel
        label="Agregar los atribhutos a esta nft"
        className="my-[15px]"
        control={
          <Switch
            name="isAddPropieties"
            checked={isAddAtribute}
            onChange={(e) => {
              setIsAddAtribute(e.target.checked);
            }}
          />
        }
      />

      <div className="my-[10px]">
        <p>
          Puedes agregar propiedades a tu nft para indicar su valor (prude ser
          opcional )
        </p>
      </div>
      {
        <div>
          <div className="wolft-form-control-label mb-[5px]">
            <span>Atributo 1</span>
          </div>
          <div className="grid grid-cols-2">
            <div className="mr-[5px]">
              <WTextFields id={"atributo-1"} placeholder="Proiedad" />
            </div>
            <div className="ml-[5px]">
              <WTextFields id={"atributo-1"} placeholder="Valor" />
            </div>
          </div>
        </div>
      }

      <div className="my-[15px]">
        <div className="wolft-form-control-label mb-[10px]">
          <span>Colecion donde se guradara</span>
        </div>
        <div className="grid grid-cols-3">
          <button className="boton-group-box">
            <div className="botom-group-body">
              <h4>Nueva</h4>
              <span>ERC-721</span>
              <CAdd />
            </div>
          </button>
          <button className="boton-group-box">
            <div className="botom-group-body">
              <h4>Wolfy</h4>
              <span>ERC-721</span>
              <Logo />
            </div>
          </button>
          <button className="boton-group-box">
            <div className="botom-group-body">
              <h4>Existente</h4>
              <span>Ver Coleciones</span>
              <CSearch />
            </div>
          </button>
        </div>
      </div>

      <h3 className="my-[15px]">Datos de la colecion *</h3>
      <WTextFields
        id="colection-name"
        textLabel="Nombre de la colecion"
        placeholder="Ej: Gatos Cryptos"
        info="Coloca el nombre de la colecion"
      />

      <WTextFields
        id="colection-symbol"
        textLabel="Simbolo *"
        placeholder="Ej: CGATO"
      />

      <WTextFields
        id="colection-fee"
        textLabel="Retgalias"
        placeholder="Ej: 5%"
        info="colola el marjen de regalias entre 1 y 50%"
      />

      <FormControlLabel
        label="Poner en venta la nft en la marketplace"
        className="my-[15px]"
        control={
          <Switch
            name="isAddPropieties"
            checked={isMarketAtribute}
            onChange={(e) => {
              setIsMarketAtribute(e.target.checked);
            }}
          />
        }
      />

      <div>
        <div className="wolft-form-control-label mb-[10px]">
          <span>Metodo de operacion</span>
        </div>
        <div className="grid grid-cols-2">
          <button className="boton-group-box">
            <div className="botom-group-body">
              <h4>Precio fijo</h4>
              <TagBlack />
            </div>
          </button>
          <button className="boton-group-box">
            <div className="botom-group-body">
              <h4>Subasta</h4>
              <span>Cronometrada</span>
              <ClockBlack />
            </div>
          </button>
        </div>
      </div>

      <WTextFields
        textLabel="Precio *"
        info={"Colloca el precio establecido"}
      />

      <div className="mt-[20px]">
        <DatePikckerReacDP />
      </div>
    </form>
  );
}
