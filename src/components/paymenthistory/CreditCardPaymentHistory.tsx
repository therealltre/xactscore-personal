import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";
import {
  Stack,
  Typography,
  Avatar,
  Fab,
  Box,
  Divider,
  Grid
} from "@mui/material";
import { IconArrowDownRight, IconCurrencyDollar } from "@tabler/icons-react";
import DashboardCard from "../shared/DashboardCard";

const RecommendedActions = () => {
  return (
    <DashboardCard title="Credit Card Payment History">
      <>
        <Divider />
        <Stack direction="column" spacing={1} my={0} alignItems="center">
          <Box>
            <Grid
              mt={2}
              alignItems={"start"}
              width={{ base: 300, md: 500 }}
              container
              gap={2}
            >
              <Grid mb={2}>
                <Typography variant="h5" fontWeight="bold">
                  On Time Payments
                </Typography>
                <Typography>16</Typography>
              </Grid>
              <Grid>
                <Typography variant="h5" fontWeight="bold">
                  Total Payments.
                </Typography>
                <Typography>16</Typography>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Typography variant="h5" fontWeight="bold">
              My Credit Cards
            </Typography>
            <Grid
              mt={1}
              alignItems={"start"}
              width={{ base: 300, md: 500 }}
              container
              gap={2}
            >
              <Grid mb={1}>
                <Typography variant="h6" fontWeight="bold">
                  Stanbic Bank 542391*******
                </Typography>
                <Typography>No delayed payment</Typography>
              </Grid>
              <Grid>
                <Typography variant="h6" fontWeight="bold">
                  Stanbic Bank 542391*******
                </Typography>
                <Typography>No delayed payment</Typography>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </>
    </DashboardCard>
  );
};

export default RecommendedActions;
