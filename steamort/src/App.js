import Login from "./Users/controller/Login";
import Register from "./Users/controller/Register";
import GamesListPage from "./GamesHome/pages/GamesListPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  // return <Login></Login>;
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <GamesListPage></GamesListPage>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
