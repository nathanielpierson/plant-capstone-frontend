export function PlantsIndex({ plants }) {
  console.log(plants);
  return (
    <div>
      <h1>All plants ({plants.length} total)</h1>
      {plants.map((plant) => (
        <div key={plant.id}>
          <h2>{plant.name}</h2>
          <img src={plant.image_url} height="200" width="300" />
          <p>{plant.description}</p>
          <p>
            {" "}
            <img
              src="https://oldschool.runescape.wiki/images/Watering_can_detail.png?5ed5a"
              height="20"
              width="20"
            />
            Water every {plant.days_to_water} days
          </p>
          <p>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/018/931/088/small_2x/cartoon-sun-icon-png.png"
              height="20"
              width="20"
            />
            sunlight needed: {plant.amount_of_sun}%
          </p>
        </div>
      ))}
    </div>
  );
}
