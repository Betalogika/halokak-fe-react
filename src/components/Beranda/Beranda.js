import React from "react";
import Hero from "./Hero/Hero";
import Mentors from "./Mentors/Mentors";
import Artikel from "./Artikel/Artikel";

import { Container, Grid, Grow } from "@mui/material";

const Beranda = () => {
  return (
    <Grid container>
      {/* ===== Hero ============= */}
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
      {/* ======  Mentor ============ */}
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
      {/* ==== Artikel dan Informasi ====== */}
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
          <Artikel />
        </Container>
      </Grid>
    </Grid>
  );
};

export default Beranda;
