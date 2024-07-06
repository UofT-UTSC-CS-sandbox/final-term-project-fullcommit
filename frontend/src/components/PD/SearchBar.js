import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ search, handleSearch, flag}) => {
  let label = "Search " + flag;
  // flag == Physicians, Patients


  return (
    <TextField
      label={label}
      variant="outlined"
      fullWidth
      value={search}
      onChange={handleSearch}
      className="search-bar"
    />
  );
};

export default SearchBar;
