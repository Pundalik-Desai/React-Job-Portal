//

import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  // Internal styles
  const styles = {
    footer: {
      backgroundColor: "#282c34",
      color: "#ffffff",
      padding: "20px 0",
      textAlign: "center",
      position: "relative",
      bottom: 0,
      width: "100%",
    },
    container: {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 20px",
    },
    column: {
      flex: "1 1 30%",
      margin: "10px",
      minWidth: "250px",
    },
    socialIcons: {
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      fontSize: "24px",
    },
    bottomBar: {
      marginTop: "20px",
      borderTop: "1px solid #61dafb",
      paddingTop: "10px",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.column}>
          <h3>About Us</h3>
          <p>
            Vayun, an Online Job Portal, connects job seekers with employers
            while creating seamless career opportunities. Passionate about
            building impactful web applications since 2025.
          </p>
        </div>

        <div style={styles.column}>
          <h3>Contact Info</h3>
          <p>Email: vayun@gmail.com</p>
          <p>Phone: +91 3456204021</p>
          <p>Location: Ratnagiri, Maharashtra</p>
        </div>

        <div style={styles.column}>
          <h3>Follow Me</h3>
          <div style={styles.socialIcons}>
            <a
              href="https://www.linkedin.com/in/pundalik-desai-1b4060248"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#ffffff" }}
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/pundalik-desai-1b4060248"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#ffffff" }}
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/pundalik-desai-1b4060248"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#ffffff" }}
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div style={styles.bottomBar}>
        <p>&copy; Vayun, an Online Job Portal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
