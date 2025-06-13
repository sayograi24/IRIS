import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/IRIS.png";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-left">
      <img src={logo} alt="Logo" className="footer-logo" />
      <div className="footer-copy">
        <div>© 2025 IRIS</div>
        <div>All rights reserved.</div>
        <div>-By Sayog Rai</div>
      </div>
      <div className="social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>

    <div className="footer-center">
      <div className="footer-column">
        <h4>Company</h4>
        <a href="#">About Us</a>
        <a href="#">Our Services</a>
        <a href="#">Contact Us</a>
        <a href="#">Pricing</a>
        <a href="#">Testimonials</a>
      </div>
      <div className="footer-column">
        <h4>Support</h4>
        <a href="#">Help Center</a>
        <a href="#">Terms of Service</a>
        <a href="#">Legal</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Status</a>
      </div>
    </div>

    <div className="footer-right">
      <h4>Stay Up to Date</h4>
      <form className="subscribe-form" onSubmit={e => e.preventDefault()}>
        <input
          type="email"
          placeholder="Enter your email"
          required
          aria-label="Email address"
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  </footer>
);

export default Footer;
