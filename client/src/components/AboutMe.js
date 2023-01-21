import React from "react";

function AboutMe() {
  return (
    <div className="container-fluid row align-items-center">
      <div className="col">
        <h1>Hello!</h1>
        <p className="paragraph fs-2">
          My name is Maximilian Gibes. I started coding in October of 2022. I'm
          a construction worker and doing construction is actually what got me
          into coding.
        </p>
        <p className="paragraph fs-2">
          In my eyes, coding is like virtual construction, so I was immediately
          interested.
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
  );
}

export default AboutMe;
