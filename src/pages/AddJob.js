import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const [jobData, setJobData] = useState({
    title: "",
    description: "",
    location: "",
    salaryRange: "",
    jobType: "Full Time",
    jobHours: "",
    openings: "",
    qualification: "",
    instructions: "",
    contactInfo: "",
    closeDate: "",
    active: false,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setJobData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const accessToken = JSON.parse(localStorage.getItem("accessToken"));

    if (!accessToken) {
      alert("Unauthorized! Please log in again.");
      return;
    }

    try {
      const response = await fetch("http://192.168.250.1:4000/api/v1/emr/job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(jobData),
      });

      if (response.ok) {
        alert("Job posted successfully!");
        setJobData({
          title: "",
          description: "",
          location: "",
          salaryRange: "",
          jobType: "Full Time",
          jobHours: "",
          openings: "",
          qualification: "",
          instructions: "",
          contactInfo: "",
          closeDate: "",
          active: false,
        });
        navigate("/dashboard"); // Navigate to dashboard after success
      } else {
        const errorData = await response.json();
        alert(`Failed to post job: ${errorData.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error posting job:", error);
      alert("An error occurred while posting the job.");
    }
  };

  const styles = {
    addJobContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#eef2f3",
      padding: "20px",
    },
    addJobForm: {
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
      padding: "30px",
      width: "100%",
      maxWidth: "600px",
    },
    formTitle: {
      textAlign: "center",
      marginBottom: "20px",
      color: "#2c3e50",
    },
    input: {
      width: "100%",
      padding: "12px",
      margin: "10px 0",
      border: "1px solid #ccc",
      borderRadius: "8px",
      fontSize: "16px",
    },
    textarea: {
      width: "100%",
      padding: "12px",
      margin: "10px 0",
      border: "1px solid #ccc",
      borderRadius: "8px",
      fontSize: "16px",
      resize: "vertical",
    },
    select: {
      width: "100%",
      padding: "12px",
      margin: "10px 0",
      border: "1px solid #ccc",
      borderRadius: "8px",
      fontSize: "16px",
    },
    button: {
      // width: "100%",
      // padding: "12px",
      // backgroundColor: "#2980b9",
      // border: "none",
      // borderRadius: "8px",
      // color: "#ffffff",
      // fontSize: "16px",
      // cursor: "pointer",
      // transition: "background-color 0.3s",

      width: "100%",
      padding: "14px",
      backgroundColor: "#0056b3",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "18px",
      fontWeight: "bold",
      marginTop: "12px",
      transition: "background 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#3498db",
    },
  };

  return (
    <section style={styles.addJobContainer}>
      <form style={styles.addJobForm} onSubmit={handleSubmit}>
        <h2 style={styles.formTitle}>Add New Job</h2>
        <input
          name="title"
          placeholder="Job Title"
          value={jobData.title}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <textarea
          name="description"
          placeholder="Job Description"
          value={jobData.description}
          onChange={handleChange}
          style={styles.textarea}
          required
        />
        <input
          name="location"
          placeholder="Location"
          value={jobData.location}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          name="salaryRange"
          placeholder="Salary Range"
          value={jobData.salaryRange}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <select
          name="jobType"
          value={jobData.jobType}
          onChange={handleChange}
          style={styles.select}
          required
        >
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
        </select>
        <input
          name="jobHours"
          type="number"
          placeholder="Job Hours"
          value={jobData.jobHours}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          name="openings"
          type="number"
          placeholder="Number of Openings"
          value={jobData.openings}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          name="qualification"
          placeholder="Qualification"
          value={jobData.qualification}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <textarea
          name="instructions"
          placeholder="Instructions"
          value={jobData.instructions}
          onChange={handleChange}
          style={styles.textarea}
          required
        />
        <input
          name="contactInfo"
          placeholder="Contact Email"
          value={jobData.contactInfo}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          name="closeDate"
          type="date"
          value={jobData.closeDate}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <label>
          <input
            type="checkbox"
            name="active"
            checked={jobData.active}
            onChange={handleChange}
          />{" "}
          Active
        </label>
        <button type="submit" style={styles.button}>
          Add Job
        </button>
      </form>
    </section>
  );
};

export default AddJob;
