const EmployeeDetails = ({ employee }) => {
    return (
        <div className="employee-details">
            <h4>{employee.firstName} {employee.lastName}</h4>
            <p><strong>department: </strong>{employee.department}</p>
            <p><strong>role: </strong>{employee.role}</p>
            <p><strong>id: </strong>{employee.employeeID}</p>
        </div>
    )
}

export default EmployeeDetails