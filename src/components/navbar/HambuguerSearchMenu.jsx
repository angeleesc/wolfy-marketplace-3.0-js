import React from "react";
import { FaSearch } from "react-icons/fa";
import HabugerMenuLayuot from "./HabugerMenuLayuot";

export default function HambuguerSearchMenu() {
  return (
    <HabugerMenuLayuot icon={<FaSearch />}>
      <h3>Secion de busqueda</h3>
    </HabugerMenuLayuot>
  );
}
