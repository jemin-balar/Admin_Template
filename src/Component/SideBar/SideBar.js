import React from "react";
import {
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Home, Person } from "@mui/icons-material";
import SchoolIcon from '@mui/icons-material/School';
import TranslateIcon from '@mui/icons-material/Translate';
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./styles.module.css";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

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
      icon: <Person color="secondary" />,
      path: "/account",
    },
    {
      text: "Religion",
      icon: <Person color="secondary" />,
      path: "/religion",
    },
    {
      text: "Community",
      icon: <Person color="secondary" />,
      path: "/community",
    },
    {
      text: "Education",
      icon: <SchoolIcon color="secondary" />,
      path: "/education",
    },
    {
      text: "Work Experience",
      icon: <SchoolIcon color="secondary" />,
      path: "/workexperience",
    },
    {
      text: "Occupation",
      icon: <SchoolIcon color="secondary" />,
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
        </List>
        {/* list links */}
      </Drawer>
    </>
  );
}
