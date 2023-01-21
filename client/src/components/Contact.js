import React from "react";

function Contact() {
  return (
    <div className="text-center">
      <form>
        <h1 className="mb-3">Contact Me below!</h1>
        {/* name */}
        <div className="mb-3">
          <input type="text" placeholder="First & Last Name" name="name" />
        </div>
        {/* email */}
        <div className="mb-3">
          <input type="email" placeholder="Email" name="email" />
        </div>
        {/* message */}
        <div className="mb-3">
          <textarea
            type="text"
            placeholder="Enter your message"
            name="message"
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
