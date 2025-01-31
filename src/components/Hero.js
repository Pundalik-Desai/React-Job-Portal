import React from "react";
import styles from "../styles/Hero.module.css";
import { useNavigate } from "react-router-dom";
import { FaBriefcase, FaUserTie } from "react-icons/fa"; 

const HeroSection = ({ role }) => {
    
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const navigate = useNavigate();

  const alljobhandler = () => {
    navigate("/all-jobs");
  };
  const applicanthandler = () => {
    navigate("/applications");
  };
  return (
    <section className={styles.heroContainer}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.welcomeText}>
          {user.role === "Job Seeker" ? (
            <>
              <FaBriefcase className={styles.icon} />
              <h1 className={styles.title}>Welcome, {user.name}!</h1>
              <p className={styles.subtitle}>
                Discover opportunities, track your applications, and land your dream job.
              </p>
            </>
          ) : (
            <>
              <FaUserTie className={styles.icon} />
              <h1 className={styles.title}>Welcome, {user.name}</h1>
              <p className={styles.subtitle}>
                Post jobs, manage applicants, and find the perfect candidates for your team.
              </p>
            </>
          )}
        </div>
        <div className={styles.buttons}>
          {user.role === "Job Seeker" ? (
            <>
              <button className="Button2" onClick={alljobhandler}>Explore Jobs</button>
              <button className="Button" onClick={applicanthandler}>My Applications</button>
            </>
          ) : (
            <>
              <button className="Button2">Add a Job</button>
              <button className="Button">View Applicants</button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
