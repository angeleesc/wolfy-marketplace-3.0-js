import React from "react";
import "./explorer-menus.scss";
import BlockchainFillter from "../fillter/BlockchainFillter";
import SaleMethodFillter from "../fillter/SaleMethodFillter";
import RangePriceFillter from "../fillter/RangePriceFillter";
import SortByFillter from "../fillter/SortByFillter";
import DropMenuOptionFillter from "../fillter/DropMenuOption";
import {
  blockChainLisoption,
  saleMethodOptions,
  sortByOption,
} from "../../helpers/global-constants";
import { FaCubes, FaEthereum } from "react-icons/fa";
import { BiSort } from "react-icons/bi";

export default function ExplorerMenuFillter() {
  return (
    <div className="explorer-menu-fillter mb-[15px]">
      <h3>Filtro de busqueda</h3>
      <div className="explorer-menu-body">
        <div className="flex">
          <div className="mr-[5px]">
            <DropMenuOptionFillter
              label={"Blochain"}
              nameDafault={"Todos"}
              optioms={blockChainLisoption}
              icon={FaCubes}
            />
          </div>
          <div className="mx-[5px]">
            <DropMenuOptionFillter
              label={"Tipo de Operacion"}
              nameDafault={"Todos"}
              optioms={saleMethodOptions}
              icon={FaEthereum}
            />
          </div>

          <div className="ml-[5px]">
            <RangePriceFillter />
          </div>
        </div>
        <DropMenuOptionFillter
          label={"Orodernar por"}
          nameDafault={"Mas nuevo"}
          optioms={sortByOption}
          icon={BiSort}
        />
      </div>
    </div>
  );
}
