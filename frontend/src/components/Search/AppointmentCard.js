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
          {new Date(appointment.dateOfAppointment).toLocaleDateString()}
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
          {appointment.diagnosis || 'N/A'}
        </Typography>
        <br />
        <Typography 
          sx={{ color: 'green', fontWeight: 'bold' }} 
          component="span"
        >
          Outcome: 
        </Typography>
        <Typography 
          sx={{ color: 'black' }} 
          component="span"
        >
          {appointment.outcome}
        </Typography>
        <br />

        {appointment.notes && appointment.notes.length > 0 && (
          <>
            <br />
            <Typography 
              sx={{ color: 'green', fontWeight: 'bold' }} 
              component="span"
            >
              Notes: 
            </Typography>
            <Typography 
              sx={{ color: 'black' }} 
              component="span"
            >
              {appointment.notes.join(', ')}
            </Typography>
          </>
        )}

        {appointment.comments && appointment.comments.length > 0 && (
          <>
            <br />
            <Typography 
              sx={{ color: 'green', fontWeight: 'bold' }} 
              component="span"
            >
              Comments: 
            </Typography>
            <Typography 
              sx={{ color: 'black' }} 
              component="span"
            >
              {appointment.comments.join(', ')}
            </Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
};

AppointmentCard.propTypes = {
  appointment: PropTypes.shape({
    patientName: PropTypes.string.isRequired,
    dateOfAppointment: PropTypes.string.isRequired,
    outcome: PropTypes.string.isRequired,
    diagnosis: PropTypes.string,
    files: PropTypes.arrayOf(PropTypes.string),
    notes: PropTypes.arrayOf(PropTypes.string),
    comments: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  handleCardClick: PropTypes.func.isRequired,
};

export default AppointmentCard;
