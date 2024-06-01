const PatientDetails = ({ patient }) => {
    return (
        <div className="patient-details">
            <h4>{patient.firstName} {patient.lastName}</h4>
            <p><strong>date of birth: </strong>{patient.dateOfBirth}</p>
            <p><strong>gender: </strong>{patient.gender}</p>
            <p><strong>contactNumber: </strong>{patient.contactNumber}</p>
        </div>
    )
}

export default PatientDetails