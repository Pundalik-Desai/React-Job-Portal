import React from "react";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser")) || {
    role: "Guest",
    name: "Visitor",
  };

  // Updated styles for better UI consistency
  const styles = {
    dashboard: {
      backgroundColor: "#e3f2fd", // Light blue for a fresh look
      minHeight: "100vh",
      padding: "20px",
      color: "#333",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    welcomeSection: {
      backgroundColor: "#1976d2", // Deep blue for contrast
      color: "#ffffff",
      padding: "20px",
      borderRadius: "8px",
      marginBottom: "20px",
      textAlign: "center",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      width: "80%",
    },
    quickLinks: {
      marginBottom: "40px", // Increased space between Quick Links and Your Stats
      textAlign: "center",
    },
    linksContainer: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "15px",
      marginTop: "10px",
    },
    linkButton: {
      backgroundColor: "#0288d1", // Brighter blue
      color: "#ffffff",
      padding: "12px 18px",
      borderRadius: "6px",
      textDecoration: "none",
      transition: "all 0.3s ease-in-out",
      fontWeight: "bold",
      boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
    },
    stats: {
      textAlign: "center",
    },
    statsContainer: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "15px",
      marginTop: "20px", // Restored original spacing for stats section
    },
    statCard: {
      backgroundColor: "#ffffff",
      border: "1px solid #bbb",
      borderRadius: "8px",
      padding: "30px",
      minWidth: "300px",
      minHeight: "150px",
      boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
      textAlign: "center",
      fontSize: "1.5rem", // Increased text size
      fontWeight: "bold",
    },
  };

  return (
    <section style={styles.dashboard}>
      <div style={styles.welcomeSection}>
        <h2>Welcome to Your Dashboard, {user.name}!</h2>
        <p>
          {user.role === "Job Seeker"
            ? "Track your applications, explore new opportunities, and achieve your career goals."
            : "Manage job postings, review applications, and hire top talent for your team."}
        </p>
      </div>

      <div style={styles.quickLinks}>
        <h3>Quick Links</h3>
        <div style={styles.linksContainer}>
          {user.role === "Job Seeker" ? (
            <>
              <a href="#/all-jobs" style={styles.linkButton}>
                Explore Jobs
              </a>
              <a href="#/applications" style={styles.linkButton}>
                My Applications
              </a>
            </>
          ) : (
            <>
              <a href="#/add-jobs" style={styles.linkButton}>
                Add a Job
              </a>
              <a href="#/applications" style={styles.linkButton}>
                View Applicants
              </a>
            </>
          )}
        </div>
      </div>

      <div style={styles.stats}>
        <h3>Your Stats</h3>
        <div style={styles.statsContainer}>
          {user.role === "Job Seeker" ? (
            <>
              <div style={styles.statCard}>
                <h4>Applications Sent</h4>
                <p>10</p>
              </div>
              <div style={styles.statCard}>
                <h4>Jobs Saved</h4>
                <p>5</p>
              </div>
            </>
          ) : (
            <>
              <div style={styles.statCard}>
                <h4>Jobs Posted</h4>
                <p>8</p>
              </div>
              <div style={styles.statCard}>
                <h4>Applications Received</h4>
                <p>25</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
