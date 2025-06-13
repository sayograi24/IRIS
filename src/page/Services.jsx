import React from "react";
import "./Services.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {FaPaintBrush,FaFileAlt, FaFilm, FaMagic, FaPalette, FaInstagram, FaCode, FaLaptopCode, FaVideo, FaCameraRetro} from "react-icons/fa";

const Services = () => {
  return (
    <>
      <Header />
      <div className="services-page">
        <div className="services-header">
          <h1>Our Services</h1>
          <p>From pixels to perfection — We make brands move, shine, and connect.</p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <FaPaintBrush className="service-icon" />
            <h2>Logo Design</h2>
            <p>Custom-made, memorable logos that reflect your identity and set you apart.</p>
          </div>

          <div className="service-card">
            <FaFileAlt className="service-icon" />
            <h2>Brochure Design</h2>
            <p>Creative, professional brochures designed to inform, impress, and inspire.</p>
          </div>

          <div className="service-card">
            <FaFilm className="service-icon" />
            <h2>Motion Graphics (GFX)</h2>
            <p>Dynamic animations and visual storytelling that captivate your audience.</p>
          </div>

          <div className="service-card">
            <FaMagic className="service-icon" />
            <h2>Visual Effects (VFX)</h2>
            <p>Cutting-edge effects to turn your footage into cinematic brilliance.</p>
          </div>

          <div className="service-card">
            <FaPalette className="service-icon" />
            <h2>Brand Identity</h2>
            <p>Strategic branding systems that build emotional connections with your audience.</p>
          </div>

          <div className="service-card">
            <FaInstagram className="service-icon" />
            <h2>Social Media Design</h2>
            <p>Eye-catching posts and visuals crafted for growth, reach, and retention.</p>
          </div>

          <div className="service-card">
            <FaCode className="service-icon" />
            <h2>Web Development</h2>
            <p>Full-stack web solutions tailored for performance, scalability, and experience.</p>
          </div>

          <div className="service-card">
            <FaLaptopCode className="service-icon" />
            <h2>Web Designing</h2>
            <p>Modern UI/UX design focused on aesthetics, accessibility, and conversion.</p>
          </div>

          <div className="service-card">
            <FaVideo className="service-icon" />
            <h2>Video Editing</h2>
            <p>High-quality edits, smooth transitions, and effects that elevate your story.</p>
          </div>

          <div className="service-card">
            <FaCameraRetro className="service-icon" />
            <h2>Videography</h2>
            <p>From events to promos — we shoot and deliver cinematic, high-quality content.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
