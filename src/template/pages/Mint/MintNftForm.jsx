import React, { useState, Fragment, useEffect } from "react";
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
import FileDropZone from "../../../components/form-controls/drop-zone/FileDropZone";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { preventScroll } from "../../../controllers/domController";
import {
  collectionsOptions,
  saleMethod,
} from "../../../helpers/global-constants";
import ArrayFieldsReactHookForm from "../../../components/form-controls/inputs/ArrayFieldsReactHookForm";
import TextFieldInputGroup from "../../../components/form-controls/inputs/TextFieldInputGroup";

export default function MintNftForm() {
  const [isAddAtribute, setIsAddAtribute] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isPutOnMarketplace: true,
      salesMethod: saleMethod.sales,
      isAddPropieties: false,
      nftsAtributes: [{ key: "", nftValue: "" }],
      colectionOptions: collectionsOptions.wolfy,
    },
  });

  const isPutOnMarketPlaceWacht = watch("isPutOnMarketplace");
  const saleMethodWacth = watch("salesMethod");
  const isAddAtributeWacht = watch("isAddPropieties");
  const collectionOptionsWacht = watch("colectionOptions");

  // console.log(nftsAtributesWacth)

  //controllador del agregado autocreciente

  //

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <>
      <form className="wolf-form" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="mb-[15px]">Cargar el archivo de la NFT*</h3>
        <Controller
          control={control}
          name="metadataFile"
          render={({ field: { onChange, value, name } }) => {
            return (
              <FileDropZone onChange={onChange} value={value} name={name} />
            );
          }}
        />

        <Controller
          control={control}
          name="isPutOnMarketplace"
          render={({ field: { onChange, value: lvalue, name } }) => (
            <FormControlLabel
              label="Poner en venta la nft en la marketplace"
              className="my-[15px]"
              control={
                <Switch
                  name="isAddPropieties"
                  checked={lvalue}
                  onChange={(e) => {
                    onChange(e.target.checked);
                  }}
                />
              }
            />
          )}
        />

        {isPutOnMarketPlaceWacht && (
          <>
            <h3 className="mb-[15px]">Datos para la venta*</h3>
            <div className="wolft-form-control-label mb-[10px]">
              <span>Metodo de operacion</span>
            </div>

            <Controller
              control={control}
              name="salesMethod"
              render={({ field: { onChange, value: lValue } }) => (
                <div className="grid grid-cols-2">
                  <button
                    className="boton-group-box "
                    type="button"
                    onClick={() => {
                      onChange(saleMethod.sales);
                    }}
                  >
                    <div
                      className={`botom-group-body ${
                        lValue === saleMethod.sales && "boton-box-active"
                      }`}
                    >
                      <h4>Precio fijo</h4>
                      <TagBlack />
                    </div>
                  </button>
                  <button
                    className="boton-group-box"
                    type="button"
                    onClick={() => {
                      onChange(saleMethod.auction);
                    }}
                  >
                    <div
                      className={`botom-group-body ${
                        lValue === saleMethod.auction && "boton-box-active"
                      }  `}
                    >
                      <h4>Subasta</h4>
                      <span>Cronometrada</span>
                      <ClockBlack />
                    </div>
                  </button>
                </div>
              )}
            />

            <TextFieldInputGroup
              textLabel={
                saleMethodWacth === saleMethod.auction
                  ? "Puja Minima"
                  : "Precio *"
              }
              info={"Colloca el precio establecido"}
              register={register("nftPrice")}
              type="number"
              step="0.00000001"
              onWheel={preventScroll}
              placeholder="Ej 0.05"
            />

            {saleMethodWacth === saleMethod.auction && (
              <div className="mt-[20px]">
                <DatePikckerReacDP />
              </div>
            )}
          </>
        )}
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

        <Controller
          name="isAddPropieties"
          control={control}
          render={({ field: { onChange, value: isArtValue } }) => (
            <FormControlLabel
              label="Agregar los atributos a esta nft"
              className="my-[15px]"
              control={
                <Switch
                  name="isAddPropieties"
                  checked={isArtValue}
                  onChange={(e) => {
                    onChange(e.target.checked);
                  }}
                />
              }
            />
          )}
        />

        {isAddAtributeWacht && (
          <ArrayFieldsReactHookForm
            control={control}
            name={"nftsAtributes"}
            register={register}
          />
        )}

        <div className="my-[10px]">
          {/* <p>
            Puedes agregar propiedades a tu nft para indicar su valor ( puede ser
            opcional )
          </p> */}
        </div>

        <div className="wolft-form-control-label mb-[10px]">
          <span>Colecion donde se guradara</span>
        </div>

        <Controller
          name="colectionOptions"
          control={control}
          render={({ field: { name, onChange, value: opValue } }) => (
            <div className="my-[15px]">
              <div className="grid grid-cols-3">
                <button
                  className="boton-group-box"
                  onClick={() => {
                    onChange(collectionsOptions.wolfy);
                  }}
                  type="button"
                >
                  <div
                    className={`botom-group-body ${
                      opValue === collectionsOptions.wolfy && "boton-box-active"
                    }`}
                  >
                    <h4>Wolfy NFTS</h4>
                    <span>ERC-721</span>
                    <Logo />
                  </div>
                </button>
                <button
                  className="boton-group-box"
                  type="button"
                  onClick={() => {
                    onChange(collectionsOptions.new);
                  }}
                >
                  <div
                    className={`botom-group-body ${
                      opValue === collectionsOptions.new && "boton-box-active"
                    }`}
                  >
                    <h4>Nueva</h4>
                    <span>ERC-721</span>
                    <CAdd />
                  </div>
                </button>
                <button
                  className="boton-group-box"
                  type="button"
                  onClick={() => {
                    onChange(collectionsOptions.existing);
                  }}
                >
                  <div
                    className={`botom-group-body ${
                      opValue === collectionsOptions.existing &&
                      "boton-box-active"
                    }`}
                  >
                    <h4>Existente</h4>
                    <span>Ver Coleciones</span>
                    <CSearch />
                  </div>
                </button>
              </div>
            </div>
          )}
        />

        <h3 className="my-[15px]">Datos de la colecion *</h3>

        {collectionOptionsWacht === collectionsOptions.new && (
          <>
            <div className="my-3">
              <WTextFields
                id="colection-name"
                textLabel="Nombre de la colecion"
                placeholder="Ej: Gatos Cryptos"
                info="Coloca el nombre de la colecion"
              />
            </div>
            <div className="my-3">
              <WTextFields
                id="colection-ur"
                textLabel="url identificativo (opcional)"
                placeholder="gatos"
                info="Esta es una url corta se usara en nuestra pagina si la collecion tendra una pagina propia tendras que editarlo manualmente"
              />
            </div>
            <div className="my-3">
              <WTextFields
                id="colection-symbol"
                textLabel="Simbolo *"
                placeholder="Ej: CGATO"
                info="Coloque el simbolo que resa representativo de tu nft"
              />
            </div>
          </>
        )}

        <div className="grid grid-cols-2 ">
          <div className="mr-[5px]">
            <WTextFields
              id="colection-fee"
              textLabel="Retgalias *"
              placeholder="Ej: 5%"
              info="colola el marjen de regalias entre 1 y 50%"
              type="number"
            />
          </div>
          <div className="ml-[5px]">
            <WTextFields
              id="nft-quantity"
              textLabel="Numeros de copias NFTS *"
              placeholder="Ej: 1"
              info="Numero de copioas maximo por nft 1000"
              type="number"
            />
          </div>
        </div>

        <div className="w-[100%] flex justify-center mt-[20px] p-[15px]">
          <button
            type="submit"
            className="wolf-buttom wolf-buttom-primary w-[100%] max-w-[400px]"
          >
            Crear
          </button>
        </div>
      </form>
    </>
  );
}
