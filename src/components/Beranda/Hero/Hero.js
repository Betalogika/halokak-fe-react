import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import banner from "../../../images/banner.svg";
import HeroBox from "./Box/HeroBox";

const Hero = () => {
  return (
    <Grid
      container
      spacing={8}
      sx={{
        paddingLeft: { xs: 0, md: "84px" },
        paddingRight: { xs: 0, md: "84px" },
      }}
    >
      <Grid key="Hero-box" item xs={12} sm={12} md={8} lg={8}>
        <Grid container spacing={0.5}>
          <Grid item xs={12} md={12} lg={12}>
            <Typography
              variant="h3"
              sx={{ fontFamily: "Poppins", marginBottom: "20px" }}
            >
              Mentoring Jadi Lebih Mudah
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontFamily: "Poppins", marginBottom: "42px" }}
            >
              Hubungi tentor, Konsul terkait pekerjaan, Update seputar pekerjaan
              semua hanya dengan Halo Kak
            </Typography>
          </Grid>
          {Array.from(Array(4)).map((nilai, index) => (
            <Grid item key={index} md={3} lg={3}>
              <HeroBox />
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid key="Hero-Image" item xs={12} sm={12} md={4} lg={4}>
        <Box
          component="img"
          src={banner}
          sx={{
            width: "150%",
            maxWidth: { xs: "100%", md: "150%" },
          }}
        ></Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
