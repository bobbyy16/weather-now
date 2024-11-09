import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SearchBar } from "./Searchbar";
import { ErrorMessage } from "./ErrorMessage";
import { WeatherDisplay } from "./WeatherDisplay";
import { ActivityCard } from "./ActivityCard";

const Weather = () => {
  const inputRef = useRef();
  const [data, setData] = useState({
    humidity: null,
    windSpeed: null,
    temperature: null,
    location: "",
    description: "",
    icon: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchApi = async (city_name) => {
    try {
      setLoading(true);
      setError("");
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&appid=${apiKey}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(
          "City not found. Please check the spelling and try again."
        );
      }

      const jsonData = await response.json();
      setData({
        humidity: jsonData.main.humidity,
        windSpeed: jsonData.wind.speed,
        temperature: Math.floor(jsonData.main.temp),
        location: jsonData.name,
        description: jsonData.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${jsonData.weather[0].icon}@4x.png`,
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
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

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    fetchApi("Mysuru");
  }, []);

  const getSuggestedActivities = () => {
    const { description, temperature } = data;
    let activities = [];

    if (description.includes("sunny") || description.includes("clear")) {
      activities = [
        "Go for a hike",
        "Spend time at the park",
        "Outdoor picnic",
        "Ride a bike",
      ];
    } else if (
      description.includes("rain") ||
      description.includes("drizzle")
    ) {
      activities = [
        "Visit a museum or art gallery",
        "Attend a cooking class",
        "Go bowling or to an indoor trampoline park",
        "Explore local shops and cafes",
      ];
    } else if (description.includes("wind")) {
      activities = [
        "Go kite flying",
        "Attend a local sporting event",
        "Visit an indoor climbing gym",
        "Explore a local nature preserve",
      ];
    } else if (temperature < 10) {
      activities = [
        "Go skiing or snowboarding",
        "Attend a concert or theatre performance",
        "Visit a cozy coffee shop",
        "Curl up at home with a good book",
      ];
    } else {
      activities = [
        "Go for a walk or jog",
        "Play a sport like tennis or basketball",
        "Visit a local festival or event",
        "Explore a new neighborhood",
      ];
    }

    return activities;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-4 flex items-center justify-center">
      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl backdrop-blur-lg">
        <motion.div
          className="p-6 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SearchBar
            inputRef={inputRef}
            handleSearch={handleSearch}
            handleKeyPress={handleKeyPress}
          />
          <ErrorMessage error={error} />
          {!error && !loading && data.location && (
            <>
              <WeatherDisplay data={data} />
              <div>
                <ActivityCard
                  title="Suggested Activities"
                  activities={getSuggestedActivities()}
                />
              </div>
            </>
          )}
          {loading && (
            <div className="flex justify-center items-center min-h-[300px]">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Weather;
