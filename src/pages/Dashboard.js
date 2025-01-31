import React from "react";
import styles from "../styles/Dashboard.module.css";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser")) || {
    role: "Guest",
    name: "Visitor",
  };

  return (
    <section className={styles.dashboard}>

      <div className={styles.welcomeSection}>
        <h2>Welcome to Your Dashboard, {user.name}!</h2>
        <p>
          {user.role === "Job Seeker"
            ? "Track your applications, explore new opportunities, and achieve your career goals."
            : "Manage job postings, review applications, and hire top talent for your team."}
        </p>
      </div>

      <div className={styles.quickLinks}>
        <h3>Quick Links</h3>
        <div className={styles.linksContainer}>
          {user.role === "Job Seeker" ? (
            <>
              <a href="#/all-jobs" className={styles.linkButton}>Explore Jobs</a>
              <a href="#/applications" className={styles.linkButton}>My Applications</a>
            </>
          ) : (
            <>
              <a href="#/add-jobs" className={styles.linkButton}>Add a Job</a>
              <a href="#/applications" className={styles.linkButton}>View Applicants</a>
            </>
          )}
        </div>
      </div>

      <div className={styles.stats}>
        <h3>Your Stats</h3>
        <div className={styles.statsContainer}>
          {user.role === "Job Seeker" ? (
            <>
              <div className={styles.statCard}>
                <h4>Applications Sent</h4>
                <p>10</p>
              </div>
              <div className={styles.statCard}>
                <h4>Jobs Saved</h4>
                <p>5</p>
              </div>
            </>
          ) : (
            <>
              <div className={styles.statCard}>
                <h4>Jobs Posted</h4>
                <p>8</p>
              </div>
              <div className={styles.statCard}>
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
