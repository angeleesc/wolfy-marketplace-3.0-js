import React, { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import useClickOutSideElements from "../../global-hook/useClickOutSideElements";
import HabugerMenuLayuot from "./HabugerMenuLayuot";

export default function HambugerDropmenu({ children }) {
  return (
    <HabugerMenuLayuot icon={<FaBars />}>
      <ul>
        <li>explorar</li>
        <li>nueva nft</li>
      </ul>
    </HabugerMenuLayuot>
  );
}
