import React, { useRef, useState } from "react";
import useClickOutSideElement from "../../global-hook/useClickOutSideElement";
import { BiReset } from "react-icons/bi";
import "./drop-menu.scss";
import WolfTooltip from "../tooltip/WolfTooltip";

export default function DropMenuOptionFillter({
  nameDafault,
  label,
  optioms,
  icon: Icon,
}) {
  const [openDrop, setOpenDrop] = useState(false);
  const [currentValue, setCurrentValue] = useState("");
  const [valueUi, setValueUi] = useState("");
  const [currentIcon, setCurrentIcon] = useState(null);

  const activatorLisRef = useRef();
  const dropDownlistRef = useRef();

  let RenderCurrenIcon = currentIcon ? optioms[currentIcon - 1].icon : null;

  const closeDropMenu = (e) => {
    setOpenDrop(false);
  };

  useClickOutSideElement(activatorLisRef, closeDropMenu, dropDownlistRef);

  const resetValue = () => {
    setCurrentValue("");
    setValueUi("");
    setCurrentIcon(null);
  };

  return (
    <div className="drop-menu-container">
      <span className="text-[14px] text-wolf-gray-light-1200 mb-2 flex">
        {Icon && (
          <span className="text-[16px] mr-[10px]">
            <Icon />
          </span>
        )}
        {label || "Label?"}
      </span>
      <div className="w-[100%] relative">
        {currentValue && (
          <WolfTooltip title="resetear" arrow>
            <button className="reset-button" onClick={resetValue}>
              <BiReset />
            </button>
          </WolfTooltip>
        )}

        <button
          className="wolf-buttom drop-menu-button"
          onClick={() => {
            setOpenDrop(!openDrop);
          }}
          ref={activatorLisRef}
        >
          <h3 className="flex items-center">
            {RenderCurrenIcon && (
              <span className="mr-[10px]">
                <RenderCurrenIcon />
              </span>
            )}
            {valueUi ? valueUi : nameDafault || "none"}
          </h3>
        </button>
      </div>
      {openDrop && (
        <div className="drop-menu-item-xd" ref={dropDownlistRef}>
          <ul>
            {optioms.map((options, i) => {
              const { icon: IconRenderOp } = options;

              return (
                <li
                  key={"blockhcainoption-" + i}
                  onClick={() => {
                    console.log("cliccleado", options.name);
                    setCurrentValue(options.value);
                    setValueUi(options.name);
                    setOpenDrop(false);

                    if (IconRenderOp) {
                      setCurrentIcon(i + 1);
                    } else {
                      setCurrentIcon(null);
                    }
                  }}
                >
                  <h4 className="flex items-center whitespace-nowrap	">
                    {IconRenderOp && (
                      <span className="text-[16px] mr-[5px]">
                        <IconRenderOp />
                      </span>
                    )}
                    {options.name}
                  </h4>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
