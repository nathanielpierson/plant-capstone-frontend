import axios from "axios";
import { useState, useEffect } from "react";
import {ProfilePage} from "./ProfilePage";
import { AddPicture } from "./AddPicture";

export function UsersShow() {
  const [youPersonally, setYouPersonally] = useState([])
  const handleIndex = () => {
    axios.get(`/users/current.json`).then((response) => {
      setYouPersonally(response.data);
    });
  };
  useEffect(handleIndex, []);
  return (
    <div>
      <p>{youPersonally.name}</p>
      <p>UsersShow</p>
      <AddPicture />
    </div>
  )
}