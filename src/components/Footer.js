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
            Vayun, a Online Job Portal, connects job seekers with employers
            while creating seamless career opportunities. Passionate about
            building impactful web applications since 2025.
          </p>
        </div>

        <div className={styles.column}>
          <h3>Contact Info</h3>
          <p>Email: vayun@gmail.com</p>
          <p>Phone: +91 3456204021</p>
          <p>Location: Ratnagiri ,Maharashtra</p>
        </div>

        <div className={styles.column}>
          <h3>Follow Me</h3>
          <div className={styles.socialIcons}>
            <a
              href="www.linkedin.com/in/pundalik-desai-1b4060248"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="www.linkedin.com/in/pundalik-desai-1b4060248"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="www.linkedin.com/in/pundalik-desai-1b4060248"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>&copy; Vayun, a Online Job Portal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
