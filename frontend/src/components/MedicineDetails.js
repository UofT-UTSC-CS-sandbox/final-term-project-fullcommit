const MedicineDetails = ({ medicine }) => {
    return (
        <div className="medicine-details">
            <h4>{medicine.name}</h4>
            <p><strong>Effects: </strong>{medicine.effects.join(", ")}</p>
            <p><strong>Cautions: </strong>{medicine.cautions.join(", ")}</p>
            <p><strong>Combinations: </strong>{medicine.combinations.join(", ")}</p>
            <p><strong>Dosage Form: </strong>{medicine.dosageForm}</p>
            <p><strong>Manufacturer: </strong>{medicine.manufacturer}</p>
            <p><strong>Active Ingredients:</strong></p>
            <ul>
                {medicine.activeIngredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.name} - {ingredient.strength}</li>
                ))}
            </ul>
        </div>
    );
};

export default MedicineDetails;
