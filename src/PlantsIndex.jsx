export function PlantsIndex({ plants }) {
  console.log(plants);
  return (
    <div>
      <h1>All plants ({plants.length} total)</h1>
       {plants.map((plant) => (
         <div key={plant.id}>
           <h2>{plant.name}</h2>
           <p>{plant.description}</p>
           <p>{plant.days_to_water}</p>
           <p>{plant.amount_of_sun}</p>
         </div>
       ))}
    </div>
  );
}