const API_URL = null;

// Get all medicines
export const getMedicines = () => {
    return fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch medicines');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching medicines:', error);
            throw error;
        });
};

// Get a single medicine by ID
export const getMedicine = (id) => {
    return fetch(`${API_URL}/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch medicine with ID ${id}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error(`Error fetching medicine with ID ${id}:`, error);
            throw error;
        });
};

// Create a new medicine
export const createMedicine = (medicineData) => {
    return fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(medicineData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to create medicine');
        }
        return response.json();
    })
    .catch(error => {
        console.error('Error creating medicine:', error);
        throw error;
    });
};

// Update an existing medicine by ID
export const updateMedicine = (id, medicineData) => {
    return fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(medicineData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to update medicine with ID ${id}`);
        }
        return response.json();
    })
    .catch(error => {
        console.error(`Error updating medicine with ID ${id}:`, error);
        throw error;
    });
};

// Delete a medicine by ID
export const deleteMedicine = (id) => {
    return fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to delete medicine with ID ${id}`);
        }
        return response.json();
    })
    .catch(error => {
        console.error(`Error deleting medicine with ID ${id}:`, error);
        throw error;
    });
};
