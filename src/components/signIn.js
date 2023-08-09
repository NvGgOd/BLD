import React, { useContext, useState, useEffect } from "react";
// import "../components/signIn.css";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import initializeFirebase from "../Firebase/index";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../Firebase/AuthContext";
import { GoogleButton } from "react-google-button";

const { auth } = initializeFirebase();
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navitage = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("user", userCredential);
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navitage("/appointment");
      })
      .catch((error) => {
        console.log("error", error);
        setError(true);
      });
  };

  const handleGoogleAuth = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navitage("/appointment");
    } catch (error) {
      console.error("Google authentication error:", error);
    }
  };

  return (
    <div
    style={{
      maxWidth: "400px",
      margin: "0 auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      marginTop:"90px",

    }}
  >
    <form onSubmit={handleLogin}>
      <h3 style={{ textAlign: "center", marginBottom: "20px" }}>Đăng nhập</h3>
      <div id="form">
        <label
          htmlFor="email"
          style={{ display: "block", fontWeight: "bold", marginBottom: "8px" }}
        >
          Tài khoản:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginBottom: "10px",
          }}
        />

        <label
          htmlFor="password"
          style={{ display: "block", fontWeight: "bold", marginBottom: "8px" }}
        >
          Mật khẩu:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginBottom: "10px",
          }}
        />

        <button
          className="signIn_button"
          style={{
            display: "block",
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginBottom: "10px",
          }}
        >
          Đăng nhập
        </button>

        <Link
          to="/Register"
          className="signIn_button"
          style={{
            display: "block",
            width: "100%",
            padding: "10px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginBottom: "10px",
            textDecoration: "none",
            textAlign: "center",
          }}
        >
          Đăng ký
        </Link>

        <div style={{ maxWidth: "240px", margin: "auto", padding: "20px" }}>
          <GoogleButton onClick={handleGoogleAuth} />
        </div>
        {error && (
          <span
            className="mess_err"
            style={{ color: "#ff0000", fontSize: "14px", marginTop: "10px" }}
          >
            Wrong email or password
          </span>
        )}
      </div>
    </form>
  </div>
);
};

export default SignIn;