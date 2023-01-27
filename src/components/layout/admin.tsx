import { LayoutProps } from "@/models";
import {
  AppBar,
  Drawer,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import * as React from "react";
import { Menu } from "@mui/icons-material";
import { Outlet } from "react-router-dom";
export function AdminLayout() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setIsDrawerOpen(true)}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6">Dashboard</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      ></Drawer>
      <Grid container spacing={2}>
        <Outlet />
      </Grid>
    </>
  );
}
