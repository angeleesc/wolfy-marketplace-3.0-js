import React from "react";

export default function AtributesDisplay({ attributes, trayCollectionDef }) {
  // definimos el tipo de pantalllas

  return (
    <div className="atributes-container mt-[15px]">
      {attributes.map((atribute, i) => {
        return (
          <div className="atribute-item" key={"atribute-" + i}>
            <span className="trait-type-text">{atribute["trait_type"]}</span>
            <span className="value">{atribute["value"]}</span>
          </div>
        );
      })}
    </div>
  );
}
