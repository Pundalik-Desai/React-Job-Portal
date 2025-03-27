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

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../styles/Login.module.css";

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

    console.log("Submitting credentials:", credentials);

    try {
      console.log("called");
      const response = await axios.post(
        "http://192.168.250.1:4000/api/v1/emr/login",
        credentials,
        {
          timeout: 100000,
        }
      );

      console.log("Response received:", response.data);

      // alert("Login successful");
      const userData = response.data.data.employer;

      localStorage.setItem("loggedInUser", JSON.stringify(userData));
      localStorage.setItem(
        "accessToken",
        JSON.stringify(response.data.data.accessToken)
      );

      console.log(userData);
      // navigate("/application/id");
      navigate("/dashboard");
    } catch (err) {
      console.error("Login Error:", err);
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <section className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className={styles.error}>{error}</p>}
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button className="Button" type="submit">
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
