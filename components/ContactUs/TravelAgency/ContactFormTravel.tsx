import React, { useState } from "react";
import HeadingFive from "../../HeadingSection/HeadingFive";

const ContactFormTravel = ({ title }) => {
  const [inputs, setInputs] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <form
      name="contact-form"
      className="contact-me"
      id="contact-form"
      action="php/contact.php"
      method="POST"
    >
      {title ? (
        <div className="row">
          <HeadingFive title={title} tagline={undefined} classAppend={undefined} font={undefined} children={undefined} />
        </div>
      ) : null}
      <div className="messages"></div>
      <div className="form-floating">
        <input
          type="text"
          name="name"
          className="form-control"
          id="name"
          required={true}
          placeholder="Your Name"
          data-error="Your Name is Required"
          value={inputs.name}
          onChange={handleInputChange}
        />
        <label htmlFor="name">Name</label>
        <div className="help-block with-errors mt-20"></div>
      </div>
      <div className="form-floating">
        <input
          type="email"
          name="email"
          className="form-control"
          id="email"
          placeholder="Your Email"
          required={true}
          data-error="Please Enter Valid Email"
          value={inputs.email}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email</label>
        <div className="help-block with-errors mt-20"></div>
      </div>
      <div className="form-floating">
        <textarea
          name="message"
          className="form-control"
          id="message"
          rows={7}
          placeholder="Your Message"
          required
          data-error="Please, Leave us a message"
          value={inputs.message}
          onChange={handleInputChange}
        ></textarea>
        <label htmlFor="message">Message</label>
        <div className="help-block with-errors mt-20"></div>
      </div>
      <p className="text-center">
        <button
          type="submit"
          name="submit"
          className="btn btn-color btn-circle"
        >
          Send Message
        </button>
      </p>
    </form>
  );
};

export default ContactFormTravel;
