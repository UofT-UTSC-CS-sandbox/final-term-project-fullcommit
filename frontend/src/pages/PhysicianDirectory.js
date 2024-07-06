import React, { useState } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import mockPhysicians from '../components/PD/MockPhysicians';
import SearchBar from '../components/PD/SearchBar';
import FilterForm from '../components/physicianComponents/FilterForm';
import PhysicianCard from '../components/physicianComponents/PhysicianCard';
import '../components/PD/PatientDirectory.css'; //TODO: rename
//TODO: add restAPI calls instead of hardcode
//TODO: modify model and change firstname/lastname => name.

const PhysicianDirectory = () => {
  const [physicians, setPhysicians] = useState(mockPhysicians);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    department: "",
    role: "",
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
  const applyFilters = (physicians) => {
    return physicians.filter(physician => {
      //TODO: decide on full or partial search, although if enumeration then..
      return (
        physician.name.toLowerCase().includes(search.toLowerCase()) &&
        (filters.department === "" || physician.department.includes(filters.department)) &&
        (filters.role === "" || physician.role === filters.role)
      );
    });
  };const filtered = applyFilters(physicians);

  const handleCardClick = (physicianName) => {
    alert(`This leads to ${physicianName}'s profile page.`);
  };

  return (
    <Paper className="patient-directory-paper">
      <Typography variant="h4" align="center" gutterBottom className="title">
        Physician Directory
      </Typography>
      <SearchBar search={search} handleSearch={handleSearch} flag="Physicians" />
      <FilterForm filters={filters} handleFilterChange={handleFilterChange} />
      <Grid container spacing={3} className="patient-grid">
        {filtered.map((physician) => (
          <Grid item xs={12} sm={6} md={4} key={physician.id}>
            <PhysicianCard physician={physician} handleCardClick={handleCardClick} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default PhysicianDirectory;