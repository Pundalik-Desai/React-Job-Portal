// // import React, { useEffect, useState } from "react";
// // import { useParams, useNavigate } from "react-router-dom";

// // const JobDetails = () => {
// //   const { jobId } = useParams();
// //   const navigate = useNavigate();
// //   const [job, setJob] = useState(null);
// //   const [error, setError] = useState("");
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchJobDetails = async () => {
// //       setLoading(true);
// //       setError("");

// //       const accessToken = localStorage.getItem("accessToken");
// //       if (!accessToken) {
// //         setError("User not authenticated");
// //         setLoading(false);
// //         return;
// //       }

// //       try {
// //         const response = await fetch(
// //           `http://192.168.250.1:4000/api/v1/emr/job/application/${jobId}`,
// //           {
// //             method: "GET",
// //             headers: {
// //               "Content-Type": "application/json",
// //               Authorization: `Bearer ${JSON.parse(accessToken)}`,
// //             },
// //           }
// //         );

// //         if (!response.ok) {
// //           throw new Error("Failed to fetch job details");
// //         }

// //         const result = await response.json();
// //         setJob(result.data?.[0] || null);
// //       } catch (err) {
// //         setError(err.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchJobDetails();
// //   }, [jobId]);

// //   const handleToggleStatus = async () => {
// //     const accessToken = localStorage.getItem("accessToken");
// //     if (!accessToken) {
// //       setError("User not authenticated");
// //       return;
// //     }

// //     try {
// //       const response = await fetch(
// //         `http://192.168.250.1:4000/api/v1/emr/job/toggle/${jobId}`,
// //         {
// //           method: "PATCH",
// //           headers: {
// //             "Content-Type": "application/json",
// //             Authorization: `Bearer ${JSON.parse(accessToken)}`,
// //           },
// //         }
// //       );
// //       if (!response.ok) {
// //         throw new Error("Failed to toggle job status");
// //       }
// //       const result = await response.json();
// //       setJob(result.data);
// //     } catch (err) {
// //       setError(err.message);
// //     }
// //   };

// //   const handleDelete = async () => {
// //     if (!window.confirm("Are you sure you want to delete this job?")) return;

// //     const accessToken = localStorage.getItem("accessToken");
// //     if (!accessToken) {
// //       setError("User not authenticated");
// //       return;
// //     }

// //     try {
// //       const response = await fetch(
// //         `http://192.168.250.1:4000/api/v1/emr/job/${jobId}`,
// //         {
// //           method: "DELETE",
// //           headers: {
// //             "Content-Type": "application/json",
// //             Authorization: `Bearer ${JSON.parse(accessToken)}`,
// //           },
// //         }
// //       );

// //       if (!response.ok) {
// //         throw new Error("Failed to delete job");
// //       }

// //       alert("Job deleted successfully");
// //       navigate("/all-jobs");
// //     } catch (err) {
// //       setError(err.message);
// //     }
// //   };

// //   const handleUpdate = () => {
// //     navigate(`/update-job/${jobId}`);
// //   };

// //   const applications = job?.applications || [];

// //   return (
// //     <div
// //       style={{
// //         padding: "20px",
// //         backgroundColor: "#f4f4f4",
// //         minHeight: "100vh",
// //       }}
// //     >
// //       {loading && <p>Loading job details...</p>}
// //       {error && <p style={{ color: "red" }}>{error}</p>}

// //       {job && (
// //         <div
// //           style={{
// //             backgroundColor: "#fff",
// //             padding: "20px",
// //             borderRadius: "8px",
// //             boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
// //           }}
// //         >
// //           <h2>{job.title}</h2>
// //           <p>
// //             <strong>Company Name:</strong> {job.companyName}
// //           </p>
// //           <p>
// //             <strong>Description:</strong> {job.description}
// //           </p>
// //           <p>
// //             <strong>Openings:</strong> {job.openings}
// //           </p>
// //           <p>
// //             <strong>Location:</strong> {job.location}
// //           </p>
// //           <p>
// //             <strong>Salary Range:</strong> {job.salaryRange}
// //           </p>
// //           <p>
// //             <strong>Job Type:</strong> {job.jobType}
// //           </p>
// //           <p>
// //             <strong>Qualification:</strong> {job.qualification}
// //           </p>
// //           <p>
// //             <strong>Job Hours:</strong> {job.jobHours}
// //           </p>
// //           <p>
// //             <strong>Instructions:</strong> {job.instructions}
// //           </p>
// //           <p>
// //             <strong>Contact Info:</strong> {job.contactInfo}
// //           </p>
// //           <p>
// //             <strong>Close Date:</strong>{" "}
// //             {new Date(job.closeDate || "").toLocaleDateString()}
// //           </p>
// //           <p>
// //             <strong>Applications Received:</strong> {applications.length}
// //           </p>

// //           <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
// //             <p style={{ margin: 0 }}>
// //               <strong>Status:</strong> {job.active ? "Active" : "Inactive"}
// //             </p>
// //             <button
// //               onClick={handleToggleStatus}
// //               disabled={loading}
// //               style={{
// //                 padding: "10px",
// //                 backgroundColor: job.active ? "red" : "green",
// //                 color: "white",
// //                 border: "none",
// //                 borderRadius: "5px",
// //                 cursor: "pointer",
// //                 opacity: loading ? 0.6 : 1,
// //               }}
// //             >
// //               {loading
// //                 ? "Processing..."
// //                 : job.active
// //                 ? "Deactivate"
// //                 : "Activate"}
// //             </button>
// //           </div>

// //           <button
// //             onClick={handleUpdate}
// //             style={{
// //               marginRight: "10px",
// //               padding: "10px",
// //               backgroundColor: "blue",
// //               color: "white",
// //               border: "none",
// //               borderRadius: "5px",
// //               cursor: "pointer",
// //             }}
// //           >
// //             Update
// //           </button>
// //           <button
// //             onClick={handleDelete}
// //             style={{
// //               padding: "10px",
// //               backgroundColor: "red",
// //               color: "white",
// //               border: "none",
// //               borderRadius: "5px",
// //               cursor: "pointer",
// //             }}
// //           >
// //             Delete
// //           </button>
// //         </div>
// //       )}

// //       <section
// //         style={{
// //           padding: "20px",
// //           backgroundColor: "#f9f9f9",
// //           borderRadius: "10px",
// //         }}
// //       >
// //         <h3>Job Applications</h3>
// //         {applications.length === 0 ? (
// //           <p>No applications received yet.</p>
// //         ) : (
// //           <div
// //             style={{
// //               display: "grid",
// //               gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
// //               gap: "20px",
// //             }}
// //           >
// //             {applications.map((app) => (
// //               <div
// //                 key={app._id}
// //                 onClick={() => navigate(`/job-application/${app._id}`)}
// //                 style={{
// //                   backgroundColor: "#fff",
// //                   padding: "15px",
// //                   borderRadius: "8px",
// //                   boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
// //                   cursor: "pointer",
// //                 }}
// //               >
// //                 <h4>
// //                   {app.employees?.[0]?.fName || "Unknown"}{" "}
// //                   {app.employees?.[0]?.lName || ""}
// //                 </h4>
// //                 <p>
// //                   <strong>Phone:</strong> {app.employees?.[0]?.phone || "N/A"}
// //                 </p>
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //         <div>
// //           <h3>Shortlisted Applications</h3>

// //           <p>No Shortlisted Applications yet.</p>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default JobDetails;

// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const JobDetails = () => {
//   const { jobId } = useParams();
//   const navigate = useNavigate();
//   const [job, setJob] = useState(null);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchJobDetails = async () => {
//       setLoading(true);
//       setError("");
//       const accessToken = localStorage.getItem("accessToken");
//       if (!accessToken) {
//         setError("User not authenticated");
//         setLoading(false);
//         return;
//       }
//       try {
//         const response = await fetch(
//           `http://192.168.250.1:4000/api/v1/emr/job/application/${jobId}`,
//           {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${JSON.parse(accessToken)}`,
//             },
//           }
//         );
//         if (!response.ok) throw new Error("Failed to fetch job details");
//         const result = await response.json();
//         setJob(result.data?.[0] || null);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchJobDetails();
//   }, [jobId]);

//   return (
//     <div
//       style={{
//         padding: "20px",
//         backgroundColor: "#f4f4f4",
//         minHeight: "100vh",
//       }}
//     >
//       {loading && <p>Loading job details...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {job && (
//         <div
//           style={{
//             maxWidth: "800px",
//             margin: "auto",
//             backgroundColor: "#fff",
//             padding: "20px",
//             borderRadius: "8px",
//             boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//           }}
//         >
//           <h2 style={{ textAlign: "center", color: "#333" }}>{job.title}</h2>
//           <form style={{ display: "grid", gap: "10px" }}>
//             {Object.entries({
//               "Company Name": job.companyName,
//               Description: job.description,
//               Openings: job.openings,
//               Location: job.location,
//               "Salary Range": job.salaryRange,
//               "Job Type": job.jobType,
//               Qualification: job.qualification,
//               "Job Hours": job.jobHours,
//               Instructions: job.instructions,
//               "Contact Info": job.contactInfo,
//               "Close Date": new Date(job.closeDate || "").toLocaleDateString(),
//             }).map(([label, value]) => (
//               <div
//                 key={label}
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   fontSize: "16px",
//                 }}
//               >
//                 <strong>{label}:</strong>
//                 <span>{value}</span>
//               </div>
//             ))}
//           </form>
//           <div
//             style={{
//               marginTop: "20px",
//               display: "flex",
//               gap: "10px",
//               justifyContent: "center",
//             }}
//           >
//             <button
//               style={{
//                 padding: "10px",
//                 backgroundColor: "blue",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "5px",
//               }}
//               onClick={() => navigate(`/update-job/${jobId}`)}
//             >
//               Update
//             </button>
//             <button
//               style={{
//                 padding: "10px",
//                 backgroundColor: "red",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "5px",
//               }}
//               onClick={() =>
//                 window.confirm("Are you sure?") && navigate("/all-jobs")
//               }
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       )}
//       <section
//         style={{
//           marginTop: "20px",
//           padding: "20px",
//           backgroundColor: "#fff",
//           borderRadius: "8px",
//           boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//         }}
//       >
//         <h3>Job Applications</h3>
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
//             gap: "20px",
//           }}
//         >
//           {job?.applications?.map((app) => (
//             <div
//               key={app._id}
//               style={{
//                 backgroundColor: "#f9f9f9",
//                 padding: "15px",
//                 borderRadius: "8px",
//                 boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//                 cursor: "pointer",
//               }}
//             >
//               <h4>
//                 {app.employees?.[0]?.fName || "Unknown"}{" "}
//                 {app.employees?.[0]?.lName || ""}
//               </h4>
//               <p>
//                 <strong>Phone:</strong> {app.employees?.[0]?.phone || "N/A"}
//               </p>
//             </div>
//           )) || <p>No applications received yet.</p>}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default JobDetails;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa"; // Import the icon
const JobDetails = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const primaryColor = "#007bff"; // Consistent color for navbar, login, register

  useEffect(() => {
    const fetchJobDetails = async () => {
      setLoading(true);
      setError("");

      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        setError("User not authenticated");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `http://192.168.250.1:4000/api/v1/emr/job/application/${jobId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${JSON.parse(accessToken)}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch job details");
        }

        const result = await response.json();
        setJob(result.data?.[0] || null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  const handleToggleStatus = async () => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      setError("User not authenticated");
      return;
    }

    try {
      const response = await fetch(
        `http://192.168.250.1:4000/api/v1/emr/job/toggle/${jobId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(accessToken)}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to toggle job status");
      }
      const result = await response.json();
      setJob(result.data);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this job?")) return;

    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      setError("User not authenticated");
      return;
    }

    try {
      const response = await fetch(
        `http://192.168.250.1:4000/api/v1/emr/job/${jobId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(accessToken)}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete job");
      }

      alert("Job deleted successfully");
      navigate("/all-jobs");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleUpdate = () => {
    navigate(`/update-job/${jobId}`);
  };

  const applications = job?.applications || [];

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f5f7fa",
        minHeight: "100vh",
      }}
    >
      {/* Internal Styling */}
      <style>
        {`
          h2 {
            color: ${primaryColor};
            margin-bottom: 20px;
            font-size: 28px;
          }
          h3 {
            color: ${primaryColor};
            margin: 20px 0;
            font-size: 22px;
          }
          .field-label {
            font-weight: bold;
            color: #333;
            margin-right: 10px;
          }
          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(0,0,0,0.15);
            transition: all 0.3s ease;
          }
        `}
      </style>

      {loading && <p style={{ color: "#555" }}>Loading job details...</p>}
      {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}

      {job && (
        <div
          style={{
            backgroundColor: "#fff",
            padding: "25px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <h2>{job.title}</h2>
          <div
            style={{
              display: "grid",
              gap: "15px",
              fontSize: "16px",
              color: "#555",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className="field-label">Company Name:</span>
              <span>{job.companyName}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className="field-label">Description:</span>
              <span>{job.description}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className="field-label">Openings:</span>
              <span>{job.openings}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className="field-label">Location:</span>
              <span>{job.location}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className="field-label">Salary Range:</span>
              <span>{job.salaryRange}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className="field-label">Job Type:</span>
              <span>{job.jobType}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className="field-label">Qualification:</span>
              <span>{job.qualification}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className="field-label">Job Hours:</span>
              <span>{job.jobHours}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className="field-label">Instructions:</span>
              <span>{job.instructions}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className="field-label">Contact Info:</span>
              <span>{job.contactInfo}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className="field-label">Close Date:</span>
              <span>{new Date(job.closeDate || "").toLocaleDateString()}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className="field-label">Applications Received:</span>
              <span>{applications.length}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <span className="field-label">Status:</span>
              <span>{job.active ? "Active" : "Inactive"}</span>
              <button
                onClick={handleToggleStatus}
                disabled={loading}
                style={{
                  padding: "8px 15px",
                  backgroundColor: job.active ? "red" : primaryColor,
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  opacity: loading ? 0.6 : 1,
                  fontSize: "14px",
                }}
              >
                {loading
                  ? "Processing..."
                  : job.active
                  ? "Deactivate"
                  : "Activate"}
              </button>
            </div>
          </div>

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              gap: "10px",
            }}
          >
            <button
              onClick={handleUpdate}
              style={{
                padding: "10px 20px",
                backgroundColor: primaryColor,
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Update
            </button>
            <button
              onClick={handleDelete}
              style={{
                padding: "10px 20px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Delete
            </button>
          </div>
        </div>
      )}

      <section
        style={{
          padding: "25px",
          backgroundColor: "#f9f9f9",
          borderRadius: "10px",
          marginTop: "30px",
          maxWidth: "1200px",
          margin: "30px auto",
        }}
      >
        <h3>Job Applications</h3>
        {applications.length === 0 ? (
          <p style={{ color: "#555" }}>No applications received yet.</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {applications.map((app) => (
              <div
                key={app._id}
                onClick={() => navigate(`/job-application/${app._id}`)}
                className="card"
                style={{
                  backgroundColor: "#fff",
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                  cursor: "pointer",
                }}
              >
                <h4
                  style={{
                    color: primaryColor,
                    marginBottom: "10px",
                    fontSize: "18px",
                  }}
                >
                  {app.employees?.[0]?.fName || "Unknown"}{" "}
                  {app.employees?.[0]?.lName || ""}
                </h4>
                <p style={{ margin: "5px 0", color: "#555" }}>
                  <strong>Phone:</strong> {app.employees?.[0]?.phone || "N/A"}
                </p>
                {/* <FaArrowCircleRight
                  className="arrow-icon" // Class for hover effect
                  style={{
                    position: "absolute",
                    bottom: "15px",
                    right: "15px",
                    color: "#007bff",
                    fontSize: "24px",
                    transition: "transform 0.2s ease-in-out",
                  }}
                /> */}
              </div>
            ))}
          </div>
        )}

        <div style={{ marginTop: "30px" }}>
          <h3>Shortlisted Applications</h3>
          <p style={{ color: "#555" }}>No shortlisted applications yet.</p>
          {/* Placeholder for shortlisted applications - can be updated later */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {/* Example card for future shortlisted applications */}
            {/* <div
              className="card"
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                cursor: "pointer",
              }}
            >
              <h4 style={{ color: primaryColor, marginBottom: "10px", fontSize: "18px" }}>
                John Doe
              </h4>
              <p style={{ margin: "5px 0", color: "#555" }}>
                <strong>Phone:</strong> 123-456-7890
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobDetails;
