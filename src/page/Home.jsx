import React from "react";
import { FaStar, FaArrowRight, FaLightbulb, FaPalette, FaVideo, FaBullhorn } from "react-icons/fa";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import { useOnScreen } from "../hooks/useonscreen";  // your hook import
import "./Home.css";

const Home = () => {
  // Use the hook for each section you want to animate
  const [whatRef, whatVisible] = useOnScreen({ threshold: 0.3 });
  const [standOutRef, standOutVisible] = useOnScreen({ threshold: 0.3 });
  const [servicesRef, servicesVisible] = useOnScreen({ threshold: 0.3 });
  const [ctaRef, ctaVisible] = useOnScreen({ threshold: 0.3 });

  return (
    <>
      <Header />
      <Slider />

      <section className="hero-intro">
        <h1>Welcome to Iris Visual</h1>
        <p>Your brand’s story, told through creative design and stunning visuals.</p>
      </section>

      <main className="home-main">

        <section
          ref={whatRef}
          className={`home-section ${whatVisible ? "fade-in" : "fade-hidden"}`}
        >
          <h2 className="section-title">
            <FaLightbulb color="#309baa" size={28} />
            What do we do?
          </h2>
          <div className="section-content">
            <p>
              At Iris Visual, we bring your brand to life through powerful, creative design. Specializing in graphic design, visual effects (VFX), motion graphics (GFX), and branding, we craft everything from eye-catching logos and sleek brochures to dynamic visual content that captures attention and tells your story.
            </p>
            <p>
              Whether you're building a brand from scratch or refreshing your visual identity, we turn ideas into visuals that work.
            </p>
            <p className="emphasis">
              Your vision, our creativity — designed to stand out. <FaArrowRight color="#309baa" size={20} />
            </p>
          </div>
        </section>

        <section
          ref={standOutRef}
          className={`home-section ${standOutVisible ? "fade-in" : "fade-hidden"}`}
        >
          <h2 className="section-title">
            <FaStar color="#309baa" size={28} />
            Make Your Business Stand Out
          </h2>
          <div className="section-content">
            <p>
              In a world full of noise, your business deserves to be seen. At <strong>Iris Visual</strong>, we don't just design — we create impact.
            </p>
            <p>
              Through bold logos, stunning brochures, engaging motion graphics (GFX), and cutting-edge VFX, we help you build a visual identity that's not just good — it's unforgettable.
            </p>
            <p className="emphasis">
              BE different. Be bold. Be seen. Let's make your business stand out. <FaArrowRight color="#309baa" size={20} />
            </p>
          </div>
        </section>

        <section
          ref={servicesRef}
          className={`services-grid ${servicesVisible ? "fade-in" : "fade-hidden"}`}
        >
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "40px", color: "#309baa" }}>
            Our Core Services
          </h2>
          <div className="services-items">
            <article className="service-item">
              <FaPalette size={40} color="#40c0d0" />
              <h3>Graphic Design</h3>
              <p>From logos to brochures, we design visually stunning assets that speak your brand’s language.</p>
            </article>
            <article className="service-item">
              <FaVideo size={40} color="#40c0d0" />
              <h3>Motion Graphics (GFX)</h3>
              <p>Create dynamic, eye-catching animations to captivate your audience across platforms.</p>
            </article>
            <article className="service-item">
              <FaBullhorn size={40} color="#40c0d0" />
              <h3>Visual Effects (VFX)</h3>
              <p>Add cinematic effects that bring your videos and ads to life with professionalism and flair.</p>
            </article>
            <article className="service-item">
              <FaLightbulb size={40} color="#40c0d0" />
              <h3>Digital Marketing</h3>
              <p>We boost your online presence through SEO, social media, email marketing, and adshelping you reach more customers and grow your business.</p>
            </article>
          </div>
        </section>

        <section
          ref={ctaRef}
          className={`call-to-action ${ctaVisible ? "fade-in" : "fade-hidden"}`}
        >
          <h2>Ready to Elevate Your Brand?</h2>
          <p>Contact us today to start your creative journey with Iris Visual.</p>
          <button className="home-button">Get in Touch</button>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default Home;
