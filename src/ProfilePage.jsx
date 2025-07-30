import { PlantCount } from "./PlantCount"
import { UsersUpdate } from "./UsersUpdate";
import { useState, useEffect } from "react";
import axios from "axios";

export function ProfilePage({ onUpdate }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("/users/current.json").then((response) => {
      setUser(response.data);
    });
  }, []);

  return (
    <div>
      <UsersUpdate onUpdate={onUpdate} />
      <PlantCount />
    </div>
  );
}
