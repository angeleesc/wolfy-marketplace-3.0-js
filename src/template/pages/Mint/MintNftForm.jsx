import React from "react";
import WTextFields from "../../../components/form-controls/inputs/WTextFields";

export default function MintNftForm() {
  return (
    <form className="wolf-form">
      formulario de nft XD
      <WTextFields
        textLabel="Nombre de la nft"
        errorMessage="este campo es requerido"
      />
    </form>
  );
}
