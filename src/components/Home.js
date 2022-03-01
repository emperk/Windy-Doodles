import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="comp-container">
      <h1>Windy's Doodles</h1>
        <div className="nav-links">
          <Link to="/" className="indiv-link">Home</Link>
          <Link to="/adopt" className="indiv-link">Adopt</Link>
          <Link to="/info" className="indiv-link">More Info</Link>
          <Link to="/litters" className="indiv-link">Litters</Link>
          <Link to="/parents" className="indiv-link">Parents</Link>
        </div>
      <img 
        className="home-img"
        src="https://www.istockphoto.com/photo/woman-with-his-golden-labradoodle-dog-reading-at-home-gm1147997709-309879049?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fgoldendoodles&utm_term=goldendoodles%3A%3A%3A"
        alt="doodle"
      />
      <p>Doggo ipsum ruff doggorino very good spot ruff very taste wow, pats clouds. Ur givin me a spook corgo you are doing me a frighten pats, pupper thicc borkf bork, vvv most angery pupper I have ever seen. What a nice floof thicc clouds extremely cuuuuuute heckin angery woofer doggo, long water shoob you are doing me the shock long bois. Shibe doge smol doggo, length boy fat boi. Snoot smol heckin wow very biscit borking doggo big ol pupper, blop he made many woofs very jealous pupper.</p>
    </div>
  )
}