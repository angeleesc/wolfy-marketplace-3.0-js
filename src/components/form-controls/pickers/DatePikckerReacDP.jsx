import React, { useState } from "react";
import addTime from "date-fns/add";
import DatePicker from "react-datepicker";
import "./c-date-picker.scss";
import "./date-picker.scss";

export default function DatePikckerReacDP({ defaultTime = new Date() }) {
  const [startDate, setStartDate] = useState(defaultTime);
  const [endDate, setEndDate] = useState(
    addTime(defaultTime, {
      days: 1,
    })
  );
  const onChange = (dates) => {
    const [start, end] = dates;

    console.log("fecha de inicio", start);
    console.log("fecha final", end);

    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div>
      <div className="calendar-box">
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          selectsDisabledDaysInRange
          inline
          monthsShown={2}
        />
        <div className="grid  grid-cols-2">
          <label className="w-custom-time-piker">
            <input type="time" />
          </label>
          <label className="w-custom-time-piker">
            <input type="time" />
          </label>
        </div>
      </div>
    </div>
  );
}
