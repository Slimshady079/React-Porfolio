import React from "react";
import github from "../images/icons/icons8-github-48.png";
import email from "../images/icons/icons8-mail-50.png";
import link from "../images/icons/icons8-linkedin-50.png";

function Footer() {
  return (
    <div className="footer container-fluid d-flex justify-content-center justify-content-evenly">
      <footer className="">
        <div className="">
          <ul className="nav mb-3 mt-3">
            <li className="nav-item">
              <a
                className="links"
                href="https://github.com/Slimshady079"
                target="_blank"
              >
                <img src={github}></img>
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <footer>
        <div>
          <ul className="nav mb-3 mt-3">
            <li className="nav-item">
              <a
                className="links"
                href="https://www.linkedin.com/in/maximilian-gibes-696387260/"
                target="_blank"
              >
                <img src={link}></img>
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <footer>
        <div>
          <ul className="nav mb-3 mt-3">
            <li className="nav-item">
              <a
                className="links"
                href="mailto: maximiliangibes@gmail.com"
                target="_blank"
              >
                <img src={email}></img>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
