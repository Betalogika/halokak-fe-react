import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import LoginDialog from "../Login/LoginDialog";

const pages = ["Beranda", "Riwayat", "Artikel"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isLogin, setIsLogin] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClickOpen = () => {
    setOpenLogin(true);
  };

  return (
    <AppBar
      style={{
        left: 0,
        width: "auto",
        height: "96px",
        backgroundColor: "#FFFFFF",
        borderRadius: 30,
      }}
      position="static"
    >
      <Container maxWidth="lg" sx={{ marginTop: "auto", marginBottom: "auto" }}>
        <Toolbar
          disableGutters
          sx={{
            color: "black",
            paddingLeft: { xs: 0, md: "198px" },
            paddingRight: { xs: 0, md: "86px" },
          }}
        >
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{ fontFamily: "Poppins" }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* BEGIN BRAND AND MENU LG */}
          <Box
            sx={{
              flexGrow: 3,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  textTransform: "none",
                  marginRight: "25px",
                }}
              >
                <Typography
                  sx={{ width: "72px", color: "black", fontFamily: "Poppins" }}
                >
                  {page}
                </Typography>
              </Button>
            ))}
          </Box>
          {/* END BRAND AND MENU */}

          {/* SETTING */}
          {isLogin ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Button
              variant="outlined"
              sx={{
                color: "#6AC8D2",
                borderColor: "#6AC8D2",
                "&:hover": { color: "#6AC8D2", borderColor: "#6AC8D2" },
                borderRadius: "10px",
              }}
              onClick={handleClickOpen}
            >
              Login
            </Button>
          )}
        </Toolbar>
        <LoginDialog openLogin={openLogin} setOpenLogin={setOpenLogin} />
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
