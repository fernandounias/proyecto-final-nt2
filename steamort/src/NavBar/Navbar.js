import * as React from "react";
import AppBar from "@mui/material/AppBar";
import GenresPage from "../Genres/pages/GenresPage";
import { useNavigate } from "react-router-dom";
import {
  Box,
  List,
  Drawer,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { styled, useTheme } from "@mui/material/styles";

const ButtonAppBar = () => {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const drawerWidth = 240;

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

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
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
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
                  onClick={handleDrawerOpen}
                  sx={{ mr: 2, ...(open && { display: "none" }) }}
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
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Typography>Categorias</Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <GenresPage />
        </List>
        <Divider />
      </Drawer>
    </>
  );
};

export default ButtonAppBar;
