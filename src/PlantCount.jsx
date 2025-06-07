import api from './axios';
import { useState, useEffect } from "react";

export function PlantCount() {
  const [plantCounts, setPlantCounts] = useState([]);
  const handleIndex = () => {
    axios.get("http://localhost:3000/plant_counts.json").then((response) => {
      setPlantCounts(response.data);
      console.log(response.data);
    })
  };
  useEffect(handleIndex, []);
  const [userImage, setUserImage] = useState("");
  const [userName, setUserName] = useState("");
  const findUserImage = () => {
    api.get("http://localhost:3000/users/current.json").then((response) => {
    setUserImage(response.data.image_url)
    setUserName(response.data.name)
    });
  };
  useEffect(findUserImage, []);
  return (
    <div>
        {userName}. Your plants will show up here; both how many you currently have growing, and how many you have already grown
      {plantCounts.map((plant_count) => (
        <div key={plant_count.id}>
          <p>{plant_count.plant.name} {plant_count.count_growing} growing and {plant_count.count_finished} completed</p>
        </div>
      ))}
    </div>
  )
}