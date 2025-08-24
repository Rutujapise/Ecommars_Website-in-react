import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {AuthContext} from '../Context/AuthProvider'
function LoginForm() {
  const [email, setEmail] = useState('');
 const inputRef=useRef()
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState('');
  const [user,setUser]=useState({})

  const navigate =useNavigate();
 
  useEffect(()=>{inputRef.current.focus()},[])
   const {loggedUser,login}= useContext(AuthContext)

  function handleLogin  (e)  {
    e.preventDefault();
    try{
      const mgs = login (email ,password )
       if (mgs) {
      alert('mgs')
      navigate('/dashboard');
    } else{
      alert("invalid Candidate");
      navigate('/')
    }
   } catch(error){
    console.log(error)
   }

    
  }


   // const userData = { email, password };
    //localStorage.setItem('loginData', JSON.stringify(userData));
    //setMessage('✅ Login details saved to Local Storage!');
  

  return (
  <div className="d-flex justify-content-center align-items-center vh-100"
      style={{ background: 'linear-gradient(135deg, #8dbfd5ff, #f675757c)' }}
    >
      <div
        className="p-4 shadow rounded bg-white"
        style={{ maxWidth: '700px', width: '100%', background: 'linear-gradient(135deg, #a8f556ff, #f2af6bff)' }}
      >
        <form onSubmit={handleLogin}>
          <h1 className="text-center text-primary mb-4">Login Page</h1>

        <div className="mb">
          <label htmlFor="emailInput" className="form-label">Email address</label>
          <input ref={inputRef}
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
         <p className="mt-3 text-center">
            Don’t have an account?{' '}
          <button className=' btn btn-primary'>  <Link to="/register" className="text-decoration-none fw-bold text-dark">
              Register here
            </Link> </button>
          </p>
      </form>
    </div>
    </div>
  );
};

export default LoginForm;
