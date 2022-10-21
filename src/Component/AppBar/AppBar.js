import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(null);
  const [mode, setMode] = useState("light");

  const handleOpenUserMenu = (e) => {
    setMenuOpen(e.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setMenuOpen(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          sx={{
            width: `calc(100% - 250px)`,
            boxShadow: "0 4px 24px 0 rgb(34 41 47 / 10%)",
          }}
          position="fixed"
          className="mt-4 d-flex"
        >
          <Toolbar sx={{backgroundColor:"#ffffff"}}>
            <IconButton size="large" color="inherit" className="d-flex">
              <MailOutlineIcon />
            </IconButton>
            <IconButton size="large" color="inherit" className="d-flex">
              <ChatBubbleOutlineIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <Box className="me-5 d-flex">
              <IconButton
                className="d-flex"
                size="large"
                color="inherit"
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                <DarkModeOutlinedIcon />
              </IconButton>
              <IconButton className="d-flex me-3" size="large" color="inherit">
                <Badge badgeContent={5} color="error">
                  <NotificationsNoneIcon />
                </Badge>
              </IconButton>
              <div className="d-flex flex-column justify-content-center">
                <Typography
                  className="me-3 fw-semibold"
                  sx={{ fontSize: 14 }}
                >
                  Johndoe
                </Typography>
                <Typography
                  className="me-3 text-end"
                  sx={{ fontSize: 12 }}
                >
                  admin
                </Typography>
              </div>
              <Avatar
                sx={{ width: 40, height: 40 }}
                src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                onClick={handleOpenUserMenu}
                className="mt-1"
              />
            </Box>
            <Menu
              id="menu-appbar"
              anchorEl={menuOpen}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(menuOpen)}
              onClose={handleCloseUserMenu}
              className="mt-5"
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>My account</MenuItem>
              <MenuItem>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
