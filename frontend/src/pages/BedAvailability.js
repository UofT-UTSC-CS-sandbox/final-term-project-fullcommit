import React, { useState } from 'react';
import { Grid, Paper, Typography, Button } from '@mui/material';
import mockBeds from '../components/MockBeds';
import '../components/BedAvailability.css';

const BedAvailability = () => {
  const [beds, setBeds] = useState(mockBeds);

  const handleBook = (bedId) => {
    setBeds(beds.map(bed => 
      bed.id === bedId ? { ...bed, available: false } : bed
    ));
    alert('Bed has been booked successfully.');
  };

  const handleRelease = (bedId) => {
    setBeds(beds.map(bed => 
      bed.id === bedId ? { ...bed, available: true } : bed
    ));
    alert('Bed has been released successfully.');
  };

  const handleFindAnotherBuilding = () => {
    alert('Please refer to another building.');
  };

  return (
    <Paper className="bed-availability-paper">
      <Typography variant="h4" align="center" gutterBottom className="title">
        Hospital Bed Availability
      </Typography>
      <Grid container spacing={3} className="bed-grid">
        {beds.map((bed) => (
          <Grid item xs={12} sm={6} md={4} key={bed.id}>
            <Paper className={`bed-card ${bed.available ? 'available' : 'unavailable'}`}>
              <Typography variant="h5" component="div">
                {bed.building}
              </Typography>
              <Typography variant="body1" component="div">
                Bed Number: {bed.bedNumber}
              </Typography>
              <Typography variant="body1" component="div">
                Bed Type: {bed.bedType}
              </Typography>
              <Typography variant="body2" component="div" className={bed.available ? 'text-available' : 'text-unavailable'}>
                {bed.available ? 'Available' : 'Unavailable'}
              </Typography>
              {bed.available ? (
                <Button
                  variant="contained"
                  className="button-book"
                  onClick={() => handleBook(bed.id)}
                >
                  Book Bed
                </Button>
              ) : (
                <>
                  <Button
                    variant="contained"
                    className="button-find"
                    onClick={handleFindAnotherBuilding}
                  >
                    Find Another Building
                  </Button>
                  <Button
                    variant="contained"
                    className="button-release"
                    onClick={() => handleRelease(bed.id)}
                  >
                    Release Bed
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

export default BedAvailability;
