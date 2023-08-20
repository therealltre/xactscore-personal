import type { ReactElement } from "react";
import { Grid, Box } from "@mui/material";
import PageContainer from "../../../src/components/container/PageContainer";

// components
import CreditUtil from "../../../src/components/creditfactors/CreditUtil";
import RecommendedActions from "../../../src/components/creditfactors/RecommendedActions";
import ScoreOverview from "../../../src/components/dashboard/ScoreOverview";
import AccountDetails from "../../../src/components/creditfactors/AccountDetails";
import FullLayout from "../../../src/layouts/full/FullLayout";

export default function ScoreFactors() {
  return (
    <PageContainer
      title="Xact Score | Score Factors"
      description="User Dashboard"
    >
      <Box>
        {/* entire container grid */}

      
        <Grid container spacing={3}>
          {/* score meter and payment history grid  */}
          <Grid item xs={12} lg={6}>
            <CreditUtil />
          </Grid>
          <Grid item xs={12} lg={6}>
            <RecommendedActions />
          </Grid>

          {/* Risk description & Score overview section */}

          {/* <Grid item xs={12}>
            <Speedometer value={100} max={850}/>
          </Grid> */}
          {/* <Grid item xs={12}>
            <RiskDescription />
          </Grid> */}
          <Grid item xs={12}>
            <ScoreOverview />
          </Grid>

          <Grid item xs={12}>
          <AccountDetails />
        </Grid>

        </Grid>
      </Box>
    </PageContainer>
  );
}

ScoreFactors.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};
