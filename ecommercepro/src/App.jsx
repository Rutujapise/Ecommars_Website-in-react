import { useState } from 'react';
import './App.css';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';
import Dashboard from './pages/Dashboard';
import ProductInfo from './pages/ProductInfo';
import product from './data';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm setIsRegistered={setIsRegistered} />} />
        <Route path="/dashboard" element={<Dashboard product={product} />} />
<Route path='/dashboard/:ID/*' element={<ProductInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
