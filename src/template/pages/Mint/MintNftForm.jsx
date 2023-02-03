import React from "react";
import WTextFields from "../../../components/form-controls/inputs/WTextFields";

export default function MintNftForm() {
  return (
    <form className="wolf-form">
      <h3 className="my-4" >Datos Basico de la nft</h3>

      <WTextFields
        id="nft-name"
        textLabel="Nombre de la nft"
        info="Coloque un nombre para la nft unico"
        // errorMessage="este campo es requerido"
        // warningMessage="advertencia este nomber no es original"
        placeholder="Gato fans 151"
      />
    </form>
  );
}
