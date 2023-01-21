import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar ">
      <div className="">
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/Portfolio">Portfolio</Link>
      </div>
      <div>
        <Link to="/Contact">Contact Me</Link>
      </div>
    </div>
  );
}

export default Nav;
