import React, { useState, useEffect } from "react";
import GamesListCategories from "../controllers/GamesListCategories";
import ButtonAppBar from "../../NavBar/Navbar";
import { useParams } from "react-router-dom";

const GamesListPage = () => {
  function Description() {
    let { genre } = useParams();
    return genre;
  }
  const description = Description();
  const url = "http://localhost:3001/api/games/gamesByGenre/" + description;
  const [games, setGames] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      response.json().then((data) => {
        setGames(data);
      });
    }

    fetchData();
  }, []);
  return (
    <>
      <ButtonAppBar></ButtonAppBar>
      <GamesListCategories games={games}></GamesListCategories>
    </>
  );
};

export default GamesListPage;
