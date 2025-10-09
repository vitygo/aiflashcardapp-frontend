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
      <h1>{loginActive ? "login" : "sign up"}</h1>
      <p className={styles.authSubtitle}>
        {loginActive ? "welcom back" : "welcome"}
      </p>
      <div className={styles.authButtons}>
        <button
          className={`${loginActive ? styles.activeButton : ""} ${
            styles.authOptionButton
          }`}
          onClick={() => setLoginActive(true)}
        >
          LogIn
        </button>
        <button
          className={`${loginActive ? "" : styles.activeButton} ${
            styles.authOptionButton
          }`}
          onClick={() => setLoginActive(false)}
        >
          SignIn
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
      <input
        className={styles.inputField}
        placeholder="Enter your email"
        type="email"
      />
      <input
        className={styles.inputField}
        placeholder="Enter your password"
        type="password"
      />
      <button className={styles.submitButton}  onClick={handleLogin}>login</button>
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
      <input
        className={styles.inputField}
        placeholder="Enter your username"
        type="text"
      />
      <input
        className={styles.inputField}
        placeholder="Enter your email"
        type="email"
      />
      <input
        className={styles.inputField}
        placeholder="Enter your password"
        type="password"
      />
    
      <button to="mainPage" className={styles.submitButton} onClick={handleSignUp}>
        sign up
      </button>
    </div>
  );
}
