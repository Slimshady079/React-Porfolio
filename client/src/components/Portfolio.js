import React from "react";
import dreamJournal from "../images/dreamJournal.png";
import national from "../images/NationalParksSearch.png";
import passGen from "../images/passwordGenerator.png";
import github from "../images/icons/icons8-github-48.png";
// !! can't get images to show up!

function Portfolio() {
  return (
    <div className="container-fluid">
      <h1>Here are some of the Projects I've built!</h1>
      {/* National Parks Search */}
      <div>
        <div className="col-3">
          <div className="card">
            {/* live deployment */}
            <a
              href="https://slimshady079.github.io/National-Parks-Search/"
              target="_blank"
            >
              National Parks Search
              <img className="card-img-top" src={national}></img>
            </a>
            <br></br>
            {/* Github Repo */}
            <a
              href="https://github.com/Slimshady079/National-Parks-Search"
              target="_blank"
            >
              <img src={github}></img>
            </a>
          </div>
        </div>
      </div>
      {/* Dream Journal */}
      <div>
        <div className="col-3">
          <div className="card">
            {/* live deployment */}
            <a href="https://dream-stream270.herokuapp.com/" target="_blank">
              Dream Journal
              <img className="card-img-top" src={dreamJournal}></img>
            </a>
            <br></br>
            {/* Github Repo */}
            <a href="https://github.com/btempini/Dream-Journal" target="_blank">
              <img src={github}></img>
            </a>
          </div>
        </div>
      </div>
      {/* Password Generator */}
      <div>
        <div className="col-3">
          <div className="card">
            {/* live deployment */}
            <a
              href="https://slimshady079.github.io/passwordGenerator/"
              target="_blank"
            >
              Password Generator
              <img className="card-img-top" src={passGen}></img>
            </a>
            <br></br>
            {/* Github Repo */}
            <a
              href="https://github.com/Slimshady079/passwordGenerator"
              target="_blank"
            >
              <img src={github}></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
