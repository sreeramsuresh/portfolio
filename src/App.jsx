import React from "react";
import Portfolio from "./components/Portfolio";
import Cursor from "./components/Cursor";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Portfolio />
      <Cursor />
    </Box>
  );
}

export default App;