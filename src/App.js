import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import Header from "./components/header";
import HomePage from "./components/home";
import MoviePage from "./components/moviePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Search from "./components/Search";
import Login from "./auth/login";
import Player from "./components/player";
import TVPage from "./components/tvPage";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/player/:media/:id/:season/:episode">
            <Player />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/movie/:id">
            <MoviePage />
          </Route>
          <Route exact path="/tv/:id">
            <TVPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
