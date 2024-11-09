import { CheckIcon } from "lucide-react";
import { motion } from "framer-motion";

export const ActivityCard = ({ title, activities }) => (
  <motion.div
    className="bg-white/10 rounded-lg p-4 transition-all hover:bg-white/20"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <h3 className="text-white text-lg font-medium mb-2">{title}</h3>
    <ul className="space-y-2 text-white/80">
      {activities.map((activity, index) => (
        <li key={index} className="flex items-center gap-2">
          <div className="p-2 bg-white/10 rounded-full">
            <CheckIcon className="w-5 h-5 text-white" />
          </div>
          <span>{activity}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);
