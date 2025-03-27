import React, { useState } from "react";

const AddJob = () => {
  const [jobData, setJobData] = useState({
    title: "",
    description: "",
    location: "",
    salaryRange: "",
    jobType: "Full Time", // Default value
    jobHours: "",
    openings: "",
    qualification: "",
    instructions: "",
    contactInfo: "",
    closeDate: "",
    active: false, // Default false
  });

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
      } else {
        const errorData = await response.json();
        alert(`Failed to post job: ${errorData.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error posting job:", error);
      alert("An error occurred while posting the job.");
    }
  };

  // Internal styles
  const styles = {
    addJobContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#f5f5f5",
      padding: "20px",
    },
    addJobForm: {
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      padding: "30px",
      width: "100%",
      maxWidth: "600px",
    },
    formTitle: {
      textAlign: "center",
      marginBottom: "20px",
      color: "#333",
    },
    input: {
      width: "100%",
      padding: "12px",
      margin: "10px 0",
      border: "1px solid #ddd",
      borderRadius: "5px",
      fontSize: "16px",
      transition: "border-color 0.3s",
    },
    inputFocus: {
      borderColor: "#61dafb",
    },
    textarea: {
      width: "100%",
      padding: "12px",
      margin: "10px 0",
      border: "1px solid #ddd",
      borderRadius: "5px",
      fontSize: "16px",
      resize: "vertical",
      transition: "border-color 0.3s",
    },
    select: {
      width: "100%",
      padding: "12px",
      margin: "10px 0",
      border: "1px solid #ddd",
      borderRadius: "5px",
      fontSize: "16px",
    },
    toggleContainer: {
      display: "flex",
      alignItems: "center",
      margin: "10px 0",
    },
    toggleInput: {
      marginRight: "10px",
    },
    button: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#61dafb",
      border: "none",
      borderRadius: "5px",
      color: "#ffffff",
      fontSize: "16px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#ff4d4d",
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
        <label style={{ margin: "10px 0", color: "#333" }}>
          Application Close Date :
        </label>
        <input
          name="closeDate"
          type="date"
          value={jobData.closeDate}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <label style={styles.toggleContainer}>
          <input
            type="checkbox"
            name="active"
            checked={jobData.active}
            onChange={handleChange}
            style={styles.toggleInput}
          />
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
