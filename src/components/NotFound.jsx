import React from "react";
import "./NotFound.css";

const NotFoundPage = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-subtitle">Oops! Page not found.</p>
        <p className="notfound-text">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <a href="/" className="notfound-button" aria-label="Go to home page">
          Go Home
        </a>
      </div>
      <div className="notfound-animation" aria-hidden="true">
        <span className="dot dot1"></span>
        <span className="dot dot2"></span>
        <span className="dot dot3"></span>
      </div>
    </div>
  );
};

export default NotFoundPage;
