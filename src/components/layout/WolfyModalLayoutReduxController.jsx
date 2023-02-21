import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../features/modals/modalsSlice";

export default function WolfyModalLayoutReduxController({
  modalController,
  children,
}) {
  const modalState = useSelector((state) => state.modals[modalController]);
  const dispatch = useDispatch();

  // console.log(modalState);

  const { blockClose, open } = modalState;

  if (open === true)
    return (
      <div
        className="wolf-modal wolf-modal-glass wolf-modal-center"
        onClick={() => {
          dispatch(
            closeModal({
              modal: modalController,
            })
          );
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[100%] max-w-[360px]"
        >
          {children}
        </div>
      </div>
    );

  return null;
}
