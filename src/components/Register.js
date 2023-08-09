import { useState, useEffect, useRef } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../components/Register.css";
import initializeFirebase from "../Firebase/index";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

const USER_REGEX = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const { auth } = initializeFirebase();
const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [ValidName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [ValidPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [ValidMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const gmail = e.target.username.value; // Changed 'gmail' to 'username'
    const password = e.target.password.value;
    console.log("gmail", gmail);
    console.log("password", password);

    try {
      // Create user with the provided email and password
      await createUserWithEmailAndPassword(auth, gmail, password); // Remove the @gmail.com
      console.log("User created successfully!");
      setSuccess(true);
    } catch (error) {
      console.error("Error creating user:", error);
      setErrMsg("Error creating user. Please try again.");
    }
  };
  return (
    <>
      {success ? (
        <section
          className="register_title"
          style={{
            maxWidth: "390px",
            margin: "0 auto",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1>Success!</h1>
          <p>
            You have successfully registered. <Link to="/signIn">Sign In</Link>
          </p>
        </section>
      ) : (
        <section
          className="register_title"
          style={{
            maxWidth: "390px",
            margin: "0 auto",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          ></p>
          <h1>Register</h1>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label
              htmlFor="username"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              Username:
              <span className={ValidName ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className={ValidName || !user ? "hide" : "invalid"}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </label>
            <input
              type="email"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              required
              aria-invalid={ValidName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
              style={{
                padding: "10px",
                fontSize: "16px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
            <p
              id="uidnote"
              className={
                userFocus && user && !ValidName ? "instruction" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Your username must be an Email.
            </p>

            <label
              htmlFor="password"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              Password:
              <span className={ValidPwd ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className={ValidPwd || !pwd ? "hide" : "invalid"}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              required
              aria-invalid={ValidPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
              style={{
                padding: "10px",
                fontSize: "16px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />

            <p
              id="pwdnote"
              className={
                pwdFocus && pwd && !ValidPwd ? "instruction" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Your password must be 8 to 24 characters long and contain at least
              one lowercase letter, one uppercase letter, one digit, and one
              special character: !, @, #, $, or %.
            </p>

            <label
              htmlFor="confirm_pwd"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              Confirm Password:
              <span className={ValidMatch && matchPwd ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className={ValidMatch || !matchPwd ? "hide" : "invalid"}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </label>
            <input
              type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              required
              aria-invalid={ValidMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
              style={{
                padding: "10px",
                fontSize: "16px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />

            <p
              id="confirmnote"
              className={
                matchFocus && !ValidMatch ? "instruction" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Please re-enter your password to confirm.
            </p>
            <button
              type="submit"
              id="BTN_signUp"
              style={{
                marginTop: "20px",
                padding: "12px 24px",
                fontSize: "18px",
                color: "#fff",
                backgroundColor: "#4CAF50",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            >
              Sign Up
            </button>
          </form>
          <p>
            Already Registered? <br />
            <span className="Line">
              <Link to="/SignIn">
                <button
                  style={{
                    marginTop: "20px",
                    padding: "12px 24px",
                    fontSize: "18px",
                    color: "#fff",
                    backgroundColor: "#4CAF50",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  Login
                </button>
              </Link>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default Register;