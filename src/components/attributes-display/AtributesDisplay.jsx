import React from "react";

export default function AtributesDisplay({ attributes, trayCollectionDef }) {
  // definimos el tipo de pantalllas

  // defitimos la clasificacion de los atributos

  const basicAtributes = [];
  const rangeAtribute = [];
  const dateAtribute = [];
  const boostPercentageAtributes = [];
  const boostNumberAtributes = [];
  const numberAtributes = [];

  attributes.map((atribute, i) => {
    const getLimitRange = trayCollectionDef.filter((def) => {
      return def["trait_type"] === atribute["trait_type"];
    });

    if (atribute["trait_type"]) {
      if (atribute["display_type"]) {
        // console.log(atribute["display_type"])

        switch (atribute["display_type"]) {
          case "number":
            // console.log(getLimitRange)
            numberAtributes.push({
              ...getLimitRange[0],
              ...atribute,
            });

            break;

          case "boost_number":
            boostNumberAtributes.push({
              ...getLimitRange[0],
              ...atribute,
            });

            break;

          case "boost_percentage":
            boostPercentageAtributes.push({
              ...getLimitRange[0],
              ...atribute,
            });

            break;

          case "date":
            dateAtribute.push({
              ...getLimitRange[0],
              ...atribute,
            });

          default:
            break;
        }
      } else {
        if (typeof atribute["value"] === "number") {
          rangeAtribute.push({
            ...atribute,
            ...getLimitRange[0],
          });
        }

        if (typeof atribute["value"] === "string") {
          basicAtributes.push({
            ...atribute,
            ...getLimitRange[0],
          });
        }

        // console.log(atribute["trait_type"])
        // console.log(typeof(atribute["value"]))
      }
    } else {
      basicAtributes.push({
        ...atribute,
        ...getLimitRange[0],
      });
    }
  });
  console.log("number atributes");
  console.log(numberAtributes);

  console.log("boost number atributes");
  console.log(boostNumberAtributes);

  console.log("precentage atributes");
  console.log(boostPercentageAtributes);

  console.log("date atributes ");
  console.log(dateAtribute);

  console.log("range atributes");
  console.log(rangeAtribute);

  console.log("basic atributes");
  console.log(basicAtributes);

  return (
    <>
      <h3 className="mt-2 font-semibold text-wolf-gray-light-1600">
        Atributos
      </h3>
      <div className="atributes-container mt-[15px]">
        {basicAtributes.map((atribute, i) => {
          return (
            <div className="atribute-item" key={"atribute-" + i}>
              {<span className="trait-type-text">{atribute["trait_type"]?atribute["trait_type"]: "Propiedad"}</span>}
              <span className="value">{atribute["value"]}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
