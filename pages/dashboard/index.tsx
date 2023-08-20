import type { ReactElement } from "react";
import { Grid, Box } from "@mui/material";

// components
import PageContainer from "../../src/components/container/PageContainer";
import FullLayout from "../../src/layouts/full/FullLayout";
import ScoreOverview from "../../src/components/dashboard/ScoreOverview";
import RiskDescription from "../../src/components/dashboard/RiskDescription";
import ScoreMeter from "../../src/components/dashboard/ScoreMeter";
import ScoreGraph from "../../src/components/dashboard/ScoreGraph";
import AvailableCredit from "../../src/components/dashboard/AvailableCredit";

export default function Home() {
  return (
    <PageContainer
      title="Xact Score | User Dashboard"
      description="User Dashboard"
    >
      <Box>
        {/* entire container grid */}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <RiskDescription />
          </Grid>

          {/* graph grid */}
          <Grid item xs={12} lg={8}>
            <ScoreGraph />
          </Grid>

          {/* score meter and payment history grid  */}
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <ScoreMeter />
              </Grid>
              <Grid item xs={12}>
                <AvailableCredit />
              </Grid>
            </Grid>
          </Grid>

          {/* Risk description & Score overview section */}

          {/* <Grid item xs={12}>
            <ScoreOverview />
          </Grid> */}

          {/* bottom grid  */}
          {/* <Grid item xs={12} lg={4}>
            <RecentTransactions />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductPerformance />
          </Grid> */}
        </Grid>
      </Box>
    </PageContainer>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};
