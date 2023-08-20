import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography
} from "@mui/material";
import { useRouter } from "next/router";
import ScoreRatingPage from "../scoreoverviewdetails/ScoreRatingPage";
import PaymentHistoryPage from "../scoreoverviewdetails/PaymentHistoryPage";
import CreditUsagePage from "../scoreoverviewdetails/CreditUsagePage";
import AccountMixPage from "../scoreoverviewdetails/AccountMixPage";
import AccountAgePage from "../scoreoverviewdetails/AccountAgePage";
import InquiriesPage from "../scoreoverviewdetails/InquiriesPage";

interface DashboardComponentProps {
  header: string;
  label: string;
  text: string;
  labelColor?: string;
  overlayContent: React.ReactNode;
}

const DashboardComponent: React.FC<DashboardComponentProps> = ({
  header,
  label,
  text,
  labelColor = "black",
  overlayContent
}) => {
  const [showOverlay, setShowOverlay] = useState(false);
  //   const router = useRouter();

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
    // router.back(); // Navigate back using Next.js router
  };

  return (
    <Card
      sx={{
        width: 370, // Set your desired fixed width here
        height: "100%",
        borderWidth: "1px",
        borderRadius: "lg",
        p: "10px",
        // borderLeftWidth: "4px", // Add left border width
        // borderLeftColor: labelColor // Set the left border color
        borderLeft: `4px solid ${labelColor}`, // Use borderLeft property
        paddingLeft: 2, // Add some left padding for content
        cursor: "pointer"
      }}
      onClick={toggleOverlay}
    >
      <Typography variant="h5" color={labelColor} marginBottom={2}>
        {header}
      </Typography>
      <Typography variant="h6" color={labelColor}>
        {label}
      </Typography>
      <Typography variant="body1" mt={2} fontWeight="semi-bold">
        {text}
      </Typography>

      {showOverlay && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Box
            sx={{
              p: 4,
              backgroundColor: "#f5f6fa",
              maxWidth: "100%",
              maxHeight: "100%",
              borderRadius: "md",
              boxShadow: "lg",
              overflowY: "auto"
            }}
          >
            {overlayContent}
            <Box mt={4} textAlign="right">
              <Button
                onClick={handleCloseOverlay}
                sx={{
                  bgcolor: "green",
                  color: "white",
                  "&:hover": {
                    bgcolor: "white",
                    color: "green",
                    borderColor: "green",
                    borderWidth: "1px"
                  }
                }}
              >
                Close
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </Card>
  );
};

const ScoreOverview: React.FC = () => {
  return (
    <Box>
      <Grid container spacing={3} flexDirection={{ xs: "column", md: "row" }}>
        <Grid item xs={2} sm={4}>
          <Card
            sx={{
              width: 370, // Set your desired fixed width here
              height: 150,
              padding: 0
            }}
            elevation={9}
            variant={undefined}
          >
            <DashboardComponent
              header="Score Rating"
              label="Good"
              labelColor="green" // Specify color for the first label
              text="This score represents your creditworthiness. To determine your score, banks and credit bureaus..."
              overlayContent={<ScoreRatingPage />}
            />
          </Card>
        </Grid>
        <Grid item xs={2} sm={4}>
          <Card
            sx={{
              width: 370, // Set your desired fixed width here
              height: 150,
              padding: 0
            }}
            elevation={9}
            variant={undefined}
          >
            <DashboardComponent
              header="Payment History"
              label="100% on time"
              labelColor="green" // Specify color for the second label
              text="You are doing a great job with paying your bills on time. This helps your credit score significantly."
              overlayContent={<PaymentHistoryPage />}
            />
          </Card>
        </Grid>
        <Grid item xs={2} sm={4}>
          <Card
            sx={{
              width: 370, // Set your desired fixed width here
              height: 150,
              padding: 0
            }}
            elevation={9}
            variant={undefined}
          >
            <DashboardComponent
              header="Credit Usage"
              label="76%"
              labelColor="red" // Specify color for the third label
              text="It looks like you've used a lot of your  available credit. Once you start paying off your debt, you will see the usage rate decreasing."
              overlayContent={<CreditUsagePage />}
            />
          </Card>
        </Grid>
        <Grid item xs={2} sm={4}>
          <Card
            sx={{
              width: 370, // Set your desired fixed width here
              height: 150,
              padding: 0
            }}
            elevation={9}
            variant={undefined}
          >
            <DashboardComponent
              header="Account Mix"
              label="3 Accounts"
              labelColor="green" // Specify color for the third label
              text="You have a good mix of revolving accounts and installments loans.."
              overlayContent={<AccountMixPage />}
            />
          </Card>
        </Grid>
        <Grid item xs={2} sm={4}>
          <Card
            sx={{
              width: 370, // Set your desired fixed width here
              height: 150,
              padding: 0
            }}
            elevation={9}
            variant={undefined}
          >
            <DashboardComponent
              header="Account Age"
              label="2 years 11 Months"
              labelColor="green" // Specify color for the third label
              text="You have built credit history over a long period of time. This is good for your score"
              overlayContent={<AccountAgePage />}
            />
          </Card>
        </Grid>
        <Grid item xs={2} sm={4}>
          <Card
            sx={{
              width: 370, // Set your desired fixed width here
              height: 150,
              padding: 0
            }}
            elevation={9}
            variant={undefined}
          >
            <DashboardComponent
              header="Inquiries"
              label="3 inquiries"
              labelColor="red" // Specify color for the third label
              text="There are no new inquiries or accounts on your credit report which is why you have a good grade."
              overlayContent={<InquiriesPage />}
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ScoreOverview;
