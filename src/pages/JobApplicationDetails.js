import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import axios from "axios";

// Set up the PDF.js worker
//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const JobApplicationDetails = () => {
  const { appId } = useParams();

  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [isShortListed, setIsShortListed] = useState(false);

  // Fetch application data
  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const response = await axios.get(
          `http://192.168.250.1:4000/api/v1/emr/job/application/view/${appId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );

        setApplication(response.data.data.newApplication[0]);
        console.log("id:", response.data.data.newApplication[0]);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch application data");
        setLoading(false);
      }
    };

    if (appId) {
      fetchApplication();
    }
  }, [appId]);

  // Handle PDF load success
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const toggleShortlist = async () => {
    try {
      console.log("hello");
      //   const response = await axios.post(
      //     `http://192.168.250.1:4000/api/v1/emr/job/application/shortlist?appID=${appId}&jobID=${application.jobApplication}`,
      //     {},
      //     {
      //       headers: {
      //         Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      //       },
      //     }
      //   );
      console.log("Access Token:", localStorage.getItem("accessToken"));

      //   const response = await axios.post(
      //     "https://vayun-backend.onrender.com/api/v1/emr/job/application/shortlist",
      //     {},
      //     {
      //       params: {
      //         appID: appId,
      //         jobID: application.jobApplication,
      //       },
      //       headers: {
      //         Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      //       },
      //     }
      //   );
      const response = await axios.post(
        "https://vayun-backend.onrender.com/api/v1/emr/job/application/shortlist",
        {}, // Empty body
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          params: {
            appID: appId,
            jobID: application.jobApplication,
          },
        }
      );

      //   const response = await fetch(
      //     `https://vayun-backend.onrender.com/api/v1/emr/job/application/shortlist?appID=${appId}&jobID=${application.jobApplication}`,
      //     {
      //       method: "POST",
      //       headers: {
      //         Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify({}), // Empty body as per original axios request
      //     }
      //   );

      const data = await response.json();
      console.log(data);

      console.log("hello");
      setIsShortListed((prev) => !prev);
      alert(response.data.message); // Show success message
    } catch (error) {
      alert("Failed to update shortlist status");
    }
  };

  if (loading) return <div style={styles.loading}>Loading...</div>;
  if (error) return <div style={styles.error}>{error}</div>;
  if (!application)
    return <div style={styles.error}>No application data found</div>;

  const owner = application.owner[0];
  const pdfBase64 = `data:${application.pdfData.contentType};base64,${application.pdfData.data}`;

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Application Details</h1>

      {/* Application Info */}
      <div style={styles.section}>
        <h2 style={styles.subHeading}>Application Info</h2>
        <div style={styles.infoGrid}>
          <p style={styles.infoItem}>
            <strong>Application ID:</strong> {application._id}
          </p>
          <p style={styles.infoItem}>
            <strong>Bid:</strong> {application.bid}
          </p>
          <p style={styles.infoItem}>
            <strong>Job Application ID:</strong> {application.jobApplication}
          </p>
          {/* <p style={styles.infoItem}>
            <strong>Shortlisted:</strong>{" "}
            {application.isShortListed ? "Yes" : "No"}
          </p> */}
          <p>
            <strong>Shortlisted:</strong>{" "}
            {application.isShortListed ? "Yes" : "No"}
          </p>
          <button
            onClick={toggleShortlist}
            style={{
              padding: "10px 15px",
              backgroundColor: application.isShortListed ? "red" : "green",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {application.isShortListed ? "Unshortlist" : "Shortlist"}
          </button>

          <p style={styles.infoItem}>
            <strong>Created At:</strong>{" "}
            {new Date(application.createdAt).toLocaleString()}
          </p>
          <p style={styles.infoItem}>
            <strong>Updated At:</strong>{" "}
            {new Date(application.updatedAt).toLocaleString()}
          </p>
        </div>
      </div>

      {/* Owner/Employee Info */}
      <div style={styles.section}>
        <h2 style={styles.subHeading}>Applicant Details</h2>
        <div style={styles.profileCard}>
          <img src={owner.avatar} alt="Avatar" style={styles.avatar} />
          <div style={styles.profileDetails}>
            <p style={styles.infoItem}>
              <strong>Name:</strong> {owner.fName} {owner.lName}
            </p>
            <p style={styles.infoItem}>
              <strong>Email:</strong> {owner.email}
            </p>
            <p style={styles.infoItem}>
              <strong>Phone:</strong> {owner.phone}
            </p>
            <p style={styles.infoItem}>
              <strong>Age:</strong> {owner.age}
            </p>
          </div>
        </div>

        {/* Work Experience */}
        <h3 style={styles.subSubHeading}>Work Experience</h3>
        {owner.workExperience.map((exp) => (
          <p key={exp._id} style={styles.subInfoItem}>
            <strong>Experience:</strong> {exp.yearOfExperience}
          </p>
        ))}

        {/* Location */}
        <h3 style={styles.subSubHeading}>Location</h3>
        {owner.location.map((loc) => (
          <p key={loc._id} style={styles.subInfoItem}>
            <strong>Location:</strong> {loc.subDistrict}, {loc.district},{" "}
            {loc.state}
          </p>
        ))}

        {/* Subscription */}
        <h3 style={styles.subSubHeading}>Subscription</h3>
        {owner.subscription.map((sub) => (
          <p key={sub._id} style={styles.subInfoItem}>
            <strong>Type:</strong> {sub.subscriptionType}
          </p>
        ))}
      </div>

      {/* PDF Viewer */}
      <div style={styles.section}>
        <h2 style={styles.subHeading}>Resume PDF</h2>
        <p style={styles.infoItem}>
          <strong>File Name:</strong> {application.pdfData.name}
        </p>
        <div style={styles.pdfViewer}>
          <div id="pdfContainer">
            <iframe
              title="iframe"
              id="pdfViewer"
              width="100%"
              height="600px"
              src={`data:application/pdf;base64,${[application.pdfData.data]}`}
              style={styles.iframe}
            ></iframe>
          </div>
          {numPages && (
            <p style={styles.pageCount}>Number of Pages: {numPages}</p>
          )}
        </div>
      </div>
    </div>
  );
};

