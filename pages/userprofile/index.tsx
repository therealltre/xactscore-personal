import type { ReactElement } from "react";
import { Grid, Box } from "@mui/material";
import CreditUtil from "../../src/components/creditfactors/CreditUtil";
import RecommendedActions from "../../src/components/creditfactors/RecommendedActions";
import AccountDetails from "../../src/components/creditfactors/AccountDetails";
import PageContainer from "../../src/components/container/PageContainer";
import FullLayout from "../../src/layouts/full/FullLayout";
import Profile from "../../src/layouts/full/header/Profile";
import UserProfile from "../../src/components/userprofile/UserProfile";
import GeneralInfo from "../../src/components/userprofile/GeneralInfo";

// components


export default function ScoreFactors() {
  return (
    <PageContainer
      title="Xact Score | Credit Usage"
      description="User Dashboard"
    >
      <Box>
        {/* entire container grid */}
      
        <Grid container spacing={3}>
          {/* user image upload section */}
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
              <UserProfile />
              </Grid>
              <Grid item xs={12}>
              <RecommendedActions />
              </Grid>
            </Grid>
          </Grid>

           {/* score meter and payment history grid  */}
           <Grid item xs={12} lg={8}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
              <GeneralInfo onFileSelect={function (file: File): void {
                  throw new Error("Function not implemented.");
                } } />
              </Grid>
              <Grid item xs={12}>
              <RecommendedActions />
              </Grid>
            </Grid>
          </Grid>  

        

        </Grid>
      </Box>
    </PageContainer>
  );
}

ScoreFactors.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};
