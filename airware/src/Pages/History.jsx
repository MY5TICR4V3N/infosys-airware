import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

export default function History() {
  const historyData = [
    { time: "10:00", AQI: 80 },
    { time: "11:00", AQI: 120 },
    { time: "12:00", AQI: 180 },
    { time: "13:00", AQI: 95 },
    { time: "14:00", AQI: 60 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto mt-10 bg-white/60 p-6 rounded-2xl shadow-lg backdrop-blur-md border border-white/40"
    >
      <h1 className="text-3xl font-bold text-sky-700 mb-4">📈 Air Quality History</h1>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={historyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="AQI" stroke="#0284c7" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

