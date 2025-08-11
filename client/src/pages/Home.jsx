import { Box, Button } from "@mui/material";
import React from "react";
import {  useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear()
    navigate("/login");
  };
  return <Box sx={{display:"flex", flexDirection:"column",gap:"1rem"}}>This is HomePage
    <Button variant="contained" color="warning" onClick={handleLogout}>Logout</Button>
  </Box>;
};

export default Home;
