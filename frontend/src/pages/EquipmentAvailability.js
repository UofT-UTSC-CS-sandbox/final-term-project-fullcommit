import React, { useState } from 'react';
import { Grid, Paper, Typography, Button } from '@mui/material';
import mockEquipment from '../components/MockEquipment';
import '../components/BedEqAvailability.css';

const EquipmentAvailability = () => {
  const [equipment, setEquipment] = useState(mockEquipment);

  const handleBook = (equipmentId) => {
    setEquipment(equipment.map(eq => 
      eq.id === equipmentId ? { ...eq, available: false } : eq
    ));
    alert('Equipment has been booked successfully.');
  };

  const handleRelease = (equipmentId) => {
    setEquipment(equipment.map(eq => 
      eq.id === equipmentId ? { ...eq, available: true } : eq
    ));
    alert('Equipment has been released successfully.');
  };

  const handleFindAnotherEquipment = () => {
    alert('Please refer to another building.');
  };

  return (
    <Paper className="bedEq-availability-paper">
      <Typography variant="h4" align="center" gutterBottom className="title">
        Hospital Equipment Availability
      </Typography>
      <Grid container spacing={3} className="bedEq-grid">
        {equipment.map((eq) => (
          <Grid item xs={12} sm={6} md={4} key={eq.id}>
            <Paper className={`bedEq-card ${eq.available ? 'available' : 'unavailable'}`}>
              <Typography variant="h5" component="div">
                {eq.building}
              </Typography>
              <Typography variant="body1" component="div">
                Equipment: {eq.equipmentName}
              </Typography>
              <Typography variant="body1" component="div">
                Equipment Number: {eq.equipmentNumber}
              </Typography>
              <Typography variant="body2" component="div" className={eq.available ? 'text-available' : 'text-unavailable'}>
                {eq.available ? 'Available' : 'Unavailable'}
              </Typography>
              {eq.available ? (
                <Button
                  variant="contained"
                  className="button-book"
                  onClick={() => handleBook(eq.id)}
                >
                  Book Equipment
                </Button>
              ) : (
                <>
                  <Button
                    variant="contained"
                    className="button-find"
                    onClick={handleFindAnotherEquipment}
                  >
                    Find Another Building
                  </Button>
                  <Button
                    variant="contained"
                    className="button-release"
                    onClick={() => handleRelease(eq.id)}
                  >
                    Release Equipment
                  </Button>
                </>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default EquipmentAvailability;
