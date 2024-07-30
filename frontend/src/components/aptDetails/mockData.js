const mockData = {
    patientName: 'John Doe',
    appointmentDate: '2024-07-18',
    diagnosis: 'Hypertension',
    doctorName: 'Dr. Smith',
    status: 'Diagnosed',
    documents: {
      Xrays: [
        { title: 'X-ray of Chest', date: '2024-07-18' },
        { title: 'X-ray of Spine', date: '2024-07-18' }
      ],
      BloodTests: [
        { title: 'Blood Test 1', date: '2024-07-18' },
        { title: 'Blood Test 2', date: '2024-07-18' }
      ],
    }
  };
  
  export default mockData;