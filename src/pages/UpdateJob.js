// // import React, { useState, useEffect } from "react";
// // import { useParams, useNavigate } from "react-router-dom";

// // const UpdateJob = () => {
// //   const { jobId } = useParams();
// //   const navigate = useNavigate();
// //   const [jobData, setJobData] = useState({});
// //   const [error, setError] = useState("");
// //   const [loading, setLoading] = useState(true);

// //   const accessToken = JSON.parse(localStorage.getItem("accessToken"));
// //   console.log("accessToken", accessToken);
// //   useEffect(() => {
// //     const fetchJobDetails = async () => {
// //       try {
// //         const response = await fetch(
// //           `http://192.168.250.1:4000/api/v1/emr/job/application/${jobId}`,
// //           {
// //             method: "GET",
// //             headers: {
// //               "Content-Type": "application/json",
// //               Authorization: `Bearer ${accessToken}`,
// //             },
// //           }
// //         );
// //         console.log("response:", response.data);
// //         if (!response.ok) {
// //           throw new Error("Failed to fetch job details");
// //         }

// //         const result = await response.json();
// //         setJobData(result.data[0]);
// //       } catch (err) {
// //         setError(err.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchJobDetails();
// //   }, [jobId, accessToken]);

// //   const handleChange = (e) => {
// //     setJobData({ ...jobData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError("");

// //     try {
// //       const response = await fetch(
// //         `http://192.168.250.1:4000/api/v1/emr/job/${jobId}`,
// //         {
// //           method: "PUT",
// //           headers: {
// //             "Content-Type": "application/json",
// //             Authorization: `Bearer ${accessToken}`,
// //           },
// //           body: JSON.stringify(jobData),
// //         }
// //       );

// //       if (!response.ok) {
// //         throw new Error("Failed to update job");
// //       }

// //       alert("Job updated successfully");
// //       navigate(`/job/${jobId}`);
// //     } catch (err) {
// //       setError(err.message);
// //     }
// //   };

// //   return (
// //     <section
// //       style={{
// //         padding: "20px",
// //         backgroundColor: "#f4f4f4",
// //         minHeight: "100vh",
// //       }}
// //     >
// //       {loading && <p>Loading job details...</p>}
// //       {error && <p style={{ color: "red" }}>{error}</p>}
// //       {!loading && !error && (
// //         <form
// //           onSubmit={handleSubmit}
// //           style={{
// //             backgroundColor: "#fff",
// //             padding: "20px",
// //             borderRadius: "8px",
// //             boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
// //           }}
// //         >
// //           <h2>Update Job</h2>
// //           <label>Title:</label>
// //           <input
// //             type="text"
// //             name="title"
// //             value={jobData.title || ""}
// //             onChange={handleChange}
// //             required
// //           />

// //           <label>Company Name:</label>
// //           <input
// //             type="text"
// //             name="companyName"
// //             value={jobData.companyName || ""}
// //             onChange={handleChange}
// //             required
// //           />

// //           <label>Description:</label>
// //           <textarea
// //             name="description"
// //             value={jobData.description || ""}
// //             onChange={handleChange}
// //             required
// //           />

// //           <label>Openings:</label>
// //           <input
// //             type="number"
// //             name="openings"
// //             value={jobData.openings || ""}
// //             onChange={handleChange}
// //             required
// //           />

// //           <label>Location:</label>
// //           <input
// //             type="text"
// //             name="location"
// //             value={jobData.location || ""}
// //             onChange={handleChange}
// //             required
// //           />

// //           <label>Salary Range:</label>
// //           <input
// //             type="text"
// //             name="salaryRange"
// //             value={jobData.salaryRange || ""}
// //             onChange={handleChange}
// //             required
// //           />

// //           <label>Job Type:</label>
// //           <input
// //             type="text"
// //             name="jobType"
// //             value={jobData.jobType || ""}
// //             onChange={handleChange}
// //             required
// //           />

// //           <label>Qualification:</label>
// //           <input
// //             type="text"
// //             name="qualification"
// //             value={jobData.qualification || ""}
// //             onChange={handleChange}
// //             required
// //           />

