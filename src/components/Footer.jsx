import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faInstagram, faFacebookF, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/IRIS.png";
import "./Footer.css";

const Footer = () => (
    <footer className="footer">
        <div className="footer-left">
        <img src={logo} alt="Logo" className="footer-logo" />
        <div className="footer-copy">
            <div>© 2025 IRIS</div>
            <div>All rights reserved.</div>
        </div>
        <div className="social-icons">
            <a href="https://www.instagram.com/iris.visuals00/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/in/iris-visuals-78158836b/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.linkedin.com/in/iris-visuals-78158836b/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
        </div>
        </div>

        <div className="footer-center">
        <div className="footer-column">
            <h4>Company</h4>
            <Link to="/aboutus">About us</Link>
            <Link to="/services">Our Services</Link>
            <Link to="/contactus">Contact Us</Link>
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
