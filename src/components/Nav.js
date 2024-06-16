import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { TWITTER, SUPPORT } from "../config/links";

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
            <a href={SUPPORT} target="_blank" rel="noreferrer">
              <i className="fa-regular fa-heart"></i>
            </a>
          </li>
          <li className="twitter">
            <a href={TWITTER} target="_blank" rel="noreferrer">
              <i className="fa-solid fa-hashtag"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Nav;
