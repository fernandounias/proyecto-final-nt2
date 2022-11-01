import React from "react";
import { TextField, Box, Button, Typography } from "@mui/material";
import "./AppLogin.css";
const Login = () => {
  return (
    <div className="form">
      <form>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Typography variant="subtitle1" gutterBottom>
            Ingresa!   
          </Typography>
          <TextField id="email" label="Email" variant="outlined"></TextField>
          <br></br>
          <TextField
            id="contrasenia"
            label="Contraseña"
            variant="outlined"
            type="password"
          ></TextField>
          <br></br>
          <div>
            <Button variant="contained">Ingresar</Button>
          </div>
        </Box>
      </form>
    </div>
  );
};

export default Login;
