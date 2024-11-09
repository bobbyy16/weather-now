import { Droplets, MapPin, Wind } from "lucide-react";
import { motion } from "framer-motion";
import { WeatherCard } from "./WeatherCard";

export const WeatherDisplay = ({ data }) => (
  <div className="space-y-6">
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center gap-2 text-white/80 mb-2">
        <MapPin className="w-5 h-5" />
        <span className="font-medium">{data.location}</span>
      </div>
      <div className="relative">
        <img
          src={data.icon}
          alt="weather icon"
          className="mx-auto w-32 h-32 drop-shadow-lg"
        />
      </div>
      <p className="text-6xl font-bold text-white mb-2">{data.temperature}°C</p>
      <p className="text-white/80 capitalize text-lg">{data.description}</p>
    </motion.div>

    <div className="grid grid-cols-2 gap-4">
      <WeatherCard
        label="Humidity"
        value={`${data.humidity}%`}
        icon={Droplets}
      />
      <WeatherCard
        label="Wind Speed"
        value={`${data.windSpeed} m/s`}
        icon={Wind}
      />
    </div>
  </div>
);
