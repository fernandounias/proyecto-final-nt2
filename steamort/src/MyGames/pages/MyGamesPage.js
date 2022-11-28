import React, { useState, useEffect } from "react";
import MyGames from "../controllers/MyGames";

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
      {myGames.length > 0 ? (
        <MyGames games={myGames}></MyGames>
      ) : (
        <>
          <h1>El usuario no posee juegos</h1>
        </>
      )}
    </>
  );
};

export default MyGamesPage;
