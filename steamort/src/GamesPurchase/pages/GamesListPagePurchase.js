import React, { useState, useEffect } from "react";
import ButtonAppBar from "../../NavBar/Navbar";
import GamesListPurchase from "../controllers/GamesListPurchase";

const GamesListPagePurchase = () => {
  const [games, setGames] = useState([]);
  // const url = "https://rickandmortyapi.com/api/character";
  const url = "http://localhost:3001/api/games";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <>
      <ButtonAppBar></ButtonAppBar>
      <GamesListPurchase games={games}></GamesListPurchase>
    </>
  );
};

export default GamesListPagePurchase;
