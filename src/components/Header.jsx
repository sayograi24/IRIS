import React, { useEffect, useState } from "react";
import logo from "../assets/IRIS.png";
import logoname from "../assets/logoname.png"
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img className="logohead" src={logo} alt="Logo" />
        <img className="logoname" src={logoname} alt="Logoname" />
        
      </div>

      <div className={`nav-cta-container ${menuOpen ? "open" : ""}`}>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Portfolio</a>
        </nav>
        <button className="cta-button">Get Your Design Now ↗</button>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className={`line ${menuOpen ? "open" : ""}`}></span>
        <span className={`line ${menuOpen ? "open" : ""}`}></span>
        <span className={`line ${menuOpen ? "open" : ""}`}></span>
      </div>
    </header>
  );
};

export default Header;
