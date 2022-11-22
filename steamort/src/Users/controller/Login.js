import React, { useState } from "react";
import { Grid, Paper, TextField, Button, Alert } from "@mui/material";
import "./AppLogin.css";

const url = "http://127.0.0.1:3001/api/users/login";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "30vh",
    width: 280,
    margin: "20px auto",
  };
  const separado = {
    margin: "8px 0",
  };
  const spacing = {
    "letter-spacing": "0.6px",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      email: email,
      password: password,
    };

    const request = new Request(url, {
      method: "POST",
      body: JSON.stringify(user),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    if (email && password) {
      fetch(request)
        .then((res) => res.json())
        .then((res) => {
          sessionStorage.setItem("Token", res.token);

          return (window.location.href = "/gamesPurchase");
        })
        .catch((error) => {
          window.alert("Credenciales no válidas");
          console.log(error);
        });
    } else {
      console.log("Entra en error");
      return window.alert("Los campos son requeridos");
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid>
          <h2>Ingresar</h2>
        </Grid>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          style={separado}
          type="email"
          fullWidth
          required
          onChange={handleEmailChange}
        ></TextField>
        <TextField
          id="password"
          label="Contraseña"
          variant="outlined"
          type="password"
          style={separado}
          fullWidth
          required
          onChange={handlePasswordChange}
        ></TextField>
        <Button
          variant="contained"
          style={spacing}
          fullWidth
          onClick={handleSubmit}
        >
          Iniciar Sesion
        </Button>
      </Paper>
    </Grid>
  );
};

export default Login;
