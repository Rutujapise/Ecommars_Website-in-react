import { useState } from 'react';
import './App.css';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';
import Dashboard from './pages/Dashboard';
import ProductInfo from './pages/ProductInfo';
import product from './data';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './Context/ThemeProvider';
import Navbar from './Componants/Navbar';
import { AuthProvider } from './Context/AuthProvider';

function App() {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
   <ThemeProvider>
    <Router>
      <AuthProvider>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm setIsRegistered={setIsRegistered} />} />
        <Route path="/dashboard" element={<Dashboard product={product} />} />
        <Route path='/dashboard/:ID/*' element={<ProductInfo />} />
      </Routes>
      </AuthProvider>
    </Router>
  </ThemeProvider>
  );
}

export default App;
