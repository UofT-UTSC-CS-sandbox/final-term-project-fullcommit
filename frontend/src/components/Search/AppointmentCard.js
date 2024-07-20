import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Box } from '@mui/material';

const AppointmentCard = ({ appointment, handleCardClick }) => {
  return (
    <Card 
      onClick={() => handleCardClick(appointment.patientName)} 
      style={{ cursor: 'pointer' }}
      aria-label={`Appointment card for ${appointment.patientName}`}
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
          {appointment.patientName}
        </Typography>
      </Box>
      <CardContent sx={{ backgroundColor: 'white' }}>
        <Typography 
          sx={{ color: 'green', fontWeight: 'bold' }} 
          component="span"
        >
          Date: 
        </Typography>
        <Typography 
          sx={{ color: 'black' }} 
          component="span"
        >
          {appointment.date}
        </Typography>
        <br />
        <Typography 
          sx={{ color: 'green', fontWeight: 'bold' }} 
          component="span"
        >
          Doctor:  
        </Typography>
        <Typography 
          sx={{ color: 'black' }} 
          component="span"
        >
          {appointment.doctorName}
        </Typography>
        <br />
        <Typography 
          sx={{ color: 'green', fontWeight: 'bold' }} 
          component="span"
        >
            Diagnosis: 
        </Typography>
        <Typography 
          sx={{ color: 'black' }} 
          component="span"
        >
          {appointment.outcome.diseaseName}
        </Typography>
        <br />

        {appointment.additionalInfo && (
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
              {appointment.additionalInfo}
            </Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
};

AppointmentCard.propTypes = {
    appointment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    doctor: PropTypes.string.isRequired,
    diagnosis: PropTypes.string.isRequired,
    additionalInfo: PropTypes.string, 
  }).isRequired,
  handleCardClick: PropTypes.func.isRequired,
};

export default AppointmentCard;
