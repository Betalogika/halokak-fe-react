import React from "react";
import { Container, ThemeProvider, useTheme } from "@mui/material";
import { Helmet } from "react-helmet";
import "./App.css";
import ResponsiveAppBar from "./components/Navbar/Navbar";
import Beranda from "./components/Beranda/Beranda";

const App = () => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>{process.env.REACT_APP_NAME}</title>
      </Helmet>
      <Container
        sx={{
          width: "auto",
          margin: { xs: 0, sm: 0, lg: "34px auto 50px auto" },
        }}
      >
        <ResponsiveAppBar />
      </Container>
      <Beranda />
    </ThemeProvider>
  );
};

export default App;
