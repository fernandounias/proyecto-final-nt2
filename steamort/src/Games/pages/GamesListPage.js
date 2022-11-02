import React, { useState, useEffect } from "react";
import GamesList from "../controllers/GamesList";

const GamesListPage = () => {
  const [games, setGames] = useState([]);
  const url = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setGames(data.results));
  }, []);

  return (
    <>
      <GamesList games={games} />
    </>
  );
};

export default GamesListPage;
