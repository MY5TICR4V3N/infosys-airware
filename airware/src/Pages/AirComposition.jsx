import { LineChart, Line, XAxis, YAxis, CartesianGrid, PieChart, Pie, Tooltip, Cell, Legend } from "recharts";
import { useState, useEffect, useContext } from "react";
import { DataContext } from "../App";

export const AirComposition = () => {
  const data = useContext(DataContext);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (!data) return;
    const newEntry = {
      time: new Date().toLocaleTimeString().slice(0, 5),
      NO2: data["NO2"],
      CO: data["CO"],
      PM25: data["PM2.5"],
      SO2: data["SO2"],
      Ozone: data["Ozone"],
      PM10: data["PM10"],
    };
    setHistory((prev) => [...prev.slice(-20), newEntry]);
  }, [data]);

  const chartData = [
    { name: "NO2", value: data["NO2"] },
    { name: "CO", value: data["CO"] },
    { name: "PM2.5", value: data["PM2.5"] },
    { name: "SO2", value: data["SO2"] },
    { name: "Ozone", value: data["Ozone"] },
    { name: "PM10", value: data["PM10"] },
  ];

  const colors = ["#60a5fa", "#EF4444", "#f472b6", "#FBBF24", "#A78BFA", "#2DD4BF"];

  return (
    <div className="mt-35 flex flex-row items-center justify-center gap-10 ">      

      {/* Line Chart Card */}
      <div className="flex-1 bg-white shadow-xl rounded-2xl p-6 border border-gray-200">        
        <h2 className="text-2xl font-semibold mb-4 text-center text-sky-600">Air Quality History (Last 20 readings)</h2>

        <div className="flex justify-center">
          <LineChart width={800} height={500} data={history}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="NO2" stroke="#60a5fa" strokeWidth={2} />
            <Line type="monotone" dataKey="CO" stroke="#EF4444" strokeWidth={2} />
            <Line type="monotone" dataKey="PM25" stroke="#A855F7" strokeWidth={2} />
            <Line type="monotone" dataKey="SO2" stroke="#FBBF24" strokeWidth={2} />
            <Line type="monotone" dataKey="Ozone" stroke="#A78BFA" strokeWidth={2} />
            <Line type="monotone" dataKey="PM10" stroke="#2DD4BF" strokeWidth={2} />
          </LineChart>
        </div>
      </div>

      {/* Pie Chart Card */}
      <div className="flex-1 bg-white shadow-xl rounded-2xl p-6 border border-gray-200">        
        <h2 className="text-2xl font-semibold mb-4 text-center text-sky-600">Air Composition</h2>

        <div className="flex justify-center">
          <PieChart width={800} height={500}>
            <Pie data={chartData} cx="50%" cy="50%" outerRadius={150} dataKey="value" label>
              {chartData.map((_, index) => (
                <Cell key={index} fill={colors[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>

    </div>
  );
};

    /*return (
        <div className="mt-35 flex flex-row items-center justify-center gap-10 ">


        <div className="flex-1   bg-white shadow-xl rounded-2xl p-6 border border-gray-200 ">
            <h2 className="text-xl font-semibold mb-4 text-center text-sky-600">Air Quality History (Last 20 readings)</h2>
            <div className="flex justify-center">
            <LineChart width={800} height={500} data={history}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="time" padding={{left:0, right:0}}/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Line type="monotone" dataKey="NO2" stroke="#60a5fa" strokeWidth={2}  />
                <Line type="monotone" dataKey="CO" stroke="#EF4444" strokeWidth={2} />
                <Line type="monotone" dataKey="PM25" stroke="#f472b6" strokeWidth={2}  />
                <Line type="monotone" dataKey="SO2" stroke="#FBBF24" strokeWidth={2}  />
                <Line type="monotone" dataKey="Ozone" stroke="#A78BFA" strokeWidth={2}  />
                <Line type="monotone" dataKey="PM10" stroke="#2DD4BF" strokeWidth={2}  />
            </LineChart>
            </div>
        </div>


        <div className="flex-1 md:w-1/2 bg-white shadow-xl rounded-2xl p-6 border border-gray-200" >
            <h2 className="text-xl font-semibold mb-4  text-center text-sky-600">Air composition</h2>
            <div className="flex justify-center ">
            
                <PieChart width={800} height={500}>
                    <Pie data={chartData} cx="50%" cy="50%" outerRadius={150} dataKey="value" label>
                        {chartData.map((_,index)=>(
                            <Cell key={index} fill={Color[index]}/>
                        ))}
                    </Pie>
                    <Tooltip/>
                    <Legend/>
                </PieChart>
            </div>
        </div>

        

        </div>
  )*/
