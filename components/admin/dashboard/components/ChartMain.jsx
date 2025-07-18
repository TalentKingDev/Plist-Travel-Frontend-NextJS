"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,

  plugins: {
    legend: {
      display: true,
      position: "bottom",
    },
    title: {
      display: false,
    },

    tooltips: {
      position: "nearest",
      mode: "index",
      intersect: false,
      yPadding: 10,
      xPadding: 10,
      caretSize: 4,
      backgroundColor: "rgba(72, 241, 12, 1)",
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "#1967d2",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 4,
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Loyal Customer",
      borderColor: "#ff0000",
      backgroundColor: "#ff0000",
      tension: 0.2,
      data: [
        8000, 7400, 9000, 5000, 7000, 7200, 5600, 5500, 7800, 6500, 7300, 8100,
      ],
      fill: false,
    },
    {
      label: "New Customer",
      borderColor: "#00ff00",
      backgroundColor: "#00ff00",
      tension: 0.2,
      data: [
        5000, 6400, 6500, 5500, 7300, 6800, 7000, 6000, 7000, 6500, 7500, 8000,
      ],
      fill: false,
    },
    {
      label: "Unique Customer",
      borderColor: "#0000ff",
      backgroundColor: "#0000ff",
      tension: 0.2,
      data: [
        6000, 6900, 7500, 5200, 6800, 7000, 6300, 5800, 7400, 6700, 7100, 7900,
      ],
      fill: false,
    },
  ],
};

const ChartMain = () => {
  return (
    <div className="widget-content">
      <Line options={options} data={data} />
    </div>
  );
};

export default ChartMain;
