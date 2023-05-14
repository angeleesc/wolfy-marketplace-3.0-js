import React from "react";
import WolfTinking from "../icons/WolfTinking";

export default function LoadingSection() {
  return (
    <div className="loading-secction">
      <h3>Cargando</h3>
      <div className="icon section">
        <WolfTinking  size="90" />
      </div>
    </div>
  );
}
