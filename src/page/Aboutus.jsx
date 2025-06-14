import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./AboutUs.css";
import {FaBullseye, FaUsers, FaLightbulb, FaRocket, FaMapMarkedAlt} from "react-icons/fa";
import { useOnScreen } from "../hooks/useonscreen"; 

const AboutUs = () => {
  const [heroRef, heroVisible] = useOnScreen({ threshold: 0.3 });
  const [missionRef, missionVisible] = useOnScreen({ threshold: 0.3 });
  const [valuesRef, valuesVisible] = useOnScreen({ threshold: 0.3 });
  const [teamRef, teamVisible] = useOnScreen({ threshold: 0.3 });
  const [futureRef, futureVisible] = useOnScreen({ threshold: 0.3 });
  const [mapRef, mapVisible] = useOnScreen({ threshold: 0.3 });

  return (
    <>
      <Header />
      <section className="about-container">
        <div
          ref={heroRef}
          className={`about-hero ${heroVisible ? "fade-slide-in" : "fade-slide-out"}`}
        >
          <div className="about-hero-text">
            <h1 className="about-title">About IRIS</h1>
            <p className="about-subtitle">
              Designing beyond boundaries with vision and clarity.
            </p>
            <p className="about-content">
              IRIS is a forward-thinking design studio based in Kathmandu, Nepal.
              We specialize in visual storytelling through branding, UI/UX design, and
              creative technology. Our team collaborates globally to deliver
              meaningful, functional, and aesthetic solutions.
            </p>
          </div>
          <div className="about-hero-image">
            <img
              src="https://source.unsplash.com/800x600/?creative,workspace"
              alt="Creative Studio"
            />
          </div>
        </div>

        <div className="about-grid">
          <div
            ref={missionRef}
            className={`about-section ${missionVisible ? "fade-slide-in" : "fade-slide-out"}`}
          >
            <FaBullseye className="about-icon" />
            <h3>Our Mission</h3>
            <p>
              Empower creators through design tools and visual strategies that
              inspire clarity, purpose, and transformation.
            </p>
          </div>
          <div
            ref={valuesRef}
            className={`about-section ${valuesVisible ? "fade-slide-in" : "fade-slide-out"}`}
          >
            <FaLightbulb className="about-icon" />
            <h3>Our Values</h3>
            <p>
              Innovation, Empathy, Simplicity, and Integrity define how we create and collaborate.
            </p>
          </div>
          <div
            ref={teamRef}
            className={`about-section ${teamVisible ? "fade-slide-in" : "fade-slide-out"}`}
          >
            <FaUsers className="about-icon" />
            <h3>Our Team</h3>
            <p>
              A diverse group of designers, developers, and visionaries blending
              artistic flair with technical excellence.
            </p>
          </div>
          <div
            ref={futureRef}
            className={`about-section ${futureVisible ? "fade-slide-in" : "fade-slide-out"}`}
          >
            <FaRocket className="about-icon" />
            <h3>The Future</h3>
            <p>
              Expanding globally while prioritizing user-first design and ethical innovation.
            </p>
          </div>
        </div>

        <div
          ref={mapRef}
          className={`about-map ${mapVisible ? "fade-slide-in" : "fade-slide-out"}`}
        >
          <h3>
            <FaMapMarkedAlt style={{ marginRight: "10px" }} />
            Our Location
          </h3>
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.615592188568!2d85.27207493140568!3d27.700151583316803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19db6f9097eb%3A0x99e63c564bf230c5!2sPati%20Chowk!5e0!3m2!1sen!2snp!4v1749838075438!5m2!1sen!2snp"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
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
