import { Button, IconButton } from "@mui/material";
import { React } from "react";
import { useSwiper } from "swiper/react";
import gambar_button_next from "../../../images/ic_next_slide.png";

export default function SlideNextButton({ clickHandler }) {
  const swiper = useSwiper();

  return (
    <IconButton onClick={clickHandler}>
      <img src={gambar_button_next} />
    </IconButton>
  );
}
