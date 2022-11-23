import Login from "./Users/controller/Login";
import Register from "./Users/controller/Register";
import GamesListPage from "./GamesHome/pages/GamesListPage";
import GamesListPurchase from "./GamesPurchase/pages/GamesListPagePurchase";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ButtonAppBar from "../src/NavBar/Navbar";
import "./App.css";

function App() {
  // return <Login></Login>;
  return (
    <>
      <Router>
        <ButtonAppBar />
        <Switch>
          <Route path="/home">
            <>
              <GamesListPage></GamesListPage>
            </>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/gamesPurchase">
            <GamesListPurchase></GamesListPurchase>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