// //           <label>Job Hours:</label>
// //           <input
// //             type="text"
// //             name="jobHours"
// //             value={jobData.jobHours || ""}
// //             onChange={handleChange}
// //             required
// //           />

// //           <label>Instructions:</label>
// //           <textarea
// //             name="instructions"
// //             value={jobData.instructions || ""}
// //             onChange={handleChange}
// //             required
// //           />

// //           <label>Contact Info:</label>
// //           <input
// //             type="text"
// //             name="contactInfo"
// //             value={jobData.contactInfo || ""}
// //             onChange={handleChange}
// //             required
// //           />

// //           <label>Close Date:</label>
// //           <input
// //             type="date"
// //             name="closeDate"
// //             value={
// //               jobData.closeDate
// //                 ? new Date(jobData.closeDate).toISOString().split("T")[0]
// //                 : ""
// //             }
// //             onChange={handleChange}
// //             required
// //           />

// //           <label>Status:</label>
// //           <input
// //             type="checkbox"
// //             name="active"
// //             checked={jobData.active}
// //             onChange={() => setJobData({ ...jobData, active: !jobData.active })}
// //           />

// //           <button
// //             type="submit"
// //             style={{
// //               marginTop: "10px",
// //               padding: "10px",
// //               backgroundColor: "green",
// //               color: "white",
// //               border: "none",
// //               borderRadius: "5px",
// //               cursor: "pointer",
// //             }}
// //           >
// //             Update Job
// //           </button>
// //         </form>
// //       )}
// //     </section>
// //   );
// // };

// // export default UpdateJob;

// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const UpdateJob = () => {
//   const { jobId } = useParams();
//   const navigate = useNavigate();
//   const [jobData, setJobData] = useState({});
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);

//   const accessToken = JSON.parse(localStorage.getItem("accessToken"));
//   console.log("accessToken:", accessToken);

//   useEffect(() => {
//     const fetchJobDetails = async () => {
//       try {
//         const response = await fetch(
//           `http://192.168.250.1:4000/api/v1/emr/job/application/${jobId}`,
//           {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${accessToken}`,
//             },
//           }
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch job details");
//         }

//         const result = await response.json();
//         console.log("Fetched Job Data:", result.data[0]); // ✅ Log fetched data
//         setJobData(result.data[0]);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobDetails();
//   }, [jobId, accessToken]);

//   const handleChange = (e) => {
//     setJobData({ ...jobData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       console.log("Updating Job Data:", jobData); // ✅ Log before updating

//       const response = await fetch(
//         `http://192.168.250.1:4000/api/v1/emr/job/${jobId}`,
//         // `http://192.168.250.1:4000/api/v1/emr/job/application/${jobId}`,
//         {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${accessToken}`,
//           },
//           body: JSON.stringify(jobData),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to update job");
//       }

//       const updatedJob = await response.json();
//       console.log("Updated Job Response:", updatedJob); // ✅ Log after updating

//       alert("Job updated successfully");
//       navigate(`/job/${jobId}`);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <section
//       style={{
//         padding: "20px",
//         backgroundColor: "#f4f4f4",
//         minHeight: "100vh",
//       }}
//     >
//       {loading && <p>Loading job details...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {!loading && !error && (
//         <form
//           onSubmit={handleSubmit}
//           style={{
//             backgroundColor: "#fff",
//             padding: "20px",
//             borderRadius: "8px",
//             boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//           }}
//         >
//           <h2>Update Job</h2>
//           <label>Title:</label>
//           <input
//             type="text"
//             name="title"
//             value={jobData.title || ""}
//             onChange={handleChange}
//             required
//           />

//           <label>Company Name:</label>
//           <input
//             type="text"
//             name="companyName"
//             value={jobData.companyName || ""}
//             onChange={handleChange}
//             required
//           />

//           <label>Description:</label>
//           <textarea
//             name="description"
//             value={jobData.description || ""}
//             onChange={handleChange}
//             required
//           />

//           <label>Openings:</label>
//           <input
//             type="number"
//             name="openings"
//             value={jobData.openings || ""}
//             onChange={handleChange}
//             required
//           />

