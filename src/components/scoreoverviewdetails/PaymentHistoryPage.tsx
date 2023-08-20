import React from "react";
import { Box, Typography, Grid, LinearProgress } from "@mui/material";

const PaymentHistory = () => {
  return (
    <Box width="100%">
      <Box>
        <Typography variant="h4" fontWeight="bold" mb={4}>
          Payment History
        </Typography>
        <Grid
          container
          spacing={{ base: 5, md: 20 }}
          width={"100%"}
          alignContent={"start"}
        >
          <Grid item xs={12} md={6}>
            <Grid
              container
              flexDirection={"row"}
              alignItems={"start"}
              width={{ base: 300, md: 500 }}
              gap={2}
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                color="green"
                alignItems="start"
              >
                100%
              </Typography>
              <Grid item xs={12} lg={10}>
                <Typography mb={1}>
                  - Of your credit score is based on how much money you've spent
                  on credit cards or accounts that have credit limits.
                </Typography>
                <Typography>
                  - It looks like you've used a lot of your available credit.
                  Once you start paying off your debt, you will see the score
                  improve.
                </Typography>
              </Grid>
            </Grid>
            <Grid
              mt={2}
              alignItems={"start"}
              width={{ base: 300, md: 500 }}
              container
              gap={2}
            >
              <Grid mb={2}>
                <Typography variant="h5" fontWeight="bold" color="green">
                  On Time Payments
                </Typography>
                <Typography>12</Typography>
              </Grid>
              <Grid>
                <Typography variant="h5" fontWeight="bold" color="green">
                  Total Payments.
                </Typography>
                <Typography>16</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} mt={{ xs: 2, md: 0 }}>
            <Box flex="1" alignContent={{ base: "left", md: "right" }}>
              <Typography variant="h5" fontWeight="bold">
                Credit Cards
              </Typography>
              <Typography mb={2}>
                You're using 76% of your ₵8,400 credit limit
              </Typography>

              <Box mb={2} fontWeight="bold">
                Stanbic Bank 542391*******
                <Typography>No delayed payment</Typography>
              </Box>
              <Box mb={2} fontWeight="bold">
                Stanbic Bank 542391*******
                <Typography>No delayed payment</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PaymentHistory;
