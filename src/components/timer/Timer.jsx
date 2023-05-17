import React, { useState } from "react";
import "./timer.scss";
import { differenceInSeconds } from "date-fns";
import { useEffect } from "react";

export default function Timer({ timeRef, setEndAction }) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [secconsd, setSecconsd] = useState(0);

  const updateTime = async () => {
    if (timeRef) {
      const currentTime = Date.now();

      const dif = differenceInSeconds(timeRef, currentTime);

      // console.log("falta");
      // console.log(dif);
      if (dif < 0) {
        setEndAction(false);
        return;
      }

      const daysD = parseInt(dif / 86400);
      const hoursD = Math.floor((dif / (1 * 60 * 60)) % 24);
      const minutesD = Math.floor((dif / 1 / 60) % 60);
      const secondsD = Math.floor(dif % 60);

      setDays(daysD);
      setHours(hoursD);
      setMinutes(minutesD);
      setSecconsd(secondsD);

      // console.log(
      //   "dias: ",
      //   daysD,
      //   "horas: ",
      //   hoursD,
      //   "munutos: ",
      //   minutesD,
      //   "Segundos: ",
      //   secondsD
      // );

      // console.log("dias: ", days);

      //  const diferentRef =
    }
  };

  useEffect(() => {
    const interval = setInterval(() => updateTime(), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer-container">
      {days > 0 && (
        <div className="timer-item">
          <span>Dias</span>
          <h3>{days}</h3>
        </div>
      )}
      {hours > 0 && (
        <div className="timer-item">
          <span>Horas</span>
          <h3> {hours} </h3>
        </div>
      )}
      {(
        <div className="timer-item">
          <span>Min</span>
          <h3>{minutes}</h3>
        </div>
      )}
      {(
        <div className="timer-item">
          <span>Seg</span>
          <h3>{secconsd}</h3>
        </div>
      )}
    </div>
  );
}
