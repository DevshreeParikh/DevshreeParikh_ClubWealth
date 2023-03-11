import React from "react";
import logo from "./StarWars.png";
import MainFunctional from "./components/mainFunctional";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <a href="/">
            <img className="logo" src={logo} alt="Logo" height={50} />
          </a>
          <div className="navigation-option">
            <a href="/starwars/page/0" className="header-link">
              StarWars
            </a>
          </div>
        </div>
        <div className="divider" />
        <div className="App-body">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route
              exact
              path="/starwars/page/:page"
              element={<MainFunctional />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
