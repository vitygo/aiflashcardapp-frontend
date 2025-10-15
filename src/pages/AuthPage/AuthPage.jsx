import styles from "./AuthPage.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const [loginActive, setLoginActive] = useState(undefined);
  const location = useLocation();
  const { mode } = location.state || {};

  useEffect(() => {
    if (mode === "login") setLoginActive(true);
    else if (mode === "signup") setLoginActive(false);
  }, [mode]);

  return (
    <div className={styles.authPage}>
      <h1 className={styles.mainTitle}> {loginActive ? "Login" : "Sign up"}</h1>
      <p className={styles.authSubtitle}>
        {loginActive ? "Welcome" : "Create your account"}
      </p>
      <div className={styles.authButtons}>
        <button
          className={`${loginActive ? styles.activeButton : ""} ${
            styles.authOptionButton
          }`}
          onClick={() => setLoginActive(true)}
        >
          Login
        </button>
        <button
          className={`${loginActive ? "" : styles.activeButton} ${
            styles.authOptionButton
          }`}
          onClick={() => setLoginActive(false)}
        >
          Sign up
        </button>
      </div>
      <div className={styles.inputWindow}>
        {loginActive ? <LoginForm /> : <SignUpForm />}
      </div>
    </div>
  );
}

export function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // логіка реєстрації тут...
    navigate("/mainpage"); // ⬅ редирект після успіху
  };

  return (
    <div className={styles.loginForm}>
      <div className={styles.inputGroup}>
        <label for="email-input">Email address</label>
        <input
          className={styles.inputField}
          placeholder="Enter your email"
          type="email"
          id="email-input"
        />
      </div>
      <div className={styles.inputGroup}>
        <label for="password-input">Password</label>
        <input
          className={styles.inputField}
          placeholder="Enter your password"
          type="password"
          id="password-input"
        />
      </div>
      <button className={styles.submitButton} onClick={handleLogin}>
        login
      </button>
    </div>
  );
}

export function SignUpForm() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    // логіка реєстрації тут...
    navigate("/mainpage"); // ⬅ редирект після успіху
  };

  return (
    <div className={styles.signInForm}>
 
      <div className={styles.inputGroup}>
        <label for="username-input">Username</label>
        <input
          className={styles.inputField}
          placeholder="Enter your username"
          type="text"
          id="username-input"
        />
      </div>
      <div className={styles.inputGroup}>
        <label for="email-input">Email address</label>
        <input
          className={styles.inputField}
          placeholder="Enter your email"
          type="email"
          id="email-input"
        />
      </div>
      <div className={styles.inputGroup}>
        <label for="password-input">Password</label>
        <input
          className={styles.inputField}
          placeholder="Enter your password"
          type="password"
          id="password-input"
        />
      </div>


      <button
        to="mainPage"
        className={styles.submitButton}
        onClick={handleSignUp}
      >
        sign up
      </button>
    </div>
  );
}
