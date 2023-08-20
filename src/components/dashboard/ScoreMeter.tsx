import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";
import { Grid, Stack, Typography, Avatar, Button, Link } from "@mui/material";
import { IconArrowUp, IconRefresh } from "@tabler/icons-react";

import DashboardCard from "../shared/DashboardCard";

const CreditScoreMeter = () => {
  const getColorForScore = (score: number) => {
    if (score >= 700) {
      return { color: "#1E4939", label: "Excellent" };
    } else if (score >= 600) {
      return { color: "#32cd32", label: "Very Good" };
    } else if (score >= 500) {
      return { color: "#FFE000", label: "Good" };
    } else if (score >= 350) {
      return { color: "#FFAA00", label: "Fair" };
    } else {
      return { color: "#FF0000", label: "Poor" };
    }
  };

  const theme = useTheme();
  const successlight = theme.palette.success.light;

  const creditScoreValue = 640;

  const colorInfo = getColorForScore(creditScoreValue);
  const { label } = colorInfo;

  const optionsGauge: any = {
    chart: {
      type: "radialBar",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      height: 200
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "65%"
        },
        dataLabels: {
          name: {
            show: true
          },
          value: {
            fontSize: "0",
            fontWeight: 600,
            offsetY: -0
          }
        }
      }
    },
    fill: {
      type: "solid",
      colors: [colorInfo.color]
    },
    labels: [colorInfo.label]
  };
  const seriesGauge: any = [creditScoreValue];

  return (
    <DashboardCard>
      <Grid container spacing={0} direction={{ xs: "column", md: "row" }}>
        <Typography variant="h4" fontWeight={700}>
          Credit Score: {creditScoreValue}
        </Typography>
        <Grid item xs={2} sm={6}>
          <Chart
            options={optionsGauge}
            series={seriesGauge}
            type="radialBar"
            height={200}
          />
        </Grid>
        <Grid item xs={7} sm={6}>
          <Stack direction="row" spacing={1} mt={2} alignItems="center">
            <Avatar sx={{ bgcolor: successlight, width: 27, height: 27 }}>
              <IconArrowUp width={20} color="#1E4939" />
            </Avatar>
            <Stack direction={{ xs: "row", md: "column" }}>
              <Typography variant="subtitle2" fontWeight={600} mr={1}>
                Rating:
              </Typography>
              <Typography variant="subtitle2" fontWeight={700}>
                {label}
              </Typography>
            </Stack>
          </Stack>
          <Stack spacing={2} mt={1} direction="column">
            <Typography variant="subtitle2" fontWeight={600}>
              Updated: Feb 4, 2023
            </Typography>
            <Typography variant="subtitle2" fontWeight={600}>
              VantageScore 3.0 from XactScore
            </Typography>
            <Stack direction="row" mt={1} alignItems="center">
              <Avatar sx={{ bgcolor: successlight, width: 27, height: 27 }}>
                <IconRefresh width={20} color="#1E4939" />
              </Avatar>
              {/* <Link color="#1E4939" fontWeight={700}> Refresh Score</Link> */}
              <Link
                style={{ color: "#1E4939", fontWeight: 700, cursor: "pointer" }}
              >
                {" "}
                Refresh Score
              </Link>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </DashboardCard>
  );
};

export default CreditScoreMeter;
