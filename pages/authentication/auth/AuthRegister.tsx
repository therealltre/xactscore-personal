import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  FormControlLabel,
  Checkbox
} from "@mui/material";
import Link from "next/link";
import { Stack } from "@mui/system";

interface registerType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
}

const AuthRegister = ({ title, subtitle, subtext }: registerType) => (
  <>
    {title ? (
      <Typography fontWeight="700" variant="h2" mb={1}>
        {title}
      </Typography>
    ) : null}

    {subtext}

    <Box>
      <Stack mb={3}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="fullname"
          label="Full Name"
          name="fullname"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />

        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
      </Stack>
      <Button
        type="submit"
        style={{ backgroundColor: "#1E4939" }}
        sx={{ mt: 3, mb: 2 }}
        variant="contained"
        size="large"
        fullWidth
        component={Link}
        href="/"
      >
        Sign Up
      </Button>
     
    </Box>
    {subtitle}
  </>
);

export default AuthRegister;
