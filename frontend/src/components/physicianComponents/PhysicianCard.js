import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Box } from '@mui/material';

const PhysicianCard = ({ physician, handleCardClick }) => {
  return (
    <Card 
      onClick={() => handleCardClick(physician.name)} 
      style={{ cursor: 'pointer' }}
      aria-label={`Patient card for ${physician.name}`}
      sx={{ maxWidth: 345, margin: '0.5rem', boxShadow: 3 }}
    >
      <Box sx={{ backgroundColor: 'green', color: 'white', padding: '0.5rem' }}>
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
          sx={{ color: 'green', fontWeight: 'bold' }} 
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
        <br />
        <Typography 
          sx={{ color: 'green', fontWeight: 'bold' }} 
          component="span"
        >
          Department:  
        </Typography>
        <Typography 
          sx={{ color: 'black' }} 
          component="span"
        >
          {physician.department}
        </Typography>
        <br />
        <Typography 
          sx={{ color: 'green', fontWeight: 'bold' }} 
          component="span"
        >
            Contact Number: 
        </Typography>
        <Typography 
          sx={{ color: 'black' }} 
          component="span"
        >
          {physician.contactNumber}
        </Typography>
        <br />

        {physician.additionalInfo && (
          <>
            <br />
            <Typography 
              sx={{ color: 'green', fontWeight: 'bold' }} 
              component="span"
            >
              Additional Info: 
            </Typography>
            <Typography 
              sx={{ color: 'black' }} 
              component="span"
            >
              {physician.additionalInfo}
            </Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
};

PhysicianCard.propTypes = {
  physician: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    contactNumber: PropTypes.string.isRequired,
    additionalInfo: PropTypes.string, // optional field for more info
  }).isRequired,
  handleCardClick: PropTypes.func.isRequired,
};

export default PhysicianCard;
