import { useEffect, useState } from 'react';

// import components
import EmployeeDetails from '../components/EmployeeDetails'

const ShiftsManager = () => {
  const [employees, setEmployees] = useState(null)

  useEffect(() => {
    const fetchEmployees = async () => {
        const response = await fetch('/api/employees/')
        const json = await response.json()
    
        if(response.ok) {
            setEmployees(json)
        }
    }

    fetchEmployees()
}, [])

return (
  <div className="shiftsmanager">
      <h2>Shifts Manager</h2>
      {employees && employees.map((employee) => (
          <EmployeeDetails key={employee._id} employee={employee} />
      ))}
  </div>
)
};

export default ShiftsManager;
