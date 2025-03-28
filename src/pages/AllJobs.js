// import React, { useEffect, useState } from "react";

// const AllJobs = () => {
//   const [jobs, setJobs] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       setLoading(true);
//       setError("");

//       const accessToken = JSON.parse(localStorage.getItem("accessToken"));
//       const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
//       const employerId = loggedInUser?._id; // Extract employer ID

//       if (!accessToken || !employerId) {
//         setError("Unauthorized! Please log in again.");
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await fetch(
//           "http://192.168.250.1:4000/api/v1/emr/job",
//           {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${accessToken}`,
//             },
//           }
//         );

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || "Failed to fetch jobs");
//         }

//         const data = await response.json();
//         console.log("API Response:", data);

//         // Filter jobs where the owner matches the logged-in employer ID
//         const userJobs = data.data.myApplications.filter(
//           (job) => job.owner === employerId
//         );
//         setJobs(userJobs);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobs();
//   }, []);

//   // Internal styles object for better organization
//   const styles = {
//     container: {
//       padding: "20px",
//       fontFamily: "Arial, sans-serif",
//       backgroundColor: "#f4f4f4",
//       minHeight: "100vh",
//     },
//     heading: {
//       color: "#333",
//       marginBottom: "20px",
//       textAlign: "center",
//     },
//     loading: {
//       textAlign: "center",
//       marginTop: "20px",
//       color: "#777",
//     },
//     error: {
//       color: "#dc3545",
//       textAlign: "center",
//       marginTop: "20px",
//     },
//     jobsContainer: {
//       display: "grid",
//       gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//       gap: "20px",
//     },
//     card: {
//       backgroundColor: "#fff",
//       borderRadius: "8px",
//       boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//       padding: "15px",
//       border: "1px solid #e0e0e0",
//       transition: "transform 0.2s ease-in-out",
//     },
//     cardHover: {
//       transform: "scale(1.02)",
//     },
//     jobTitle: {
//       color: "#007bff",
//       marginBottom: "10px",
//       fontSize: "1.2rem",
//     },
//     jobDescription: {
//       color: "#555",
//       marginBottom: "10px",
//       fontSize: "0.9rem",
//       lineHeight: "1.4",
//     },
//     jobInfo: {
//       color: "#777",
//       fontSize: "0.85rem",
//       marginBottom: "5px",
//     },
//     noJobs: {
//       textAlign: "center",
//       marginTop: "20px",
//       color: "#555",
//     },
//   };

//   return (
//     <section style={styles.container}>
//       <h2 style={styles.heading}>Your Posted Jobs</h2>
//       {loading && <p style={styles.loading}>Loading jobs...</p>}
//       {error && <p style={styles.error}>{error}</p>}
//       <div style={styles.jobsContainer}>
//         {jobs.length > 0 ? (
//           jobs.map((job) => (
//             <div
//               key={job._id}
//               style={{ ...styles.card, ":hover": styles.cardHover }} // Basic hover effect (can be improved with CSS-in-JS libraries)
//             >
//               <h3 style={styles.jobTitle}>{job.title}</h3>
//               <p style={styles.jobDescription}>{job.description}</p>
//               <p style={styles.jobInfo}>
//                 <strong>Location:</strong> {job.location}
//               </p>
//               <p style={styles.jobInfo}>
//                 <strong>Salary Range:</strong> {job.salaryRange}
//               </p>
//               <p style={styles.jobInfo}>
//                 <strong>Type:</strong> {job.jobType}
//               </p>
//               {/* You can add more details or actions here */}
//             </div>
//           ))
//         ) : (
//           <p style={styles.noJobs}>No jobs found.</p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default AllJobs;

// // import React, { useEffect, useState } from "react";

// // const AllJobs = () => {
// //   const [jobs, setJobs] = useState([]);
// //   const [selectedJob, setSelectedJob] = useState(null);
// //   const [error, setError] = useState("");
// //   const [loading, setLoading] = useState(true);
// //   const [updating, setUpdating] = useState(false);
// //   const [bidAmount, setBidAmount] = useState("");

// //   const accessToken = JSON.parse(localStorage.getItem("accessToken"));
// //   const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
// //   const employerId = loggedInUser?._id;

// //   useEffect(() => {
// //     const fetchJobs = async () => {
// //       setLoading(true);
// //       setError("");

// //       if (!accessToken || !employerId) {
// //         setError("Unauthorized! Please log in again.");
// //         setLoading(false);
// //         return;
// //       }

// //       try {
// //         const response = await fetch(
// //           "http://192.168.250.1:4000/api/v1/emr/job",
// //           {
// //             method: "GET",
// //             headers: {
// //               "Content-Type": "application/json",
// //               Authorization: `Bearer ${accessToken}`,
// //             },
// //           }
// //         );

