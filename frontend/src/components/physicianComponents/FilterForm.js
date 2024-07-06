
import React from 'react';
import { Grid, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const FilterForm = ({ filters, handleFilterChange }) => {
  return (
    <Grid container spacing={2} className="filter-form">
      {/* TODO: discuss enumeration for role and department */}
      {/* <Grid item xs={12} sm={6} md={3}>
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
      </Grid> */}
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          label="Role"
          variant="outlined"
          fullWidth
          value={filters.role}
          onChange={handleFilterChange}
          name="role"
          type="string"
          className="text-field"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          label="Department"
          variant="outlined"
          fullWidth
          value={filters.department}
          onChange={handleFilterChange}
          name="department"
          className="text-field"
        />
      </Grid>
    </Grid>
  );
};

export default FilterForm;
