import React from "react";
import "./explorer-menus.scss";
import BlockchainFillter from "../fillter/BlockchainFillter";
import SaleMethodFillter from "../fillter/SaleMethodFillter";
import RangePriceFillter from "../fillter/RangePriceFillter";
import SortByFillter from "../fillter/SortByFillter";
import DropMenuOptionFillter from "../fillter/DropMenuOption";
import { blockChainLisoption } from "../../helpers/global-constants";

export default function ExplorerMenuFillter() {
  return (
    <div className="explorer-menu-fillter mb-[15px]">
      <h3>Filtro de busqueda</h3>
      <div className="explorer-menu-body">
        <div className="flex">
          <div className="mr-[5px]">
            <DropMenuOptionFillter
              label={"Blochain"}
              nameDafault={"blockChain"}
              optioms={blockChainLisoption}
            />
          </div>
          <div className="mx-[5px]">
            <DropMenuOptionFillter
              label={"Metodo de operacion"}
              nameDafault={"blockChain"}
              optioms={blockChainLisoption}
            />
          </div>

          <div className="ml-[5px]">
            <RangePriceFillter />
          </div>
        </div>
        <DropMenuOptionFillter
          label={"Orodernar por"}
          nameDafault={"blockChain"}
          optioms={blockChainLisoption}
        />
      </div>
    </div>
  );
}
