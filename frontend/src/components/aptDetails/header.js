import React from 'react';
import { Typography, Box, Card, CardContent, Grid } from '@mui/material';

const Header = ({ patientName, appointmentDate, diagnosis, doctorName, status }) => (
  <Card className="headerCard">
    <CardContent>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6"><strong>Patient Name:</strong> {patientName}</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6"><strong>Appointment Date:</strong> {appointmentDate}</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6"><strong>Diagnosis:</strong> {diagnosis}</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6"><strong>Doctor Name:</strong> {doctorName}</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6"><strong>Status:</strong> {status}</Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default Header;
