import React from "react";

function Contact() {
  // !! contact is going to be a form with name, email, and message
  return (
    <div>
      <h1>Contact Information</h1>
      <ul>
        <li className="contact-list">Email: maximiliangibes@gmail.com</li>
        <li className="contact-list">
          <a href="https://github.com/Slimshady079" target="_blank">
            <img
              className="github-img"
              src="../icons/icons8-github-48.png"
              alt="pin Icon"
            ></img>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
