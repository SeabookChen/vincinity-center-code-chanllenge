import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"

import "./App.css"

export default function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/feed">
            <Feed />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <h1>Home</h1>
        <div className="button-container">
          <button id="mode" className="theme-changer">
            <FontAwesomeIcon icon={faSun} color="#FFA500" />
          </button>
          <button id="layout" className="theme-changer">
            <FontAwesomeIcon icon={faEye} />
          </button>
        </div>
      </div>
      <div>
        Oat cake jelly macaroon dragée marzipan cookie sweet roll jelly-o. Cookie pastry candy canes
        macaroon pastry icing lollipop halvah. Cake biscuit cotton candy lemon drops tiramisu.
        Cotton candy halvah biscuit bear claw cake.
      </div>
    </div>
  )
}

function Feed() {
  return (
    <div className="feed">
      <div className="header">
        <h1>Feed</h1>
        <div className="button-container">
          <button id="mode" className="theme-changer">
            <FontAwesomeIcon icon={faSun} color="#FFA500" />
          </button>
          <button id="layout" className="theme-changer">
            <FontAwesomeIcon icon={faEye} />
          </button>
        </div>
      </div>
      <div>
        <h2>Posts</h2>
        <h2>Todos</h2>
      </div>
    </div>
  )
}
