import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import DashboardCard from "../shared/DashboardCard";

interface DashboardComponentProps {
  label: string;
  text: string;
  labelColor?: string; // Add a new optional prop for label color
}

const DashboardComponent: React.FC<DashboardComponentProps> = ({
  label,
  text,
  labelColor = "black" // Set a default color value if not provided
}) => {
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
        paddingLeft: 1// Add some left padding for content
      }}
      elevation={9}
      variant={undefined}
    >
      <Typography
        variant="h6"
        sx={{ fontWeight: "semi-bold", color: labelColor }}
      >
        {label}
      </Typography>
      <Typography variant="body1" sx={{ mt: 2, fontWeight: "semi-bold" }}>
        {text}
      </Typography>
    </Card>
  );
};

const RiskDescription: React.FC = () => {
  return (
    <Card elevation={9} variant={undefined} sx={{}}>
      <Typography variant="h5" fontWeight="600" margin={3}>
        Credit Score Risk Description
      </Typography>

      <Box  margin={2}>
        <Grid container spacing={2} flexDirection={{ xs: "column", md: "row" }}>
          <Grid item xs={2} sm={4}>
            <Card
              sx={{
                width: 360, // Set your desired fixed width here
                height: 120,
                padding: 0
              }}
              elevation={9}
              variant={undefined}
            >
              <DashboardComponent
                label="Low Risk"
                labelColor="green"
                text="Lenders would be confident granting you credit at their most competitive rates"
              />
            </Card>
          </Grid>
          <Grid item xs={2} sm={4}>
            <Card
              sx={{
                width: 360, // Set your desired fixed width here
                height: 120,
                padding: 0
              }}
              elevation={9}
              variant={undefined}
            >
              <DashboardComponent
                label="Moderate Risk"
                labelColor="orange"
                text="Lenders are less confident in how you may manage your credit and so may not offer all of their products at the best rates"
              />
            </Card>
          </Grid>
          <Grid item xs={2} sm={4}>
            <Card
              sx={{
                width: 360, // Set your desired fixed width here
                height: 120,
                padding: 0
              }}
              elevation={9}
              variant={undefined}
            >
              <DashboardComponent
                label="High Risk"
                labelColor="red"
                text="Lenders are less confident in how you may manage your credit and so may not offer all of their products at the best rates"
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default RiskDescription;
