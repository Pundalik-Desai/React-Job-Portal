//

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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

  // Internal styles
  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#282c34",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      position: "relative",
    },
    logo: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#61dafb",
    },
    navLinks: {
      display: isMobileMenuOpen ? "block" : "flex",
      flexDirection: isMobileMenuOpen ? "column" : "row",
      position: isMobileMenuOpen ? "absolute" : "static",
      top: isMobileMenuOpen ? "60px" : "auto",
      left: 0,
      right: 0,
      backgroundColor: isMobileMenuOpen ? "#282c34" : "transparent",
      transition: "all 0.3s ease-in-out",
    },
    navLink: {
      margin: "0 15px",
      textDecoration: "none",
      color: "#ffffff",
      padding: "10px 15px",
      borderRadius: "5px",
      transition: "background-color 0.3s ease-in-out",
    },
    navLinkHover: {
      backgroundColor: "#61dafb",
    },
    hamburgerIcon: {
      fontSize: "30px",
      cursor: "pointer",
      color: "#ffffff",
    },
    buttonStyle: {
      backgroundColor: "#ff4d4d",
      color: "#ffffff",
      border: "none",
      borderRadius: "5px",
      padding: "10px 15px",
      cursor: "pointer",
      transition: "background-color 0.3s ease-in-out",
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <p>Vayun</p>
      </div>
      <div style={styles.navLinks}>
        {!user ? (
          <>
            <Link to="/" style={styles.navLink}>
              Home
            </Link>
            <Link to="/login" style={styles.navLink}>
              Login
            </Link>
            <Link to="/register" style={styles.navLink}>
              Register
            </Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" style={styles.navLink}>
              Home
            </Link>
            <Link to="/all-jobs" style={styles.navLink}>
              All Jobs
            </Link>
            <Link to="/add-jobs" style={styles.navLink}>
              Add Jobs
            </Link>
            <Link to="/edit-jobs" style={styles.navLink}>
              Edit Jobs
            </Link>
            <Link to="/applications" style={styles.navLink}>
              Applications
            </Link>
            <Link to="/profile" style={styles.navLink}>
              My Profile
            </Link>
            <button style={styles.buttonStyle} onClick={logout}>
              Logout
            </button>
          </>
        )}
      </div>
      <div style={styles.hamburgerIcon} onClick={toggleMobileMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
