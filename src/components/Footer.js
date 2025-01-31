import React from "react";
import styles from "../styles/Footer.module.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3>About Us</h3>
          <p>
            Ali Hassan, a MERN stack developer, connects job seekers with employers while creating seamless career opportunities. Passionate about building impactful web applications since 2022.
          </p>
        </div>

        <div className={styles.column}>
          <h3>Contact Info</h3>
          <p>Email: alidaisyhassan@gmail.com</p>
          <p>Phone: +92 (309) 4483014</p>
          <p>Location: Lahore, Pakistan</p>
        </div>

        <div className={styles.column}>
          <h3>Follow Me</h3>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/daisy.rajpoot.182" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com/daisy_bhai" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/ali-hassan-riasat/" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>&copy; 2025 Ali Hassan - MERN Stack Developer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
