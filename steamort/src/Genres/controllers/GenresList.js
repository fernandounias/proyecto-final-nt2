import React from "react";
import Genre from "./Genre";
import { Box } from "@mui/material";

const GamesList = ({ genres }) => {
  return (
    <Box
      sx={{
        display: "grid",
        mx: "2px",
        columnGap: 2,
        rowGap: 2,
        gridTemplateColumns: "repeat(2, 1fr)",
      }}
    >
      {genres.map((genre) => {
        return <Genre genre={genre} />;
      })}
    </Box>
  );
};

export default GamesList;
