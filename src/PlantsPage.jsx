import axios from "axios";
import { useState, useEffect } from "react";
import { PlantsIndex } from "./PlantsIndex";
import { SchedulesShow } from "./SchedulesShow";

export function PlantsPage() {
  const [plants, setPlants] = useState([]);

  const handleIndex = () => {
    axios.get("http://localhost:3000/plants.json").then((response) => {
      setPlants(response.data);
    });
  };
  useEffect(handleIndex, []);
  const handleShow = (plant) => {
    console.log("handleShow", plant);
  };
  console.log(plants);
  var x = 1;
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
