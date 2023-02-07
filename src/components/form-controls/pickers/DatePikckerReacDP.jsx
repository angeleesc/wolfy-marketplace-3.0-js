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
        <div>
          <input type="time" />
        </div>
      </div>
    </div>
  );
}
