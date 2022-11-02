import React from "react";
import { Box } from "@mui/material";
import Game from "./Game";

const GamesList = ({ games }) => {
  console.log(games);
  return (
    <>
      <Box
        sx={{
          display: "grid",
          mx: "2px",
          columnGap: 2,
          rowGap: 2,
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        {games.map((game) => {
          return <Game game={game} />;
        })}
      </Box>
    </>
  );
};

export default GamesList;
