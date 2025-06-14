import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useOnScreen } from "../hooks/useonscreen";
import "./ContactUs.css";

const ContactUs = () => {
  const [contactRef, contactVisible] = useOnScreen({ threshold: 0.3 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honey: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.honey !== "") return; // spam bot honeypot

    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      honey: "",
    });
  };

  return (
    <>
      <Header />
      <main className="contact-main" ref={contactRef}>
        <section className={`contact-hero ${contactVisible ? "fade-in" : "fade-hidden"}`}>
          <h1>Contact Us</h1>
          <p>We're here to help! Reach out anytime and we'll get back to you as soon as possible.</p>
          <p className="contact-hero-subtext">
            Typical response time: within 24 hours on business days.
          </p>
        </section>

        <section className={`contact-section ${contactVisible ? "fade-in" : "fade-hidden"}`}>
          <div className="contact-info" aria-label="Contact Information">
            <div className="info-item">
              <FaPhoneAlt className="contact-icon" />
              <p>
                <a href="tel:+9779876543210" className="contact-link">
                  +977 9876543210
                </a>
              </p>
            </div>
            <div className="info-item">
              <FaEnvelope className="contact-icon" />
              <p>
                <a href="mailto:Iris.visuals00@gmail.com" className="contact-link">
                  Iris.visuals00@gmail.com
                </a>
              </p>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="contact-icon" />
              <address className="contact-address">
                Nepal Kathmandu,<br />
                PITTU
              </address>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact form">
            {/* Honeypot field */}
            <input
              type="text"
              name="honey"
              value={formData.honey}
              onChange={handleChange}
              className="honeypot"
              tabIndex={-1}
              autoComplete="off"
            />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-required="true"
              aria-label="Your Name"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
              aria-label="Your Email"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              aria-label="Subject"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              aria-required="true"
              aria-label="Your Message"
            ></textarea>

            <button type="submit" className="send-button" aria-live="polite">
              Send Message
            </button>

            {submitted && (
              <p
                role="alert"
                className="submit-message"
              >
                Thank you for your message! We will get back to you soon.
              </p>
            )}
          </form>
        </section>

        <section className={`social-section ${contactVisible ? "fade-in" : "fade-hidden"}`}>
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
