export function PlantsIndex({ plants }) {
  console.log(plants);
  return (
    <div>
      <h1>All plants ({plants.length} total)</h1>
       {plants.map((plant) => (
         <div key={plant.id}>
           <h2>{plant.name}</h2>
           <p>{plant.description}</p>
           <p>Water every {plant.days_to_water} days</p>
           <p>sunlight needed: {plant.amount_of_sun}%</p>
         </div>
       ))}
    </div>
  );
}