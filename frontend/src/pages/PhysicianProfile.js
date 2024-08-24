import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PhysicianProfile = () => {
  const { id } = useParams();
  const [physician, setPhysician] = useState(null);
  const [notes, setNotes] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);
  const defaultProfilePic = "/defaultPhysicianProfilePic.jpg";

  useEffect(() => {
    const fetchPhysician = async () => {
      try {
        const response = await fetch(`/api/employees/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setPhysician(json);
        setNotes(json.notes || '');
      } catch (err) {
        setError(err.message);
      }
    };
    fetchPhysician();
  }, [id]);

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const handleSaveNotes = async () => {
    try {
      const response = await fetch(`/api/employees/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ notes }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      setPhysician(json);
      setIsEditing(false);
    } catch (err) {
      setError(err.message);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="profile">
      {physician && (
        <>
          <img
            src={defaultProfilePic}
            alt={`${physician.firstName} ${physician.lastName}`}
            style={{ width: '150px', height: '150px', borderRadius: '50%' }}
          />
          <h2>{physician.firstName} {physician.lastName}</h2>
          <div className="profile-info">
            <p><strong>Role:</strong> {physician.role}</p>
            <p><strong>Specialty:</strong> {physician.department}</p>
          </div>
          <p><strong>Email:</strong> {physician.email}</p>
          <p><strong>Phone Number:</strong> {physician.contactNumber}</p>
          <p><strong>Office Location:</strong> {physician.officeLocation}</p>
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

export default PhysicianProfile;
