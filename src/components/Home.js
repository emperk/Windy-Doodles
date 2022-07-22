import React from "react";
import { Menu } from 'antd';
import { Link } from "react-router-dom";

export default function Home() {
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
          {/* mission statement */}
          <h2>Family Doodles Raised with Love</h2>
          <h3>Why Choose Us?</h3>
          <p>
            We believe in raising puppies with care, love, and attention. We believe in doing our research and making sure every need is taken care of and accounted for.
          </p>
          <h3>About Windy & Windy's Doodles</h3>
          <p>
            Something here about Windy and her friend. Something here about my mom falling in love with doodles and saving her money to get Wren. Something here about my mom deciding she would breed Wren and build a business for breeding doodles (hopefully all kinds in the future!)
          </p>
          <p>
            Something here about how Windy's Doodles is currently run.
          </p>
        </div>
      </div>
      <footer>
        Windy's Doodles ©2022 Created by Windy & Emily Perkins  
      </footer>
    </>
  );
} 

// will need:
  // 1. Mission Statement
  // 2. Who We Are
  // 3. Slogan
  // 4. Why Choose Windy's Doodles?
