import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PageviewIcon from '@mui/icons-material/Pageview';



const GamePurchase = ({ game }) => {
  const navigate = useNavigate();
  const comprar = () => {
    sessionStorage.setItem("game", game.name);
    return navigate("/addPurchase");
  };

  const handleLink = ()=>{
    navigate("/game/" + `${game._id}`);
    window.location.reload();
  }


  return (
    <Card sx={{ maxWidth: 600, margin: '10px' }} style={{display: 'flex', 
    alignItems: 'start', 
    flexDirection: 'column', alignContent: 'space-around'}}>
      <CardMedia component="img" height="350" image={game.image} />
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          {game.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          startIcon={<ShoppingCartIcon />}
          onClick={comprar}
          style={{margin: '15px 20px'}}
        >
          Comprar
        </Button>

        <Button variant="contained" startIcon={<PageviewIcon />} 
        onClick={handleLink} style={{margin: '15px 20px'}}> 
          Previsualizar 
        </Button>

      </CardActions>
    </Card>
  );
};

export default GamePurchase;
