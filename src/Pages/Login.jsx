import React, { useState } from "react";
import "./Styles/Login.css";
import { useNavigate } from 'react-router-dom';
import { auth } from "../firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      navigate("/home");
    } catch (error) {
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/invalid-email"
      ) {
        setError("Invalid email or password."); // Display error for invalid email or user not found
      } else if (error.code === "auth/wrong-password") {
        setError("Invalid email or password."); // Display error for wrong password
      } else {
        setError(error.message); // Display general error message for other errors
      }
    }
  };

  return (
    <section className="form-Card">
      <div className="login-container">
        <div className="login-form">
          <h1>Login</h1>
          <form>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button id="btn-submit" type="submit" onClick={handleLogin}>
                LOG IN
              </button>
            </div>
          </form>
          {error && <div className="error-message">{error}</div>}
          <div className="forgot-password">
            <a href="/forgotpassword">Forgot Password?</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
