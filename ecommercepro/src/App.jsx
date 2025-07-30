
import { useState } from 'react'
import './App.css'
import LoginForm from './pages/LoginForm'
import RegisterForm from './pages/RegisterForm'
import Dashboard from './pages/Dashboard';
import product from './data';

function App() {
  const [isRegistered ,setIsRegistered]=useState(false);


  return (
    <>
    {isRegistered ? (<LoginForm/>):(<RegisterForm setIsRegistered={setIsRegistered}/>)}
      

      <Dashboard product={product}/>
    </>
  )
}

export default App
