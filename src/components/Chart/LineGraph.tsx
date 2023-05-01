import React, { useRef, useEffect, useState } from "react";
import { Chart, ChartData } from "chart.js/auto";
import axios from "axios";

interface LineGraphProps {
  apiUrl: string;
}

const LineGraph: React.FC<LineGraphProps> = ({ apiUrl }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const [data, setData] = useState<ChartData>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(apiUrl);
      const chartData = {
        labels: Object.keys(response.data.cases),
        datasets: [
          {
            label: "Total Cases",
            data: Object.values(response.data.cases),
            borderColor: "#FF6384",
            fill: false,
          },
          {
            label: "Total Deaths",
            data: Object.values(response.data.deaths),
            borderColor: "#36A2EB",
            fill: false,
          },
        ],
      };
      setData(chartData as ChartData);
    };

    fetchData();
  }, [apiUrl]);

  useEffect(() => {
    const chartNode = chartRef.current;
    if (!chartNode || !data) return;

    const myChart = new Chart(chartNode, {
      type: "line",
      data,
      options: {
        responsive: true,
        // maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "COVID-19 Historical Data",
          },
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Date",
            },
            ticks: {
              precision: 0,
            },
          },
          y: {
            title: {
              display: true,
              text: "Number of Cases/Deaths",
            },
            ticks: {
              // forces step size to be 50 units
              stepSize: 1000,
            },
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default LineGraph;
