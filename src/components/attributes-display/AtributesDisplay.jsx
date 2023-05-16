import React from "react";
import WLinearProgressBar from "../progres/WLinearProgressBar";
import { MdSell, MdBarChart, MdStars } from "react-icons/md";
import { BsFillLightningChargeFill } from "react-icons/bs";
import {
  Box,
  CircularProgress,
  Typography,
  circularProgressClasses,
} from "@mui/material";

export default function AtributesDisplay({ attributes, trayCollectionDef }) {
  const basicAtributes = [];
  const rangeAtribute = [];
  const dateAtribute = [];
  const boostPercentageAtributes = [];
  const boostNumberAtributes = [];
  const numberAtributes = [];
  // const unknowAtributesRarity = [];

  if (trayCollectionDef) {
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
  } else {
    attributes.map((atribute, i) => {
      console.log("no tienes atrubutos de referencia");
      basicAtributes.push(atribute);
    });
  }

  return (
    <>
      <h3 className="mt-[30px] flex font-semibold text-wolf-gray-light-1600  items-center">
        <span>Atributos</span> <MdSell className="ml-2" />
      </h3>
      <div className="atributes-container mt-[15px]">
        {basicAtributes.length > 0 &&
          basicAtributes.map((atribute, i) => {
            return (
              <div className="atribute-item" key={"atribute-" + i}>
                {
                  <span className="trait-type-text">
                    {atribute["trait_type"]
                      ? atribute["trait_type"]
                      : "Propiedad"}
                  </span>
                }
                {/* <div className="w-[80%] h-[1px] bg-wolf-blue-purple-400 mb-1 "></div> */}
                <span className="value">{atribute["value"]}</span>
                {atribute["rarity"] && (
                  <span className="rarity">Rareza {atribute["rarity"]}% </span>
                )}
              </div>
            );
          })}
      </div>
      {numberAtributes.length > 0 && (
        <>
          <h3 className="mt-[30px] flex items-center mb-[30px] font-semibold text-wolf-gray-light-1600">
            <span>Estadisticas</span>
            <MdBarChart className="ml-2" />
          </h3>
          <div className="number-atributes-container mb-[20px]">
            {numberAtributes.map((atribute, i) => {
              return (
                <div
                  className="number-atribute-item"
                  key={"number-atributes-" + i}
                >
                  <span className="atribute-n-key">
                    {atribute["trait_type"]
                      ? atribute["trait_type"]
                      : "Propiedad"}
                  </span>
                  <span className="atribute-n-value">
                    {atribute["value"] ? atribute["value"] : "Valor ?"}
                    {atribute["range"] && (
                      <span> {` de ${atribute["range"]}`} </span>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </>
      )}
      {rangeAtribute.length > 0 && (
        <>
          <h3 className="mt-[30px] flex items-center mb-[30px] font-semibold text-wolf-gray-light-1600">
            <span>Niveles</span> <MdStars className="ml-2" />
          </h3>
          <div className="range-atributes-container my-[15px]">
            {rangeAtribute.map((atribute, i) => {
              return (
                <React.Fragment key={"range-atribute-" + i}>
                  <div className="range-atributes-item">
                    <span className="range-a-key">
                      {atribute["trait_type"]
                        ? atribute["trait_type"]
                        : "Propiedad"}
                    </span>
                    <span className="range-a-value">
                      {atribute["value"]}
                      {atribute["range"] && ` de ${atribute["range"]}`}
                    </span>
                  </div>
                  {atribute["range"] && (
                    <WLinearProgressBar
                      className="mb-[12px]"
                      variant="determinate"
                      value={parseInt(
                        (atribute["value"] * 100) / atribute["range"]
                      )}
                    />
                  )}
                  {i < rangeAtribute.length - 1 && (
                    <div className="w-[100%] h-[1px] bg-wolf-gray-dark-800 mb-[5px]" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </>
      )}
      {boostPercentageAtributes.length > 0 && (
        <>
          <h3 className="mt-[30px] mb-[30px] flex items-center font-semibold text-wolf-gray-light-1600">
            <span>Impulsos</span>
            <BsFillLightningChargeFill className="ml-2" />
          </h3>

          <div className="atribute-boots-continer">
            {boostPercentageAtributes.length > 1 &&
              boostPercentageAtributes.map((atribute, i) => {
                // console.log("atributito", atribute);

                return (
                  <div
                    className="boost-percentage-item mt-[10px]"
                    key={"boostPercentageAtributes-" + i}
                  >
                    <span className="boots-key mb-[10px]">
                      {atribute["trait_type"]
                        ? atribute["trait_type"]
                        : "Propiedad"}
                    </span>
                    {atribute["value"] >= 0 ? (
                      <Box
                        sx={{ position: "relative", display: "inline-flex" }}
                      >
                        <CircularProgress
                          sx={{
                            position: "absolute",
                            color: "#23272f",
                            backgroundColor: "#0c0d10",
                            borderRadius: "50%",
                          }}
                          size={80}
                          variant="determinate"
                          value={100}
                        />
                        <CircularProgress
                          size={80}
                          variant="determinate"
                          value={parseInt(atribute["value"])}
                          sx={{
                            // position: "absolute",
                            color: "#3B43DD",
                            borderRadius: "50%",
                          }}
                        />
                        <Box
                          sx={{
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            position: "absolute",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <span className="text-wolf-gray-light-2000 text-[15px] font-semibold">
                            {`${atribute["value"]}%`}
                          </span>
                        </Box>
                      </Box>
                    ) : (
                      <div>
                        <span>???</span>
                      </div>
                    )}
                    {
                      <div className="w-[100%] h-[1px] bg-wolf-gray-dark-800 my-[12px]"></div>
                    }
                  </div>
                );
              })}

            {boostPercentageAtributes.length > 0 &&
              boostNumberAtributes.map((atribute, i) => {
                return (
                  <div
                    className="boost-percentage-item mt-[10px]"
                    key={"boostPercentageAtributes-" + i}
                  >
                    <span className="boots-key mb-[10px]">
                      {atribute["trait_type"]
                        ? atribute["trait_type"]
                        : "Propiedad"}
                    </span>
                    {atribute["value"] >= 0 ? (
                      <Box
                        sx={{ position: "relative", display: "inline-flex" }}
                      >
                        <CircularProgress
                          sx={{
                            position: "absolute",
                            color: "#23272f",
                            backgroundColor: "#0c0d10",
                            borderRadius: "50%",
                          }}
                          size={80}
                          variant="determinate"
                          value={100}
                        />
                        <CircularProgress
                          size={80}
                          variant="determinate"
                          value={100}
                          sx={{
                            // position: "absolute",
                            color: "#3B43DD",
                            borderRadius: "50%",
                          }}
                        />
                        <Box
                          sx={{
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            position: "absolute",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <span className="text-wolf-gray-light-2000 text-[15px] font-semibold">
                            {`${atribute["value"]}`}
                          </span>
                        </Box>
                      </Box>
                    ) : (
                      <div>
                        <span>???</span>
                      </div>
                    )}

                    {
                      <div className="w-[100%] h-[1px] bg-wolf-gray-dark-800 my-[12px]"></div>
                    }
                  </div>
                );
              })}
          </div>
        </>
      )}
    </>
  );
}
