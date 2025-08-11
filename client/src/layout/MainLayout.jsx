import React from "react";
import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
import App from "../App";

const MainLayout = () => {
  return (
    <div>
     

      <Stack sx={{ padding: "0 1rem", minHeight: "80vh" }}>
        <Outlet />
      </Stack>
    </div>
  );
};

export default MainLayout;
