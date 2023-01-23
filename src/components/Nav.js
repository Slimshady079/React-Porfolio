import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar">
      <div className="navbar">
        <Link className="links navbar-brand home" to="/">
          Home
        </Link>
      </div>
      <div className="navbar">
        <ul className="justify-content-end nav ">
          <li className="nav-item">
            <Link className="links nav-link" to="/Portfolio">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="links nav-link" to="/Contact">
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
