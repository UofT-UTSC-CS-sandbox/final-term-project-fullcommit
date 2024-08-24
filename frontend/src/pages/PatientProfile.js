import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PatientProfile = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [notes, setNotes] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const defaultProfilePic = "/defaultPatientProfilePic.jpg";

  useEffect(() => {
    const fetchPatient = async () => {
      const response = await fetch(`/api/patients/${id}`);
      const json = await response.json();
      if (response.ok) {
        setPatient(json);
        setNotes(json.notes || '');
      }
    };
    fetchPatient();
  }, [id]);

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const handleSaveNotes = async () => {
    const response = await fetch(`/api/patients/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ notes }),
    });
    const json = await response.json();
    if (response.ok) {
      setPatient(json);
      setIsEditing(false);
    }
  };

  return (
    <div className="profile">
      {patient && (
        <>
          <img
            src={defaultProfilePic}
            alt={`${patient.firstName} ${patient.lastName}`}
            style={{ width: '150px', height: '150px', borderRadius: '50%' }}
          />
          <h2>{patient.firstName} {patient.lastName}</h2>
          <div className="profile-info">
            <p><strong>Priority:</strong> {patient.priority}</p>
            <p><strong>Category:</strong> {patient.category}</p>
          </div>
          <p><strong>Email:</strong> {patient.email}</p>
          <p><strong>Phone Number:</strong> {patient.contactNumber}</p>
          <p><strong>Address:</strong> {patient.address.street}, {patient.address.city}, {patient.address.province}, {patient.address.zip}</p>
          <p><strong>Previous Doctor:</strong> {patient.previousDoctor}</p>
          <div className="notes-section">
            <strong>Notes:</strong>
            {isEditing ? (
              <>
                <textarea
                  value={notes}
                  onChange={handleNotesChange}
                  rows="4"
                  cols="50"
                />
                <button onClick={handleSaveNotes}>Save Notes</button>
              </>
            ) : (
              <>
                <p>{notes}</p>
                <button onClick={() => setIsEditing(true)}>Edit Notes</button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default PatientProfile;
