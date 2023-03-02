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
              ...atribute
            })

          default:
            break;
        }
      }
    }
  });
  console.log("number atributes");
  console.log(numberAtributes);

  console.log("boost number atributes");
  console.log(boostNumberAtributes);

  console.log("precentage atributes");
  console.log(boostPercentageAtributes);

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
