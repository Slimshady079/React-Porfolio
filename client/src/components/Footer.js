import React from "react";
import github from "../images/icons/icons8-github-48.png";

function Footer() {
  return (
    <div className="footer container-fluid">
      <footer className="">
        <div>
          <a
            className="links"
            href="https://github.com/Slimshady079"
            target="_blank"
          >
            <img src={github}></img>
          </a>
        </div>
      </footer>
      <footer>
        <div>
          <a
            className="links"
            href="https://www.linkedin.com/in/maximilian-gibes-696387260/"
            target="_blank"
          >
            Linked-in
          </a>
        </div>
      </footer>
      <footer>
        <div>
          <a
            className="links"
            href="mailto: maximiliangibes@gmail.com"
            target="_blank"
          >
            Email
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
