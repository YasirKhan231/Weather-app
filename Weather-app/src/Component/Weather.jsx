import React, { useEffect, useRef, useState } from "react";
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
  const inputref = useRef();
  const [weatherdata, setweatherdata] = useState(false);

  const allicons = {
    "01d": Clear,
    "01n": Clear,
    "02d": cloud,
    "02n": cloud,
    "03d": cloud,
    "03n": cloud,
    "04d": drizzle,
    "04n": drizzle,
    "09d": rain,
    "09n": rain,
    "10d": rain,
    "10n": rain,
    "13d": snow,
    "13n": snow,
  };

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const icon = allicons[data.weather[0].icon] || Clear;
      setweatherdata({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {}
  };
  useEffect(() => {
    search("jaipur");
  }, []);
  return (
    <div className="weather">
      <div className="searchbar">
        <input ref={inputref} type="text " placeholder="Search" />
        <img
          src={search_icon}
          alt=""
          onClick={() => search(inputref.current.value)}
        />
      </div>
      <img src={weatherdata.icon} className="weather-icon" alt="" />
      <p className="temperature">{weatherdata.temperature} °C</p>
      <p className="city">{weatherdata.location} </p>
      <div className="weather-data">
        <div className="col1">
          <img src={humidity} alt="" />
          <div>
            <p>{weatherdata.humidity} %</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col2">
          <img src={wind} alt="" />
          <div>
            <p>{weatherdata.windSpeed} Km/h</p>
            <span>WindSpeed</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
