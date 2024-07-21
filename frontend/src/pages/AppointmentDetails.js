import React from 'react';
import { CssBaseline, Container, Box, TextField, Button, Typography } from '@mui/material';
import Header from '../components/aptDetails/header';
import DocumentTabs from '../components/aptDetails/tabs';
import mockData from '../components/aptDetails/mockData';
import '../components/aptDetails/styles.css';

const AppointmentDetails = () => (
  <Container>
    <CssBaseline />
    <Header
      patientName={mockData.patientName}
      appointmentDate={mockData.appointmentDate}
      diagnosis={mockData.diagnosis}
      doctorName={mockData.doctorName}
      status={mockData.status}
    />
    <DocumentTabs documents={mockData.documents} />
    <Box className="comments-section" style={{ marginTop: 20 }}>
      <Typography variant="h6">Comments:</Typography>
      <Typography variant="body1">1. Dr. Smith: Recommended follow-up in two weeks.</Typography>
      <Typography variant="body1">2. Dr. Adams: Suggests checking cholesterol levels.</Typography>
      <Box style={{ marginTop: 10 }}>
        <TextField label="Your Comment Here" variant="outlined" multiline rows={4} fullWidth />
        <Button variant="contained" style={{ marginTop: 10 }}>Submit</Button>
      </Box>
    </Box>
    <Box style={{ marginTop: 20 }}>
      <Button variant="outlined">Back to Appointments List</Button>
    </Box>
  </Container>
);

export default AppointmentDetails;