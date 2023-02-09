import React from "react";
import "./styles/array-input.scss";
import { FiTrash, FiPlus } from "react-icons/fi";
import { Tooltip } from "@mui/material";

export default function ArrayFieldsReactHookForm({ type = "text" }) {
  return (
    <div className="array-fields-container">
      <div className="array-fiels-item">
        <div className="Number-i">
          <span>1</span>
        </div>
        <div className="wolf-form-control">
          <input type={type} className="wolf-form-control-text-input" />
        </div>
        <div className="wolf-form-control">
          <input type={type} className="wolf-form-control-text-input" />
        </div>
        <div className="Number-i">
          <Tooltip title="Eliminar">
            <button>
              <FiTrash />
            </button>
          </Tooltip>
        </div>
      </div>
      <div className="add-buttom">
        <Tooltip title="Agregar Atributo">
          <button disabled="true" >
            <FiPlus />
          </button>
        </Tooltip>
      </div>
      <p>
        Puedes agregar n cantidad de atributos de la nft que deseess, asegurate
        de que sean los suficiente para describir tu NFT{" "}
      </p>
    </div>
  );
}
