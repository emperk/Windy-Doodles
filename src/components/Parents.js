// import React from "react";
// import { Link } from "react-router-dom";

// export default function Parents() {
//   return (
//     <div className="main-container">
//       <header>
//         <div id="header-title">
//           <h1>Meet the Parents</h1>
//         </div>
//           <nav>
//             <div className="nav-links">
//               <Link to="/" className="indiv-link">Home</Link>
//               <Link to="/adopt" className="indiv-link">Adopt</Link>
//               <Link to="/info" className="indiv-link">More Info</Link>
//               <Link to="/litters" className="indiv-link">Litters</Link>
//               <Link to="/parents" className="indiv-link">Parents</Link>
//             </div>
//           </nav>
//       </header>
//       <div className="top-container">
//         <p>Doggo ipsum ruff doggorino very good spot ruff very taste wow, pats clouds. Ur givin me a spook corgo you are doing me a frighten pats, pupper thicc borkf bork, vvv most angery pupper I have ever seen. What a nice floof thicc clouds extremely cuuuuuute heckin angery woofer doggo, long water shoob you are doing me the shock long bois. Shibe doge smol doggo, length boy fat boi. Snoot smol heckin wow very biscit borking doggo big ol pupper, blop he made many woofs very jealous pupper.</p>
//       </div>
//     </div>
//   )
// }

import React from "react";
import { Menu, Typography } from 'antd';
import { Link } from "react-router-dom";

const { Title } = Typography;

export default function Parents() {
  return (
    <>    
      <div className="main-container">
        <header>
          <div id="header-title">
            <Title>Meet the Parents!</Title>
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
          <p>
            PARENTS PAGE. Doggo ipsum ruff doggorino very good spot ruff very taste wow, pats clouds. Ur givin me a spook corgo you are doing me a frighten pats, pupper thicc borkf bork, vvv most angery pupper I have ever seen. What a nice floof thicc clouds extremely cuuuuuute heckin angery woofer doggo, long water shoob you are doing me the shock long bois. Shibe doge smol doggo, length boy fat boi. Snoot smol heckin wow very biscit borking doggo big ol pupper, blop he made many woofs very jealous pupper.
          </p>
        </div>
      </div>
    </>
  );
} 
