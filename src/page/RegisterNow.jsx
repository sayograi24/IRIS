import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Mascot from "../components/Mascot3D";
import "./RegisterNow.css";

const Register = ({ onRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    onRegister({ email, password });
  };

  return (
    <div className="register-container">
      <Mascot isEyesClosed={showPassword} />
      <form className="register-form" onSubmit={handleSubmit} noValidate>
        <h2>Register</h2>

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

        <div className="input-group">
          <input
            type={showPassword ? "text" : "password"}
            id="confirm-password"
            placeholder=" "
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            autoComplete="new-password"
          />
          <label htmlFor="confirm-password">Confirm Password</label>
        </div>

        <p style={{ textAlign: "center", marginBottom: "28px", fontSize: "1rem" }}>
          Already have an account?{" "}
        </p>

        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;