import React, { useState, useEffect } from "react";
import GenresList from "../controllers/GenresList";

const GenresPage = () => {
  const [genres, setGenres] = useState([]);
  const url = "http://localhost:3001/api/games/genres";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setGenres(data));
  }, []);

  return (
    <>
      <GenresList genres={genres}></GenresList>
    </>
  );
};

export default GenresPage;
