import React from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1n8z7dk",
        "template_rqyp2h1",
        e.target,
        "qeo4yR7EC0yIc9ANB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <h4 className="form-title">Contact Here!</h4>
      <form className="email-form" onSubmit={sendEmail}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="input input-bordered input-md w-full max-w-xs"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="input input-bordered input-md w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          className="input input-bordered input-md w-full max-w-xs"
        />
        <textarea
          className="textarea textarea-bordered w-full max-w-xs"
          placeholder="Body"
          name="message"
        ></textarea>

        <button className="button-30 mb-6" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
