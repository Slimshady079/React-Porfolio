import React from "react";
import dreamJournal from "../images/dreamJournal.png";
import national from "../images/NationalParksSearch.png";
import passGen from "../images/passwordGenerator.png";
import github1 from "../images/icons/github.png";
import notes from "../images/notes.png";
import schedule from "../images/scheduler.png";
import textEdit from "../images/textEdit.png";

function Portfolio() {
  return (
    <div>
      <h1 className="h1-port">Here are some of the Projects I've built!</h1>
      {/* cards container */}
      <div className="container-fluid justify-content-center p-4 card-group gap-3">
        {/* National Parks Search */}
        <div className="col-sm-3 mb-3 mb-sm-0 ">
          <div className="">
            <div className="card border-dark">
              {/* live deployment */}
              <a
                className="links-port"
                href="https://slimshady079.github.io/National-Parks-Search/"
                target="_blank"
              >
                National Parks Search
                <img className="card-img-top image" src={national}></img>
              </a>
              <br></br>
              {/* Github Repo */}
              <a
                className="links-port"
                href="https://github.com/Slimshady079/National-Parks-Search"
                target="_blank"
              >
                <img src={github1}></img>
              </a>
            </div>
          </div>
        </div>
        {/* Dream Journal */}
        <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="">
            <div className="card border-dark">
              {/* live deployment */}
              <a
                className="links-port"
                href="https://dream-stream270.herokuapp.com/"
                target="_blank"
              >
                Dream Journal
                <img className="card-img-top image" src={dreamJournal}></img>
              </a>
              <br></br>
              {/* Github Repo */}
              <a
                href="https://github.com/btempini/Dream-Journal"
                target="_blank"
              >
                <img src={github1}></img>
              </a>
            </div>
          </div>
        </div>
        {/* Password Generator */}
        <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="">
            <div className="card border-dark">
              {/* live deployment */}
              <a
                className="links-port"
                href="https://slimshady079.github.io/passwordGenerator/"
                target="_blank"
              >
                Password Generator
                <img className="card-img-top image" src={passGen}></img>
              </a>
              <br></br>
              {/* Github Repo */}
              <a
                href="https://github.com/Slimshady079/passwordGenerator"
                target="_blank"
              >
                <img src={github1}></img>
              </a>
            </div>
          </div>
        </div>
        {/* Notes App */}
        <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="">
            <div className="card border-dark">
              {/* live deployment */}
              <a
                className="links-port"
                href="https://slimshady079.github.io/Notes-App/"
                target="_blank"
              >
                Notes-App
                <img className="card-img-top image" src={notes}></img>
              </a>
              <br></br>
              {/* Github Repo */}
              <a
                href="https://github.com/Slimshady079/Notes-App"
                target="_blank"
              >
                <img src={github1}></img>
              </a>
            </div>
          </div>
        </div>
        {/* Work Schedule */}
        <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="">
            <div className="card border-dark">
              {/* live deployment */}
              <a
                className="links-port"
                href="https://slimshady079.github.io/Work-Schedule/"
                target="_blank"
              >
                Scheduler
                <img className="card-img-top image" src={schedule}></img>
              </a>
              <br></br>
              {/* Github Repo */}
              <a
                href="https://github.com/Slimshady079/Work-Schedule"
                target="_blank"
              >
                <img src={github1}></img>
              </a>
            </div>
          </div>
        </div>
        {/* Text Editor */}
        <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="">
            <div className="card border-dark">
              {/* live deployment */}
              <a
                className="links-port"
                href="https://jate-text-editor-slimshady.herokuapp.com/"
                target="_blank"
              >
                Text Editor
                <img className="card-img-top image" src={textEdit}></img>
              </a>
              <br></br>
              {/* Github Repo */}
              <a
                href="https://github.com/Slimshady079/Text-Editor"
                target="_blank"
              >
                <img src={github1}></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