// Enhanced inline styles
const styles = {
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "30px",
    fontFamily: "'Poppins', sans-serif",
    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "600",
    marginBottom: "30px",
    color: "#2c3e50",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  subHeading: {
    fontSize: "22px",
    fontWeight: "500",
    margin: "0 0 15px",
    color: "#34495e",
    borderBottom: "2px solid #3498db",
    paddingBottom: "5px",
  },
  subSubHeading: {
    fontSize: "18px",
    fontWeight: "500",
    margin: "15px 0 10px",
    color: "#7f8c8d",
  },
  section: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "25px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
      transform: "translateY(-5px)",
    },
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "15px",
  },
  infoItem: {
    fontSize: "16px",
    color: "#2c3e50",
    margin: "5px 0",
    padding: "8px",
    backgroundColor: "#ecf0f1",
    borderRadius: "6px",
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor: "#dfe6e9",
    },
  },
  subInfoItem: {
    fontSize: "15px",
    color: "#34495e",
    margin: "5px 0",
    padding: "6px 10px",
    backgroundColor: "#f1f2f6",
    borderRadius: "4px",
  },
  profileCard: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    padding: "15px",
    background: "linear-gradient(90deg, #3498db 0%, #2980b9 100%)",
    borderRadius: "10px",
    color: "#fff",
    marginBottom: "20px",
  },
  avatar: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    border: "4px solid #fff",
    objectFit: "cover",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
  },
  profileDetails: {
    flex: 1,
  },
  pdfViewer: {
    border: "2px solid #3498db",
    borderRadius: "8px",
    padding: "15px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
    maxHeight: "650px",
    overflowY: "auto",
  },
  iframe: {
    border: "none",
    borderRadius: "6px",
  },
  pageCount: {
    fontSize: "14px",
    color: "#7f8c8d",
    marginTop: "10px",
    textAlign: "center",
  },
  loading: {
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "500",
    padding: "40px",
    color: "#3498db",
    backgroundColor: "#fff",
    borderRadius: "12px",
    margin: "30px auto",
    maxWidth: "400px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  error: {
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "500",
    padding: "40px",
    color: "#e74c3c",
    backgroundColor: "#fff",
    borderRadius: "12px",
    margin: "30px auto",
    maxWidth: "400px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
};

export default JobApplicationDetails;
