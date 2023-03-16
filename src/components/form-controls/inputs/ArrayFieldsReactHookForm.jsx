import React from "react";
import "./styles/array-input.scss";
import { FiTrash, FiPlus } from "react-icons/fi";
import { Tooltip } from "@mui/material";
import { useWatch, useFieldArray, useForm } from "react-hook-form";

export default function ArrayFieldsReactHookForm({
  type = "text",
  name,
  control,
  register,
  watch,
  errors,
}) {



  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  const atributesWacth = useWatch({
    name,
    control,
  });

  let isOk = true;

  // console.log("obscervando");
  // console.log(atributesWacth);

  // atributesWacth.map((atribute) => {
  //   if (atribute.key && atribute.key != "") {
  //     isOk = true;
  //   } else {
  //     isOk = false;
  //   }

  //   if (atribute.nftValue && atribute.nftValue != "") {
  //     isOk = true;
  //   } else {
  //     isOk = false;
  //   }
  // });

  // console.log(isOk);
console.log("registe")
  console.log(register)
  console.log("fin del registe")

  return (
    <div className="array-fields-container">
      <div className="flex justify-center">
        <div className="w-[42%]">
          <span>Atributo</span>
        </div>
        <div className="w-[42%]">
          <span>Valor</span>
        </div>
      </div>

      {fields.map((field, index) => {
        return (
          <div className="array-fiels-item" key={field.id}>
            <div className="Number-i">
              <span>1</span>
            </div>
            <div className="wolf-form-control">
            {register &&  <input
                type={type}
                className="wolf-form-control-text-input"
                {...register(`nftsAtributes.${index}.key`)}
              />}
              {errors[`nftsAtributes[${index}].key`] && (
                <span className="wolf-form-control-error">Reuerido</span>
              )}
            </div>
            <div className="wolf-form-control">
              <input
                type={type}
                className="wolf-form-control-text-input"
                {...register(`nftsAtributes.${index}.nftValue`)}
              />
              {errors[`nftsAtributes[${index}].nftValue`] && (
                <span className="wolf-form-control-error">Requerido</span>
              )}
            </div>
            <div className="Number-i">
              <Tooltip title="Eliminar">
                <button
                  onClick={() => {
                    remove(index);
                  }}
                >
                  <FiTrash />
                </button>
              </Tooltip>
            </div>
          </div>
        );
      })}
      <div className="add-buttom mt-[10px]">
        <button
          className="wolf-btn-tootip"
          disabled={!isOk}
          onClick={() => {
            append({
              key: "",
              nftValue: "",
            });
          }}
          type="button"
        >
          <FiPlus />
          <div className="wolf-toop-tips">
            {isOk ? (
              <span>Agregar Atributos</span>
            ) : (
              <span>Completa los campos para agregar</span>
            )}
          </div>
        </button>
      </div>
      <p>
        Puedes agregar n cantidad de atributos de la nft que deseess, asegurate
        de que sean los suficiente para describir tu NFT{" "}
      </p>
    </div>
  );
}
