import React from "react";
import "./explorer-menus.scss";
import BlockchainFillter from "../fillter/BlockchainFillter";
import SaleMethodFillter from "../fillter/SaleMethodFillter";
import RangePriceFillter from "../fillter/RangePriceFillter";
import SortByFillter from "../fillter/SortByFillter";


export default function ExplorerMenuFillter() {



  return (
    <div className="explorer-menu-fillter mb-[15px]">
      <BlockchainFillter />
      <SaleMethodFillter/>
      <RangePriceFillter/>
      <SortByFillter/>



    </div>
  );
}
