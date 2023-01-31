import * as React from "react";
import { Box, ThemeProvider, createTheme } from "@mui/system";

const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
    success: {
      dark: "#009688",
    },
  },
});

const HeroBox = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "background.paper",
          borderRadius: 2,
          border: "1px solid #6AC8D2",
          p: 1,
          minWidth: 10,
          maxWidth: 150,
        }}
      >
        <Box sx={{ color: "text.secondary" }}>Sessions</Box>
        <Box
          sx={{
            color: "success.dark",
            display: "inline",
            fontWeight: "bold",
            mx: 0.5,
            fontSize: 14,
          }}
        >
          +18.77%
        </Box>
        <Box sx={{ color: "text.secondary", display: "inline", fontSize: 14 }}>
          vs. last week
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default HeroBox;
