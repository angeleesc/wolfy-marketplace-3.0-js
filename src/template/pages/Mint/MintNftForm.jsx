import React, { useState } from "react";
import WTextFields from "../../../components/form-controls/inputs/WTextFields";
import WTextAreaInput from "../../../components/form-controls/inputs/WTextAreaInput";
import { FormControlLabel, Switch } from "@mui/material";

export default function MintNftForm() {
  const [isAddAtribute, setIsAddAtribute] = useState(false);

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
    </form>
  );
}
