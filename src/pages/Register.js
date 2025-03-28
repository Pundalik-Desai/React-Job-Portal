// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import styles from "../styles/Register.module.css";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     authorityName: "",
//     email: "",
//     password: "",
//     location: "",
//     subscription: "free",
//     role: "Employer",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://192.168.250.1:4000/api/v1/emr/register",
//         formData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       alert("Registration successful");
//       navigate("/login");
//     } catch (error) {
//       alert(error.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <section className={styles.registerContainer}>
//       <form className={styles.registerForm} onSubmit={handleSubmit}>
//         <h2>Employer Registration</h2>

//         <input
//           className={styles.inputField}
//           name="name"
//           placeholder="Company Name"
//           onChange={handleChange}
//           required
//         />

//         <input
//           className={styles.inputField}
//           name="authorityName"
//           placeholder="Authority Name"
//           onChange={handleChange}
//           required
//         />

//         <input
//           className={styles.inputField}
//           name="email"
//           type="email"
//           placeholder="Email"
//           onChange={handleChange}
//           required
//         />

//         <input
//           className={styles.inputField}
//           name="password"
//           type="password"
//           placeholder="Password"
//           onChange={handleChange}
//           required
//         />

//         <input
//           className={styles.inputField}
//           name="location"
//           placeholder="Location"
//           onChange={handleChange}
//           required
//         />

//         <select
//           className={styles.selectField}
//           name="subscription"
//           onChange={handleChange}
//           value={formData.subscription}
//           required
//         >
//           <option value="free">Free</option>
//           <option value="paid">Paid</option>
//         </select>

//         <button className={styles.button} type="submit">
//           Register
//         </button>
//       </form>
//     </section>
//   );
// };

// export default Register;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    authorityName: "",
    email: "",
    password: "",
    location: "",
    subscription: "free",
    role: "Employer",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://192.168.250.1:4000/api/v1/emr/register",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      alert("Registration successful");
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "90vh",
      background: "linear-gradient(to right, #f0f8ff, #dbe9fa)",
    },
    form: {
      backgroundColor: "#fff",
      padding: "30px",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      width: "400px",
      textAlign: "center",
    },
    input: {
      width: "100%",
      padding: "12px",
      margin: "10px 0",
      borderRadius: "8px",
      border: "1px solid #ccc",
      outline: "none",
    },
    select: {
      width: "100%",
      padding: "12px",
      margin: "10px 0",
      borderRadius: "8px",
      border: "1px solid #ccc",
    },
    button: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#0056b3",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2>Employer Registration</h2>

        <input
          name="name"
          placeholder="Company Name"
          onChange={handleChange}
          style={styles.input}
          required
        />

        <input
          name="authorityName"
          placeholder="Authority Name"
          onChange={handleChange}
          style={styles.input}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          style={styles.input}
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          style={styles.input}
          required
        />

        <input
          name="location"
          placeholder="Location"
          onChange={handleChange}
          style={styles.input}
          required
        />

        <select
          name="subscription"
          onChange={handleChange}
          value={formData.subscription}
          style={styles.select}
          required
        >
          <option value="free">Free</option>
          <option value="paid">Paid</option>
        </select>

        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
