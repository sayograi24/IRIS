import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <Header />
      <section className="about-container">
        <h1 className="about-title">About Us</h1>
        <p className="about-subtitle">
          We are dedicated to delivering quality and innovation.
        </p>
        <p className="about-content">
          At Our Company, we believe in pushing the boundaries of creativity and
          technology to build products that make life better. Our dedicated team
          works passionately to bring you exceptional solutions tailored to your
          needs.
        </p>

        <div className="about-mission">
          <h3>Our Mission</h3>
          <p>
            To empower individuals and businesses with innovative tools that
            foster growth, efficiency, and sustainability.
          </p>
        </div>

        <div className="about-values">
          <h3>Our Values</h3>
          <p>
            Integrity, Excellence, Collaboration, and Customer Satisfaction are
            the pillars that guide everything we do.
          </p>
        </div>


        {/* Map Section */}
        <div className="about-map">
          <h3>Our Location</h3>
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.615592188568!2d85.27207493140568!3d27.700151583316803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19db6f9097eb%3A0x99e63c564bf230c5!2sPati%20Chowk!5e0!3m2!1sen!2snp!4v1749838075438!5m2!1sen!2snp"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
