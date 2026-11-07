import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  }

  return (
    <section className="page-section contact-page">
      <p className="section-label">GET IN TOUCH</p>

      <h1>Contact Us</h1>

      <p className="page-description">
        Have a question or need help? We would love to hear from you.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Your Name</label>

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Your Email</label>

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Your Message</label>

        <textarea
          name="message"
          placeholder="Write your message..."
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="primary-button">
          Send Message
        </button>

        {submitted && (
          <p className="success-message">
            Thank you! Your message has been submitted.
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;