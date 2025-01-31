import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to the Job Portal</h1>
          <p className="hero-subtitle">
            Find your dream job or hire the best talent with ease!
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
            <h3>For Job Seekers</h3>
            <p>Access thousands of job opportunities and apply with ease.</p>
          </div>
          <div className="feature-card">
            <h3>For Employers</h3>
            <p>Post job listings and find the right candidates quickly.</p>
          </div>
          <div className="feature-card">
            <h3>Responsive Design</h3>
            <p>Enjoy a seamless experience on any device, anywhere.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
