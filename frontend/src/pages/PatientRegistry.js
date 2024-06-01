import { useEffect, useState } from 'react';

// import components
import PatientDetails from '../components/PatientDetails'

const PatientRegistry = () => {
  const [patients, setPatients] = useState(null)

    useEffect(() => {
        const fetchPatients = async () => {
            const response = await fetch('/api/patients/')
            const json = await response.json()
        
            if(response.ok) {
                setPatients(json)
            }
        }

        fetchPatients()
    }, [])

    return (
      <div className="patientregistry">
          <h2>Patient Registry</h2>
          {patients && patients.map((patient) => (
              <PatientDetails key={patient._id} patient={patient} />
          ))}
      </div>
  )
};

export default PatientRegistry;
