import { useState, useEffect } from "react";
import axios from "axios";

export function SchedulesCreate({ onCreate, onUpdate }) {
  const handleSubmit = (event) => {
    console.log("handleSubmit");
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    const successCallback = () => form.reset();
    onCreate(params, successCallback);
  };
  const [plants, setPlants] = useState([]);
  const handleIndex = () => {
    axios.get("http://localhost:3000/plants.json").then((response) => {
      setPlants(response.data);
      console.log(response.data);
    });
  };
  useEffect(handleIndex, []);

  return (
    <div>
      <p>create a new plant schedule here!</p>
      <form onSubmit={handleSubmit}>
        <div>
          User: <input name="user_id" type="integer" />
        </div>
        <div>
          Choose plant
          <select name="plant_id">
            {plants.map((plant) => (
              <option value={plant.id} key={plant.id}>
                {plant.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Create schedule</button>
      </form>
      <h3>
        <a href="/plants" style={{ "--bs-link-opacity": ".4" }}>
          more plant details
        </a>
      </h3>
    </div>
  );
}
