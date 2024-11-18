import { useState } from 'react';
import './App.css';

function App() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-container">
      <h1>Welcome Back To </h1>
      <span className="highlight">HMS!</span>
      <form className="login-form">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" required />

        <label htmlFor="password">Password</label>
        <div className="password-container">
          <input
            type={passwordVisible ? 'text' : 'password'}
            id="password"
            placeholder="Enter your password"
            required
          />
          <button
            type="button"
            className="toggle-password"
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? '🙈' : '👁️'}
          </button>
        </div>

        <button type="submit" className="login-button">Login</button>
      </form>

      <div className="divider">or</div>
      <button className="google-login">
        <img
          src="https://img.icons8.com/color/48/000000/google-logo.png"
          alt="Google Icon"
        />
        Continue with Google
      </button>

      <p className="signup-text">
        New to EMS? <a href="/signup" className="signup-link">Sign Up</a>
      </p>
    </div>
  );
}

export default App;

