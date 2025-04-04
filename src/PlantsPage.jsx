import axios from "axios";
import { useState, useEffect } from "react";
import { PlantsIndex } from "./PlantsIndex";

export function PlantsPage () {
  const [plants, setPlants] = useState([]);

  const handleIndex = () => {
    axios.get("http://localhost:3000/plants.json").then((response) => {
      setPlants(response.data);
    })
  }
  useEffect(handleIndex, []);
console.log(plants)
  return (
  <div>
    <PlantsIndex plants={plants} />
  </div>
  )
}