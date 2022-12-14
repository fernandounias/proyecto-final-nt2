import React, { useState } from "react";
import { Grid, Paper, TextField, Button, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import ButtonAppBar from "../../NavBar/Navbar";

const url = "http://127.0.0.1:3001/api/users/addPurchase";

const Purchase = () => {
  const paperStyle = {
    padding: 20,
    // height: "60vh",
    width: 350,
    margin: "20px auto",
  };
  const separado = {
    margin: "8px 0",
  };
  const spacing = {
    "letter-spacing": "0.6px",
  };

  const [value, setValue] = React.useState(dayjs());

  const navigate = useNavigate();

  const [numero, setNumero] = useState("");
  const [codigo, setCodigo] = useState("");
  const [nombreCompleto, setNombreCompleto] = useState("");

  const handleNumeroChange = (event) => {
    setNumero(event.target.value);
    console.log(numero);
  };
  const handleCodigoChange = (event) => {
    setCodigo(event.target.value);
    console.log(codigo);
  };
  const handleNombreCompletoChange = (event) => {
    setNombreCompleto(event.target.value);
    console.log(nombreCompleto);
  };

  const comprar = (event) => {
    if (numero === "" || codigo === "" || nombreCompleto === "") {
      window.alert("Todos los campos son requeridos");
    } else {
      event.preventDefault();
      let email = sessionStorage.getItem("email");
      let game = sessionStorage.getItem("game");
      if (
        sessionStorage.getItem("Token") === null ||
        sessionStorage.getItem("Token") === undefined
      ) {
        window.alert("Debe iniciar sesión para realizar la compra");
      } else if (sessionStorage.getItem("Token") && email && game) {
        const request = new Request(url, {
          method: "PUT",
          body: JSON.stringify({ email: email, game: game }),
          headers: {
            "Content-Type": "application/json",
            Authorization: sessionStorage.getItem("Token"),
          },
        });

        fetch(request)
          .then((res) => res.json())
          .then((res) => {
            console.log("---");
            console.log(res);
            if (res.error) {
              throw new Error(res.error);
            }

            navigate("/myGames");
          })
          .catch((error) => {
            window.alert(error);
            console.log(error);
            navigate("/myGames");
          });
      }
    }
    sessionStorage.removeItem("game");
  };

  return (
    <Grid>
      <ButtonAppBar></ButtonAppBar>
      <Paper elevation={10} style={paperStyle}>
        <Grid>
          <h2>Complete los datos de su tarjeta</h2>
        </Grid>
        <TextField
          id="tipo"
          select
          label="Tipo"
          style={separado}
          fullWidth
          InputLabelProps={{ required: true }}
          defaultValue={10}
        >
          <MenuItem value={10}>VISA</MenuItem>
          <MenuItem value={20}>MASTERCARD</MenuItem>
          <MenuItem value={30}>AMERICAN EXPRESS</MenuItem>
        </TextField>
        <TextField
          id="numero"
          label="Numero Tarjeta"
          variant="outlined"
          style={separado}
          fullWidth
          required
          inputProps={{
            maxlength: 16,
          }}
          onChange={handleNumeroChange}
        ></TextField>
        <TextField
          id="codSeg"
          label="Codigo seguridad"
          variant="outlined"
          style={separado}
          type="password"
          fullWidth
          required
          inputProps={{
            maxlength: 4,
          }}
          onChange={handleCodigoChange}
        ></TextField>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            views={["year", "month"]}
            label="Vencimiento"
            minDate={dayjs()}
            maxDate={dayjs("2120-06-01")}
            inputFormat="MM/YYYY"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                helperText={null}
                style={separado}
                fullWidth
                variant="outlined"
              />
            )}
          />
        </LocalizationProvider>
        <TextField
          id="nombreApellido"
          label="Nombre y Apellido"
          variant="outlined"
          style={separado}
          fullWidth
          required
          onChange={handleNombreCompletoChange}
        ></TextField>
        <Button variant="contained" style={spacing} fullWidth onClick={comprar}>
          Comprar
        </Button>
      </Paper>
    </Grid>
  );
};

export default Purchase;
