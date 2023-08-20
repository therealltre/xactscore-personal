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
  Card,
  LinearProgressProps,
  LinearProgress,
  Grid,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@mui/material";
import { IconCash, IconCreditCard } from "@tabler/icons-react";

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const AccountDetails = () => {
  return (
    <Card elevation={9} variant={undefined} sx={{}}>
      <Typography variant="h5" fontWeight="600" margin={3}>
        Credit Card Account Details
      </Typography>

      {/*  accordion card*/}
      <Accordion elevation={9} variant={undefined} sx={{ margin: 2 }}>
        <AccordionSummary>
          <Stack
            direction="row"
            spacing={1}
            my={1}
            alignItems="center"
            margin={2}
            width={"100%"}
          >
            <Box>
              <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  width={{ xs: 300, md: 1070 }}
                  spacing={{ xs: 2, md: 90 }}
                >
                  <Box flex="1" textAlign="left">
                    <Stack
                      direction="row"
                      spacing={1}
                      mt={1}
                      alignItems="center"
                    >
                      <Avatar sx={{ bgcolor: "white", width: 27, height: 27 }}>
                        <IconCreditCard width={60} color="#1E4939" />
                      </Avatar>
                      <Stack direction={{ xs: "row", md: "column" }}>
                        <Typography variant="h6" fontWeight={700} mr={1}>
                          Stanbic Bank
                        </Typography>
                      </Stack>
                    </Stack>
                    <Typography>Updated: Aug 18, 2023 </Typography>
                  </Box>

                  <Box
                    flex="1"
                    textAlign={{ md: "right" }}
                    justifySelf={{ md: "right" }}
                  >
                    <Stack
                      direction="row"
                      spacing={1}
                      mt={1}
                      alignItems="center"
                      justifyContent={{ md: "end" }}
                    >
                      <Avatar sx={{ bgcolor: "white", width: 27, height: 27 }}>
                        <IconCash width={60} color="#1E4939" />
                      </Avatar>
                      <Typography variant="h6" fontWeight={700} mr={1}>
                        Current Balance
                      </Typography>
                    </Stack>
                    <Typography> ₵2,016 of ₵8,400 </Typography>
                  </Box>
                </Stack>
              </Stack>
              <Box fontWeight="bold" width={{ xs: "100%", md: 1080 }}>
                <LinearProgressWithLabel
                  value={76}
                  variant="determinate"
                  color="error"
                  style={{ height: 10, borderRadius: 5 }}
                />
              </Box>
            </Box>
          </Stack>
        </AccordionSummary>

        <AccordionDetails   sx={{
            width: "100%", // Maintain the same width when expanded
            flexDirection: "column", // Expand downwards
          }}>
          {/* account information section  */}
          <Stack
            direction="row"
            spacing={1}
            my={1}
            alignItems="center"
            margin={2}
            width={"100%"}
          >
            <Box>
              <Typography variant="h5" fontWeight="bold" mb={4}>
                Account Inofmation
              </Typography>
              <Grid
                container
                spacing={{ base: 5, md: 20 }}
                width={"100%"}
                alignContent={"start"}
              >
                <Grid item xs={12} lg={12}>
                  <Grid
                    container
                    flexDirection={"row"}
                    alignItems={"start"}
                    width={{ base: 100, md: "100%" }}
                    gap={{ base: 2, md: 5 }}
                  >
                    <Grid item xs={12} lg={2}>
                      <Typography mb={1}>Last Reported</Typography>
                      <Typography fontWeight={700} variant="h6">
                        Aug 18, 2023
                      </Typography>
                    </Grid>
                    <Grid item xs={12} lg={2}>
                      <Typography mb={1}>Date opened</Typography>
                      <Typography fontWeight={700} variant="h6">
                        Oct 20, 2021
                      </Typography>
                    </Grid>
                    <Grid item xs={12} lg={2}>
                      <Typography mb={1}>Date Closed</Typography>
                      <Typography fontWeight={700} variant="h6">
                        ---
                      </Typography>
                    </Grid>
                    <Grid item xs={12} lg={2}>
                      <Typography mb={1}>Remarks</Typography>
                      <Typography fontWeight={700} variant="h6">
                        ---
                      </Typography>
                    </Grid>
                    <Grid item xs={12} lg={2}>
                      <Typography mb={1}>Account Type</Typography>
                      <Typography fontWeight={700} variant="h6">
                        Individual
                      </Typography>
                    </Grid>
                    <Grid item xs={12} lg={2}>
                      <Typography mb={1}>Term</Typography>
                      <Typography fontWeight={700} variant="h6">
                        ---
                      </Typography>
                    </Grid>
                    <Grid item xs={12} lg={2}>
                      <Typography mb={1}>Highest Balance</Typography>
                      <Typography fontWeight={700} variant="h6">
                        ₵12,016
                      </Typography>
                    </Grid>
                    <Grid item xs={12} lg={2}>
                      <Typography mb={1}>Monthly Payment</Typography>
                      <Typography fontWeight={700} variant="h6">
                        ---
                      </Typography>
                    </Grid>
                    <Grid item xs={12} lg={2}>
                      <Typography mb={1}>Due From Last Payment</Typography>
                      <Typography fontWeight={700} variant="h6">
                        ---
                      </Typography>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                      <Typography mb={1}>
                        Times Late For Payment (30/60/90)
                      </Typography>
                      <Typography fontWeight={700} variant="h6">
                        0/0/0
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};

export default AccountDetails;
