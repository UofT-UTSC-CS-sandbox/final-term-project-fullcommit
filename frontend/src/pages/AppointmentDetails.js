import React, { useEffect, useState } from 'react';
import { CssBaseline, Container, Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import Header from '../components/aptDetails/header';
import DocumentTabs from '../components/aptDetails/tabs';
import '../components/aptDetails/styles.css';

const AppointmentDetails = () => {
  const { appointmentId } = useParams();
  const [appointment, setAppointment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointmentDetails = async () => {
      try {
        const response = await fetch(`/api/appointments/${appointmentId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAppointment(data);
        setLoading(false);
      } catch (error) {
        console.error("There was an error fetching the appointment details!", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchAppointmentDetails();
  }, [appointmentId]);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error}</Typography>;

  return (
    <Container>
      <CssBaseline />
      <Header
        patientName={appointment.patientName}
        appointmentDate={appointment.dateOfAppointment}
        diagnosis={appointment.diagnosis}
        doctorName={appointment.doctorName}
        status={appointment.outcome}
      />
      <DocumentTabs documents={appointment.files} />

      {/* Display the transcript if it exists */}
      <Box mt={4}>
        <Typography variant="h6">Transcript</Typography>
        <Typography variant="body1">
          {appointment.transcript ? appointment.transcript : "No transcript available."}
        </Typography>
      </Box>
    </Container>
  );
};

export default AppointmentDetails;
