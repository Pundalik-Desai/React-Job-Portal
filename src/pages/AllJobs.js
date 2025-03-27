import React, { useEffect, useState } from "react";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError("");

      const accessToken = JSON.parse(localStorage.getItem("accessToken"));
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      const employerId = loggedInUser?._id; // Extract employer ID

      if (!accessToken || !employerId) {
        setError("Unauthorized! Please log in again.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          "http://192.168.250.1:4000/api/v1/emr/job",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch jobs");
        }

        const data = await response.json();
        console.log("API Response:", data);

        // Filter jobs where the owner matches the logged-in employer ID
        const userJobs = data.data.myApplications.filter(
          (job) => job.owner === employerId
        );
        setJobs(userJobs);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section style={{ padding: "20px" }}>
      <h2>Your Posted Jobs</h2>
      {loading && <p>Loading jobs...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <li
              key={job._id}
              style={{ borderBottom: "1px solid #ddd", padding: "10px 0" }}
            >
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <p>
                <strong>Location:</strong> {job.location}
              </p>
              <p>
                <strong>Salary Range:</strong> {job.salaryRange}
              </p>
              <p>
                <strong>Type:</strong> {job.jobType}
              </p>
            </li>
          ))
        ) : (
          <p>No jobs found.</p>
        )}
      </ul>
    </section>
  );
};

export default AllJobs;
