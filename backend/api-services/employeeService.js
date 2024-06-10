const API_URL = null; // Replace with your actual API base URL

// Get all employees
export const getEmployees = () => {
    return fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch employees');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching employees:', error);
            throw error;
        });
};

// Get a single employee by ID
export const getEmployee = (id) => {
    return fetch(`${API_URL}/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch employee with ID ${id}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error(`Error fetching employee with ID ${id}:`, error);
            throw error;
        });
};

// Create a new employee
export const createEmployee = (employeeData) => {
    return fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to create employee');
        }
        return response.json();
    })
    .catch(error => {
        console.error('Error creating employee:', error);
        throw error;
    });
};

// Update an existing employee by ID
export const updateEmployee = (id, employeeData) => {
    return fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to update employee with ID ${id}`);
        }
        return response.json();
    })
    .catch(error => {
        console.error(`Error updating employee with ID ${id}:`, error);
        throw error;
    });
};

// Delete an employee by ID
export const deleteEmployee = (id) => {
    return fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to delete employee with ID ${id}`);
        }
        return response.json();
    })
    .catch(error => {
        console.error(`Error deleting employee with ID ${id}:`, error);
        throw error;
    });
};
