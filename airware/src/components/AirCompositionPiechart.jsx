import {PieChart,Pie,Tooltip,Cell,Legend,ResponsiveContainer,} from "recharts";



export const AirCompositionPiechart = ({data}) => {
  const chartData= [{name:"NO2", value:data["NO2"]},{name:"CO", value:data["CO"]}, {name:"PM2.5", value:data["PM2.5"]}, {name:"SO2", value: data["SO2"]}, {name:"Ozone", value:data["Ozone"]}, {name:"PM10", value:data["PM10"]}]
  const Color=["#60a5fa", "#EF4444", "#f472b6","#FBBF24","#A78BFA","#2DD4BF"]
  return (
    <div className="w-full md:w-1/4 bg-white shadow-lg rounded-2xl p-5" >
        <h2 className="text-xl font-semibold mb-4 text-center">Air composition</h2>
        <div className="flex justify-center">
            
            <PieChart width={300} height={260}>
                <Pie data={chartData} cx="50%" cy="50%" outerRadius={90} dataKey="value" label>
                    {chartData.map((_,index)=>(
                      <Cell key={index} fill={Color[index]}/>
                    ))}
                </Pie>
                <Tooltip/>
                <Legend/>
            </PieChart>
        </div>
    </div>
  )
}
