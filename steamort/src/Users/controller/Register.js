import React, { useState } from "react";
import { Grid, Paper, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./AppLogin.css";
import ButtonAppBar from "../../NavBar/Navbar";

const url = "http://127.0.0.1:3001/api/users/register";

const Register = (props) => {
  const navigate = useNavigate();
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

  const [userName, setUserName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      nombre: userName,
      apellido: userLastName,
      email: email,
      password: password,
    };

    const request = new Request(url, {
      method: "POST",
      body: JSON.stringify(user),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    fetch(request)
      .then((res) => res.json())
      .then((res) => {
        console.log("---");
        console.log(res);

        navigate("/login");
      })
      .catch((error) => {
        window.alert(error);
        console.log(error);
      });
  };

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setUserLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <ButtonAppBar></ButtonAppBar>
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
            onChange={handleNameChange}
          ></TextField>
          <TextField
            id="apellido"
            label="Apellido"
            variant="outlined"
            style={separado}
            fullWidth
            required
            onChange={handleLastNameChange}
          ></TextField>
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
            Registrarse
          </Button>
        </Paper>
      </Grid>
    </>
  );
};

export default Register;
