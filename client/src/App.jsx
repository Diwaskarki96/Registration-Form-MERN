import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        sx={{ marginRight: "1rem" }}
        variant="contained"
        color="primary"
        onClick={() => {
          navigate("/register");
        }}
      >
        Register
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </Button>
    </div>
  );
};

export default App;
