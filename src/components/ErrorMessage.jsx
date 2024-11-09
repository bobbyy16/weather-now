import { AnimatePresence, motion } from "framer-motion";

export const ErrorMessage = ({ error }) => (
  <AnimatePresence>
    {error && (
      <motion.div
        className="flex gap-2 items-center p-4 rounded-lg bg-red-500/10 border border-red-500/20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <AlertCircle className="w-5 h-5 text-red-500" />
        <p className="text-red-500">{error}</p>
      </motion.div>
    )}
  </AnimatePresence>
);
