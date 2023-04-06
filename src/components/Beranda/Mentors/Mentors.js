import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import KategoriBox from "./Box/KategoriBox";
import RekomendasiBox from "./Box/RekomendasiBox";
import mentor from "../../../images/mentor.svg";
// import required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import SlideNextButton from "./SlideNextButton";
// Instalasi plugin Swiper
SwiperCore.use([Navigation, Pagination]);

const Mentors = () => {
  const swiperRefKategori = React.useRef(null);
  const swiperRefRekomendasi = React.useRef(null);

  const handleNextKategori = () => {
    swiperRefKategori.current.slideNext();
  };
  const handleNextRekomendasi = () => {
    swiperRefRekomendasi.current.slideNext();
  };

  return (
    <Grid
      container
      spacing={8}
      sx={{
        paddingLeft: { xs: 0, md: "84px" },
        paddingRight: { xs: 0, md: "84px" },
      }}
    >
      <Grid key="Kategori-rekomodasi-box" item xs={12} sm={12} md={11} lg={8}>
        <Grid container spacing={1} columns={16}>
          <Grid item xs={16} md={16} lg={16}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Poppins",
                marginBottom: "20px",
                fontWeight: "bold",
              }}
            >
              Pilih Mentor Terbaikmu
            </Typography>
          </Grid>

          {/* Begin - Kategori ================================================== */}
          <Grid item xs={16} md={16} lg={16} sx={{ marginTop: "30px" }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Poppins",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Kategori
            </Typography>
          </Grid>

          {/* ITEM KATEGORI =========================================== */}
          <Grid item xs={16} md={14} lg={14}>
            <Swiper
              onSwiper={(swiper) => (swiperRefKategori.current = swiper)}
              slidesPerView={4}
              centeredSlides={false}
              spaceBetween={8}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              // navigation
              pagination={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="kategoriSwiper"
            >
              {Array.from(Array(11)).map((nilai, index) => (
                <SwiperSlide key={"kategori_slide_" + index}>
                  <KategoriBox key={"kategori_" + index} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
          <Grid item md={2} lg={2} xs={false}>
            <SlideNextButton clickHandler={handleNextKategori} />
          </Grid>
          {/* End - Kategori ================================================== */}

          {/* Begin - Rekomendasi ============================================= */}
          <Grid item xs={16} md={16} lg={16} sx={{ marginTop: "30px" }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Poppins",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Rekomendasi
            </Typography>
          </Grid>
          <Grid item xs={16} md={14} lg={14}>
            <Swiper
              onSwiper={(swiper) => (swiperRefRekomendasi.current = swiper)}
              slidesPerView={4}
              centeredSlides={false}
              spaceBetween={8}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              // navigation
              pagination={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="rekomendasiSwiper"
            >
              {Array.from(Array(10)).map((nilai, index) => (
                <SwiperSlide key={"rekomendasi_slide_" + index}>
                  <RekomendasiBox key={"rekomendasi_" + index} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
          <Grid item md={2} lg={2} xs={false}>
            <SlideNextButton clickHandler={handleNextRekomendasi} />
          </Grid>
          {/* End - Rekomendasi ========================================== */}
        </Grid>
      </Grid>

      <Grid key="Hero-Image" item xs={12} sm={12} md={2} lg={4}>
        <Box
          component="img"
          src={mentor}
          sx={{
            width: "130%",
            maxWidth: { xs: "90%", md: "150%" },
          }}
        ></Box>
      </Grid>
    </Grid>
  );
};

export default Mentors;
