import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./RegisterNow.css";

const RegisterNow = ({ onRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [honeypot, setHoneypot] = useState(""); // honeypot trap

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

  useEffect(() => {
    if (honeypot) {
      setError("Spam detected!");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Invalid email address.");
    } else if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters, include 1 number and 1 special character."
      );
    } else if (password !== confirmPassword) {
      setError("Passwords do not match!");
    } else {
      setError("");
    }
  }, [email, password, confirmPassword, honeypot]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error) return;
    if (honeypot) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onRegister({ email, password });
    }, 1500); // simulate loading delay
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit} noValidate>
        <h2>Register</h2>

        <div className="input-group" style={{ display: "none" }}>
          <input
            type="text"
            name="honeypot"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            autoComplete="off"
            tabIndex="-1"
          />
          <label>Leave this field empty</label>
        </div>

        <div className="input-group">
          <input
            type="email"
            id="email"
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="username"
          />
          <label htmlFor="email">Email</label>
        </div>

        <div className="input-group password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password"
          />
          <label htmlFor="password">Password</label>
          <button
            type="button"
            className="password-toggle-btn"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <div className="input-group password-wrapper">
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirm-password"
            placeholder=" "
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            autoComplete="new-password"
          />
          <label htmlFor="confirm-password">Confirm Password</label>
          <button
            type="button"
            className="password-toggle-btn"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            aria-label={showConfirmPassword ? "Hide password" : "Show password"}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {error && <p className="error-message">{error}</p>}

        <p style={{ textAlign: "center", marginBottom: "28px", fontSize: "1rem" }}>
          Already have an account?{" "}
        </p>

        <button type="submit" className="register-button" disabled={!!error || loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default RegisterNow;
