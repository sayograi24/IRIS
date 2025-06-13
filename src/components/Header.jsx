import React, { useEffect, useState } from "react";
import logo from "../assets/IRIS.png";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="nav-cta-container">
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Portfolio</a>
        </nav>
        <button className="cta-button">Get Your Design Now</button>
      </div>
    </header>
  );
};

export default Header;
