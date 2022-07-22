import React from "react";
import { Menu } from 'antd';
import { Link } from "react-router-dom";

export default function Adopt() {
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
          <h2>How to Adopt a Puppy</h2>
          <h3>The Adoption Process</h3>
          <h4>1. Contact Windy</h4>
          <p>
            We would like you to first apply for adoption. To do that, we ask that you email Windy. Below, we have her business email.
          </p>
          <p>
            Email: windy.perkins@windysdoodles.com
          </p>
          <h4>2. Our Vetting Process</h4>
          <p>
            Something about how we double check who is buying a puppy and how we protect our puppies.
          </p>
          <h4>3. Choosing & Reserving a Puppy</h4>
          <p>
            Something about genetics and how some owners are very specific about the color and coat they're wanting for their dog. Since there's not a guarantee on the ratio of black to tan colored puppies or if there will be a brown puppy in the mix, we will advertise the current litters on the Litters tab. Buyers can look at the litters tab and choose which puppy they want to reserve once they've been successfully vetted.
          </p>
          <h4>4. Buying a Puppy</h4>
          <p>
            Not sure how much the puppies are going for yet. I know other businesses do down payments and whatnot. I don't know if buyers will send the money via PayPal or Venmo either yet. The prices will be displayed here and in the Litters tab.
          </p>
          <h4>5. Picking Up Your Puppy</h4>
          <p>
            At 7 weeks, your puppy will be old enough to go to their new home! The puppies will be able to be picked up from wherever Windy chooses.
          </p>
          <h3>How We Price Our Puppies</h3>
          <p>Something here about the average price of goldendoodles nowadays.</p>
        </div>
      </div>
    </>
  );
} 
