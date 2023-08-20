import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";
import { Stack, Typography, Avatar, Fab, Grid, Divider } from "@mui/material";
import {
  IconArrowDownRight,
  IconArrowUp,
  IconCurrencyDollar
} from "@tabler/icons-react";
import DashboardCard from "../shared/DashboardCard";

const CreditUtil = () => {
  // chart color
  const theme = useTheme();
  // const secondary = theme.palette.secondary.main;
  const secondarylight = theme.palette.success.light;
  // const errorlight = "#fdede8";

  // chart
  // const optionscolumnchart: any = {
  //   chart: {
  //     type: "area",
  //     fontFamily: "'Plus Jakarta Sans', sans-serif;",
  //     foreColor: "#adb0bb",
  //     toolbar: {
  //       show: false
  //     },
  //     height: 60,
  //     sparkline: {
  //       enabled: true
  //     },
  //     group: "sparklines"
  //   },
  //   stroke: {
  //     curve: "smooth",
  //     width: 2
  //   },
  //   fill: {
  //     colors: [secondarylight],
  //     type: "solid",
  //     opacity: 0.05
  //   },
  //   markers: {
  //     size: 0
  //   },
  //   tooltip: {
  //     theme: theme.palette.mode === "dark" ? "dark" : "light"
  //   }
  // };
  // const seriescolumnchart: any = [
  //   {
  //     name: "",
  //     color: secondary,
  //     data: [25, 66, 20, 40, 12, 58, 20]
  //   }
  // ];

  return (
    <DashboardCard
      title="Payment History"
      // footer={
      //   <Chart
      //     options={optionscolumnchart}
      //     series={seriescolumnchart}
      //     type="area"
      //     height="60px"
      //   />
      // }
    >
      <>
        <Divider />
        <Stack direction="row" spacing={1} my={2} alignItems="center">
          <Avatar sx={{ bgcolor: secondarylight, width: 27, height: 27 }}>
            <IconArrowUp width={20} color="#1E4939" />
          </Avatar>
          <Typography variant="h3" fontWeight="600">
            100%
          </Typography>
          <Typography variant="h3">Paid</Typography>
        </Stack>
        <Grid item xs={12} lg={10}>
          <Typography mb={1} fontWeight={700} variant="h6">
            How does this affect your score?
          </Typography>
          <Typography>
            - Paying off your credit card debts ensure lenders that you are reliable and potentially increases your credit limit.
          </Typography>
          <Typography>
            - It looks like you've used a lot of your available credit. Once you
            start paying off your debt, you will see the score
          </Typography>
        </Grid>
      </>
    </DashboardCard>
  );
};

export default CreditUtil;
