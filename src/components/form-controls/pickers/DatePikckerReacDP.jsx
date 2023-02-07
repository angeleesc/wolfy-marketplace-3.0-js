import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./c-date-picker.scss";


export default function DatePikckerReacDP() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          inline
          monthsShown={2}
          
        />
    </div>
  );
}
