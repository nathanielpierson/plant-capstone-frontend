import axios from "axios";
import { useState, useEffect } from "react";

export function PlantCount() {
  const [plantCounts, setPlantCounts] = useState([]);
  const handleIndex = () => {
    axios.get("http://localhost:3000/plant_counts.json").then((response) => {
      setPlantCounts(response.data)
      console.log(response.data)
    })
  };
  useEffect(handleIndex, []);
  const [userImage, setUserImage] = useState("");
  const [userName, setUserName] = useState("");
  const findUserImage = () => {
    axios.get("http://localhost:3000/users/current.json").then((response) => {
    setUserImage(response.data.image_url)
    setUserName(response.data.name)
    });
  };
  useEffect(findUserImage, []);
  return (
    <div>
      <p>
        {userName}. your plant cooouuuuuuuunt :3
      </p>
      {plantCounts.map((plant_count) => (
        <div key={plant_count.id}>
          <p>{plant_count.plant.name} uhh {plant_count.count_growing} of em growowing and erm {plant_count.count_finished} completed thanks</p>
        </div>
      ))}
    </div>
  )
}