//           <label>Location:</label>
//           <input
//             type="text"
//             name="location"
//             value={jobData.location || ""}
//             onChange={handleChange}
//             required
//           />

//           <label>Salary Range:</label>
//           <input
//             type="text"
//             name="salaryRange"
//             value={jobData.salaryRange || ""}
//             onChange={handleChange}
//             required
//           />

//           <label>Job Type:</label>
//           <input
//             type="text"
//             name="jobType"
//             value={jobData.jobType || ""}
//             onChange={handleChange}
//             required
//           />

//           <label>Qualification:</label>
//           <input
//             type="text"
//             name="qualification"
//             value={jobData.qualification || ""}
//             onChange={handleChange}
//             required
//           />

//           <label>Job Hours:</label>
//           <input
//             type="text"
//             name="jobHours"
//             value={jobData.jobHours || ""}
//             onChange={handleChange}
//             required
//           />

//           <label>Instructions:</label>
//           <textarea
//             name="instructions"
//             value={jobData.instructions || ""}
//             onChange={handleChange}
//             required
//           />

//           <label>Contact Info:</label>
//           <input
//             type="text"
//             name="contactInfo"
//             value={jobData.contactInfo || ""}
//             onChange={handleChange}
//             required
//           />

//           <label>Close Date:</label>
//           <input
//             type="date"
//             name="closeDate"
//             value={
//               jobData.closeDate
//                 ? new Date(jobData.closeDate).toISOString().split("T")[0]
//                 : ""
//             }
//             onChange={handleChange}
//             required
//           />

//           <label>Status:</label>
//           <input
//             type="checkbox"
//             name="active"
//             checked={jobData.active}
//             onChange={() => setJobData({ ...jobData, active: !jobData.active })}
//           />

//           <button
//             type="submit"
//             style={{
//               marginTop: "10px",
//               padding: "10px",
//               backgroundColor: "green",
//               color: "white",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//             }}
//           >
//             Update Job
//           </button>
//         </form>
//       )}
//     </section>
//   );
// };

// export default UpdateJob;

// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const UpdateJob = () => {
//   const { jobId } = useParams();
//   const navigate = useNavigate();
//   const [jobData, setJobData] = useState({});
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);

//   const accessToken = JSON.parse(localStorage.getItem("accessToken"));
//   console.log("accessToken:", accessToken);

//   useEffect(() => {
//     const fetchJobDetails = async () => {
//       try {
//         const response = await fetch(
//           `http://192.168.250.1:4000/api/v1/emr/job/application/${jobId}`,
//           {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${accessToken}`,
//             },
//           }
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch job details");
//         }

//         const result = await response.json();
//         console.log("Fetched Job Data:", result.data[0]); // ✅ Log fetched data
//         setJobData(result.data[0]);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobDetails();
//   }, [jobId, accessToken]);

//   const handleChange = (e) => {
//     setJobData({ ...jobData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       console.log("Updating Job Data:", jobData); // ✅ Log before updating

//       const response = await fetch(
//         `http://192.168.250.1:4000/api/v1/emr/job/${jobId}`,
//         {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${accessToken}`,
//           },
//           body: JSON.stringify(jobData),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to update job");
//       }

//       const updatedJob = await response.json();
//       console.log("Updated Job Response:", updatedJob); // ✅ Log after updating

//       alert("Job updated successfully");
//       navigate(`/job/${jobId}`);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <section
//       style={{
//         padding: "20px",
//         backgroundColor: "#f4f4f4",
//         minHeight: "100vh",
//       }}
//     >
//       {loading && <p>Loading job details...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {!loading && !error && (
//         <form
//           onSubmit={handleSubmit}
//           style={{
//             backgroundColor: "#fff",
//             padding: "20px",
//             borderRadius: "8px",
//             boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//           }}
//         >
//           <h2>Update Job</h2>
//           <label>Title:</label>
//           <input
//             type="text"
//             name="title"
//             value={jobData.title || ""}
//             onChange={handleChange}
//             required
//           />

