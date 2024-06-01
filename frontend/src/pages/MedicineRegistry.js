import { useEffect, useState } from 'react';

// import components
import MedicineDetails from '../components/MedicineDetails'

const MedicineRegistry = () => {
  const [medicines, setMedicines] = useState(null)

  useEffect(() => {
    const fetchMedicines = async () => {
        const response = await fetch('/api/medicine/')
        const json = await response.json()
    
        if(response.ok) {
            setMedicines(json)
        }
    }

    fetchMedicines()
}, [])

  return (
    <div>
      <h2>Medicine Registry</h2>
      {medicines && medicines.map((medicine) => (
              <MedicineDetails key={medicine._id} medicine={medicine} />
          ))}
    </div>
  );
};

export default MedicineRegistry;
