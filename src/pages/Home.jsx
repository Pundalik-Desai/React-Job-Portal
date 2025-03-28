import React from "react";

const Home = () => {
  const styles = {
    homeContainer: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#e6f7ff",
      color: "#333",
      textAlign: "center",
      padding: "0",
    },
    heroSection: {
      background: "linear-gradient(to right, #a0c4ff, #80b3ff)",
      color: "#fff",
      padding: "80px 20px",
      textAlign: "center",
      borderRadius: "0 0 30px 30px",
    },
    heroTitle: {
      fontSize: "2.5rem",
      marginBottom: "10px",
    },
    heroSubtitle: {
      fontSize: "1.2rem",
      marginBottom: "20px",
    },
    heroButtons: {
      display: "flex",
      justifyContent: "center",
      gap: "15px",
    },
    button: {
      textDecoration: "none",
      color: "#fff",
      backgroundColor: "#0077b6",
      padding: "12px 20px",
      borderRadius: "5px",
      fontSize: "1rem",
      transition: "0.3s",
    },
    buttonHover: {
      backgroundColor: "#005f99",
    },
    featuresSection: {
      padding: "50px 20px",
      textAlign: "center",
    },
    featuresTitle: {
      fontSize: "2rem",
      color: "#333",
      marginBottom: "30px",
    },
    features: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap",
    },
    featureCard: {
      backgroundColor: "#fff",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      borderRadius: "10px",
      padding: "20px",
      width: "280px",
      textAlign: "center",
      transition: "0.3s",
    },
  };

  return (
    <div style={styles.homeContainer}>
      <header style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Welcome to the Job Portal</h1>
        <p style={styles.heroSubtitle}>
          Every job given is a bridge to someone's dreams. Empowering people empowers the world!
        </p>
        <div style={styles.heroButtons}>
          <a href="#/register" style={styles.button}>Register</a>
          <a href="#/login" style={styles.button}>Login</a>
        </div>
      </header>

      <div style={styles.featuresSection}>
        <h2 style={styles.featuresTitle}>Why Choose Us?</h2>
        <div style={styles.features}>
          <div style={styles.featureCard}>
            <h3>Effortless Job Posting</h3>
            <p>Post job applications with ease and reach the right candidates quickly.</p>
          </div>
          <div style={styles.featureCard}>
            <h3>Smart Application Management</h3>
            <p>Toggle application status, shortlist candidates, and manage job postings efficiently.</p>
          </div>
          <div style={styles.featureCard}>
            <h3>Secure & Seamless Access</h3>
            <p>Register, log in, and manage your hiring process with a secure and user-friendly interface.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
