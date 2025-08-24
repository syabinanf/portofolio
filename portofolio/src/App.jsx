// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import styles from './App.module.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects';
import Certif from './components/Certification';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certification" element={<Certif />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </Router>

    </div>
  );
}

export default App
