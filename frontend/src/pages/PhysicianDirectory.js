import React, { useState } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import mockPhysicians from '../components/PD/MockPhysicians';
import SearchBar from '../components/PD/SearchBar';
import FilterForm from '../components/PD/FilterForm';
import PhysicianCard from '../components/PD/PhysicianCard';
import '../components/PD/PhysicianDirectory.css';

const PhysicianDirectory = () => {
  const [physicians, setPhysicians] = useState(mockPhysicians);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    role: "",
    age: ""
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
      return (
        physician.name.toLowerCase().includes(search.toLowerCase()) &&
        (filters.role === "" || physician.role === filters.role) &&
        (filters.age === "" || physician.age === parseInt(filters.age))
      );
    });
  };

  const filteredPhysicians = applyFilters(physicians);

  const handleCardClick = (physicianName) => {
    alert(`This leads to ${physicianName}'s profile page.`);
  };

  return (
    <Paper className="physician-directory-paper">
      <Typography variant="h4" align="center" gutterBottom className="title">
        Physician Directory
      </Typography>
      <SearchBar search={search} handleSearch={handleSearch} />
      <FilterForm filters={filters} handleFilterChange={handleFilterChange} directoryType="physician" />
      <Grid container spacing={3} className="physician-grid">
        {filteredPhysicians.map((physician) => (
          <Grid item xs={12} sm={6} md={4} key={physician.id}>
            <PhysicianCard physician={physician} handleCardClick={handleCardClick} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default PhysicianDirectory;
