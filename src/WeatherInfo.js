import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import WeatherTemperature from "./WeatherTemperature";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="info-container p-3">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row">
          <div className="col-md-4 text-center">
            <img src={props.data.iconUrl} alt={props.data.description} />{" "}
          </div>
          <div className="col-md-4 text-center">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
          <div className="col-md-4 text-center">
            <ul>
              <li>Humidity : {props.data.humidity}%</li>
              <li>Wind : {props.data.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
