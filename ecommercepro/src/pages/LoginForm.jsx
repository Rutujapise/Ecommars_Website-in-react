import React, { useState } from 'react';
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage('⚠️ Please fill in both email and password.');
      return;
    }

    const userData = { email, password };
    localStorage.setItem('loginData', JSON.stringify(userData));
    setMessage('✅ Login details saved to Local Storage!');
  };

  return (
  <div style={{width: '100%', background: 'linear-gradient(135deg, #173645ff, #d446cfff)' }}>
    <div className="container w-50 mx-auto border shadow  rounded-2 p-4 bg-white"
     style={{ width: '100%', maxWidth: '700px', height: '500px', background: 'linear-gradient(135deg, #d2ac4bff, #d446cfff)'  }}
     >
      <form onSubmit={handleSubmit}>
        <h1 className="text-center text-primary mb-4">Login Page</h1>

        <div className="mb">
          <label htmlFor="emailInput" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="form-text">We'll never share your email with anyone.</div>
        </div>

        <div>
          <label htmlFor="passwordInput" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="passwordInput"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="rememberCheck"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="rememberCheck">Remember me</label>
        </div>

        <button type="submit" className="btn btn-primary w-100">Login</button>

      </form>
    </div>
    </div>
  );
}

export default LoginForm;
