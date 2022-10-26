import React from "react";
import { Link } from "react-router-dom";
import WrenImg from "../images/IMG_2087.JPEG";
import LokiImg from "../images/IMG_2866.jpeg";

export default function Parents() {
  return (
    <>    
      <div className="main-container">
        <header>
          <div id="header-title">
            <h1>Windy's Doodles</h1>
          </div>
          {/* <Menu mode="horizontal" className="nav-links">
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
          </Menu> */}
        </header>
        <div className="top-container">
          <h2>Meet the Parents!</h2>
          <div className="parent-divs">
            <div id="wren-div" className="indiv-parent">
              <h3>Wren</h3>
              <img src={WrenImg} id="wren-img" alt="portrait of wren"/>
              <p>Click here for Wren's DNA Results!</p>
            </div>
            <div id="loki-div" className="indiv-parent">
              <h3>Loki</h3>
              <img src={LokiImg} id="loki-img" alt="portrait of loki"/>
              <p>Click <a target="_blank" rel="noreferrer" href="https://my.embarkvet.com/dog/loki2068">here</a> for Loki's DNA Results!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 
