import axios from "axios";
import { useState, useEffect } from "react";
import { PlantsIndex } from "./PlantsIndex";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";

export function PlantsPage() {
  const [plants, setPlants] = useState([]);

  const handleIndex = () => {
    axios.get("http://localhost:3000/plants.json").then((response) => {
      setPlants(response.data);
    });
  };
  useEffect(handleIndex, []);
  console.log(plants);
  var x = 1;
  const isAuthenticated = useIsAuthenticated();
  if (isAuthenticated == true) {
    return (
      <div>
        <PlantsIndex plants={plants} />
      </div>
    );
  } else {
    return <p>not logged in.</p>;
  }
}
