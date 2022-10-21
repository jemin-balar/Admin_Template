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
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./styles.module.css";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      text: "Dashboard",
      icon: <Home color="secondary" />,
      path: "/",
    },
    {
      text: "User",
      icon: <Person color="secondary" />,
      path: "/user",
    },
  ];

  return (
    <>
      <Drawer
        sx={{
          width: 250,
          background: "#fff",
          boxShadow:"0 0 15px 0 rgb(34 41 47 / 5%)",
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
                <ListItemText primary={item.text}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {/* list links */}
      </Drawer>
    </>
  );
}
