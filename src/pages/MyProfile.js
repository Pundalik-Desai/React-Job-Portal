import React, { useState, useEffect } from "react";

const MyProfile = () => {
  const [userData, setUserData] = useState(null);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUserData = JSON.parse(localStorage.getItem("loggedInUser"));
    console.log("storedUserData", storedUserData);

    if (!storedUserData) {
      alert("Please log in to view your profile.");
      window.location.href = "/login";
      return;
    }

    setUserData(storedUserData);
  }, []);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("Updated user data before storing:", userData);
    localStorage.setItem("loggedInUser", JSON.stringify(userData));
    alert("Profile updated successfully!");
    setEditing(false);
  };

  // Inline Styles
  const styles = {
    profileContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "90vh",
      backgroundColor: "#f5f7fa", // Light gray for better contrast
    },
    profileCard: {
      backgroundColor: "#ffffff",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      maxWidth: "400px",
      width: "100%",
      textAlign: "center",
    },
    profileHeading: {
      fontSize: "24px",
      color: "#333",
      marginBottom: "20px",
    },
    profileField: {
      marginBottom: "15px",
      textAlign: "left",
    },
    label: {
      fontWeight: "bold",
      color: "#444",
      display: "block",
      marginBottom: "5px",
    },
    text: {
      padding: "10px",
      backgroundColor: "#eef2f7",
      borderRadius: "5px",
      color: "#333",
    },
    input: {
      width: "100%",
      padding: "8px",
      borderRadius: "5px",
      border: "1px solid #bbb",
      fontSize: "16px",
    },
    buttonContainer: {
      marginTop: "20px",
      display: "flex",
      justifyContent: "space-between",
    },
    button: {
      flex: 1,
      padding: "10px",
      margin: "5px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
      fontWeight: "bold",
    },
    editButton: {
      backgroundColor: "#0288d1",
      color: "#fff",
    },
    saveButton: {
      backgroundColor: "#388e3c",
      color: "#fff",
    },
    cancelButton: {
      backgroundColor: "#d32f2f",
      color: "#fff",
    },
  };

  return (
    <section style={styles.profileContainer}>
      {!userData ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <div style={styles.profileCard}>
          <h2 style={styles.profileHeading}>My Profile</h2>

          <div style={styles.profileField}>
            <label style={styles.label}>Name:</label>
            {editing ? (
              <input
                style={styles.input}
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
              />
            ) : (
              <p style={styles.text}>{userData.name}</p>
            )}
          </div>

          <div style={styles.profileField}>
            <label style={styles.label}>Email:</label>
            <p style={styles.text}>{userData.email}</p>
          </div>

          <div style={styles.profileField}>
            <label style={styles.label}>Location:</label>
            {editing ? (
              <input
                style={styles.input}
                type="text"
                name="location"
                value={userData.location}
                onChange={handleChange}
              />
            ) : (
              <p style={styles.text}>{userData.location}</p>
            )}
          </div>

          <div style={styles.profileField}>
            <label style={styles.label}>Authority Name:</label>
            {editing ? (
              <input
                style={styles.input}
                type="text"
                name="authorityName"
                value={userData.authorityName}
                onChange={handleChange}
              />
            ) : (
              <p style={styles.text}>{userData.authorityName}</p>
            )}
          </div>

          <div style={styles.buttonContainer}>
            {editing ? (
              <>
                <button
                  style={{ ...styles.button, ...styles.saveButton }}
                  onClick={handleSave}
                >
                  Save
                </button>
                <button
                  style={{ ...styles.button, ...styles.cancelButton }}
                  onClick={() => setEditing(false)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                style={{ ...styles.button, ...styles.editButton }}
                onClick={() => setEditing(true)}
              >
                Edit
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default MyProfile;
