import React, { useEffect, useRef, useState } from "react";
import "./Weather.css";
import search_icon from "../assets/search.png";
import clear from "../assets/clear.png";
import cloud from "../assets/cloud.png";
import drizzle from "../assets/drizzle.png";
import humidity from "../assets/humidity.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";
import wind from "../assets/wind.png";

function Weather() {
  const inputRef = useRef();
  const [data, setData] = useState({
    humidity: null,
    windSpeed: null,
    temperature: null,
    location: "",
    icon: clear,
  });
  const [error, setError] = useState("");

  const allIcons = {
    "01d": clear,
    "01n": clear,
    "02d": cloud,
    "02n": cloud,
    "03d": cloud,
    "03n": cloud,
    "04d": drizzle,
    "04n": drizzle,
    "09d": rain,
    "09n": rain,
    "010d": rain,
    "010n": rain,
    "013d": snow,
    "013n": snow,
  };

  const fetchApi = async (city_name) => {
    try {
      setError(""); // Reset error message before fetching new data
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&appid=${apiKey}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("City not found or issue with the request");
      }

      const jsonData = await response.json();
      const icon = allIcons[jsonData.weather[0].icon] || clear;
      setData({
        humidity: jsonData.main.humidity,
        windSpeed: jsonData.wind.speed,
        temperature: Math.floor(jsonData.main.temp),
        location: jsonData.name,
        icon: icon,
      });
    } catch (error) {
      setError(error.message); // Display error message
      console.error("Error fetching weather data:", error);
    }
  };

  const handleSearch = () => {
    const cityName = inputRef.current.value;
    if (cityName) {
      fetchApi(cityName);
    } else {
      setError("Please enter a city name");
    }
  };

  useEffect(() => {
    fetchApi("london"); // Default city
  }, []);

  return (
    <div className="weather">
      <div className="search-bar">
        <input ref={inputRef} type="text" placeholder="Search" />
        <img src={search_icon} alt="search_icon" onClick={handleSearch} />
      </div>

      {error && <p className="error-message">{error}</p>}

      {data.location && (
        <>
          <img src={data.icon} alt="weather-icon" className="weather-icon" />
          <p className="temperature">{data.temperature}°C</p>
          <p className="location">{data.location}</p>
          <div className="weather-data">
            <div className="col">
              <img src={humidity} alt="humidity-icon" />
              <div>
                <p>{data.humidity}%</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className="col">
              <img src={wind} alt="wind-icon" />
              <div>
                <p>{data.windSpeed} m/s</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Weather;
