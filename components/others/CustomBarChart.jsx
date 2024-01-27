import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
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

export const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: true,
      },
      ticks: {
        display: true,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: true,
      },
      max: 50000, // Set a fixed maximum value for the y-axis
    },
  },
  elements: {
    bar: {
      borderRadius: 50, // Set border radius for rounded bars
    },
  },
  plugins: {
    legend: {
      display: false, // Hide legend
    },
    title: {
      display: false,
      text: "Customized Bar Chart",
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

const customData = [
  6000, 21000, 3000, 27000, 8000, 45000, 9000, 22000, 32000, 4000, 30000, 25000,
]; // Replace with your own data

export const data = {
  labels,
  datasets: [
    {
      label: "Monthly Sales",
      data: customData,
      backgroundColor: (context) => {
        const gradient = context.chart.ctx.createLinearGradient(
          0,
          0,
          0,
          context.chart.height
        );
        gradient.addColorStop(0, "#34CAA5"); // Dark color at the top
        gradient.addColorStop(1, "rgba(52, 202, 165, 0.00)"); // Transparent color at the bottom
        return gradient;
      },
      borderColor: "#34CAA5", // Border color for rounded bars
      borderWidth: 1, // Border width for rounded bars
    },
  ],
};

const CustomBarChart = () => {
  return <Bar options={options} data={data} />;
};

export default CustomBarChart;

// 'plain ' green fill

// backgroundColor:
//         "linear-gradient(180deg, #34CAA5 0%, rgba(52, 202, 165, 0.00) 100%)",
//       borderColor: "#34CAA5", // Border color for rounded bars
//       borderWidth: 1, // Border width for rounded bars
//     },
