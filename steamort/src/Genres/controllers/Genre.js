import React from "react";
import Chip from "@mui/material/Chip";
import { useNavigate } from "react-router-dom";

const Genre = ({ genre }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/gamesCategories/" + `${genre.description}`);
    window.location.reload();
  };

  return <Chip label={genre.description} onClick={handleClick} />;
};

export default Genre;
