import React, { useState, useEffect } from "react";
import MyGames from "../controllers/MyGames";
import ButtonAppBar from "../../NavBar/Navbar";
import { Alert, AlertTitle } from "@mui/material";

const MyGamesPage = () => {
  const [myGames, setMyGames] = useState([]);
  const url = "http://localhost:3001/api/users/myGames";

  useEffect(() => {
    let email = sessionStorage.getItem("email");
    if (
      sessionStorage.getItem("Token") === null ||
      sessionStorage.getItem("Token") === undefined
    ) {
      window.alert("Debe iniciar sesión para ver sus juegos");
    } else if (sessionStorage.getItem("Token") && email) {
      async function fetchData() {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: sessionStorage.getItem("Token"),
            email: email,
          },
        });
        response.json().then((data) => {
          setMyGames(data);
        });
      }

      fetchData();
    }
  }, []);

  return (
    <>
      <ButtonAppBar></ButtonAppBar>
      {myGames.length > 0 ? (
        <MyGames games={myGames}></MyGames>
      ) : (
          <Alert variant="outlined" severity="info" style={{width: '90%', margin: 'auto', display: 'flex', alignItems: 'center'}}>
            <AlertTitle> 
              <p>El usuario <strong>no posee juegos</strong></p>
            </AlertTitle>
          </Alert>
      )}
    </>
  );
};

export default MyGamesPage;