//           <label>Company Name:</label>
//           <input
//             type="text"
//             name="companyName"
//             value={jobData.companyName || ""}
//             onChange={handleChange}
//             required
//           />

//           <label>Description:</label>
//           <textarea
//             name="description"
//             value={jobData.description || ""}
//             onChange={handleChange}
//             required
//           />

//           <label>Openings:</label>
//           <input
//             type="number"
//             name="openings"
//             value={jobData.openings || ""}
//             onChange={handleChange}
//             required
//           />

//           <label>Location:</label>
//           <input
//             type="text"
//             name="location"
//             value={jobData.location || ""}
//             onChange={handleChange}
//             required
//           />

//           <label>Salary Range:</label>
//           <input
//             type="text"
//             name="salaryRange"
//             value={jobData.salaryRange || ""}
//             onChange={handleChange}
//             required
//           />

//           <label>Job Type:</label>
//           <input
//             type="text"
//             name="jobType"
//             value={jobData.jobType || ""}
//             onChange={handleChange}
//             required
//           />

//           <label>Qualification:</label>
//           <input
//             type="text"
//             name="qualification"
//             value={jobData.qualification || ""}
//             onChange={handleChange}
//             required
//           />

//           <label>Job Hours:</label>
//           <input
//             type="text"
//             name="jobHours"
//             value={jobData.jobHours || ""}
//             onChange={handleChange}
//             required
//           />

//           <label>Instructions:</label>
//           <textarea
//             name="instructions"
//             value={jobData.instructions || ""}
//             onChange={handleChange}
//             required
//           />

//           <label>Contact Info:</label>
//           <input
//             type="text"
//             name="contactInfo"
//             value={jobData.contactInfo || ""}
//             onChange={handleChange}
//             required
//           />

//           <label>Close Date:</label>
//           <input
//             type="date"
//             name="closeDate"
//             value={
//               jobData.closeDate
//                 ? new Date(jobData.closeDate).toISOString().split("T")[0]
//                 : ""
//             }
//             onChange={handleChange}
//             required
//           />

//           <button
//             type="submit"
//             style={{
//               marginTop: "10px",
//               padding: "10px",
//               backgroundColor: "green",
//               color: "white",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//             }}
//           >
//             Update Job
//           </button>
//         </form>
//       )}
//     </section>
//   );
// };

