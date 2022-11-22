import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const ButtonAppBar = () => {
  const handleSubmitLogin = () => {
    return (window.location.href = "/login");
  };

  const handleSubmitRegister = () => {
    return (window.location.href = "/register");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SteamOrt
          </Typography>
          <Button color="inherit" onClick={handleSubmitLogin}>
            Iniciar sesión
          </Button>
          <Button color="inherit" onClick={handleSubmitRegister}>
            Registrarse
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;
