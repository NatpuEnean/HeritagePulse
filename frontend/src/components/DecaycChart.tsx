import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  humidity: number
  pollution: number
  temperature: number
}

export default function DecayChart({humidity,pollution,temperature}:Props){

const data = {
  labels: ["Humidity","Pollution","Temperature"],
  datasets: [
    {
      label: "Environmental Stress",
      data: [humidity, pollution, temperature],
    }
  ]
}

return <Bar data={data}/>
}