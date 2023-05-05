import React from "react";
import { FaSearch } from "react-icons/fa";
import HabugerMenuLayuot from "./HabugerMenuLayuot";

import { BiSearch } from "react-icons/bi";
export default function HambuguerSearchMenu() {
  return (
    <HabugerMenuLayuot icon={<BiSearch />}>
      <h3>Secion de busqueda</h3>
    </HabugerMenuLayuot>
  );
}
