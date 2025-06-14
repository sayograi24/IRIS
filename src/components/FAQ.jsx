import React, { useState, useRef } from "react";
import "./FAQ.css";
import useOnScreen from "../hooks/useonscreen";

const FAQ = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqRef = useRef();
  const isVisible = useOnScreen(faqRef);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={faqRef} className={`faq-section ${isVisible ? "fade-in" : "hidden"}`}>
      <h2 className="section-title">FAQs</h2>
      <div className="faq-items">
        {items.map((faq, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
            </div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
