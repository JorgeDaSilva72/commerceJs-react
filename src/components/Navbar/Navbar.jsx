import React from "react";
import { AppBar, Toolbar, IconButton, Badge, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

import logo from "../../assets/commerce.png";

const navBar = () => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: "none",
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        }}
        color="inherit"
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              alignItems: "center",
              display: "flex",
              textDecoration: "none",
            }}
            color="inherit"
          >
            <img
              src={logo}
              alt="commerce.js"
              height="25px"
              sx={{
                marginRight: "10px",
              }}
            />{" "}
            Commerce.js
          </Typography>
          <div
            sx={{
              flexGrow: 1,
            }}
          />

          <div sx={{}}>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default navBar;
