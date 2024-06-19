import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ search, handleSearch }) => {
  return (
    <TextField
      label="Search Patients"
      variant="outlined"
      fullWidth
      value={search}
      onChange={handleSearch}
      className="search-bar"
    />
  );
};

export default SearchBar;
