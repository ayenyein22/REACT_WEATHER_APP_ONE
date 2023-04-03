import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function ShowWeather(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
    });
  }
  function search() {
    const apiKey = "badcd8bc54eeb6f1c460o053a86ct5d0";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(ShowWeather);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }
  function searchCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather p-5">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input
              className="form-input"
              type="search"
              placeholder="Enter a city..."
              onChange={searchCity}
            />
            <input
              type="submit"
              className="btn btn-primary form-button"
              value="Search"
            />
          </form>
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
