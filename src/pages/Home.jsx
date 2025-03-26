import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to the Job Portal</h1>
          <p className="hero-subtitle">
          Every job given is a bridge to someone's dreams. Empowering people empowers the world!
          </p>
          <div className="hero-buttons">
            <a href="#/register" className="Button2">
              Register
            </a>
            <a href="#/login" className="Button">
              Login
            </a>
          </div>
        </div>
      </header>

      <div className="features-section">
        <h2 className="features-title">Why Choose Us?</h2>
        <div className="features">
        <div className="feature-card">
          <h3>Effortless Job Posting</h3>
          <p>Post job applications with ease and reach the right candidates quickly.</p>
        </div>
        <div className="feature-card">
          <h3>Smart Application Management</h3>
          <p>Toggle application status, shortlist candidates, and manage job postings efficiently.</p>
        </div>
        <div className="feature-card">
          <h3>Secure & Seamless Access</h3>
          <p>Register, log in, and manage your hiring process with a secure and user-friendly interface.</p>
        </div>
      </div>

      </div>
    </div>
  );
};

export default Home;
