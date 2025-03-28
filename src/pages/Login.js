// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import styles from "../styles/Login.module.css";

// const Login = () => {
//   const [credentials, setCredentials] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     const user = users.find(
//       (u) => u.email === credentials.email && u.password === credentials.password
//     );

//     if (!user) {
//       alert("Invalid credentials");
//       return;
//     }

//     localStorage.setItem("loggedInUser", JSON.stringify(user));
//     navigate("/dashboard");
//   };

//   return (
//     <section className={styles.loginContainer}>
//       <form className={styles.loginForm} onSubmit={handleSubmit}>
//         <h2>Login</h2>
//         <input
//           name="email"
//           type="email"
//           placeholder="Email"
//           onChange={handleChange}
//           required
//         />
//         <input
//           name="password"
//           type="password"
//           placeholder="Password"
//           onChange={handleChange}
//           required
//         />
//         <button className="Button" type="submit">Login</button>

//       </form>
//     </section>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import styles from "../styles/Login.module.css";

// const Login = () => {
//   const [credentials, setCredentials] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     const user = users.find(
//       (u) => u.email === credentials.email && u.password === credentials.password
//     );

//     if (!user) {
//       alert("Invalid credentials");
//       return;
//     }

//     localStorage.setItem("loggedInUser", JSON.stringify(user));
//     navigate("/dashboard");
//   };

//   return (
//     <section className={styles.loginContainer}>
//       <form className={styles.loginForm} onSubmit={handleSubmit}>
//         <h2>Login</h2>
//         <input
//           name="email"
//           type="email"
//           placeholder="Email"
//           onChange={handleChange}
//           required
//         />
//         <input
//           name="password"
//           type="password"
//           placeholder="Password"
//           onChange={handleChange}
//           required
//         />
//         <button className="Button" type="submit">Login</button>

//       </form>
//     </section>
//   );
// };

// export default Login;

//

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "http://192.168.250.1:4000/api/v1/emr/login",
        credentials,
        { timeout: 100000 }
      );

      const userData = response.data.data.employer;
      localStorage.setItem("loggedInUser", JSON.stringify(userData));
      localStorage.setItem(
        "accessToken",
        JSON.stringify(response.data.data.accessToken)
      );

      // navigate("/application/67a0d2407779e8fc9e834a56");
      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(to right, #f0f8ff, #dbe9fa)",
    },
    form: {
      backgroundColor: "#fff",
      padding: "40px",
      borderRadius: "12px",
      boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
      width: "450px", // Increased width
      minHeight: "350px", // Increased height
      textAlign: "center",
    },
    input: {
      width: "100%",
      padding: "14px",
      margin: "12px 0",
      borderRadius: "8px",
      border: "1px solid #ccc",
      outline: "none",
      fontSize: "16px",
    },
    button: {
      width: "100%",
      padding: "14px",
      backgroundColor: "#0056b3",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "18px",
      fontWeight: "bold",
      marginTop: "12px",
      transition: "background 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#003d80",
    },
    error: {
      color: "red",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p style={styles.error}>{error}</p>}
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
