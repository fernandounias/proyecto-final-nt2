import Login from "./Users/controller/Login";
import Register from "./Users/controller/Register";
import GamesListPage from "./GamesHome/pages/GamesListPage";
import GamesListPurchase from "./GamesPurchase/pages/GamesListPagePurchase";
import Purchase from "./Purchase/controllers/Purchase";
import MyGamesPage from "./MyGames/pages/MyGamesPage";
import { Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  // return <Login></Login>;
  return (
    <>
      {/* <ButtonAppBar /> Cuando se hace el Login, el Nav no se actualiza si no le das F5  */}
      <Routes>
        <Route path="/home" element={<GamesListPage></GamesListPage>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route
          path="/gamesPurchase"
          element={<GamesListPurchase></GamesListPurchase>}
        />
        <Route path="/addPurchase" element={<Purchase></Purchase>} />
        <Route path="/myGames" element={<MyGamesPage></MyGamesPage>} />
      </Routes>
    </>
  );
}

export default App;
