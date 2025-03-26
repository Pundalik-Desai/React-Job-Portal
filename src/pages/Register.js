import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../styles/Register.module.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    authorityName: "",
    email: "",
    password: "",
    location: "",
    subscription: "free",
    role: "Employer",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://192.168.250.1:4000/api/v1/emr/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      alert("Registration successful");
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <section className={styles.registerContainer}>
      <form className={styles.registerForm} onSubmit={handleSubmit}>
        <h2>Employer Registration</h2>

        <input
          className={styles.inputField}
          name="name"
          placeholder="Company Name"
          onChange={handleChange}
          required
        />

        <input
          className={styles.inputField}
          name="authorityName"
          placeholder="Authority Name"
          onChange={handleChange}
          required
        />

        <input
          className={styles.inputField}
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          className={styles.inputField}
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <input
          className={styles.inputField}
          name="location"
          placeholder="Location"
          onChange={handleChange}
          required
        />

        <select
          className={styles.selectField}
          name="subscription"
          onChange={handleChange}
          value={formData.subscription}
          required
        >
          <option value="free">Free</option>
          <option value="paid">Paid</option>
        </select>

        <button className={styles.button} type="submit">
          Register
        </button>
      </form>
    </section>
  );
};

export default Register;
