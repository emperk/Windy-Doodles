import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

// components
import Home from "./components/Home";
import Adopt from "./components/Adopt";
import Info from "./components/Info";
import Litters from "./components/Litters";
import Parents from "./components/Parents";

import './App.css';

export default function App() {
  return (
    <>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/adopt">Adopt</Link>
          </li>
          <li>
            <Link to="/info">More Info</Link>
          </li>
          <li>
            <Link to="/litters">Litters</Link>
          </li>
          <li>
            <Link to="/parents">Parents</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/adopt">
          <Adopt />
        </Route>
        <Route path="/info">
          <Info />
        </Route>
        <Route path="/litters">
          <Litters />
        </Route>
        <Route path="/parents">
          <Parents />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Routes>
    </>
  );
}

