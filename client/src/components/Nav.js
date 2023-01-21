import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar">
      <div className="navbar">
        <Link className="links" to="/">
          Home
        </Link>
      </div>
      <div className="navbar">
        <ul className="justify-content-end nav ">
          <li>
            <Link className="links" to="/Portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link className="links" to="/Contact">
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
