"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { startTicker } from "@/lib/Handling/TimeEvent";
import { useRouter } from "next/navigation";

ChartJS.register(
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LineGraph = ({
  labels,
  datasets,
}: {
  labels: any[];
  datasets: any[];
}) => {
  //   // X - axis lable
  //   const labels = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug"];

  //   // Data want to show on chart
  //   const datasets = [12, 45, 67, 43, 89, 34, 67, 43];
  const router = useRouter();
  const firstRendered = useRef(false);
  const data: ChartData<"line", number[], string> = {
    labels: labels,
    datasets: [
      {
        // Title of Graph
        label: "Calon Jamaah yang membandingkan",
        data: datasets,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      // insert similar in dataset object for making multi line chart
    ],
  };

  const options = {
    scales: {
      y: {
        title: {
          display: true,
          text: "Jumlah yang membandingkan",
        },
        display: true,
        min: 0,
        max: Math.max(...datasets) + Math.floor(Math.max(...datasets) / 2),
        ticks: {
          precision: 0,
        },
      },

      x: {
        title: {
          display: true,
          text: "Dimuat ulang setiap 5 menit",
        },
        display: true,
      },
    },
  };

  useEffect(() => {
    if (firstRendered.current) {
      const tickerTimeout = startTicker(function () {
        router.refresh();
        console.log('berjalan lagi')
      }, 1000 * 60 * 5);
    }

    firstRendered.current = true;
  }, []);
  return (
    <div className=" md:w-[1000px] m-auto">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineGraph;
