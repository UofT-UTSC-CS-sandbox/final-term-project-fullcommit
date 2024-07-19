import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MedicineRegistry from './pages/MedicineRegistry';
import EquipmentAvailability from './pages/EquipmentAvailability';
import ShiftsManager from './pages/ShiftsManager';
import InventoryManagement from './pages/InventoryManagement';
import Workplaces from './pages/Workplaces';
import PatientScheduler from './pages/PatientScheduler';
import PatientProfile from './pages/PatientProfile';
import PhysicianProfile from './pages/PhysicianProfile';
import PatientDirectory from './pages/PatientDirectory';
import PhysicianDirectory from './pages/PhysicianDirectory';
import BedAvailability from './pages/BedAvailability';
import LogAppointmentPage from './pages/LogAppointmentPage';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Hospital Management App</h1>
        <nav>
          <ul>
            <li><Link to="/medicine-registry">Medicine Registry</Link></li>
            <li><Link to="/shifts-manager">Shifts Manager</Link></li>
            <li><Link to="/inventory-management">Inventory Management</Link></li>
            <li><Link to="/workplaces">Workplaces</Link></li>
            <li><Link to="/patient-scheduler">Patient Scheduler</Link></li>
            <li><Link to="/patient-profile/666b951274a8b4f99a5a9ef5">Sample Patient Profile</Link></li>
            <li><Link to="/physician-profile/666dce53a537510a1ef36e65">Sample Physician Profile</Link></li>
            <li><Link to="/patient-directory">Patient Directory</Link></li>
            <li><Link to="/physician-directory">Physician Directory</Link></li>
            <li><Link to="/bed-availability">Bed Availability</Link></li>
            <li><Link to="/equipment-availability">Equipment Availability</Link></li>
            <li><Link to="/log-appointment">Log Appointment</Link></li> {/* Add a link to Log Appointment */}
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/medicine-registry" element={<MedicineRegistry />} />
        <Route path="/equipment-availability" element={<EquipmentAvailability />} />
        <Route path="/shifts-manager" element={<ShiftsManager />} />
        <Route path="/inventory-management" element={<InventoryManagement />} />
        <Route path="/workplaces" element={<Workplaces />} />
        <Route path="/patient-scheduler" element={<PatientScheduler />} />
        <Route path="/patient-profile/:id" element={<PatientProfile />} />
        <Route path="/physician-profile/:id" element={<PhysicianProfile />} />
        <Route path="/patient-directory" element={<PatientDirectory />} />
        <Route path="/physician-directory" element={<PhysicianDirectory />} />
        <Route path="/bed-availability" element={<BedAvailability />} />
        <Route path="/log-appointment" element={<LogAppointmentPage />} />
      </Routes>
    </Router>
  );
};

export default App;
