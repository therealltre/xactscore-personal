import type { ReactElement } from "react";
import { Grid, Box } from "@mui/material";
import PageContainer from "../../../src/components/container/PageContainer";

// components
import ScoreOverview from "../../../src/components/dashboard/ScoreOverview";
import FullLayout from "../../../src/layouts/full/FullLayout";
import PaymentHistory from "../../../src/components/paymenthistory/PaymentHistory";
import CreditCardPaymentHistory from "../../../src/components/paymenthistory/CreditCardPaymentHistory";

export default function ScoreFactors() {
  return (
    <PageContainer
      title="Xact Score | Payment History"
      description="User Dashboard"
    >
      <Box>
        {/* entire container grid */}

        <Grid container spacing={3}>
          {/* score meter and payment history grid  */}
          <Grid item xs={12} lg={6}>
            <PaymentHistory />
          </Grid>
          <Grid item xs={12} lg={6}>
            <CreditCardPaymentHistory />
          </Grid>

          {/* Risk description & Score overview section */}
          <Grid item xs={12}>
            <ScoreOverview />
          </Grid> 
        </Grid>
      </Box>
    </PageContainer>
  );
}

ScoreFactors.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};
