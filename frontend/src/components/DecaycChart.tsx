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
  humidity: number;
  pollution: number;
  temperature: number;
}

export default function DecayChart({ humidity, pollution, temperature }: Props) {
  
  const data = {
    labels: ["Humidity", "Pollution", "Temperature"],
    datasets: [
      {
        label: "Environmental Stress",
        data: [humidity, pollution, temperature],
        backgroundColor: ["#00c6ff", "#ff6b6b", "#feca57"], // 🔥 colors
        borderRadius: 8
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#040404" // 🔥 visible in dark mode
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: "#0a0a0a"
        },
        grid: {
          color: "#333"
        }
      },
      y: {
        ticks: {
          color: "#050505"
        },
        grid: {
          color: "#333"
        }
      }
    }
  };

  return <Bar data={data} options={options} />;
}