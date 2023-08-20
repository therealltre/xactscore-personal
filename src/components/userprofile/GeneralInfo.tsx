import React, { useRef } from "react";
import {
  Stack,
  Typography,
  Box,
  Divider,
  TextField,
  Button,
  Grid,
  FormControlLabel,
  Checkbox
} from "@mui/material";
import DashboardCard from "../shared/DashboardCard";

interface UploadButtonProps {
  onFileSelect: (file: File) => void;
}

const UploadButton: React.FC<UploadButtonProps> = ({ onFileSelect }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[1];
    if (selectedFile) {
      onFileSelect(selectedFile);
    }
  };

  // const RecommendedActions = () => {
  return (
    <DashboardCard title="General Information">
      <>
        <Divider />
        <Stack direction="row" spacing={1} my={1.7} alignItems="center">
          <Grid item xs={12} lg={12} alignItems={"row"}>
            <Grid
              container
              flexDirection={"row"}
              alignItems={"start"}
              width={{ base: 100, md: "100%" }}
              gap={{ base: 3, md: 4 }}
            >
              {/* Personal information  */}
              <Box
                component="form"
                // noValidate
                //   onSubmit={handleSubmit}
                // sx={{ mt: 1 }}
              >
                <Typography variant="h6" fontWeight="600">
                  Personal Information
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
                      gap={{ base: 2, md: 8 }}
                    >
                      <Grid item xs={12} lg={3}>
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="name"
                          label="Full Name"
                          name="name"
                          autoComplete="name"
                          autoFocus
                          variant="standard"
                        />
                      </Grid>
                      <Grid item xs={12} lg={3}>
                        <TextField
                          margin="normal"
                          // required
                          fullWidth
                          id="dob"
                          label=" "
                          name="date"
                          type="date"
                          autoComplete="date"
                          autoFocus
                          variant="standard"
                        />
                      </Grid>
                      <Grid item xs={12} lg={3}>
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="ssn"
                          label="Social Secuirty Number"
                          name="ssn"
                          type="text"
                          autoComplete="ssn"
                          autoFocus
                          variant="standard"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>

              {/* contact information  */}
              <Box
                component="form"
                // noValidate
                //   onSubmit={handleSubmit}
                sx={{ mt: 2 }}
              >
                <Typography variant="h6" fontWeight="600">
                  Contact Information
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
                      <Grid item xs={12} lg={3}>
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          type="email"
                          autoComplete="email"
                          autoFocus
                          variant="standard"
                        />
                      </Grid>
                      <Grid item xs={12} lg={3}>
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="phone"
                          label="Phone Number"
                          name="date"
                          type="number"
                          autoComplete="phone"
                          autoFocus
                          variant="standard"
                        />
                      </Grid>
                      <Grid item xs={12} lg={3}>
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="address"
                          label="Street Address"
                          name="address"
                          type="text"
                          autoComplete="address"
                          autoFocus
                          variant="standard"
                        />
                      </Grid>
                      <Grid item xs={12} lg={3}>
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="city"
                          label="City"
                          name="city"
                          type="text"
                          autoComplete="city"
                          autoFocus
                          variant="standard"
                        />
                      </Grid>
                      <Grid item xs={12} lg={3}>
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="state"
                          label="State"
                          name="State"
                          type="text"
                          autoComplete="State"
                          autoFocus
                          variant="standard"
                        />
                      </Grid>
                      <Grid item xs={12} lg={3}>
                        <TextField
                          margin="normal"
                          //   required
                          fullWidth
                          id="zip"
                          label="Zip Code"
                          name="zip"
                          type="number"
                          autoComplete="zip"
                          autoFocus
                          variant="standard"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>

              {/* Employment information  */}
              <Box
                component="form"
                // noValidate
                //   onSubmit={handleSubmit}
                sx={{ mt: 2 }}
              >
                <Typography variant="h6" fontWeight="600">
                  Employment Information
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
                      <Grid item xs={12} lg={3}>
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="employer-name"
                          label="Current Employer"
                          name="employer-name"
                          type="text"
                          autoComplete="employer-name"
                          autoFocus
                          variant="standard"
                        />
                      </Grid>
                      <Grid item xs={12} lg={3}>
                        <TextField
                          margin="normal"
                          // required
                          fullWidth
                          id="job-title"
                          label="Job Title"
                          name="text"
                          type="text"
                          autoComplete="job-title"
                          autoFocus
                          variant="standard"
                        />
                      </Grid>
                      <Grid item xs={12} lg={3}>
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="income"
                          label="Monthly Income"
                          name="income"
                          type="number"
                          autoComplete="income"
                          autoFocus
                          variant="standard"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>

              {/* ID verification  */}
              <Box
                component="form"
                // noValidate
                //   onSubmit={handleSubmit}
                sx={{ mt: 2 }}
              >
                <Typography variant="h6" fontWeight="600">
                  Identity Verification
                </Typography>
                <Grid
                  container
                  spacing={{ base: 5, md: 20 }}
                  width={"100%"}
                  alignContent={"start"}
                >
                  <Grid item xs={12} lg={16}>
                    <Grid
                      container
                      flexDirection={"row"}
                      alignItems={"start"}
                      width={{ base: 100, md: "100%" }}
                      gap={{ base: 2, md: 2 }}
                      
                    >
                      <Grid item xs={12} lg={8}>
                        <input
                          ref={fileInputRef}
                          type="file"
                          style={{ display: "none" }}
                          onChange={handleFileSelect}
                        />
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => fileInputRef.current?.click()}
                          sx={{ mt: 2 }}
                          style={{ backgroundColor: "#1E4939" }}
                        >
                          Upload ID Card
                        </Button>
                      </Grid>
                      <Grid item xs={12} lg={8}>
                        <input
                          ref={fileInputRef}
                          type="file"
                          style={{ display: "none" }}
                          onChange={handleFileSelect}
                        />
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => fileInputRef.current?.click()}
                          sx={{ mt: 2 }}
                          style={{ backgroundColor: "#1E4939" }}
                        >
                          Additional Document
                        </Button>
                      </Grid>
                      
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Grid>  
        
            <Box
              component="form"
              // noValidate
              //   onSubmit={handleSubmit}
              sx={{ mt: 2 }}
            >
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
                    <Grid item xs={12} lg={5}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        style={{ backgroundColor: "#1E4939" }}
                        sx={{ mt: 3, mb: 2 }}
                        href={"/dashboard"}
                      >
                        Save Changes
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Stack>
      </>
    </DashboardCard>
  );
};

export default UploadButton;
