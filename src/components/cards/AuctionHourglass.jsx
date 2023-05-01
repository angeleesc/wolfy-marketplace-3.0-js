import React from "react";

export default function AuctionHourglass({ endTime }) {
  console.log("finaliza");
  //   console.log(endTime);

  const { _seconds } = endTime;

  console.log(_seconds);

  console.log();
  return (
    <div className="auction-hourglass">
      <div className="auction-hourglass-body">
        <div className="p-0 m-0 flex flex-col justify-center">
          <span>termina</span>
          <h3>3 minutos</h3>
        </div>
      </div>
    </div>
  );
}
