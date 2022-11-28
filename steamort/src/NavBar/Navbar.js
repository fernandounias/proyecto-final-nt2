import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const ButtonAppBar = () => {
  const navigate = useNavigate();

  const handleSubmitHome = () => {
    return navigate("/home");
  };

  const handleSubmitHomeLogin = () => {
    return navigate("/gamesPurchase");
  };

  const handleSubmitLogin = () => {
    return navigate("/login");
  };

  const handleSubmitRegister = () => {
    return navigate("/register");
  };

  const handleSubmitMyGames = () => {
    return navigate("/myGames");
  };

  const handleSubmitClose = () => {
    sessionStorage.removeItem("Token");
    sessionStorage.removeItem("email");
    return navigate("/home");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {sessionStorage.getItem("Token") === null ? (
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>

              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                onClick={handleSubmitHome}
              >
                SteamOrt
              </Typography>
              <Button color="inherit" onClick={handleSubmitLogin}>
                Iniciar sesión
              </Button>
              <Button color="inherit" onClick={handleSubmitRegister}>
                Registrarse
              </Button>
            </>
          ) : (
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>

              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                onClick={handleSubmitHomeLogin}
              >
                SteamOrt
              </Typography>
              <Button color="inherit" onClick={handleSubmitMyGames}>
                Mis juegos
              </Button>
              <Button color="inherit" onClick={handleSubmitClose}>
                Cerrar sesión
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;
