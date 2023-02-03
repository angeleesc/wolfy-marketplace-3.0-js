import React from "react";
import WTextFields from "../../../components/form-controls/inputs/WTextFields";

export default function MintNftForm() {
  return (
    <form className="wolf-form">
      formulario de nft XD
      <WTextFields
        id="nft-name"
        textLabel="Nombre de la nft"
        errorMessage="este campo es requerido"
        info="Coloque un nombre para la nft unico"
        warningMessage="advertencia este nomber no es original"
        placeholder="Gato fans 151"
      />

    </form>
  );
}
