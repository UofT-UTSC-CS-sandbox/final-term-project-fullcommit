import React, { useState } from 'react';
import axios from 'axios';

const LogAppointmentForm = () => {
    // State variables to hold form data
    const [patientName, setPatientName] = useState('');
    const [dateOfAppointment, setDateOfAppointment] = useState('');
    const [outcome, setOutcome] = useState('Diagnosed');
    const [diagnosis, setDiagnosis] = useState('');
    const [files, setFiles] = useState([]);
    const [audioFile, setAudioFile] = useState(null);
    const [transcription, setTranscription] = useState('');
    const [audioFile, setAudioFile] = useState(null);
    const [transcription, setTranscription] = useState('');

    // Handle file input change
    const handleFileChange = (e) => {
        setFiles(e.target.files);
    };

    const handleAudioChange = (e) => {
        setAudioFile(e.target.files[0]);
    };

    const handleAudioChange = (e) => {
        setAudioFile(e.target.files[0]);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a FormData object to hold the form data and files
        const formData = new FormData();
        formData.append('patientName', patientName);
        formData.append('dateOfAppointment', dateOfAppointment);
        formData.append('outcome', outcome);
        formData.append('diagnosis', diagnosis);

        // Append each file to the FormData object
        for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i]);
        }

        // Send a POST request to log the appointment
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

        if (audioFile) {
            const audioFormData = new FormData();
            audioFormData.append('audio', audioFile);
            try {
                const audioResponse = await axios.post('http://localhost:3000/api/appointments/uploadAudio', audioFormData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                console.log(audioResponse.data);
                setTranscription(audioResponse.data.transcription);
                alert('Audio uploaded and transcribed successfully');
            } catch (error) {
                console.error('Error uploading and transcribing audio', error);
                alert('Error uploading and transcribing audio');
            }
        }

        if (audioFile) {
            const audioFormData = new FormData();
            audioFormData.append('audio', audioFile);
            try {
                const audioResponse = await axios.post('http://localhost:3000/api/appointments/uploadAudio', audioFormData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                console.log(audioResponse.data);
                setTranscription(audioResponse.data.transcription);
                alert('Audio uploaded and transcribed successfully');
            } catch (error) {
                console.error('Error uploading and transcribing audio', error);
                alert('Error uploading and transcribing audio');
            }
        }
    };

    return (
        <form className="log-appointment-form" onSubmit={handleSubmit}>
            {/* Patient Name Input */}
            <label htmlFor="patientName">Patient Name:</label>
            <input
                type="text"
                id="patientName"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                required
            />
            
            {/* Date of Appointment Input */}
            <label htmlFor="dateOfAppointment">Date of Appointment:</label>
            <input
                type="date"
                id="dateOfAppointment"
                value={dateOfAppointment}
                onChange={(e) => setDateOfAppointment(e.target.value)}
                required
            />
            
            {/* Outcome Select */}
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
            
            {/* Diagnosis Input */}
            <label htmlFor="diagnosis">Diagnosis:</label>
            <input
                type="text"
                id="diagnosis"
                value={diagnosis}
                onChange={(e) => setDiagnosis(e.target.value)}
            />
            
            {/* File Upload Input */}
            <label htmlFor="files">Upload Files:</label>
            <input
                type="file"
                id="files"
                multiple
                onChange={handleFileChange}
            />
            
            <label htmlFor="audio">Upload Audio:</label>
             <input
                 type="file"
                 id="audio"
                 accept="audio/*"
                 onChange={handleAudioChange}
             />

            />
            
            <label htmlFor="audio">Upload Audio:</label>
            <input
                type="file"
                id="audio"
                accept="audio/*"
                onChange={handleAudioChange}
            />
            
            {/* Submit Button */}
            <button type="submit">Log Appointment</button>

            {transcription && (
                <div className="transcription">
                    <h3>Transcription:</h3>
                    <p>{transcription}</p>
                </div>
            )}

            {transcription && (
                 <div className="transcription">
                     <h3>Transcription:</h3>
                     <p>{transcription}</p>
                 </div>
            )}
        </form>
    );
};

export default LogAppointmentForm;
