import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import Game from "./Game";
import SearchIcon from "@mui/icons-material/Search";

const GamesList = ({ games }) => {
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
    <div className="main">
      <div className="search">
        <Box
          sx={{
            display: "inline-flex",
            mx: "2px",
            margin: "8px",
          }}
        >
          <TextField
            id="outlined-basic"
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
          return <Game game={game} />;
        })}
      </Box>
    </div>
  );
};

export default GamesList;
