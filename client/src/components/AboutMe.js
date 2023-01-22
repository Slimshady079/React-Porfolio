import React from "react";
import me from "../images/me.jpeg";

function AboutMe() {
  return (
    <div>
      <div className="container-fluid row align-items-center">
        <div className="col">
          <img className="rounded my-3 me-img" src={me} />
          <h1 className="">Hello!</h1>
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
          <p className="fs-2 my-3 mt-5">Some of the languages I speak:</p>
          <p className="paragraph fs-4">HTML</p>
          <p className="paragraph fs-4">CSS</p>
          <p className="paragraph fs-4">JavaScript</p>
          <p className="paragraph fs-4">JQuery</p>
          <p className="paragraph fs-4">Bootstrap</p>
          <p className="paragraph fs-4">Node</p>
          <p className="paragraph fs-4">APIs</p>
          <p className="paragraph fs-4">MySQL, Sequelize</p>
          <p className="paragraph fs-4">M.E.R.N stack</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
