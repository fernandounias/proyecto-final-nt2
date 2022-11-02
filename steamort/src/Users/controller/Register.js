import React from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@mui/material";
import "./AppLogin.css";
const Register = () => {
  const paperStyle = {
    padding: 20,
    height: "45vh",
    width: 280,
    margin: "20px auto",
  };
  const separado = {
    margin: "8px 0",
  };
  const spacing = {
    "letter-spacing": "0.6px",
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid>
          <h2>Bienvenido a SteamOrt!</h2>
        </Grid>
        <TextField
          id="nombre"
          label="Nombre"
          variant="outlined"
          style={separado}
          fullWidth
          required
        ></TextField>
        <TextField
          id="apellido"
          label="Apellido"
          variant="outlined"
          style={separado}
          fullWidth
          required
        ></TextField>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          style={separado}
          type="email"
          fullWidth
          required
        ></TextField>
        <TextField
          id="password"
          label="Contraseña"
          variant="outlined"
          type="password"
          style={separado}
          fullWidth
          required
        ></TextField>
        <Button variant="contained" style={spacing} fullWidth>
          Registrarse
        </Button>
      </Paper>
    </Grid>
  );
};

export default Register;
