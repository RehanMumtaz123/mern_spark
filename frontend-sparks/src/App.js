import React from "react";
import Nav from "./Components/Nav";
import Data from "./Components/data";
import Add from "./Components/AddUser";
import Transfer from "./Components/Transfer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Nav />
            <Home />
          </Route>
          <Route path="/records">
            <Nav />
            <Data />
          </Route> 
          <Route path="/adduser">
            <Nav />
            <Add />
          </Route>
          <Route path="/transfer">
            <Nav />
            <Transfer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
