import React from "react";
import {
  Box,
  Typography,
  Grid,
  LinearProgress,
  Avatar,
  Stack,
  LinearProgressProps
} from "@mui/material";
import { IconCreditCard } from "@tabler/icons-react";

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const CreditUsage = () => {
  return (
    <Box width="100%">
      <Box>
        <Typography variant="h4" fontWeight="bold" mb={4}>
          Credit Usage
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
                color="error"
                alignItems="start"
              >
                76%
              </Typography>
              <Grid item xs={12} lg={10}>
                <Typography mb={1} fontWeight={700} variant="h6">
                  How does this affect your score?
                </Typography>
                <Typography>
                  Lenders like to see that you aren't using too much fo your available credit. Using too much credit, may make it harder to pay back
                </Typography>
              </Grid>
            </Grid>
            <Box mt={2} alignItems={"start"} width={{ base: 300, md: 500 }}>
              <Typography variant="h5" fontWeight="bold">
                Recommended Actions
              </Typography>
              <Box>
                <Typography mb={1}>
                  - Try using less of your available credit
                </Typography>
                <Typography mb={1}>
                  - Reduce your spending and pay off as much as you can on your
                  retail and credit cards.
                </Typography>
                <Typography>
                  - Keep unused cards open. Closing the account reduces your
                  total available credit.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} mt={{ xs: 2, md: 0 }}>
            <Box flex="1" alignContent={{ base: "left", md: "right" }}>
              <Typography variant="h5" fontWeight="bold">
                Primary Credit Cards Usages
              </Typography>
              <Typography mb={2} fontWeight={600}>
                Credit Limit: ₵8,400
              </Typography>


              <Stack direction="row" spacing={1} mt={1} alignItems="center" mb={1}>
                <Avatar sx={{ bgcolor: "white", width: 27, height: 27 }}>
                  <IconCreditCard width={20} color="#1E4939" />
                </Avatar>
                <Stack direction={{ xs: "row", md: "column" }}>
                  <Typography variant="subtitle2" fontWeight={600} mr={1}>
                    Stanbic Bank 5423*******
                  </Typography>
                </Stack>
              </Stack>
              <Box fontWeight="bold">
                <LinearProgressWithLabel
                  value={76}
                  variant="determinate"
                  color="error"
                  style={{ height: 10, borderRadius: 5 }}
                />
            
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CreditUsage;
