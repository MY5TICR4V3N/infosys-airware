import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState} from "react";
import axios from "axios";
import Navbar from "./components/navbar";
import Dashboard from "./Pages/Dashboard";
import History from "./Pages/History";
import { AirComposition } from "./Pages/AirComposition";
import {createContext} from "react";
export const DataContext= createContext()

export default function App() {

    const [data, setData]=useState([])
    

    useEffect(() => {
    const fetchLoop = () => {
      axios.get("http://127.0.0.1:5000/get_data")
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    };

    fetchLoop();
    const interval = setInterval(fetchLoop, 2000);

    return () => clearInterval(interval);
  }, []);

 


  return (
    <DataContext.Provider value={data}>
    <BrowserRouter>
      <div className="min-h-screen bg-linear-to-br from-sky-100 via-white to-emerald-100">
        <Navbar />
        <main className="p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/history" element={<History />} />
            <Route path="/airComposition" element={<AirComposition/>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
    </DataContext.Provider>
  );
}
