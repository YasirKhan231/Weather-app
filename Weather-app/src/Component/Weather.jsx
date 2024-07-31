import React from "react";
import "./Weather.css";
import search_icon from "../assets/search.png";
import Clear from "../assets/clear.png";
import cloud from "../assets/cloud.png";
import drizzle from "../assets/drizzle.png";
import humidity from "../assets/humidity.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";
import wind from "../assets/wind.png";

function Weather() {
  return (
    <div className="weather">
      <div className="searchbar">
        <input type="text " placeholder="Search" />
        <img src={search_icon} alt="" />
      </div>
      <img src={Clear} className="weather-icon" alt="" />
      <p className="temperature"> 16 °C</p>
      <p className="city">London </p>
      <div className="weather-data">
        <div className="col1">
          <img src={humidity} alt="" />
          <div>
            <p>91 %</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col2">
          <img src={wind} alt="" />
          <div>
            <p>3.6 Km/h</p>
            <span>Humidity</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
