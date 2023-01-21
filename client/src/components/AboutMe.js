import React from "react";
import me from "../images/me.jpeg";

function AboutMe() {
  return (
    <div>
      <div className="container-fluid row align-items-center">
        <div className="col">
          <img className="rounded my-3 me-img" src={me} />
          <h1>Hello!</h1>
          <p className="paragraph fs-3">
            My name is Maximilian Gibes. I started coding in October of 2022. I
            was a construction worker and doing construction is actually what
            got me into coding.
          </p>
          <p className="paragraph fs-3">
            In my eyes, coding is like virtual construction, so I was
            immediately interested. I'm looking forward to learning more about
            code!
          </p>
        </div>
        <div className="col">
          <h1>Some of the languages I speak!</h1>
          <p className="paragraph fs-2">HTML</p>
          <p className="paragraph fs-2">CSS</p>
          <p className="paragraph fs-2">JavaScript</p>
          <p className="paragraph fs-2">M.E.R.N stack</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
