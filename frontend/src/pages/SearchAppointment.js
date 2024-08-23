import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import SearchBar from '../components/PD/SearchBar'; // TODO: Move the search bar component
import AppointmentCard from '../components/Search/AppointmentCard'; 
import '../components/PD/PatientDirectory.css';  // TODO: Change name to general

const SearchAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('/api/appointments'); 
        setAppointments(response.data);
      } catch (error) {
        console.error("There was an error fetching the appointments!", error);
      }
    };

    fetchAppointments();
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const applyFilters = (appointments) => {
    return appointments.filter(appointment => {
      return (
        appointment.diagnosis && 
        appointment.diagnosis.toLowerCase().includes(search.toLowerCase())
      );
    });
  };

  const filtered = applyFilters(appointments);

  const handleCardClick = (appointmentId) => {
    navigate(`/appointment-details/${appointmentId}`); // Navigate to the details page with the appointment ID
  };

  return (
    <Paper className="appointment-search-paper">
      <Typography variant="h4" align="center" gutterBottom className="title">
        Appointment Search
      </Typography>
      <SearchBar search={search} handleSearch={handleSearch} flag="Appointments" />
      <Grid container spacing={3} className="patient-grid">
        {filtered.map((appointment) => (
          <Grid item xs={12} sm={6} md={4} key={appointment._id}>
            <AppointmentCard 
              appointment={appointment} 
              handleCardClick={() => handleCardClick(appointment._id)} // Pass appointment ID
            />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default SearchAppointment;