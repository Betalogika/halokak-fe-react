import React from "react";
import Hero from "./Hero/Hero";
import Mentors from "./Mentors/Mentors";

import { Container, Grid, Grow } from "@mui/material";

const Beranda = () => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        sx={{
          marginTop: "50px",
          maxHeight: { xs: "auto", md: "300px" },
        }}
      >
        <Container>
          <Hero />
        </Container>
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        sx={{
          marginTop: "200px",
          minHeight: "572px",
          backgroundColor: "white",
        }}
      >
        <Container sx={{ paddingTop: "64px" }}>
          <Mentors />
        </Container>
      </Grid>
    </Grid>
  );
};

export default Beranda;
