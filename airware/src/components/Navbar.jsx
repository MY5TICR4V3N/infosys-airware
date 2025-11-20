import { CloudSun, LineChart, PieChart,Pen } from "lucide-react";

export default function Navbar() {
  return (
    <div className="navbar bg-white/70 backdrop-blur-lg shadow-md rounded-2xl w-full">
      <div className="flex-1 text-2xl font-extrabold text-sky-700 flex items-center gap-2">
        <CloudSun className="text-sky-500" /> AirWare
      </div>
      <div className="flex gap-3">
        <a href="/" className="btn btn-sm btn-ghost text-sky-600 hover:bg-sky-100 text-lg">Dashboard</a>
        <a href="/history" className="btn btn-sm btn-ghost text-sky-600 hover:bg-sky-100 flex items-center gap-1 text-lg">
          <LineChart size={16}/> History
        </a>
        <a href="/airComposition" className="btn btn-sm btn-ghost text-sky-600 hover:bg-sky-100 flex items-center gap-1 text-lg">
          <PieChart size={16}/> Air Composition
        </a>
        <a href="/feedback" className="btn btn-sm btn-ghost text-sky-600 hover:bg-sky-100 flex items-center gap-1 text-lg">
          <Pen size={16}/> Feedback
        </a>
      </div>
    </div>
  );
}

