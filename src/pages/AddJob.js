import React, { useState } from "react";
import styles from "../styles/AddJob.module.css"; 

const AddJob = () => {
  const [jobData, setJobData] = useState({ title: "", description: "", location: "", salary: "" });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    const newJob = { ...jobData, id: Date.now(), applications: [] };
    localStorage.setItem("jobs", JSON.stringify([...jobs, newJob]));
    alert("Job added successfully!");
    setJobData({ title: "", description: "", location: "", salary: "" });
  };

  return (
    <section className={styles.addJobContainer}>
      <form className={styles.addJobForm} onSubmit={handleSubmit}>
        <h2>Add New Job</h2>
        <input
          name="title"
          placeholder="Job Title"
          value={jobData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Job Description"
          value={jobData.description}
          onChange={handleChange}
          required
        />
        <input
          name="location"
          placeholder="Location"
          value={jobData.location}
          onChange={handleChange}
          required
        />
        <input
          name="salary"
          placeholder="Salary"
          value={jobData.salary}
          onChange={handleChange}
          required
        />
        <button type="submit" className="Button">Add Job</button>
      </form>
    </section>
  );
};

export default AddJob;
