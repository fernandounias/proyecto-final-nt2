import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Game = ({ game }) => {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia component="img" height="600" image={game.image} />
      <CardHeader />
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          {game.name}
        </Typography>
        <Typography variant="h5" component="div">
          {game.status}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Game;
