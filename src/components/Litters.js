import React from "react";
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import BlitzenImg from "../images/blitzen.jpeg";
import CharlieImg from "../images/charlie.jpeg";
import CometImg from "../images/comet.webp";
import ElsaImg from "../images/elsa.jpeg";
import GingerImg from "../images/ginger.jpeg";
import HollyImg from "../images/holly.jpeg";

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
            <div id="blitzen-div" className="indiv-litter">
              <h3>Blitzen</h3>
              <img src={BlitzenImg} id="blitzen-img" alt="portrait of blitzen" />
              <p>assorted info about blitzen</p>
            </div>
            <div id="charlie-div" className="indiv-litter">
              <h3>Charlie Brown</h3>
              <img src={CharlieImg} id="charlie-img" alt="portrait of charlie" />
              <p>assorted info about charlie</p>
            </div>
            <div id="comet-div" className="indiv-litter">
              <h3>Comet</h3>
              <img src={CometImg} id="comet-img" alt="portrait of comet" />
              <p>assorted info about comet</p>
            </div>
            <div id="elsa-div" className="indiv-litter">
              <h3>Elsa</h3>
              <img src={ElsaImg} id="elsa-img" alt="portrait of elsa" />
              <p>assorted info about elsa</p>
            </div>
            <div id="ginger-div" className="indiv-litter">
              <h3>Ginger</h3>
              <img src={GingerImg} id="ginger-img" alt="portrait of ginger" />
              <p>assorted info about ginger</p>
            </div>
            <div id="holly-div" className="indiv-litter">
              <h3>Holly</h3>
              <img src={HollyImg} id="holly-img" alt="portrait of holly" />
              <p>assorted info about holly</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 
