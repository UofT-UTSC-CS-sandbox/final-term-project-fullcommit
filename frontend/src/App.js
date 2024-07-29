import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PhysicianProfile from './pages/PhysicianProfile';
import PhysicianDirectory from './pages/PhysicianDirectory';
import SearchAppointment from './pages/SearchAppointment';
import AppointmentDetails from './pages/AppointmentDetails';
import './components/navbar.css'; 

const Home = () => (
  <div className="home-buttons">
    <h2>Welcome to the Hospital Management App</h2>
    <Link to="/physician-profile/666dce53a537510a1ef36e65" className="home-button">Sample Physician Profile</Link>
    <Link to="/physician-directory" className="home-button">Physician Directory</Link>
    <Link to="/search-appointment" className="home-button">Search Appointment</Link>
    <Link to="/appointment-details" className="home-button">Appointment Details Sample</Link>
  </div>
);

const App = () => {
  return (
    <Router>
      <div>
        <h1>Hospital Management App</h1>
        <nav>
          <ul className="navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/physician-profile/666dce53a537510a1ef36e65">Sample Physician Profile</Link></li>
            <li><Link to="/physician-directory">Physician Directory</Link></li>
            <li><Link to="/search-appointment">Search Appointment</Link></li>
            <li><Link to="/appointment-details">Appointment Details Sample</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/physician-profile/:id" element={<PhysicianProfile />} />
          <Route path="/physician-directory" element={<PhysicianDirectory />} />
          <Route path="/search-appointment" element={<SearchAppointment />} />
          <Route path="/appointment-details" element={<AppointmentDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
