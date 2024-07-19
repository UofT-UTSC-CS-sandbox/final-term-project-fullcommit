import React, { useState } from 'react';
import axios from 'axios';

const LogAppointmentForm = () => {
    const [patientName, setPatientName] = useState('');
    const [dateOfAppointment, setDateOfAppointment] = useState('');
    const [outcome, setOutcome] = useState('Diagnosed');
    const [diagnosis, setDiagnosis] = useState('');
    const [files, setFiles] = useState([]);

    const handleFileChange = (e) => {
        setFiles(e.target.files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('patientName', patientName);
        formData.append('dateOfAppointment', dateOfAppointment);
        formData.append('outcome', outcome);
        formData.append('diagnosis', diagnosis);
        for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i]);
        }

        try {
            const response = await axios.post('http://localhost:3000/api/appointments/logAppointment', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
            alert('Appointment logged successfully');
        } catch (error) {
            console.error('Error logging appointment', error);
            alert('Error logging appointment');
        }
    };

    return (
        <form className="log-appointment-form" onSubmit={handleSubmit}>
            <label htmlFor="patientName">Patient Name:</label>
            <input
                type="text"
                id="patientName"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                required
            />
            
            <label htmlFor="dateOfAppointment">Date of Appointment:</label>
            <input
                type="date"
                id="dateOfAppointment"
                value={dateOfAppointment}
                onChange={(e) => setDateOfAppointment(e.target.value)}
                required
            />
            
            <label htmlFor="outcome">Outcome:</label>
            <select
                id="outcome"
                value={outcome}
                onChange={(e) => setOutcome(e.target.value)}
                required
            >
                <option value="Diagnosed">Diagnosed</option>
                <option value="Undiagnosed">Undiagnosed</option>
            </select>
            
            <label htmlFor="diagnosis">Diagnosis:</label>
            <input
                type="text"
                id="diagnosis"
                value={diagnosis}
                onChange={(e) => setDiagnosis(e.target.value)}
            />
            
            <label htmlFor="files">Upload Files:</label>
            <input
                type="file"
                id="files"
                multiple
                onChange={handleFileChange}
            />
            
            <button type="submit">Log Appointment</button>
        </form>
    );
};

export default LogAppointmentForm;
