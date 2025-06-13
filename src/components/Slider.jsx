import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import logo from "../assets/IRIS.png";
import bg1 from "../assets/slide1.jpeg";
import bg2 from "../assets/slide2.jpeg";
import "./Slider.css";

const slides = [
    {
        title: (
        <>
            <span className="white-text">Turn Your Designs </span><br></br>
            <span className="blue-text">Into Reality Now!</span>
        </>
        ),
        subtitle: (
            <>
                <span className="white-text">Make your business stand out with us</span>
            </>  
        ) ,
        bg: bg1,
    },
    {
        title: (
        <>
                <span className="black-text">Unleash Creativity </span><br></br>
                <span className="blue-text">With Every Pixel!</span>
        </>
        ),
        subtitle: (
            <>
                <span className="black-text">"Elevate your brand with our design expertise"</span>
            </>
        ),
        bg: bg2,
     },
];

const Slider = () => {
    const [index, setIndex] = useState(0);
    const timerRef = useRef(null);

    const resetTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        }, 7500);
    };

    useEffect(() => {
        resetTimer();
        return () => clearInterval(timerRef.current);
    }, []);

    useEffect(() => {
        resetTimer();
    }, [index]);

    const goToSlide = (idx) => {
        setIndex(idx);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % slides.length);
    };

    return (
        <div
        className="slider"
        style={{ backgroundImage: `url(${slides[index].bg})` }}
        >
        <div className="slide-overlay" />

        <button className="arrow-button left-arrow" onClick={prevSlide}>
            <FaChevronLeft />
        </button>

        <div className="slide-content">
            <h1>{slides[index].title}</h1>
            <p>{slides[index].subtitle}</p>
            <button className="slider-btn">
            Our Services <span className="arrow">→</span>
            </button>
        </div>

        <div className="slide-logo">
            <img src={logo} alt="Logo" />
        </div>

        <button className="arrow-button right-arrow" onClick={nextSlide}>
            <FaChevronRight />
        </button>

        <div className="dots">
            {slides.map((_, idx) => (
            <span
                key={idx}
                className={`dot ${idx === index ? "active" : ""}`}
                onClick={() => goToSlide(idx)}
            />
            ))}
        </div>
        </div>
    );
};

export default Slider;
