import Login from "./Users/controller/Login";
import Register from "./Users/controller/Register";
import GamesListPage from "./GamesHome/pages/GamesListPage";
import GamesListPurchase from "./GamesPurchase/pages/GamesListPagePurchase";
import GamesCategoriesPage from "./GamesCategories/pages/GamesCategoriesPage";
import Purchase from "./Purchase/controllers/Purchase";
import MyGamesPage from "./MyGames/pages/MyGamesPage";
import Game from "./Game/pages/Game";
import { Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  // return <Login></Login>;
  return (
    <>
      {/* <ButtonAppBar /> Cuando se hace el Login, el Nav no se actualiza si no le das F5  */}
      <Routes>
        <Route index element={<GamesListPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route
          path="/gamesPurchase"
          element={<GamesListPurchase/>}
        />
        <Route path="/addPurchase" element={<Purchase/>} />
        <Route path="/myGames" element={<MyGamesPage/>} />
        <Route
          path="/gamesCategories/:genre"
          element={<GamesCategoriesPage />}
        />
        <Route path="/game/:id" element={<Game/>}/>
      </Routes>
    </>
  );
}

export default App;
