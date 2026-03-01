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
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Navbar() {
  const [open, setOpen] = useState(false);
  const Theme = useTheme();

  const menuItems = ["About", "Services", "Projects", "Contacts"];

  return (
    <>
      <AppBar
        className="Navbar"
        position="static"
        sx={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar>
          {IsMobile ? (
            <div>
              <IconButton color="inherit" onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
            </div>
          ) : (
            <>
              <Typography sx={{ flexGrow: 1 }}>
                <img src="/logo.png" alt="logo" />
              </Typography>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
