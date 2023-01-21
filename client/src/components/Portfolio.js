import React from "react";

// !! can't get images to show up!

function Portfolio() {
  return (
    <div>
      <p>stuff</p>
      {/* National Parks Search */}
      <div>
        {/* live deployment */}
        <a
          href="https://slimshady079.github.io/National-Parks-Search/"
          target="_blank"
        >
          {" "}
          National Parks Search
        </a>
        <br></br>
        {/* Github Repo */}
        <a
          href="https://github.com/Slimshady079/National-Parks-Search"
          target="_blank"
        >
          Github Repo
        </a>
      </div>
      {/* Dream Journal */}
      <div>
        {/* live deployment */}
        <a href="https://dream-stream270.herokuapp.com/" target="_blank">
          Dream Journal
        </a>
        <br></br>
        {/* Github Repo */}
        <a href="https://github.com/btempini/Dream-Journal" target="_blank">
          Github Repo
        </a>
      </div>
      {/* Password Generator */}
      <div>
        {/* live deployment */}
        <a
          href="https://slimshady079.github.io/passwordGenerator/"
          target="_blank"
        >
          Password Generator
        </a>
        <br></br>
        {/* Github Repo */}
        <a
          href="https://github.com/Slimshady079/passwordGenerator"
          target="_blank"
        >
          Github Repo
          {/* <img src="./images/icons/icons8-github-48.png" /> */}
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
