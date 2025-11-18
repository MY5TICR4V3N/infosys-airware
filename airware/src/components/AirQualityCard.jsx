import { motion } from "framer-motion";
import { Wind, Cloud, Activity, Thermometer } from "lucide-react";

export default function AirQualityCard({ data }) {
  

  const getAQIColor = (aqi) => {
    if (aqi <= 50) return "bg-emerald-200 text-emerald-800";
    if (aqi <= 100) return "bg-yellow-200 text-yellow-800";
    if (aqi <= 200) return "bg-orange-200 text-orange-800";
    return "bg-red-200 text-red-800";
  };

 

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`card p-6 w-96 shadow-lg rounded-2xl bg-white/60 backdrop-blur-md border border-white/30`}
    >
      <h2 className="font-bold text-xl text-sky-800 mb-4 flex items-center gap-2">
        <Thermometer className="text-sky-500" /> Air Quality Overview
      </h2>

      <div className={`text-center font-semibold py-2 rounded-lg ${getAQIColor(data["Ozone"])} mb-4`}>
        AQI: {data["Ozone"]}
      </div>

      
      <div className="grid grid-cols-3 gap-3">
        <div  className="p-3 rounded-lg bg-sky-50 text-center shadow-sm hover:shadow-md transition">
          <div className="flex justify-center text-sky-500 mb-1"><Wind /></div>
          <p className="font-semibold">PM2.5</p>
          <p className="text-gray-600 text-sm">
              {data["PM2.5"]} µg/m³
            </p>
        </div>

        <div  className="p-3 rounded-lg bg-sky-50 text-center shadow-sm hover:shadow-md transition">
          <div className="flex justify-center text-sky-500 mb-1"><Cloud /></div>
          <p className="font-semibold">CO</p>
          <p className="text-gray-600 text-sm">
              {data["CO"]} ppm
            </p>
        </div>

        <div  className="p-3 rounded-lg bg-sky-50 text-center shadow-sm hover:shadow-md transition">
          <div className="flex justify-center text-sky-500 mb-1"><Activity /></div>
          <p className="font-semibold">NO₂</p>
          <p className="text-gray-600 text-sm">
              {data["NO2"]} µg/m³
            </p>
        </div>
      </div>
    </motion.div>
  );
}

