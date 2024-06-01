import { useEffect, useState } from 'react';

// import components
import PatientDetails from '../components/PatientDetails'

const PatientScheduler = () => {
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
      <div className="patientscheduler">
          <h2>Patient Scheduler</h2>
          {patients && patients.map((patient) => (
              <PatientDetails key={patient._id} patient={patient} />
          ))}
      </div>
  )
};

export default PatientScheduler;
