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
export function AdminLayout({ children }: LayoutProps) {
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
      <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        // Add navigation links or other content here
      </Drawer>
      <Grid container spacing={2}>
        // Add dashboard widgets or other content here
      </Grid>
    </>
  );
}
