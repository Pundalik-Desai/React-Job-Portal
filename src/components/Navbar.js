import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Navbar.module.css"; 

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderNavbar = () => {
    if (!user) {
      // Navbar for users who are not logged in
      return (
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <p>Ali Hassan</p>
          </div>
          <div className={styles.navLinks + (isMobileMenuOpen ? ` ${styles.active}` : "")}>
            <Link to="/" className={styles.navLink}>Home</Link>
            <Link to="/login" className={styles.navLink}>Login</Link>
            <Link to="/register" className={styles.navLink}>Register</Link>
          </div>
          <div className={styles.hamburgerIcon} onClick={toggleMobileMenu}>
            ☰
          </div>
        </nav>
      );
    } else if (user.role === "Job Seeker") {
      // Navbar for Job Seeker
      return (
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <p>Ali Hassan</p>
          </div>
          <div className={styles.navLinks + (isMobileMenuOpen ? ` ${styles.active}` : "")}>
            <Link to="/dashboard" className={styles.navLink}>Home</Link>
            <Link to="/all-jobs" className={styles.navLink}>All Jobs</Link>
            <Link to="/applications" className={styles.navLink}>My Applications</Link>
            <Link to="/profile" className={styles.navLink}>My Profile</Link>
            <button className="Button" onClick={logout}>Logout</button>
          </div>
          <div className={styles.hamburgerIcon} onClick={toggleMobileMenu}>
            ☰
          </div>
        </nav>
      );
    } else if (user.role === "Employer") {
      // Navbar for Employer
      return (
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <p>Ali Hassan</p>
          </div>
          <div className={styles.navLinks + (isMobileMenuOpen ? ` ${styles.active}` : "")}>
            <Link to="/dashboard" className={styles.navLink}>Home</Link>
            <Link to="/all-jobs" className={styles.navLink}>All Jobs</Link>
            <Link to="/add-jobs" className={styles.navLink}>Add Jobs</Link>
            <Link to="/edit-jobs" className={styles.navLink}>Edit Jobs</Link>
            <Link to="/applications" className={styles.navLink}>Applications</Link>
            <Link to="/profile" className={styles.navLink}>My Profile</Link>
            <button className="Button" onClick={logout}>Logout</button>
          </div>
          <div className={styles.hamburgerIcon} onClick={toggleMobileMenu}>
            ☰
          </div>
        </nav>
      );
    }
  };

  return <>{renderNavbar()}</>;
};

export default Navbar;
