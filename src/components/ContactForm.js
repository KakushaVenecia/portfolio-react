import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";




const ContactForm = () => {
  const form = useRef();

    // Initialize EmailJS with the public key on mount
    useEffect(() => {
      emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
    }, []);

  // State for form data and alerts
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    message: "",
  });
  const [alert, setAlert] = useState({ type: "", message: "" }); // Alert state

  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    // Check for undefined environment variables
    if (!process.env.REACT_APP_EMAILJS_SERVICE_ID || 
        !process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 
        !process.env.REACT_APP_EMAILJS_PUBLIC_KEY) {
      console.error("One or more environment variables are missing.");
      setAlert({ type: "error", message: "Configuration error. Please contact support." });
      return;
    }
  
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setAlert({ type: "success", message: "Your message has been sent successfully!" });
          setFormData({ from_name: "", email: "", message: "" });
        },
        (error) => {
          setAlert({ type: "error", message: "Failed to send your message. Please try again later." });
          console.error(error.text);
        }
      );
  };
  

  return (
    <form className="contact-form" ref={form} onSubmit={handleSubmit}>
      <h3 className="contact">Available For Work: Contact Me !</h3>
      {alert.message && (
        <div className={`alert ${alert.type}`}>
          {alert.message}
        </div>
      )}
      <label className="label">
        Full Name
        <input
          className="Input"
          type="text"
          name="from_name"
          placeholder="Please input Your Name"
          value={formData.from_name}
          onChange={handleChange}
          required
        />
      </label>
      <label className="label">
        Your Email:
        <input
          className="Input"
          type="email"
          name="email"
          placeholder="Please Input Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label className="label">
        Talk to Me:
        <textarea
          name="message"
          placeholder="I look forward to hearing from you!"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </label>
      <div className="therequest">
        <button className="contact-button" type="submit">
          Send Me a Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
