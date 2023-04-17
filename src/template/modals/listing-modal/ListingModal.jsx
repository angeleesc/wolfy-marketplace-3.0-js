import React from "react";
import WolfyModalLayoutReduxController from "../../../components/layout/WolfyModalLayoutReduxController";
import { keyModalSate } from "../../../features/modals/modalsSlice";
import { useDispatch, useSelector } from "react-redux";
import { readyTosell3 } from "../../../controllers/makertPlaceSmarContractControllers";
import { smartContracts } from "../../../helpers/global-constants";

export default function ListingModal() {
  const modalData = useSelector(
    (state) => state.modals.listingModal.dataToProccess
  );

  console.log(modalData);

  const { contaract, nftType, tokenId } = modalData;

  const dispatch = useDispatch();

  const goToSell = async () => {
    const result = await readyTosell3(
      [tokenId],
      "0.0004",
      smartContracts.ERC721UUPS
    );
    console.log("operacion exitoxa listing modadl")
  };

  return (
    <WolfyModalLayoutReduxController
      modalController={keyModalSate.listingModal}
    >
      {modalData && (
        <div className="wolf-modal-body w-[100%] max-w-[560px] min-h-[40px]">
          <h3>proner en venta</h3>

          <button className=""
          onClick={goToSell}
          >poner en venta</button>
        </div>
      )}
    </WolfyModalLayoutReduxController>
  );
}
