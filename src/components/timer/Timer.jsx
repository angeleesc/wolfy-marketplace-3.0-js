import React from "react";
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

      console.log("falta");
      console.log(dif);
      if (dif < 0) {
        setEndAction(false);
        return;
      }

      const days = parseInt(dif / 86400);
      const daysR = dif % 86400;

      console.log("dias: ", days);

      //  const diferentRef =
    }
  };

  useEffect(() => {
    updateTime();
  }, []);

  return (
    <div className="timer-container">
      <div className="timer-item">
        <span>Dias</span>
        <h3>360</h3>
      </div>
      <div className="timer-item">
        <span>Horas</span>
        <h3>24</h3>
      </div>
      <div className="timer-item">
        <span>Min</span>
        <h3>60</h3>
      </div>
      <div className="timer-item">
        <span>Seg</span>
        <h3>60</h3>
      </div>
    </div>
  );
}
