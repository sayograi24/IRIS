import React from "react";
import "./Services.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FaPaintBrush,
  FaFileAlt,
  FaFilm,
  FaMagic,
  FaPalette,
  FaInstagram,
  FaCode,
  FaLaptopCode,
  FaVideo,
  FaCameraRetro,
  FaMobileAlt,
  FaPhotoVideo
} from "react-icons/fa";

const serviceList = [
  {
    icon: <FaPaintBrush className="service-icon" />,
    title: "Logo Design",
    desc: "Custom-made, memorable logos that reflect your identity and set you apart."
  },
  {
    icon: <FaFileAlt className="service-icon" />,
    title: "Brochure Design",
    desc: "Creative, professional brochures designed to inform, impress, and inspire."
  },
  {
    icon: <FaFilm className="service-icon" />,
    title: "Motion Graphics (GFX)",
    desc: "Dynamic animations and visual storytelling that captivate your audience."
  },
  {
    icon: <FaMagic className="service-icon" />,
    title: "Visual Effects (VFX)",
    desc: "Cutting-edge effects to turn your footage into cinematic brilliance."
  },
  {
    icon: <FaPalette className="service-icon" />,
    title: "Brand Identity",
    desc: "Strategic branding systems that build emotional connections with your audience."
  },
  {
    icon: <FaInstagram className="service-icon" />,
    title: "Social Media Design",
    desc: "Eye-catching posts and visuals crafted for growth, reach, and retention."
  },
  {
    icon: <FaCode className="service-icon" />,
    title: "Web Development",
    desc: "Full-stack web solutions tailored for performance, scalability, and experience."
  },
  {
    icon: <FaLaptopCode className="service-icon" />,
    title: "Web Designing",
    desc: "Modern UI/UX design focused on aesthetics, accessibility, and conversion."
  },
  {
    icon: <FaVideo className="service-icon" />,
    title: "Video Editing",
    desc: "High-quality edits, smooth transitions, and effects that elevate your story."
  },
  {
    icon: <FaCameraRetro className="service-icon" />,
    title: "Videography",
    desc: "From events to promos — we shoot and deliver cinematic, high-quality content."
  },
  {
    icon: <FaMobileAlt className="service-icon" />,
    title: "Mobile UI Design",
    desc: "Responsive and intuitive mobile app interfaces designed for optimal usability."
  },
  {
    icon: <FaPhotoVideo className="service-icon" />,
    title: "Content Creation",
    desc: "Creative visual content for reels, ads, and promotions that engage and convert."
  }
];

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
          {serviceList.map((service, index) => (
            <div className="service-card" key={index}>
              {service.icon}
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
