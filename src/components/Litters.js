import React from "react";
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import EbenezerImg from "../images/ebenezer.jpeg";
import CharlieImg from "../images/charlie.jpeg";
import CindyImg from "../images/cindy.jpeg";
import GriswoldImg from "../images/griswold.jpeg";
import RedImg from "../images/red.jpeg";
import TinyImg from "../images/tiny.jpeg";

export default function Litters() {
  return (
    <>    
      <div className="main-container">
        <header>
          <div id="header-title">
            <h1>Windy's Doodles</h1>
          </div>
          <Menu mode="horizontal" className="nav-links">
            <Link to="/">
              <Menu.Item className="indiv-link">
                Home
              </Menu.Item>
            </Link>
            <Link to="/adopt">
              <Menu.Item className="indiv-link">
                Adopt
              </Menu.Item>
            </Link>
            <Link to="/info">
              <Menu.Item className="indiv-link">
                Additional Info
              </Menu.Item>
            </Link>
            <Link to="/parents">
              <Menu.Item className="indiv-link">
                Parents
              </Menu.Item>
            </Link>
            <Link to="/litters">
              <Menu.Item className="indiv-link">
                Litters
              </Menu.Item>
            </Link>
          </Menu>
        </header>
        <div className="top-container">
          <h2>My Litters</h2>
          <div className="litter-divs">
            <div className="current-litter">
              <h2>Christmas 2022 Litter</h2>
              <p>Please click on the puppy name for more information!</p>
              <div id="ebenezer-div" className="indiv-litter">
                <h3>Ebenezer Scrooge</h3>
                <img src={EbenezerImg} id="ebenezer-img" alt="portrait of ebenezer" />
              </div>
              <div id="charlie-div" className="indiv-litter">
                <h3>Charlie Brown</h3>
                <img src={CharlieImg} id="charlie-img" alt="portrait of charlie" />
              </div>
              <div id="cindy-div" className="indiv-litter">
                <h3>Cindy Lou Who</h3>
                <img src={CindyImg} id="cindy-img" alt="portrait of cindy" />
              </div>
              <div id="griswold-div" className="indiv-litter">
                <h3>Clark Griswold</h3>
                <img src={GriswoldImg} id="griswold-img" alt="portrait of griswold" />
              </div>
              <div id="red-div" className="indiv-litter">
                <h3>Red Ryder Carbine Action 200-shot Range Model Air Rifle</h3>
                <img src={RedImg} id="red-img" alt="portrait of red" />
              </div>
              <div id="holly-div" className="indiv-litter">
                <h3>Tiny Tim</h3>
                <img src={TinyImg} id="tiny-img" alt="portrait of tiny" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 
