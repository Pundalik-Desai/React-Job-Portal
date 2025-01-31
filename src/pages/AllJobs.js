import React, { useState } from "react";
import styles from "../styles/AllJobs.module.css";

const AllJobs = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationDetails, setApplicationDetails] = useState({
    name: "",
    email: user.email,
    phone: "",
    cv: null,
  });

  const handleApply = (job) => {
    setSelectedJob(job);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setApplicationDetails((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newApplication = {
      id: Date.now(),
      userId: user.id,
      userName: applicationDetails.name,
      email: applicationDetails.email,
      phone: applicationDetails.phone,
      cv: applicationDetails.cv?.name,
      jobId: selectedJob.id,
      jobTitle: selectedJob.title,
      jobDescription: selectedJob.description,
      jobLocation: selectedJob.location,
      jobSalary: selectedJob.salary,
    };

    const storedApplications = JSON.parse(localStorage.getItem("applications")) || [];
    localStorage.setItem("applications", JSON.stringify([...storedApplications, newApplication]));

    alert("Application submitted successfully!");
    setSelectedJob(null);
  };

  return (
    <section className={styles.jobsContainer}>
      <h2>All Jobs</h2>
      <div className={styles.jobList}>
        {jobs.map((job) => (
          <div key={job.id} className={styles.jobCard}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
            {user.role === "Job Seeker" ? (
              <button onClick={() => handleApply(job)} className="Button">
                Apply
              </button>
            ) : null}
          </div>
        ))}
      </div>

      {selectedJob && (
        <div className={styles.applyFormContainer}>
          <h3>Apply for {selectedJob.title}</h3>
          <form className={styles.applyForm} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={applicationDetails.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={applicationDetails.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={applicationDetails.phone}
              onChange={handleChange}
              required
            />
            <input
              type="file"
              name="cv"
              onChange={handleChange}
              required
            />
            <button type="submit" className={styles.submitButton}>Submit</button>
          </form>
          <button onClick={() => setSelectedJob(null)} className={styles.cancelButton}>
            Cancel
          </button>
        </div>
      )}
    </section>
  );
};

export default AllJobs;
