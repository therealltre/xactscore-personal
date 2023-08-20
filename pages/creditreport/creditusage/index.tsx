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
      title="Xact Score | Credit Usage"
      description="User Dashboard"
    >
      <Box>
        {/* entire container grid */}
      
        <Grid container spacing={3}>
          {/* credit utilization and recommended actions section */}
          <Grid item xs={12} lg={6}>
            <CreditUtil />
          </Grid>
          <Grid item xs={12} lg={6}>
            <RecommendedActions />
          </Grid>

          {/* Account details section */}       

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
