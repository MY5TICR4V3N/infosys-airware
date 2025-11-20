import { useState, useEffect , useContext} from "react";
import AirQualityCard from "../components/AirQualityCard";
import Suggestions from "../components/Suggestions";
import AlertBox from "../components/AlertBox";
import { motion } from "framer-motion";
import axios from "axios"

import { DataContext } from "../App";

/*export default function Dashboard() {
  const [data, setData] = useState({ PM25: 35, CO2: 410, NO2: 22, AQI: 120 });

  useEffect(() => {
    const interval = setInterval(() => {
      setData({
        PM25: Math.floor(Math.random() * 100),
        CO2: 400 + Math.floor(Math.random() * 200),
        NO2: Math.floor(Math.random() * 60),
        AQI: Math.floor(Math.random() * 250),
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);*/

export default function AirQualityData(){
  const data = useContext(DataContext);







  return (
    <motion.div
      initial={{ opacity: 0 ,y:30}}
      animate={{ opacity: 1 , y:0}}
      className="flex flex-col items-center gap-6 mt-6"
    >
      <h1 className="text-4xl font-extrabold text-sky-700 mb-4">
        ⛅ Real-Time Air Quality Dashboard
      </h1>
      <AirQualityCard data={data} />
      
      <AlertBox aqi={data["AQI"]} />
      <Suggestions aqi={data["AQI"]} />
      
    </motion.div>
  );
}

