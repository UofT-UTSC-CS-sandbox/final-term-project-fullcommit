import React, { useState } from 'react';
import { Grid, Paper, Typography } from '@mui/material';

import mockApts from '../components/Search/mockApts';
import SearchBar from '../components/PD/SearchBar'; // TODO: Move the search bar component
import AppointmentCard from '../components/Search/AppointmentCard'; 
import '../components/PD/PatientDirectory.css';  // TODO: Change name to general

const SearchAppointment = () => {
  const [appointments, setAppointments] = useState(mockApts);
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const applyFilters = (appointments) => {
    return appointments.filter(appointment => {
      return (
        appointment.outcome.diseaseName.toLowerCase().includes(search.toLowerCase()) 
      );
    });
  };const filtered = applyFilters(appointments);

  const handleCardClick = (appointmentName) => {
    alert(`This leads to ${appointmentName}'s appointment page.`);
  };

  return (
    <Paper className="appointment-search-paper">
      <Typography variant="h4" align="center" gutterBottom className="title">
        Appointment Search
      </Typography>
      <SearchBar search={search} handleSearch={handleSearch} flag="Appointments" />
      <Grid container spacing={3} className="patient-grid">
        {filtered.map((appointment) => (
          <Grid item xs={12} sm={6} md={4} key={appointment.id}>
            <AppointmentCard appointment={appointment} handleCardClick={handleCardClick} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default SearchAppointment;