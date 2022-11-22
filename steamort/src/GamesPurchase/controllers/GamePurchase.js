import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";

const GamePurchase = ({ game }) => {
  const comprar = () => {
    return window.alert("Comprado");
  };

  return (
    <Card>
      <CardMedia component="img" height="600" image={game.image} />
      <CardHeader />
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          {game.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          startIcon={<AddShoppingCartIcon />}
          onClick={comprar}
        >
          Comprar
        </Button>
      </CardActions>
    </Card>
  );
};

export default GamePurchase;
