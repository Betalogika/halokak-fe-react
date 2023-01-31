import { styled } from "@mui/system";
import { AppBar, Typography } from "@mui/material";

const AppBarStyled = styled(AppBar)({
  borderRadius: 30,
  height: "96px",
  margin: "30px 0",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "100px 100px",
  backgroundColor: "#FFFFFF",
});

const TypographyStyled = styled(Typography)`
  color: "rgba(0,183,255, 1)",
  textDecoration: "none",
`;

export { AppBarStyled, TypographyStyled };
