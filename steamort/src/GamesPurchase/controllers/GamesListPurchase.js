import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import GamePurchase from "./GamePurchase";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

const GamesListPurchase = ({ games }) => {
  const [busqueda, setBusqueda] = useState("");
  let [gamesAux, setGamesAux] = useState("");

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setBusqueda(lowerCase);
    filtrar(lowerCase);
  };

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = games.filter((elemento) => {
      if (
        elemento.name
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setGamesAux(resultadosBusqueda);
  };

  if (!busqueda) {
    gamesAux = games;
  }
  return (
    <>
      <div
        className="search"
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            mx: "2px",
            margin: "8px",
            width: "60%",
          }}
        >
          <TextField
            id="outlined-basic"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            placeholder="Buscar"
            value={busqueda}
          />
        </Box>
      </div>
      <Box
        sx={{
          display: "grid",
          mx: "2px",
          columnGap: 2,
          rowGap: 2,
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        {gamesAux.map((game) => {
          return <GamePurchase game={game} />;
        })}
      </Box>
    </>
  );
};

export default GamesListPurchase;
