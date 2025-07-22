import 'bootstrap/dist/css/bootstrap.min.css';
import { CarouselCaption, CarouselItem } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

export function PlantsIndex({ plants }) {
  console.log(plants);
  const sortedPlants = plants.toSorted((a, b) => a.id - b.id);
  return (
    <div>
        <h1>All plants ({plants.length} total)</h1>
      <Carousel>
        {sortedPlants.map((plant) => (
          <div key={plant.id}>
            <CarouselItem> 
            <img src={plant.image_url || "https://cdn4.iconfinder.com/data/icons/ui-beast-4/32/Ui-12-512.png"}
            alt={plant.name}
            height="240"
            width="360"
            text={plant.name} />
            <CarouselCaption>
            <h2>{plant.name}</h2>
              <p>{plant.description}</p>
              <p>
                {" "}
                <img
                  src="https://oldschool.runescape.wiki/images/Watering_can_detail.png?5ed5a"
                  alt="watering can"
                  height="20"
                  width="20"
                  />
                Water every {plant.days_to_water} days
              </p>
              <p>
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/018/931/088/small_2x/cartoon-sun-icon-png.png"
                  alt="sun"
                  height="20"
                  width="20"
                  />
                sunlight needed: {plant.amount_of_sun}%
              </p>
            </CarouselCaption>
            </CarouselItem>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
