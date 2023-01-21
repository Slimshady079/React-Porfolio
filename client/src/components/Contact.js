import React from "react";

function Contact() {
  return (
    <div>
      <form>
        <h1>Contact Me below!</h1>
        {/* name */}
        <input type="text" placeholder="First & Last Name" name="name" />
        {/* email */}
        <input type="email" placeholder="Email" name="email" />
        {/* message */}
        <textarea
          type="text"
          placeholder="Enter your message"
          name="message"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