// export default UpdateJob;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateJob = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [jobData, setJobData] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const accessToken = JSON.parse(localStorage.getItem("accessToken"));
  console.log("accessToken:", accessToken);

  const primaryColor = "#007bff"; // Consistent with JobDetails and MyProfile

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(
          `http://192.168.250.1:4000/api/v1/emr/job/application/${jobId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch job details");
        }

        const result = await response.json();
        console.log("Fetched Job Data:", result.data[0]);
        setJobData(result.data[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [jobId, accessToken]);

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      console.log("Updating Job Data:", jobData);

      const response = await fetch(
        `http://192.168.250.1:4000/api/v1/emr/job/${jobId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(jobData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update job");
      }

      const updatedJob = await response.json();
      console.log("Updated Job Response:", updatedJob);

      alert("Job updated successfully");
      navigate(`/job/${jobId}`);
    } catch (err) {
      setError(err.message);
    }
  };

  // Inline Styles inspired by MyProfile and JobDetails
  const styles = {
    container: {
      padding: "20px",
      backgroundColor: "#f5f7fa", // Matching MyProfile background
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
    },
    formCard: {
      backgroundColor: "#ffffff",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)", // Matching MyProfile shadow
      maxWidth: "500px", // Slightly wider than MyProfile, like JobDetails
      width: "100%",
      textAlign: "center",
    },
    heading: {
      fontSize: "24px",
      color: primaryColor, // Matching JobDetails heading
      marginBottom: "20px",
    },
    formField: {
      marginBottom: "15px",
      textAlign: "left",
    },
    label: {
      fontWeight: "bold",
      color: "#444", // Matching MyProfile label
      display: "block",
      marginBottom: "5px",
    },
    input: {
      width: "100%",
      padding: "8px",
      borderRadius: "5px",
      border: "1px solid #bbb", // Matching MyProfile input border
      fontSize: "16px",
      boxSizing: "border-box",
    },
    textarea: {
      width: "100%",
      padding: "8px",
      borderRadius: "5px",
      border: "1px solid #bbb",
      fontSize: "16px",
      minHeight: "80px",
      boxSizing: "border-box",
    },
    button: {
      padding: "10px 20px",
      marginTop: "20px",
      backgroundColor: "#0288d1", // Matching MyProfile edit button
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "16px",
      width: "100%",
    },
  };

  return (
    <section style={styles.container}>
      {/* Internal Styling */}
      <style>
        {`
          h2 {
            color: ${primaryColor};
            font-size: 24px;
            margin-bottom: 20px;
          }
        `}
      </style>

      {loading && <p style={{ color: "#555" }}>Loading job details...</p>}
      {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
      {!loading && !error && (
        <form onSubmit={handleSubmit} style={styles.formCard}>
          <h2 style={styles.heading}>Update Job</h2>

          <div style={styles.formField}>
            <label style={styles.label}>Title:</label>
            <input
              style={styles.input}
              type="text"
              name="title"
              value={jobData.title || ""}
              onChange={handleChange}
              required
            />
          </div>

          <div style={styles.formField}>
            <label style={styles.label}>Company Name:</label>
            <input
              style={styles.input}
              type="text"
              name="companyName"
              value={jobData.companyName || ""}
              onChange={handleChange}
              required
            />
          </div>

          <div style={styles.formField}>
            <label style={styles.label}>Description:</label>
            <textarea
              style={styles.textarea}
              name="description"
              value={jobData.description || ""}
              onChange={handleChange}
              required
            />
          </div>

          <div style={styles.formField}>
            <label style={styles.label}>Openings:</label>
            <input
              style={styles.input}
              type="number"
              name="openings"
              value={jobData.openings || ""}
              onChange={handleChange}
              required
            />
          </div>

          <div style={styles.formField}>
            <label style={styles.label}>Location:</label>
            <input
              style={styles.input}
              type="text"
              name="location"
              value={jobData.location || ""}
              onChange={handleChange}
              required
            />
          </div>

          <div style={styles.formField}>
            <label style={styles.label}>Salary Range:</label>
            <input
              style={styles.input}
              type="text"
              name="salaryRange"
              value={jobData.salaryRange || ""}
              onChange={handleChange}
              required
            />
          </div>

          <div style={styles.formField}>
            <label style={styles.label}>Job Type:</label>
            <input
              style={styles.input}
              type="text"
              name="jobType"
              value={jobData.jobType || ""}
              onChange={handleChange}
              required
            />
          </div>

          <div style={styles.formField}>
            <label style={styles.label}>Qualification:</label>
            <input
              style={styles.input}
              type="text"
              name="qualification"
              value={jobData.qualification || ""}
              onChange={handleChange}
              required
            />
          </div>

          <div style={styles.formField}>
            <label style={styles.label}>Job Hours:</label>
            <input
              style={styles.input}
              type="text"
              name="jobHours"
              value={jobData.jobHours || ""}
              onChange={handleChange}
              required
            />
          </div>

          <div style={styles.formField}>
            <label style={styles.label}>Instructions:</label>
            <textarea
              style={styles.textarea}
              name="instructions"
              value={jobData.instructions || ""}
              onChange={handleChange}
              required
            />
          </div>

          <div style={styles.formField}>
            <label style={styles.label}>Contact Info:</label>
            <input
              style={styles.input}
              type="text"
              name="contactInfo"
              value={jobData.contactInfo || ""}
              onChange={handleChange}
              required
            />
          </div>

          <div style={styles.formField}>
            <label style={styles.label}>Close Date:</label>
            <input
              style={styles.input}
              type="date"
              name="closeDate"
              value={
                jobData.closeDate
                  ? new Date(jobData.closeDate).toISOString().split("T")[0]
                  : ""
              }
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" style={styles.button}>
            Update Job
          </button>
        </form>
      )}
    </section>
  );
};

export default UpdateJob;
