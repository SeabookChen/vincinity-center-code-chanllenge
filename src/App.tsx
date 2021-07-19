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
          <Route path="/music">
            <Music />
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

function Music() {
  return (
    <div className="music">
      <div className="header">
        <h1>Music</h1>
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
        <h2>Playlists</h2>
        <ul className="chart">
          <li className="chart-item">
            <div className="position"></div>
            <div className="title"></div>
          </li>
        </ul>
        <h2>New Releases</h2>
        <ul className="chart">
          <li className="chart-item">
            <div className="position"></div>
            <div className="title"></div>
          </li>
        </ul>
      </div>
    </div>
  )
}
