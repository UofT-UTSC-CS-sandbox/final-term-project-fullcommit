const API_URL = null;

// Get all patients
export const getPatients = () => {
    return fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch patients');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching patients:', error);
            throw error;
        });
};

// Get a single patient by ID
export const getPatient = (id) => {
    return fetch(`${API_URL}/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch patient with ID ${id}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error(`Error fetching patient with ID ${id}:`, error);
            throw error;
        });
};

// Create a new patient
export const createPatient = (patientData) => {
    return fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(patientData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to create patient');
        }
        return response.json();
    })
    .catch(error => {
        console.error('Error creating patient:', error);
        throw error;
    });
};

// Update an existing patient by ID
export const updatePatient = (id, patientData) => {
    return fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(patientData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to update patient with ID ${id}`);
        }
        return response.json();
    })
    .catch(error => {
        console.error(`Error updating patient with ID ${id}:`, error);
        throw error;
    });
};

// Delete a patient by ID
export const deletePatient = (id) => {
    return fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to delete patient with ID ${id}`);
        }
        return response.json();
    })
    .catch(error => {
        console.error(`Error deleting patient with ID ${id}:`, error);
        throw error;
    });
};
