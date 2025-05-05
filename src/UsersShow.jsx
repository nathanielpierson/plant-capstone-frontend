import axios from "axios";
import { useState, useEffect } from "react";

export function UsersShow() {
  const [youPersonally, setYouPersonally] = useState([])
  const handleIndex = () => {
    axios.get(`http://localhost:3000/users/current.json`).then((response) => {
      setYouPersonally(response.data);
    });
  };
  useEffect(handleIndex, []);
  return (
    <div>
      <p>{youPersonally.name}</p>
      <p>UsersShow</p>
    </div>
  )
}