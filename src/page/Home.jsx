import React from "react";
import { FaStar, FaArrowRight, FaLightbulb } from "react-icons/fa";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <main className="home-main">

        <section className="home-section">
          <h2 style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
            <FaLightbulb color="#309baa" size={28} />
            What do we do?
          </h2>
          <p>
            At Iris Visual, we bring your brand to life through powerful, creative design. Specializing in graphic design, visual effects (VFX), motion graphics (GFX), and branding, we craft everything from eye-catching logos and sleek brochures to dynamic visual content that captures attention and tells your story.
          </p>
          <p>
            Whether you're building a brand from scratch or refreshing your visual identity, we turn ideas into visuals that work.
          </p>
          <p className="emphasis" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
            Your vision, our creativity — designed to stand out.
            <FaArrowRight color="#309baa" size={20} />
          </p>
        </section>

        <section className="home-section">
          <h2 style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
            <FaStar color="#309baa" size={28} />
            Make Your Business Stand Out
          </h2>
          <p>
            In a world full of noise, your business deserves to be seen. At <strong>Iris Visuals</strong>, we don't just design — we create impact.
          </p>
          <p>
            Through bold logos, stunning brochures, engaging motion graphics (GFX), and cutting-edge VFX, we help you build a visual identity that's not just good — it's unforgettable.
          </p>
          <p className="emphasis" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
            BE different. Be bold. Be seen. Let's make your business stand out.
            <FaArrowRight color="#309baa" size={20} />
          </p>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default Home;
