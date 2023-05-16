import React from "react";
import "./timer.scss";

export default function Timer({ timeRef }) {
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
