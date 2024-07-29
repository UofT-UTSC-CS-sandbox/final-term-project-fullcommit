import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import SearchBar from '../components/PD/SearchBar';
import FilterForm from '../components/physicianComponents/FilterForm';
import PhysicianCard from '../components/physicianComponents/PhysicianCard';
import '../components/PD/PatientDirectory.css';

const PhysicianDirectory = () => {
  const [physicians, setPhysicians] = useState([]);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    department: "",
    role: "",
  });

  useEffect(() => {
    const fetchPhysicians = async () => {
      try {
        const response = await fetch('/api/employees');
        const data = await response.json();
        setPhysicians(data);
      } catch (error) {
        console.error('Error fetching physicians:', error);
      }
    };

    fetchPhysicians();
  }, []);

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
      return (
        physician.name.includes(search) &&
        (filters.department === "" || physician.department.includes(filters.department)) &&
        (filters.role === "" || physician.role === filters.role)
      );
    });
  };

  const filtered = applyFilters(physicians);

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
