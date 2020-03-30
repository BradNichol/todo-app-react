import React from "react";
import "./DatePeriod.css";

function DatePeriod(props) {
  return (
    <div className="row mt-4">
      <div className="col">
        <h1 className="PeriodTitles">{props.title}</h1>
      </div>
    </div>
  );
}

export default DatePeriod;
