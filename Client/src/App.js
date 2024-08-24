import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Landingpage from './Components/Landingpage';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import SignUp from './Components/Signup';
import Profile from './Components/Profile';
import About from './Components/About';
import Products from './Components/Products';
import Contact from './Components/Contact';
import Loader from './Components/Loader';
import axios from 'axios';

function App() {
  const [loading, setLoading] = useState(true);
axios.defaults.withCredentials = true;

  useEffect(() => {
    // Simulate loading time, or use actual data loading here
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Loader visible for 2 seconds
  }, []);

  return (
    <Router>
      <div className="App">
        {loading && <Loader />}
        {!loading && (
          <>
            <header>
              <Navbar />
            </header>
            <Routes>
              <Route path="/Profile" element={<Profile />} />
              <Route path="/" element={<Landingpage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
            <About />
            <Products />
            <Contact />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
