import React, { useState } from "react";
import WTextFields from "../../../components/form-controls/inputs/WTextFields";
import WTextAreaInput from "../../../components/form-controls/inputs/WTextAreaInput";
import { FormControlLabel, Switch } from "@mui/material";

export default function MintNftForm() {

  const [isAddAtribute, setIsAddAtribute] = useState(false)
  
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
       control={
        <Switch   name="isAddPropieties"  checked={isAddAtribute} onChange={e=>{
          setIsAddAtribute(e.target.checked)
        }} />
       }
       />
    </form>
  );
}
