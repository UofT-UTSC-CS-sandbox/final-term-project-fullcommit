import React from 'react';
import { Typography, Box, Card, CardContent, Grid } from '@mui/material';

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

const Header = ({ patientName, appointmentDate, diagnosis }) => (
  <Card className="headerCard">
    <CardContent>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6"><strong>Patient Name:</strong> {patientName}</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6"><strong>Appointment Date:</strong> {formatDate(appointmentDate)}</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6"><strong>Diagnosis:</strong> {diagnosis}</Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default Header;