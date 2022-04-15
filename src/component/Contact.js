import React, { useState, useEffect } from "react";
import "../styles/Contact.css";

function Contact({ title, secondtitle }) {
  const initialValues = { name: "", email: "", textarea: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    setFormValues(initialValues);
  };

  const validate = (values) => {
    const errors = {};
    const nameregex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.fullName) {
      errors.fullName = "Please provide your full name";
    } else if (!nameregex.test(values.fullName)) {
      errors.fullName = "Please enter a valid name";
    }
    if (!values.email) {
      errors.email = "email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Please enter a valid email";
    }
    if (!values.textarea) {
      errors.textarea = "Please type in your message";
    }
    return errors;
  };

  return (
    <div>
      <div class="wrapper">
        <form class="form" onSubmit={handleSubmit}>
          <div class="pageTitle title">{title} </div>
          <div class="secondaryTitle title">{secondtitle}</div>

          <input
            type="text"
            class="name formEntry"
            placeholder="Name"
            name="fullName"
            onChange={handleChange}
            value={formValues.fullName}
          />
          <p>{formErrors.fullName}</p>

          <input
            type="text"
            class="email formEntry"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={formValues.email}
          />
          <p>{formErrors.email}</p>

          <textarea
            class="message formEntry"
            placeholder="Message"
            name="message"
          ></textarea>
          <p>{formErrors.textarea}</p>
          <button class="submit formEntry" type="submit" value="send">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

Contact.defaultProps = {
  title: "Contact me!",
  secondtitle: "You can reach out to me by filling this form",
};

export default Contact;
