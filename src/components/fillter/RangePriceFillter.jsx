import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import useClickOutSideElement from "../../global-hook/useClickOutSideElement";
import WTextFields from "../form-controls/inputs/WTextFields";

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
          className="drop-menu-item-xd 
         flex"
          ref={dropDownlistRef}
        >
          <div className="flex w-[100%]">
            <form>
              <div className="flex">
                <div className="w-[100px] mr-[10px]">
                  <WTextFields />
                </div>
                <div className="w-[100px] ml-[10px]">
                  <WTextFields />
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
