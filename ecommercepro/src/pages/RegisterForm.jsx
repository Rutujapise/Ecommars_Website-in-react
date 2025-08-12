import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegisterForm = ( {setIsRegistered}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate()


  function handleRegister(event) {
    event.preventDefault();

    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    const payload = {
      name: username,
      email: email,
      password: password
    };

    // Store multiple users in localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    existingUsers.push(payload);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    setIsRegistered(true)
 
    setSuccess(true);
       navigate('/');
    setUsername('');
    setEmail('');
    setPassword('');
    
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 m-0"
      style={{ background: 'linear-gradient(135deg, #173645ff, #d446cfff)' }}
    >
      <div
        className="p-4 shadow rounded bg-white"
        style={{ width: '100%', maxWidth: '700px', height: '700px', background: 'linear-gradient(135deg, #d2ac4bff, #d446cfff)'  }}
      >
        <h2 className="text-center mb-4 text-primary">Register</h2>
        <form onSubmit={handleRegister}>
          <div >
            <label htmlFor="username" className="form-label fw-semibold">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div >
            <label htmlFor="email" className="form-label fw-semibold">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div >
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="terms"
              required
            />
            <label className="form-check-label" htmlFor="terms">
              I agree to the terms & conditions
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{ padding: '10px', fontWeight: '600' }}
          >
            Register
          </button>
          {/* Switch to Login Page */}
          <p className="mt-3 text-center">
            Already have an account?{' '}
            <button className=' btn btn-primary'> <Link to="/" className="text-decoration-none fw-bold text-dark">
              Login here
            </Link></button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
