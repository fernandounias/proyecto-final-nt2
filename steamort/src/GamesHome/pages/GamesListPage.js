import React, { useState, useEffect } from "react";
import GamesList from "../controllers/GamesList";
import ButtonAppBar from "../../NavBar/Navbar";

const GamesListPage = () => {
  const [games, setGames] = useState([]);
  const url = "http://localhost:3001/api/games";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <>
      <ButtonAppBar></ButtonAppBar>
      <GamesList games={games}></GamesList>
    </>
  );
};

export default GamesListPage;
