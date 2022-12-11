import React from "react";
import { Box } from "@mui/material";
import GamesCategories from "./GameCategories";

const GamesList = ({ games }) => {
  return (
    <div className="main">
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
          return <GamesCategories game={game} />;
        })}
      </Box>
    </div>
  );
};

export default GamesList;
