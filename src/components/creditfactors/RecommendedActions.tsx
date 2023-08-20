import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";
import { Stack, Typography, Avatar, Fab, Box, Divider } from "@mui/material";
import { IconArrowDownRight, IconCurrencyDollar } from "@tabler/icons-react";
import DashboardCard from "../shared/DashboardCard";

const RecommendedActions = () => {
  return (
    <DashboardCard title="Recommended Actions">
      <>
      <Divider />
        <Stack direction="row" spacing={1} my={1.7} alignItems="center">
          <Box>
            <Typography mb={1}>
              - Try using less of your available credit
            </Typography>
            <Typography mb={1}>
              - Reduce your spending and pay off as much as you can on your
              retail and credit cards.
            </Typography>
            <Typography>
              - Keep unused cards open. Closing the account reduces your total
              available credit.
            </Typography>
          </Box>
        </Stack>
      </>
    </DashboardCard>
  );
};

export default RecommendedActions;
