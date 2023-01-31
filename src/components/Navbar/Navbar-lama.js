import React from "react";
import { Typography } from "@mui/material";

import { AppBarStyled, TypographyStyled } from "./style";

const Navbar = () => {
  return (
    <AppBarStyled position="static" color="inherit">
      <TypographyStyled variant="h2" align="center">
        HALO KAK
      </TypographyStyled>
    </AppBarStyled>
  );
};

export default Navbar;
