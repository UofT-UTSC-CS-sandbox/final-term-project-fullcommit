import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MedicineRegistry from './pages/MedicineRegistry';
import EquipmentAvailability from './pages/EquipmentAvailability';
import ShiftsManager from './pages/ShiftsManager';
import InventoryManagement from './pages/InventoryManagement';
import Workplaces from './pages/Workplaces';
import PatientRegistry from './pages/PatientRegistry';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Hospital Management App</h1>
        <nav>
          <ul>
            <li><Link to="/medicine-registry">Medicine Registry</Link></li>
            <li><Link to="/equipment-availability">Equipment Availability</Link></li>
            <li><Link to="/shifts-manager">Shifts Manager</Link></li>
            <li><Link to="/inventory-management">Inventory Management</Link></li>
            <li><Link to="/workplaces">Workplaces</Link></li>
            <li><Link to="/patient-registry">Patient Registry</Link></li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/medicine-registry" element={<MedicineRegistry />} />
        <Route path="/equipment-availability" element={<EquipmentAvailability />} />
        <Route path="/shifts-manager" element={<ShiftsManager />} />
        <Route path="/inventory-management" element={<InventoryManagement />} />
        <Route path="/workplaces" element={<Workplaces />} />
        <Route path="/patient-registry" element={<PatientRegistry />} />
      </Routes>
    </Router>
  );
};

export default App;
