import React, { useState, useEffect } from "react";
import logo from "../assets/IRIS.png";
import "./Slider.css";

const slides = [
  {
    title: "Turn your designs into reality now!",
    subtitle: "Make your business stand out with us",
  },
  {
    title: "Unleash creativity with every pixel!",
    subtitle: "Elevate your brand with our design expertise",
  },
  {
    title: "Designs that speak louder than words",
    subtitle: "We bring visions to life with elegance",
  },
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div className="slide-content">
        <h1>{slides[index].title}</h1>
        <p>{slides[index].subtitle}</p>
        <button className="slider-btn">Our Services ↗</button>
      </div>
      <div className="slide-logo">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Slider;
