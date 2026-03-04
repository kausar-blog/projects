import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

function Navbar() {
  const [open, setOpen] = useState(false);
  const Theme = useTheme();

  const IsMobile = useMediaQuery(Theme.breakpoints.down("sm"));

  const menuItems = ["About", "Services", "Projects", "Contacts"];

  return (
    <>
      <AppBar
        elevation={0}
        position="static"
        sx={{
          backgroundColor: "white",
          color: "black",
          borderBottom: "1px solid #eee",
        }}
      >
        <Toolbar>
          {IsMobile ? (
            <IconButton color="inherit" onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <Typography sx={{ flexGrow: 1 }}>
                <img src="/logo.png" alt="logo" style={{ height: "40px" }} />
              </Typography>
              {menuItems.map((item) => (
                <Button color="inherit" key={item}>
                  {item}
                </Button>
              ))}
              <Button
                variant="outlined"
                sx={{
                  color: "#2AB691",
                  borderRadius: "10px",
                  ml: 2,
                  "&:hover": {
                    backgroundColor: "#2AB666",
                    color: "white",
                  },
                }}
              >
                Sign Up
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 250 }}>
          {/* {menuItems.map((item) => (
            <ListItem button key={item} onClick={() => setOpen(false)}>
              <ListItemText>{item}</ListItemText>
            </ListItem>
          ))}
          <ListItem button>
            <ListItemText primary="Sign up" />
          </ListItem> */}
        </List>

        <List sx={{ width: 250 }}>
          {menuItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton onClick={() => setOpen(false)}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton onClick={() => setOpen(false)}>
              <ListItemText primary="Sign Up" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
