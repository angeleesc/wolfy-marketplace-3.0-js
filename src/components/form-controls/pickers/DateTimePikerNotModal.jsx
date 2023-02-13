import { TextField } from "@mui/material";
import {
  CalendarPicker,
  ClockPicker,
  LocalizationProvider,
  StaticDatePicker,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { format } from "date-fns";
import React, { useState } from "react";

import "./date-picker.scss";

export default function DateTimePikerNotModal({
  textLabel = "Titulo",
  defaultDate = new Date(),
  info = "aqui se coloca la informacion",
  id,
}) {
  const [value, setValue] = useState(defaultDate);
  const [viewClock, setViewClock] = useState("hours");

  const formatedDate = format(value, "MMMM");


  return (
    <div className="date-picker">
      <label htmlFor={id}>
        <span>{textLabel}</span>
      </label>
      <div className="input-group">
        <input type="text" id={id}  value={formatedDate} />
      </div>

      <span>{info}</span>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="w-[100%]">
          <div className="mb-[15px]">
            <span>Fecha</span>
          </div>
          <StaticDatePicker
            displayStaticWrapperAs="desktop"
            openTo="day"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />

          <div className="relative">
            <div className="mb-[15px]">
              <span>Hora</span>
              {/* <h4 className="text-center">{renderTime}</h4> */}
            </div>
            <ClockPicker
              date={value}
              onChange={(newDate) => {
                setValue(newDate);
              }}
              onViewChange={(view) => {
                setViewClock(view);
              }}
              view={viewClock}
              views={["hours", "minutes", "hours"]}
              ampm
              ampmInClock={true}
            />
          </div>
        </div>

        {/* <CalendarPicker
          date={new Date()}
          onChange={(newDate) => {
            console.log(newDate);
          }}
        /> */}
      </LocalizationProvider>
    </div>
  );
}
