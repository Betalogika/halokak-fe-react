import React from "react";
import { Grid, Typography } from "@mui/material";
import ArtikelBox from "./Box/ArtikelBox";
import SwiperCore, { Navigation, Pagination, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, FreeMode]);

const Artikel = () => {
  const swiperRef = React.useRef(null);

  const handelPrevArtikel = () => {
    swiperRef.current.slidePrev();
  };
  const handelNextArtikel = () => {
    swiperRef.current.slideNext();
  };

  return (
    <Grid container spacing={8}>
      <Grid item sx={{ textAlign: "center" }} lg={12} md={12} xs={12}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Poppins",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Artikel & Informasi
        </Typography>
      </Grid>
      <Grid item lg={12} md={12}>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          className="artikelSwiper"
        >
          {Array.from(Array(11)).map((_nilai, index) => (
            <SwiperSlide>
              <ArtikelBox />
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
      <Grid item lg={12}>
        <button onClick={handelPrevArtikel}>Sebelumnya</button>
        <button onClick={handelNextArtikel}>Selanjutnya</button>
      </Grid>
    </Grid>
  );
};

export default Artikel;
