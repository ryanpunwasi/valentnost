import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { PORTFOLIO_LINK } from "../config/links";

import "./Nav.css";

const Nav = () => {
  if (useLocation().pathname.split("/").includes("practice")) {
    return null;
  }
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list saturate-medium">
          <li className="home">
            <Link to="/">
              <i className="fa-solid fa-vial"></i>
            </Link>
          </li>
          <li className="support">
            <a href={PORTFOLIO_LINK} target="_blank" rel="noreferrer">
              <i class="fa-regular fa-user"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Nav;
