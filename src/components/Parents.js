import React from "react";
import { Menu, Typography } from 'antd';
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

export default function Parents() {
  return (
    <>    
      <div className="main-container">
        <header>
          <div id="header-title">
            <Title>Windy's Doodles</Title>
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
          <Title level={2}>Meet the Parents!</Title>
          <Paragraph>
            This page will have information regarding the parents. As of right now, that would be Wren & Charlie. There is no other "stud" at the moment. Information like genetics, their parents, what percent poodle & golden retriever they are & so on.
          </Paragraph>
        </div>
      </div>
    </>
  );
} 
