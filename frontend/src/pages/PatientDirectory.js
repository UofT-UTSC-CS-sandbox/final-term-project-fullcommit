import React, { useState } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import mockPatients from '../components/PD/MockPatients';
import SearchBar from '../components/PD/SearchBar';
import FilterForm from '../components/PD/FilterForm';
import PatientCard from '../components/PD/PatientCard';
import '../components/PD/PatientDirectory.css'; 

const PatientDirectory = () => {
  const [patients, setPatients] = useState(mockPatients);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    gender: "",
    age: "",
    mrn: "",
    primaryDoctor: ""
  });

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const applyFilters = (patients) => {
    return patients.filter(patient => {
      return (
        patient.name.toLowerCase().includes(search.toLowerCase()) &&
        (filters.gender === "" || patient.gender === filters.gender) &&
        (filters.age === "" || patient.age === parseInt(filters.age)) &&
        (filters.mrn === "" || patient.mrn.includes(filters.mrn)) &&
        (filters.primaryDoctor === "" || patient.primaryDoctor === filters.primaryDoctor)
      );
    });
  };

  const filteredPatients = applyFilters(patients);

  const handleCardClick = (patientName) => {
    alert(`This leads to ${patientName}'s profile page.`);
  };

  return (
    <Paper className="patient-directory-paper">
      <Typography variant="h4" align="center" gutterBottom className="title">
        Patient Directory
      </Typography>
      <SearchBar search={search} handleSearch={handleSearch} />
      <FilterForm filters={filters} handleFilterChange={handleFilterChange} />
      <Grid container spacing={3} className="patient-grid">
        {filteredPatients.map((patient) => (
          <Grid item xs={12} sm={6} md={4} key={patient.id}>
            <PatientCard patient={patient} handleCardClick={handleCardClick} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default PatientDirectory;