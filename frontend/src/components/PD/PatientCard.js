import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Box } from '@mui/material';

const PatientCard = ({ patient, handleCardClick }) => {
  return (
    <Card 
      onClick={() => handleCardClick(patient.name)} 
      style={{ cursor: 'pointer' }}
      aria-label={`Patient card for ${patient.name}`}
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
          {patient.name}
        </Typography>
      </Box>
      <CardContent sx={{ backgroundColor: 'white' }}>
        <Typography 
          sx={{ color: 'green', fontWeight: 'bold' }} 
          component="span"
        >
          Age: 
        </Typography>
        <Typography 
          sx={{ color: 'black' }} 
          component="span"
        >
          {patient.age}
        </Typography>
        <br />
        <Typography 
          sx={{ color: 'green', fontWeight: 'bold' }} 
          component="span"
        >
          Gender: 
        </Typography>
        <Typography 
          sx={{ color: 'black' }} 
          component="span"
        >
          {patient.gender}
        </Typography>
        <br />
        <Typography 
          sx={{ color: 'green', fontWeight: 'bold' }} 
          component="span"
        >
          MRN: 
        </Typography>
        <Typography 
          sx={{ color: 'black' }} 
          component="span"
        >
          {patient.mrn}
        </Typography>
        <br />
        <Typography 
          sx={{ color: 'green', fontWeight: 'bold' }} 
          component="span"
        >
          Primary Doctor: 
        </Typography>
        <Typography 
          sx={{ color: 'black' }} 
          component="span"
        >
          {patient.primaryDoctor}
        </Typography>
        {patient.additionalInfo && (
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
              {patient.additionalInfo}
            </Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
};

PatientCard.propTypes = {
  patient: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
    mrn: PropTypes.string.isRequired,
    primaryDoctor: PropTypes.string.isRequired,
    additionalInfo: PropTypes.string, // optional field for more info
  }).isRequired,
  handleCardClick: PropTypes.func.isRequired,
};

export default PatientCard;
