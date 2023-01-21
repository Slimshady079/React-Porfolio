import React, { useState } from "react";

function Contact() {
  const [submit, setSubmit] = useState(false);
  const Submit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmit(true);
    }, 100);
  };
  if (submit) {
    return (
      <div className="text-center mt-5">
        <h1 className="con-text">Thank you!</h1>
      </div>
    );
  }

  return (
    <div className="text-center">
      <form onSubmit={Submit}>
        <h1 className="mb-3">Contact Me below!</h1>
        {/* name */}
        <div className="mb-3">
          <input
            className="px-3 py-2 rounded"
            type="text"
            placeholder="First & Last Name"
            name="name"
            required
          />
        </div>
        {/* email */}
        <div className="mb-3">
          <input
            className="px-3 py-2 rounded"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
        </div>
        {/* message */}
        <div className="mb-3">
          <textarea
            className="px-3 py-2 rounded"
            type="text"
            placeholder="Enter your message"
            name="message"
            required
          ></textarea>
        </div>
        <button className="rounded" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