// //         if (!response.ok) {
// //           throw new Error("Failed to fetch jobs");
// //         }

// //         const data = await response.json();
// //         const userJobs = data.data.myApplications.filter(
// //           (job) => job.owner === employerId
// //         );
// //         setJobs(userJobs);
// //       } catch (err) {
// //         setError(err.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchJobs();
// //   }, []);

// //   const handleJobClick = async (jobId) => {
// //     setLoading(true);
// //     try {
// //       const response = await fetch(
// //         `http://192.168.250.1:4000/api/v1/emr/job/${jobId}`,
// //         {
// //           method: "GET",
// //           headers: {
// //             "Content-Type": "application/json",
// //             Authorization: `Bearer ${accessToken}`,
// //           },
// //         }
// //       );

// //       if (!response.ok) {
// //         throw new Error("Failed to fetch job details");
// //       }

// //       const data = await response.json();
// //       setSelectedJob(data.data);
// //     } catch (error) {
// //       setError(error.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleUpdateApplication = async () => {
// //     if (!bidAmount) {
// //       alert("Please enter a bid amount");
// //       return;
// //     }

// //     setUpdating(true);
// //     try {
// //       const response = await fetch(
// //         `http://192.168.250.1:4000/api/v1/emr/job/update/${selectedJob._id}`,
// //         {
// //           method: "PATCH",
// //           headers: {
// //             "Content-Type": "application/json",
// //             Authorization: `Bearer ${accessToken}`,
// //           },
// //           body: JSON.stringify({ bid: bidAmount }),
// //         }
// //       );

// //       if (!response.ok) {
// //         throw new Error("Failed to update job application");
// //       }

// //       alert("Application updated successfully!");
// //     } catch (error) {
// //       setError(error.message);
// //     } finally {
// //       setUpdating(false);
// //     }
// //   };

// //   const handleToggleActive = async () => {
// //     setUpdating(true);
// //     try {
// //       const response = await fetch(
// //         `http://192.168.250.1:4000/api/v1/emr/job/toggle/${selectedJob._id}`,
// //         {
// //           method: "PATCH",
// //           headers: {
// //             "Content-Type": "application/json",
// //             Authorization: `Bearer ${accessToken}`,
// //           },
// //         }
// //       );

// //       if (!response.ok) {
// //         throw new Error("Failed to toggle job status");
// //       }

// //       alert("Job status updated successfully!");
// //     } catch (error) {
// //       setError(error.message);
// //     } finally {
// //       setUpdating(false);
// //     }
// //   };

// //   const handleDeleteApplication = async () => {
// //     if (!window.confirm("Are you sure you want to delete this job?")) return;

// //     setUpdating(true);
// //     try {
// //       const response = await fetch(
// //         `http://192.168.250.1:4000/api/v1/emr/job/delete/${selectedJob._id}`,
// //         {
// //           method: "DELETE",
// //           headers: {
// //             "Content-Type": "application/json",
// //             Authorization: `Bearer ${accessToken}`,
// //           },
// //         }
// //       );

// //       if (!response.ok) {
// //         throw new Error("Failed to delete job application");
// //       }

// //       alert("Job deleted successfully!");
// //       setJobs(jobs.filter((job) => job._id !== selectedJob._id));
// //       setSelectedJob(null);
// //     } catch (error) {
// //       setError(error.message);
// //     } finally {
// //       setUpdating(false);
// //     }
// //   };

// //   return (
// //     <section style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
// //       <h2>Your Posted Jobs</h2>
// //       {loading && <p>Loading jobs...</p>}
// //       {error && <p style={{ color: "red" }}>{error}</p>}

// //       <div
// //         style={{
// //           display: "grid",
// //           gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
// //           gap: "20px",
// //         }}
// //       >
// //         {jobs.length > 0 ? (
// //           jobs.map((job) => (
// //             <div
// //               key={job._id}
// //               style={{
// //                 padding: "15px",
// //                 background: "#fff",
// //                 borderRadius: "8px",
// //                 cursor: "pointer",
// //               }}
// //               onClick={() => handleJobClick(job._id)}
// //             >
// //               <h3>{job.title}</h3>
// //               <p>{job.description}</p>
// //               <p>
// //                 <strong>Location:</strong> {job.location}
// //               </p>
// //               <p>
// //                 <strong>Salary:</strong> {job.salaryRange}
// //               </p>
// //               <p>
// //                 <strong>Type:</strong> {job.jobType}
// //               </p>
// //             </div>
// //           ))
// //         ) : (
// //           <p>No jobs found.</p>
// //         )}
// //       </div>

