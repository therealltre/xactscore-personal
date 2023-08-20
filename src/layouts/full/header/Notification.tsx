import React, { useState } from "react";
import Link from "next/link";
import {
  Avatar,
  Box,
  Menu,
  IconButton,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Badge
} from "@mui/material";

import {
  IconBellRinging, IconGauge,
} from "@tabler/icons-react";
// import { notifications } from "./data";

const Notification = () => {
  const [anchorEl2, setAnchorEl2] = useState(null);
  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const notifications = [
    {
      icon: IconGauge,
      title: 'Score refreshed',
      subtitle: 'Your new credit score is 640',
    },
    {
      icon: IconGauge,
      title: 'Credit Usage',
      subtitle: 'Your credit usage is high',
    },
    // {
    //   icon: IconGauge,
    //   title: 'New Payment received',
    //   subtitle: 'Check your earnings',
    // },
  ];
  
  return (
    <Box>
      <IconButton
        size="large"
        aria-label="show 11 new notifications"
        color="inherit"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        sx={{
          ...(typeof anchorEl2 === "object" && {
            color: "primary.main"
          })
        }}
        onClick={handleClick2}
      >
        <Badge variant="dot" color="primary">
          <IconBellRinging size="21" stroke="1.5" />
        </Badge>
      </IconButton>
      {/* ------------------------------------------- */}
      {/* Message Dropdown */}
      {/* ------------------------------------------- */}
      <Menu
        id="msgs-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        transformOrigin={{ horizontal: "left", vertical: "top" }}
        sx={{
          "& .MuiMenu-paper": {
            width: "250px"
          }
        }}
      >        
        {/* Render notifications */}
        {notifications.map((notification, index) => (
          <MenuItem key={index}>
            <ListItemIcon ><IconGauge width={20} /> </ListItemIcon>
            {/* {notification.icon} */}
            <ListItemText primary={notification.title} secondary={notification.subtitle} />
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default Notification;
