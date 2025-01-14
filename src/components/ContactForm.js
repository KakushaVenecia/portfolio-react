import React, { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import './Contact.css'

const ContactForm = () => {
  // Reference for the form
  const form = useRef();

  // Initialize EmailJS with the public key on mount
  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data via emailjs
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Your request has been sent successfully!");
          e.target.reset(); // Reset the form
        },
        (error) => {
          alert("Failed to send your request. Please try again later.");
          console.error(error.text);
        }
      );
  };

  return (
    <form className="contact-form" ref={form} onSubmit={handleSubmit}>
        <h3 className="contact">Contact Me</h3>
      <label className="label">
        Name:
        <input className="Input"
          type="text"
          name="from_name"
          placeholder="Your Name"
          value={formData.from_name}
          id="from_name"
          onChange={handleChange}
          required
        />
      </label>
      <label className="label">
        Email:
        <input className="Input"
          type="email"
          name="email"
          placeholder="Input your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label className="label">
        Message:
        <textarea
          name="message"
          placeholder="Contact Me"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </label>
      <div className="therequest">
      <button className="contact-button"
      type="submit">Send Me a Message</button>
      </div>
     
    </form>
  );
};

export default ContactForm;
