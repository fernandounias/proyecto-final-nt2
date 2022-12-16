import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useNavigate } from "react-router-dom";

const MyGame = ({ game }) => {
  const navigate = useNavigate();
  const jugar = () => {
    playGame(game.name);
    navigate("/myGames");
  };
  return (
    <Card sx={{ maxWidth: 550, margin: '10px'}}>
      <CardMedia component="img" image={game.image} />
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          {game.name}
        </Typography>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          Cantidad de veces jugadas: {game.vecesJugadas}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          startIcon={<PlayArrowIcon />}
          onClick={jugar}
          style={{margin: '0px 20px 10px'}}
        >
          Jugar
        </Button>
      </CardActions>
    </Card>
  );
};

function playGame(gameName) {
  const url = "http://localhost:3001/api/users/playGame";

  const playGame = () => {
    let email = sessionStorage.getItem("email");

    if (
      sessionStorage.getItem("Token") === null ||
      sessionStorage.getItem("Token") === undefined
    ) {
      window.alert("Debe iniciar sesión para realizar la compra");
    } else if (sessionStorage.getItem("Token") && email && gameName) {
      const request = new Request(url, {
        method: "PUT",
        body: JSON.stringify({ email: email, gameName: gameName }),
        headers: {
          "Content-Type": "application/json",
          Authorization: sessionStorage.getItem("Token"),
        },
      });

      fetch(request)
        .then((res) => res.json())
        .then((res) => {
          console.log("Se jugó un juego");
          window.location.reload(true);
        })
        .catch((error) => {
          window.alert(error);
          console.log(error);
        });
    }
  };

  playGame();
}

export default MyGame;
