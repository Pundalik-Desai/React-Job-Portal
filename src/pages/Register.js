import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Register.module.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Job Seeker", 
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some((user) => user.email === formData.email)) {
      alert("Email is already registered");
      return;
    }

    const newUser = { ...formData, id: Date.now(), appliedJobs: [] };
    localStorage.setItem("users", JSON.stringify([...users, newUser]));

    navigate("/login");
  };

  return (
    <section className={styles.registerContainer}>
      <form className={styles.registerForm} onSubmit={handleSubmit}>
        <h2>Register</h2>
        
        <input
          className={styles.inputField}
          name="name"
          placeholder="Name"
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
        
        <select
          className={styles.selectField}
          name="role"
          onChange={handleChange}
          value={formData.role}
        >
          <option value="Job Seeker">Job Seeker</option>
          <option value="Employer">Employer</option>
        </select>
        
        <button className={styles.button}  type="submit">
          Register
        </button>

      </form>
    </section>
  );
};

export default Register;
