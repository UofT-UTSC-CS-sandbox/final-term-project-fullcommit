import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PhysicianProfile from './pages/PhysicianProfile';
import PhysicianDirectory from './pages/PhysicianDirectory';
import LogAppointmentPage from './pages/LogAppointmentPage';
import SearchAppointment from './pages/SearchAppointment';
import AppointmentDetails from './pages/AppointmentDetails';
import './components/navbar.css'; 

const App = () => {
  return (
    <Router>
      <div>
        <header className="header">
          <span className="plus-sign">+</span>
          <h1>MedShare</h1>
        </header>
        <nav>
          <ul>
            <li><Link to="/physician-profile/66a7f6d635b031eaea2e6799">Sample Physician Profile</Link></li>
            <li><Link to="/physician-directory">Physician Directory</Link></li>
            <li><Link to="/log-appointment">Log Appointment</Link></li> {/* Add a link to Log Appointment */}
            <Link to="/search-appointment" className="home-button">Search Appointment</Link>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/physician-profile/:id" element={<PhysicianProfile />} />
        <Route path="/physician-directory" element={<PhysicianDirectory />} />
        <Route path="/log-appointment" element={<LogAppointmentPage />} />
        <Route path="/search-appointment" element={<SearchAppointment />} />
        <Route path="/appointment-details/:appointmentId" element={<AppointmentDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
