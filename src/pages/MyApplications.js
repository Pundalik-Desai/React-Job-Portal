import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/MyApplications.module.css";

const MyApplications = () => {
  const [applications, setApplications] = useState([]);
  const [editApplication, setEditApplication] = useState(null);
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  useEffect(() => {
    if (!loggedInUser) {
      alert("You need to log in first!");
      navigate("/login");
    }

    const storedApplications = JSON.parse(localStorage.getItem("applications")) || [];
    if (loggedInUser.role === "Job Seeker") {
      const userApplications = storedApplications.filter(
        (application) => application.userId === loggedInUser.id
      );
      setApplications(userApplications);
    } else {
      setApplications(storedApplications);
    }
  }, [loggedInUser, navigate]);

  const handleDelete = (applicationId) => {
    const updatedApplications = applications.filter(
      (application) => application.id !== applicationId
    );
    setApplications(updatedApplications);
    localStorage.setItem("applications", JSON.stringify(updatedApplications));
    alert("Application deleted successfully!");
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    const updatedApplications = applications.map((app) =>
      app.id === editApplication.id ? editApplication : app
    );

    setApplications(updatedApplications);
    localStorage.setItem("applications", JSON.stringify(updatedApplications));
    setEditApplication(null);
    alert("Application updated successfully!");
  };

  return (
    <section className={styles.myApplicationsContainer}>
      <h1>{loggedInUser.role === "Job Seeker" ? "My Applications" : "All Applications"}</h1>

      {applications.length === 0 ? (
        <p className={styles.noApplications}>
          {loggedInUser.role === "Job Seeker"
            ? "You have not applied for any jobs yet."
            : "No job applications found."}
        </p>
      ) : (
        <div className={styles.applicationList}>
          {applications.map((application) => (
            <div key={application.id} className={styles.applicationCard}>
              <h3>{application.jobTitle}</h3>
              <p><strong>Description:</strong> {application.jobDescription}</p>
              <p><strong>Location:</strong> {application.jobLocation}</p>
              <p><strong>Salary:</strong> {application.jobSalary}</p>
              <p><strong>Applied By:</strong> {application.userName}</p>
              {loggedInUser.role === "Job Seeker" && (
                <>
                  <button
                    className={styles.editButton}
                    onClick={() => setEditApplication(application)}
                  >
                    Edit
                  </button>
                  <button
                    className={styles.deleteButton}
                    onClick={() => handleDelete(application.id)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      )}

      {editApplication && (
        <div className={styles.editFormOverlay}>
          <form className={styles.editForm} onSubmit={handleEditSubmit}>
            <h3>Edit Application</h3>
            <input
              type="text"
              value={editApplication.userName}
              onChange={(e) =>
                setEditApplication({ ...editApplication, userName: e.target.value })
              }
              required
            />
            <input
              type="text"
              value={editApplication.phone || ""}
              onChange={(e) =>
                setEditApplication({ ...editApplication, phone: e.target.value })
              }
              required
            />
            <button type="submit" className={styles.saveButton}>
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setEditApplication(null)}
              className={styles.cancelButton}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </section>
  );
};

export default MyApplications;
