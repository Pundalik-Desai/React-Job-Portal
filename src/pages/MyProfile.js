import React, { useState, useEffect } from "react";
import styles from "../styles/MyProfile.module.css";

const MyProfile = () => {
  const [userData, setUserData] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) {
      setUserData(user);
    } else {
      alert("Please log in to view your profile.");
      window.location.href = "/login"; 
    }
  }, []);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (userData) {
      const allUsers = JSON.parse(localStorage.getItem("users")) || [];
      const updatedUsers = allUsers.map((user) =>
        user.id === userData.id ? userData : user
      );
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      localStorage.setItem("loggedInUser", JSON.stringify(userData));
      alert("Profile updated successfully!");
      setEditing(false);
    }
  };

  return (
    <section className={styles.profileContainer}>
      {userData ? (
        <div className={styles.profileCard}>
          <h2 className={styles.profileHeading}>My Profile</h2>
          <div className={styles.profileField}>
            <label className={styles.label}>Name:</label>
            {editing ? (
              <input
                className={styles.input}
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
              />
            ) : (
              <p className={styles.text}>{userData.name}</p>
            )}
          </div>

          <div className={styles.profileField}>
            <label className={styles.label}>Email:</label>
            {editing ? (
              <input
                className={styles.input}
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
            ) : (
              <p className={styles.text}>{userData.email}</p>
            )}
          </div>

          <div className={styles.profileField}>
            <label className={styles.label}>Password:</label>
            {editing ? (
              <input
                className={styles.input}
                type="text"
                name="password"
                value={userData.password}
                onChange={handleChange}
              />
            ) : (
              <p className={styles.text}>{userData.password}</p>
            )}
          </div>

          <div className={styles.profileField}>
            <label className={styles.label}>Role:</label>
            {editing ? (
              <select
                className={styles.select}
                name="role"
                value={userData.role}
                onChange={handleChange}
              >
                <option value="Job Seeker">Job Seeker</option>
                <option value="Employer">Employer</option>
              </select>
            ) : (
              <p className={styles.text}>{userData.role}</p>
            )}
          </div>

          {/* Buttons */}
          <div className={styles.buttonContainer}>
            {editing ? (
              <>
                <button className={styles.saveButton} onClick={handleSave}>
                  Save
                </button>
                <button
                  className={styles.cancelButton}
                  onClick={() => setEditing(false)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                className={styles.editButton}
                onClick={() => setEditing(true)}
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default MyProfile;
