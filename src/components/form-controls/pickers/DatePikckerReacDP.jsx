import React, { useEffect, useState } from "react";
import addTime from "date-fns/add";
import DatePicker from "react-datepicker";
import "./c-date-picker.scss";
import "./date-picker.scss";
import formatDate from "date-fns/format";

// import { ClockPicker, LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

export default function DatePikckerReacDP({
  defaultTime = new Date(),
  onChange: onChangeProps,
}) {
  const [startDate, setStartDate] = useState(defaultTime);
  const [endDate, setEndDate] = useState(
    addTime(defaultTime, {
      days: 1,
    })
  );

  const formatStratDate = formatDate(startDate, "do MMMM yyyy h:mm a");
  const formatEndDate = endDate
    ? formatDate(endDate, "do MMMM yyyy h:mm a")
    : "";

  const formatStraTime = formatDate(startDate, "HH:mm");
  const formatEndTime = endDate ? formatDate(endDate, "HH:mm") : "";

  const onChange = (dates) => {
    const [start, end] = dates;

    // console.log("fecha de inicio", start);
    // console.log("fecha final", end);

    setStartDate(start);
    setEndDate(end);
  };

  useEffect(() => {
    onChangeProps({
      startDate,
      endDate
    });
  }, [startDate, endDate]);

  return (
    <div className="w-date-picker">
      <h3 className="my-[15px]">Tiempo de la subasta *</h3>
      <div className="grid grid-cols-2">
        <div className="wolf-form-control ">
          <label className="wolft-form-control-label mb-[5px] mr-[5px] flex flex-col ">
            <span>Inicio De subasta</span>
            <input
              type="text"
              className="wolf-form-control-text-input"
              value={formatStratDate}
              readOnly
            />
          </label>
        </div>
        <div className="wolf-form-control ">
          <label className="wolft-form-control-label mb-[5px] ml-[5px] flex flex-col ">
            <span>Fin de la subasta</span>
            <input
              type="text"
              className="wolf-form-control-text-input"
              readOnly
              value={formatEndDate}
            />
          </label>
        </div>
      </div>
      <div className="my-[10px]">
        <p className="wolf-form-control-info">
          Para escoger la fecha inicial y final utilice el calendario de abajo
        </p>
      </div>
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
            <span>Hora De inicio</span>
            <input
              type="time"
              defaultValue={formatStraTime}
              onChange={(e) => {
                const hours = e.target.value.substring(0, 2);
                // console.log("hora extraida", hours);
                const minutes = e.target.value.substring(3, 5);
                // console.log("munotos extraidos", minutes);

                if (startDate) {
                  const dateCero = startDate.toDateString();
                  console.log(dateCero);
                  const cuurentDate = addTime(new Date(dateCero), {
                    hours,
                    minutes,
                  });
                  //   console.log(cuurentDate);
                  setStartDate(cuurentDate);
                }
              }}
            />
          </label>
          <label className="w-custom-time-piker">
            <span>Hora De finalizacion</span>
            <input
              type="time"
              onChange={(e) => {
                // console.log(e.target.value);

                const hours = e.target.value.substring(0, 2);
                // console.log("hora extraida", hours);
                const minutes = e.target.value.substring(3, 5);
                // console.log("munotos extraidos", minutes);

                if (endDate) {
                  const dateCero = endDate.toDateString();
                  //   console.log(dateCero);
                  const cuurentDate = addTime(new Date(dateCero), {
                    hours,
                    minutes,
                  });
                  //   console.log(cuurentDate);
                  setEndDate(cuurentDate);
                }
              }}
              value={formatEndTime}
            />
          </label>
        </div>

        {/* <div className="relative">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
          <ClockPicker 
          date={startDate} 
          onChange={(newDate) => setStartDate(newDate)}
          onViewChange={(view) => {
            setStarViewClock(view);
          }}
          view={starViewClock}
          views={["hours", "minutes", "hours"]}
          ampm
          ampmInClock={true}
          />
        </LocalizationProvider>
      </div> */}
      </div>
    </div>
  );
}
