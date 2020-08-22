import React from "react";
import { Box } from "@material-ui/core";

import Catalogue from "./components/Catalogue/Catalogue";

import "./App.css";

function App() {
  return (
    <Box className="App">
      <header className="App-header">
        <Catalogue />
      </header>
    </Box>
  );
}

export default App;
