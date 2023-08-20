import React, { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DashboardCard from "../shared/DashboardCard";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const CreditScoreHistory = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  const options = {
    chart: {
      type: "line",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: true
      },
      height: 370
    },
    colors: [primary, secondary],
    stroke: {
      width: 3,
      curve: "smooth"
    },
    markers: {
      size: 0
    },
    dataLabels: {
      enabled: true
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "right",
      offsetY: -20
    },
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false
        }
      }
    },
    xaxis: {
      categories: [
        "01-Jan-2023",
        "01-Feb-2023",
        "01-Mar-2023",
        "01-Apr-2023",
        "01-May-2023",
        "01-Jun-2023",
        "01-Jul-2023",
        "01-Aug-2023",
        "01-Sept-2023",
        "01-Oct-2023",
        "01-Nov-2023",
        "01-Dec-2023",
      ],
      axisBorder: {
        show: false
      }
    },
    tooltip: {
      theme: theme.palette.mode === "dark" ? "dark" : "light"
    }
  };

  const [selectedData, setSelectedData] = useState("score");

  const handleDataChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedData(event.target.value);
  };

  // Define your data series and time ranges here
  const scoreSeries = [
    {
      name: "Score History",
      data: [600, 620, 650, 680, 700, 720, 750, 780],
    }
  ];

  const paymentSeries = [
    {
      name: "Payment History",
      data: [200, 250, 180, 300, 280, 320, 350, 400],
      
    }
  ];

  const creditUsage = [
    {
      name: "Credit Usage",
      data: [30, 40, 25, 50, 60, 45, 70, 80],
      
    }
  ];

  return (
    <DashboardCard title="Credit Score History">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <FormControl variant="outlined" size="small">
          <InputLabel id="data-label">Data</InputLabel>
          <Select
            labelId="data-label"
            id="data-select"
            value={selectedData}
            onChange={handleDataChange}
            label="Data"
          >
            <MenuItem value="score">Score History</MenuItem>
            <MenuItem value="payment">Payment History</MenuItem>
            <MenuItem value="credit">Credit Usage</MenuItem>
          </Select>
        </FormControl>
        {/* Add Time Range selection here */}
      </div>
      <div>
        <Chart
          options={options}
          series={
            selectedData === "score"
              ? scoreSeries
              : selectedData === "payment"
              ? paymentSeries
              : creditUsage
          }
          type="line"
          height="370px"
        />
      </div>
    </DashboardCard>
  );
};

export default CreditScoreHistory;
