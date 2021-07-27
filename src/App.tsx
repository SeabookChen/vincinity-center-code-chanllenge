import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./components/home/home"
import Feed from "./components/feed/feed"
import Header from "./components/header/header";


import "./App.css"

export default function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact={false} path="/feed/:id">
            <Feed />
          </Route>
          <Route exact={false} path="/feed">
            <Feed />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}



