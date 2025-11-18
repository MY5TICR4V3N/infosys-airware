import { motion } from "framer-motion";

export default function Suggestions({ aqi }) {
  const getSuggestion = () => {
    if (aqi <= 50) return "The air is fresh 🌿 — go for a walk!";
    if (aqi <= 100) return "Moderate air quality — sensitive groups should be cautious.";
    if (aqi <= 200) return "Unhealthy — wear a mask outdoors 😷";
    return "Very unhealthy — stay indoors and use an air purifier 🚫";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mt-6 p-5 bg-white/60 backdrop-blur-lg rounded-2xl shadow-md border border-white/30"
    >
      <h2 className="text-xl font-semibold text-sky-800 mb-2">Suggestion 💡</h2>
      <p className="text-gray-700">{getSuggestion()}</p>
    </motion.div>
  );
}
