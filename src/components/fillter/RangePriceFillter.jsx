import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import useClickOutSideElement from "../../global-hook/useClickOutSideElement";
import WTextFields from "../form-controls/inputs/WTextFields";
import { preventScroll } from "../../controllers/domController";

export default function RangePriceFillter() {
  const [openDrop, setOpenDrop] = useState(false);
  const [currentValue, setCurrentValue] = useState("");
  const activatorLisRef = useRef();
  const dropDownlistRef = useRef();

  const closeDropMenu = (e) => {
    setOpenDrop(false);
  };

  useClickOutSideElement(activatorLisRef, closeDropMenu, dropDownlistRef);
  const { register, handleSubmit, reset } = useForm({});

  return (
    <div className="drop-menu-container flex justify-center">
      <span className="text-[16px] text-wolf-gray-light-1200 mb-2">
        Rango de percio
      </span>
      <button
        className="wolf-buttom drop-menu-button"
        onClick={() => {
          setOpenDrop(!openDrop);
        }}
        ref={activatorLisRef}
      >
        <h3>Rango de precio</h3>
      </button>
      {openDrop && (
        <div
          className="drop-menu-item-xd  range-option flex"
          ref={dropDownlistRef}
        >
          <div className="flex w-[100%]">
            <form>
              <div className="flex items-center">
                <div className="w-[100px] mr-[10px]">
                  <WTextFields
                    textLabel="Minimo"
                    type="number"
                    step="0.00000001"
                    onWheel={preventScroll}
                    placeholder="Ej 0.05"
                  />
                </div>
                <span className="text-wolf-gray-light-900 text-[12px]">
                  Hasta
                </span>
                <div className="w-[100px] ml-[10px]">
                  <WTextFields
                    textLabel="Maximo"
                    type="number"
                    step="0.00000001"
                    onWheel={preventScroll}
                    placeholder="Ej 2 ETH"
                  />
                </div>
              </div>
              <button className="wolf-buttom wolf-btn-secondary w-[100%] mt-[12px]">
                Aplicar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
