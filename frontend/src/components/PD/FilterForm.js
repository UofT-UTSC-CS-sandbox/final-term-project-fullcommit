
import React from 'react';
import { Grid, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const FilterForm = ({ filters, handleFilterChange }) => {
  return (
    <Grid container spacing={2} className="filter-form">
      <Grid item xs={12} sm={6} md={3}>
        <FormControl fullWidth variant="outlined" className="form-control">
          <InputLabel>Gender</InputLabel>
          <Select
            value={filters.gender}
            onChange={handleFilterChange}
            label="Gender"
            name="gender"
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          label="Age"
          variant="outlined"
          fullWidth
          value={filters.age}
          onChange={handleFilterChange}
          name="age"
          type="number"
          className="text-field"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          label="MRN"
          variant="outlined"
          fullWidth
          value={filters.mrn}
          onChange={handleFilterChange}
          name="mrn"
          className="text-field"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          label="Primary Doctor"
          variant="outlined"
          fullWidth
          value={filters.primaryDoctor}
          onChange={handleFilterChange}
          name="primaryDoctor"
          className="text-field"
        />
      </Grid>
    </Grid>
  );
};

export default FilterForm;
