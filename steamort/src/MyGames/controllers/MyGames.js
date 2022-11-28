import React from "react";
import MyGame from "./MyGame";
import { Box } from "@mui/material";

const MyGames = ({ games }) => {
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
        {games.map((juego) => {
          return <MyGame game={juego} />;
        })}
      </Box>
    </>
  );
};

export default MyGames;
