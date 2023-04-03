import React, { useState } from "react";
import "./Weather.css";
export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div>
        <span className="temp">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |
          <a className="temp-link" href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="temp">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a className="temp-link" href="/" onClick={convertToCelsius}>
            °C
          </a>
          | °F
        </span>
      </div>
    );
  }
}
