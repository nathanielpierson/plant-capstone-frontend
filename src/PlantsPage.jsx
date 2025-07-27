import { useState, useEffect } from "react";
import { PlantsIndex } from "./PlantsIndex";
import axios from "axios";

export function PlantsPage() {
  const [plants, setPlants] = useState([]);

  const handleIndex = () => {
    axios.get("/plants.json").then((response) => {
      setPlants(response.data);
    });
  };
  useEffect(handleIndex, []);
  const handleShow = (plant) => {
    console.log("handleShow", plant);
  };
  if (localStorage.jwt) {
    return (
      <div>
        <PlantsIndex plants={plants} />
      </div>
    );
  } else {
    return <p>not logged in.</p>;
  }
}
