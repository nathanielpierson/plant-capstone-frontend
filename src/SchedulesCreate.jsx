import { useState, useEffect } from "react";
import axios from "axios";

export function SchedulesCreate({ onCreate }) {
  const [user, setUser] = useState([]);
  const userIndex = () => {
    axios.get ("http://localhost:3000/users/id.json").then((response) => {
      setUser(response.data);
    });
  }
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
  useEffect(userIndex, []);
  useEffect(handleIndex, []);

  return (
    <div>
      <p className="lead">create a new plant schedule here!</p>
      <form onSubmit={handleSubmit}>
        <div>
          User: <input type="hidden" id="user_id" name="user_id" value={user.id} />
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
