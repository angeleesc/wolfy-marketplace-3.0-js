import { formatDistance, formatDistanceStrict } from "date-fns";
import { es } from "date-fns/locale";
import React from "react";

export default function AuctionHourglass({ endTime }) {
  console.log("finaliza");
  //   console.log(endTime);

  const { _seconds } = endTime;

  const time = Date.now();
  //   console.log(_seconds);
  const diff = _seconds * 1000 - time;

  const distance = formatDistanceStrict(_seconds * 1000, time, {
    locale: es,
  });
  //   console.log(distance);

  console.log();
  return (
    <div className="auction-hourglass">
      <div className="auction-hourglass-body">
        {diff > 0 ? (
          <div className="p-0 m-0 flex flex-col justify-center">
            <span>termina</span>
            <h3>{distance}</h3>
          </div>
        ) : (
          <div className="p-0 m-0 flex flex-col justify-center">
            <h3>Subasta finalizada</h3>
          </div>
        )}
      </div>
    </div>
  );
}