// //       {selectedJob && (
// //         <div
// //           style={{
// //             marginTop: "20px",
// //             padding: "15px",
// //             background: "#eef",
// //             borderRadius: "8px",
// //           }}
// //         >
// //           <h2>Job Details</h2>
// //           <p>
// //             <strong>Title:</strong> {selectedJob.title}
// //           </p>
// //           <p>
// //             <strong>Description:</strong> {selectedJob.description}
// //           </p>
// //           <p>
// //             <strong>Location:</strong> {selectedJob.location}
// //           </p>
// //           <p>
// //             <strong>Salary:</strong> {selectedJob.salaryRange}
// //           </p>
// //           <p>
// //             <strong>Type:</strong> {selectedJob.jobType}
// //           </p>
// //           <p>
// //             <strong>Active:</strong> {selectedJob.active ? "Yes" : "No"}
// //           </p>

// //           <div>
// //             <label>Bid Amount:</label>
// //             <input
// //               type="number"
// //               value={bidAmount}
// //               onChange={(e) => setBidAmount(e.target.value)}
// //               style={{ marginLeft: "10px" }}
// //             />
// //             <button onClick={handleUpdateApplication} disabled={updating}>
// //               {updating ? "Updating..." : "Update Application"}
// //             </button>
// //           </div>

// //           <button onClick={handleToggleActive} disabled={updating}>
// //             {selectedJob.active ? "Deactivate" : "Activate"} Job
// //           </button>

// //           <button
// //             onClick={handleDeleteApplication}
// //             disabled={updating}
// //             style={{ background: "red", color: "#fff" }}
// //           >
// //             Delete Job
// //           </button>
// //         </div>
// //       )}
// //     </section>
// //   );
// // };

// // export default AllJobs;
//--------------------------------------------------------------------------------------
// import React, { useEffect, useState } from "react";

// const AllJobs = () => {
//   const [jobs, setJobs] = useState([]);
//   const [selectedJob, setSelectedJob] = useState(null);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [updating, setUpdating] = useState(false);
//   const [bidAmount, setBidAmount] = useState("");

//   const accessToken = JSON.parse(localStorage.getItem("accessToken"));
//   const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
//   const employerId = loggedInUser?._id;

//   useEffect(() => {
//     const fetchJobs = async () => {
//       setLoading(true);
//       setError("");

