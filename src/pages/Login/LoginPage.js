import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Assuming you have a Login.css file for styles
import FacebookButton from '../../components/FacebookButton';
import GoogleButton from '../../components/GoogleButton';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const correctUsername = 'user1@gmail.com';
  const correctPassword = 'password123';

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === correctUsername && password === correctPassword) {
      sessionStorage.setItem('username', email);
      navigate('/welcome');
    } else {
      setError('Username or Password is incorrect');
    }
  };

  return (
    <div className="page-container">
      <div className="login-container">
        <h2 class="sign-in-with">Sign In With</h2>
        <div className="social-buttons">
          <FacebookButton/>
          <GoogleButton/>
        </div>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Username</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group password-group">
            <div className='label-and-link'>
              <label htmlFor="password">Password</label>
              <a href="#" className="forgot-password-link">Forgot?</a>
            </div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            
          </div>
          <button type="submit">Sign In</button>
        </form>
        <div className="signup-link">Not a member? <a href="#">Sign up now</a></div>
      </div>
    </div>
  );
}

export default LoginPage;
