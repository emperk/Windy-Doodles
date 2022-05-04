import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";

// components
import Home from "./components/Home";
import Adopt from "./components/Adopt";
import Info from "./components/Info";
import Litters from "./components/Litters";
import Parents from "./components/Parents";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/parents" element={ <Parents /> } />
        <Route path="/litters" element={ <Litters /> } />
        <Route path="/info" element={ <Info /> } />
        <Route path="/adopt" element={ <Adopt /> } />
      </Routes>
    </div>
  );
}
