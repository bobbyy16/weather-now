import { motion } from "framer-motion";

export const WeatherCard = ({ label, value, icon: Icon }) => (
  <motion.div
    className="flex items-center gap-3 bg-white/10 rounded-lg p-4 transition-all hover:bg-white/20"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="p-2 bg-white/10 rounded-full">
      <Icon className="w-5 h-5 text-white" />
    </div>
    <div>
      <p className="text-white/60 text-sm font-medium">{label}</p>
      <p className="text-white font-semibold">{value}</p>
    </div>
  </motion.div>
);
