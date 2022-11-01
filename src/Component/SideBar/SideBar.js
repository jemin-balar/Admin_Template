import React, { useState } from "react";
import {
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import { Home, Person } from "@mui/icons-material";
import SchoolIcon from "@mui/icons-material/School";
import TranslateIcon from "@mui/icons-material/Translate";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TempleHinduIcon from "@mui/icons-material/TempleHindu";
import PeopleIcon from "@mui/icons-material/People";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import BusinessIcon from "@mui/icons-material/Business";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import GridViewIcon from '@mui/icons-material/GridView';
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./styles.module.css";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const menuItems = [
    {
      text: "Dashboard",
      icon: <Home color="secondary" />,
      path: "/home",
    },
    {
      text: "User",
      icon: <Person color="secondary" />,
      path: "/user",
    },
    {
      text: "Account",
      icon: <AccountCircleIcon color="secondary" />,
      path: "/account",
    },
    {
      text: "Religion",
      icon: <TempleHinduIcon color="secondary" />,
      path: "/religion",
    },
    {
      text: "Community",
      icon: <PeopleIcon color="secondary" />,
      path: "/community",
    },
    {
      text: "Education",
      icon: <SchoolIcon color="secondary" />,
      path: "/education",
    },
    {
      text: "Work Experience",
      icon: <BusinessCenterIcon color="secondary" />,
      path: "/workexperience",
    },
    {
      text: "Occupation",
      icon: <BusinessIcon color="secondary" />,
      path: "/occupation",
    },
    {
      text: "Mother Tongue",
      icon: <TranslateIcon color="secondary" />,
      path: "/mothertongue",
    },
    {
      text: "Purpose Of Registration",
      icon: <TranslateIcon color="secondary" />,
      path: "/purposeofregistration",
    },
    {
      text: "Passions Or Hobbies",
      icon: <TranslateIcon color="secondary" />,
      path: "/passionsorhobbies",
    },
  ];

  return (
    <>
      <Drawer
        sx={{
          width: 250,
          background: "#fff",
          boxShadow: "0 0 15px 0 rgb(34 41 47 / 5%)",
          "& .MuiDrawer-paper": {
            width: 250,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <div>
          <Typography variant="h5" className="text-center mt-4">
            Admin
          </Typography>
        </div>
        {/* list links */}
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text}>
              <ListItemButton
                onClick={() => navigate(item.path)}
                className={
                  location.pathname === item.path ? styles.activeButton : null
                }
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <GridViewIcon />
              </ListItemIcon>
              <ListItemText primary="IAP Table" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={() => navigate("/android")}>
                <ListItemIcon>
                  <GridViewIcon />
                </ListItemIcon>
                <ListItemText primary="Android Table" />
              </ListItemButton>
            </List>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={() => navigate("/ios")}>
                <ListItemIcon>
                  <GridViewIcon />
                </ListItemIcon>
                <ListItemText primary="IOS Table" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        {/* list links */}
      </Drawer>
    </>
  );
}
