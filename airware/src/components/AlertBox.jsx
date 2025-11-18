import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

export default function AlertBox({ aqi }) {
  if (aqi < 150) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="alert alert-error shadow-lg mt-6 bg-red-200/70 border border-red-400"
    >
      <AlertTriangle />
      <span className="font-semibold text-red-900">
        Warning: Air quality is unhealthy! Avoid outdoor exposure.
      </span>
    </motion.div>
  );
}
