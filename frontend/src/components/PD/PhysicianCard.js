import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Box } from '@mui/material';

const PhysicianCard = ({ physician, handleCardClick }) => {
  return (
    <Card 
      onClick={() => handleCardClick(physician.name)} 
      style={{ cursor: 'pointer' }}
      aria-label={`Physician card for ${physician.name}`}
      sx={{ maxWidth: 345, margin: '0.5rem', boxShadow: 3 }}
    >
      <Box sx={{ backgroundColor: 'blue', color: 'white', padding: '0.5rem' }}>
        <Typography 
          variant="h5" 
          component="div" 
          noWrap 
          sx={{ 
            textOverflow: 'ellipsis', 
            overflow: 'hidden' 
          }}
        >
          {physician.name}
        </Typography>
      </Box>
      <CardContent sx={{ backgroundColor: 'white' }}>
        <Typography 
          sx={{ color: 'blue', fontWeight: 'bold' }} 
          component="span"
        >
          Age: 
        </Typography>
        <Typography 
          sx={{ color: 'black' }} 
          component="span"
        >
          {physician.age}
        </Typography>
        <br />
        <Typography 
          sx={{ color: 'blue', fontWeight: 'bold' }} 
          component="span"
        >
          Role: 
        </Typography>
        <Typography 
          sx={{ color: 'black' }} 
          component="span"
        >
          {physician.role}
        </Typography>
      </CardContent>
    </Card>
  );
};

PhysicianCard.propTypes = {
  physician: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
  handleCardClick: PropTypes.func.isRequired,
};

export default PhysicianCard;
