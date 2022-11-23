import React, { useState } from "react";
import { Grid, Paper, TextField, Button } from "@mui/material";
import "./AppLogin.css";

const url = "http://127.0.0.1:3001/api/users/addPurchase";

const Purchase = (props) => {
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid>
          <h2>Bienvenido a SteamOrt!</h2>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Register;
