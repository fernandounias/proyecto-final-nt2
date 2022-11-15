import React, { useState, useEffect } from "react";
import GamesList from "../controllers/GamesList";

const GamesListPage = () => {
  const [games, setGames] = useState([]);
  // const url = "https://rickandmortyapi.com/api/character";
  const url = "http://localhost:3001/api/games";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  return <div>Home</div>;
};

export default GamesListPage;
