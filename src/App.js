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
import Charlie from "./components/my-litters-info/christmas-2022/Charlie";
import Cindy from "./components/my-litters-info/christmas-2022/Cindy";
import Ebenezer from "./components/my-litters-info/christmas-2022/Ebenezer";
import Griswold from "./components/my-litters-info/christmas-2022/Griswold";
import Red from "./components/my-litters-info/christmas-2022/Red";
import Tiny from "./components/my-litters-info/christmas-2022/Tiny";

import "./App.less";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/parents" element={ <Parents /> } />
        <Route path="/litters" element={ <Litters /> } />
        <Route path="/info" element={ <Info /> } />
        <Route path="/adopt" element={ <Adopt /> } />
        <Route path="/litters/ebenezer2022" element={ <Ebenezer /> } />
        <Route path="/litters/charlie2022" element={ <Charlie /> } />
        <Route path="/litters/cindy2022" element={ <Cindy /> } />
        <Route path="/litters/griswold2022" element={ <Griswold /> } />
        <Route path="/litters/red2022" element={ <Red /> } />
        <Route path="/litters/tiny2022" element={ <Tiny /> } />
      </Routes>
    </div>
  );
}