//       if (!accessToken || !employerId) {
//         setError("Unauthorized! Please log in again.");
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await fetch(
//           "http://192.168.250.1:4000/api/v1/emr/job",
//           {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${accessToken}`,
//             },
//           }
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch jobs");
//         }

//         const data = await response.json();
//         const userJobs = data.data.myApplications.filter(
//           (job) => job.owner === employerId
//         );
//         setJobs(userJobs);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobs();
//   }, []);

//   const handleJobClick = async (jobId) => {
//     setLoading(true);
//     try {
//       const response = await fetch(
//         `http://192.168.250.1:4000/api/v1/emr/job/${jobId}`,
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to fetch job details");
//       }

//       const data = await response.json();
//       setSelectedJob(data.data);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleUpdateApplication = async () => {
//     if (!bidAmount) {
//       alert("Please enter a bid amount");
//       return;
//     }

//     setUpdating(true);
//     try {
//       const response = await fetch(
//         `http://192.168.250.1:4000/api/v1/emr/job/update/${selectedJob._id}`,
//         {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${accessToken}`,
//           },
//           body: JSON.stringify({ bid: bidAmount }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to update job application");
//       }

//       alert("Application updated successfully!");
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setUpdating(false);
//     }
//   };

//   const handleToggleActive = async () => {
//     setUpdating(true);
//     try {
//       const response = await fetch(
//         `http://192.168.250.1:4000/api/v1/emr/job/toggle/${selectedJob._id}`,
//         {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to toggle job status");
//       }

//       alert("Job status updated successfully!");
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setUpdating(false);
//     }
//   };

//   const handleDeleteApplication = async () => {
//     if (!window.confirm("Are you sure you want to delete this job?")) return;

//     setUpdating(true);
//     try {
//       const response = await fetch(
//         `http://192.168.250.1:4000/api/v1/emr/job/delete/${selectedJob._id}`,
//         {
//           method: "DELETE",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to delete job application");
//       }

//       alert("Job deleted successfully!");
//       setJobs(jobs.filter((job) => job._id !== selectedJob._id));
//       setSelectedJob(null);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setUpdating(false);
//     }
//   };

//   const styles = {
//     container: {
//       padding: "20px",
//       fontFamily: "Arial, sans-serif",
//       backgroundColor: "#f4f4f4",
//       minHeight: "100vh",
//     },
//     heading: {
//       color: "#333",
//       marginBottom: "20px",
//       textAlign: "center",
//     },
//     loading: {
//       textAlign: "center",
//       marginTop: "20px",
//       color: "#777",
//     },
//     error: {
//       color: "#dc3545",
//       textAlign: "center",
//       marginTop: "20px",
//     },
//     jobsContainer: {
//       display: "grid",
//       gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//       gap: "20px",
//     },
//     card: {
//       backgroundColor: "#fff",
//       borderRadius: "8px",
//       boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//       padding: "15px",
//       border: "1px solid #e0e0e0",
//       transition: "transform 0.2s ease-in-out",
//       cursor: "pointer",
//     },
//     cardHover: {
//       transform: "scale(1.02)",
//     },
//     jobTitle: {
//       color: "#007bff",
//       marginBottom: "10px",
//       fontSize: "1.2rem",
//     },
//     jobDescription: {
//       color: "#555",
//       marginBottom: "10px",
//       fontSize: "0.9rem",
//       lineHeight: "1.4",
//     },
//     jobInfo: {
//       color: "#777",
//       fontSize: "0.85rem",
//       marginBottom: "5px",
//     },
//     noJobs: {
//       textAlign: "center",
//       marginTop: "20px",
//       color: "#555",
//     },
//     actionButtons: {
//       marginTop: "10px",
//       display: "flex",
//       gap: "10px",
//     },
//   };

//   return (
//     <section style={styles.container}>
//       <h2 style={styles.heading}>Your Posted Jobs</h2>
//       {loading && <p style={styles.loading}>Loading jobs...</p>}
//       {error && <p style={styles.error}>{error}</p>}

//       {/* Job List */}
//       <div style={styles.jobsContainer}>
//         {jobs.length > 0 ? (
//           jobs.map((job) => (
//             <div
//               key={job._id}
//               style={styles.card}
//               onClick={() => handleJobClick(job._id)}
//             >
//               <h3 style={styles.jobTitle}>{job.title}</h3>
//               <p style={styles.jobDescription}>{job.description}</p>
//               <p style={styles.jobInfo}>
//                 <strong>Location:</strong> {job.location}
//               </p>
//               <p style={styles.jobInfo}>
//                 <strong>Salary Range:</strong> {job.salaryRange}
//               </p>
//               <p style={styles.jobInfo}>
//                 <strong>Type:</strong> {job.jobType}
//               </p>
//             </div>
//           ))
//         ) : (
//           <p style={styles.noJobs}>No jobs found.</p>
//         )}
//       </div>

//       {/* Selected Job Details */}
//       {selectedJob && (
//         <div
//           style={{
//             marginTop: "30px",
//             padding: "20px",
//             background: "#fff",
//             borderRadius: "8px",
//             boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//           }}
//         >
//           <h2>{selectedJob.title}</h2>
//           <p>
//             <strong>Description:</strong> {selectedJob.description}
//           </p>
//           <p>
//             <strong>Location:</strong> {selectedJob.location}
//           </p>
//           <p>
//             <strong>Salary Range:</strong> {selectedJob.salaryRange}
//           </p>
//           <p>
//             <strong>Job Type:</strong> {selectedJob.jobType}
//           </p>
//           <p>
//             <strong>Status:</strong>{" "}
//             {selectedJob.isActive ? "Active" : "Inactive"}
//           </p>

//           {/* Actions */}
//           <div style={styles.actionButtons}>
//             <button onClick={handleToggleActive} disabled={updating}>
//               {selectedJob.isActive ? "Deactivate" : "Activate"}
//             </button>
//             <button onClick={handleDeleteApplication} disabled={updating}>
//               Delete Job
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default AllJobs;
// //-------------------------------------------------------------------------------------------

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const employerId = loggedInUser?._id;

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError("");

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
          throw new Error("Failed to fetch jobs");
        }

        const data = await response.json();
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

  const handleJobClick = (jobId) => {
    navigate(`/job/${jobId}`);
  };

  return (
    <section
      style={{
        padding: "20px",
        backgroundColor: "#eef2f3",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>
        Your Posted Jobs
      </h2>
      {loading && <p style={{ textAlign: "center" }}>Loading jobs...</p>}
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div
              key={job._id}
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                cursor: "pointer",
                borderRadius: "10px",
                border: "1px solid #ddd",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                transition: "transform 0.2s ease-in-out, box-shadow 0.2s",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
              onClick={() => handleJobClick(job._id)}
            >
              <h3 style={{ color: "#007bff", marginBottom: "10px" }}>
                {job.title}
              </h3>
              <p style={{ color: "#555", fontSize: "14px", flex: 1 }}>
                {job.description}
              </p>
              <p>
                <strong>Location:</strong> {job.location}
              </p>
              <p>
                <strong>Salary:</strong> {job.salaryRange}
              </p>
              <p>
                <strong>Type:</strong> {job.jobType}
              </p>

              <FaArrowCircleRight
                style={{
                  position: "absolute",
                  bottom: "15px",
                  right: "15px",
                  color: "#007bff",
                  fontSize: "24px",
                  transition: "transform 0.2s ease-in-out",
                }}
              />
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center" }}>No jobs found.</p>
        )}
      </div>
    </section>
  );
};

export default AllJobs;
