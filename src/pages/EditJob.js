import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/EditJob.module.css";

const EditJob = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [editedJob, setEditedJob] = useState({
    title: "",
    description: "",
    location: "",
    salary: "",
  });

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser || loggedInUser.role !== "Employer") {
      alert("Access denied! Only employees can access this page.");
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    setJobs(storedJobs);
  }, []);

  const handleEdit = (job) => {
    setSelectedJob(job);
    setEditedJob({ ...job });
  };

  const handleChange = (e) => {
    setEditedJob({ ...editedJob, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();

    const updatedJobs = jobs.map((job) =>
      job.id === selectedJob.id ? { ...selectedJob, ...editedJob } : job
    );

    setJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));

    setSelectedJob(null);
    alert("Job updated successfully!");
  };

  const handleCancel = () => {
    setSelectedJob(null);
  };

  return (
    <section className={styles.editJobContainer}>
      <h1>Edit Jobs</h1>

      {/* Job List */}
      <div className={styles.jobList}>
        {jobs.map((job) => (
          <div key={job.id} className={styles.jobCard}>
            <h3>{job.title}</h3>
            <p><strong>Description:</strong> {job.description}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
            <button
              className="Button"
              onClick={() => handleEdit(job)}
            >
              Edit
            </button>
          </div>
        ))}
      </div>

      {/* Edit Form */}
      {selectedJob && (
        <div className={styles.editFormContainer}>
          <form className={styles.editForm} onSubmit={handleSave}>
            <h2>Edit Job: {selectedJob.title}</h2>
            <input
              type="text"
              name="title"
              value={editedJob.title}
              onChange={handleChange}
              placeholder="Job Title"
              required
            />
            <textarea
              name="description"
              value={editedJob.description}
              onChange={handleChange}
              placeholder="Job Description"
              required
            ></textarea>
            <input
              type="text"
              name="location"
              value={editedJob.location}
              onChange={handleChange}
              placeholder="Job Location"
              required
            />
            <input
              type="text"
              name="salary"
              value={editedJob.salary}
              onChange={handleChange}
              placeholder="Job Salary"
              required
            />
            <div className={styles.formButtons}>
              <button type="submit" className="Button">
                Save
              </button>
              <button
                type="button"
                className={styles.cancelButton}
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
};

export default EditJob;
